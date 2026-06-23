"use client";

import { useState, useEffect } from "react";

/**
 * GitHubActivity — Live GitHub events widget.
 *
 * Fetches recent public events for sleuthy-sloth from the GitHub API.
 * Caches results in localStorage for 1 hour to avoid rate limiting
 * (unauthenticated API: 60 req/hr per IP).
 *
 * Shows: push events, repo creation, PRs opened, stars given.
 * Falls back to a static message if the API is unavailable.
 */

interface Event {
  id: string;
  type: string;
  repo: { name: string; url: string };
  created_at: string;
  payload: {
    commits?: { message: string }[];
    size?: number;
    distinct_size?: number;
    ref?: string;
    action?: string;
    ref_type?: string;
  };
}

interface CacheEntry {
  timestamp: number;
  events: Event[];
}

const CACHE_KEY = "gh-activity";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour
const GITHUB_USER = "sleuthy-sloth";

/** Format a GitHub event into a human-readable one-liner. */
function formatEvent(event: Event): string {
  const repo = event.repo.name.replace(`${GITHUB_USER}/`, "");

  switch (event.type) {
    case "PushEvent": {
      // Public API omits full commit details — use size/distinct_size
      const count =
        event.payload.commits?.length ||
        event.payload.distinct_size ||
        event.payload.size ||
        0;
      const branch = event.payload.ref?.replace("refs/heads/", "") ?? "main";
      const commitWord = count === 1 ? "commit" : "commits";
      return `Pushed ${count} ${commitWord} to ${repo} (${branch})`;
    }
    case "CreateEvent": {
      const what =
        event.payload.ref_type === "repository" ? "repo" : event.payload.ref_type;
      return `Created ${what} in ${repo}`;
    }
    case "WatchEvent":
      return `Starred ${repo}`;
    case "PullRequestEvent": {
      const action = event.payload.action ?? "updated";
      return `${action === "opened" ? "Opened" : action} PR in ${repo}`;
    }
    case "IssuesEvent": {
      const action = event.payload.action ?? "updated";
      return `${action === "opened" ? "Opened" : action} issue in ${repo}`;
    }
    case "ForkEvent":
      return `Forked ${repo}`;
    default:
      return `${event.type.replace("Event", "")} in ${repo}`;
  }
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<Event[]>(() => {
    // Read cache synchronously on mount
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed: CacheEntry = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          return parsed.events.slice(0, 8);
        }
      }
    } catch { /* ignore */ }
    return [];
  });
  const [loading, setLoading] = useState(() => {
    // Already have cached data — skip loading state
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed: CacheEntry = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) return false;
      }
    } catch { /* ignore */ }
    return true;
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    // Only fetch if we don't have cached data
    if (!loading) return;

    // Fetch from GitHub API
    const headers: Record<string, string> = {};
    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`, { headers })
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data: Event[]) => {
        const latest = data.slice(0, 8);
        setEvents(latest);
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), events: data }),
          );
        } catch {
          // localStorage full or unavailable — ignore
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [loading]);

  return (
    <div className="border border-[var(--color-border)] rounded-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="flex items-center gap-2">
          {/* GitHub mark */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[var(--color-text)]"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)]">
            GitHub Activity
          </span>
        </div>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          @{GITHUB_USER} &rarr;
        </a>
      </div>

      {/* Body */}
      <div className="p-5">
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-4 bg-[var(--color-bg-alt)] animate-pulse rounded w-full"
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-sm text-[var(--color-text-muted)]">
            GitHub activity unavailable right now.{" "}
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              View profile
            </a>
            .
          </p>
        )}

        {!loading && !error && events.length > 0 && (
          <ul className="space-y-3">
            {events.map((event) => (
              <li key={event.id} className="flex gap-3 text-sm">
                {/* Icon */}
                <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
                  {event.type === "PushEvent" && "↑"}
                  {event.type === "CreateEvent" && "+"}
                  {event.type === "WatchEvent" && "★"}
                  {event.type === "PullRequestEvent" && "⇄"}
                  {event.type === "IssuesEvent" && "○"}
                  {event.type === "ForkEvent" && "⑂"}
                  {!["PushEvent", "CreateEvent", "WatchEvent", "PullRequestEvent", "IssuesEvent", "ForkEvent"].includes(event.type) && "•"}
                </span>
                <div>
                  <span className="text-[var(--color-text)]">
                    {formatEvent(event)}
                  </span>
                  <span className="text-[var(--color-text-muted)] ml-2 text-xs">
                    {new Date(event.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-sm text-[var(--color-text-muted)]">
            No recent public activity.
          </p>
        )}
      </div>
    </div>
  );
}
