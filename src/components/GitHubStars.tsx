"use client";

import { useState, useEffect } from "react";

interface RepoStats {
  stars: number;
  forks: number;
}

interface CacheEntry {
  timestamp: number;
  stats: Record<string, RepoStats>;
}

const CACHE_KEY = "gh-repo-stats";
const CACHE_TTL = 3600000; // 1 hour

async function fetchRepoStats(
  owner: string,
  repo: string,
): Promise<RepoStats> {
  const headers: Record<string, string> = {};
  if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
  }
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
  if (!res.ok) throw new Error("API error");
  const data = await res.json();
  return {
    stars: data.stargazers_count ?? 0,
    forks: data.forks_count ?? 0,
  };
}

export default function GitHubStars({ repo }: { repo: string }) {
  const [stats, setStats] = useState<RepoStats | null>(null);

  useEffect(() => {
    const fullName = `sleuthy-sloth/${repo}`;

    // Check cache
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed: CacheEntry = JSON.parse(cached);
        if (
          Date.now() - parsed.timestamp < CACHE_TTL &&
          parsed.stats[fullName]
        ) {
          setStats(parsed.stats[fullName]);
          return;
        }
      }
    } catch {
      // ignore
    }

    // Fetch fresh
    fetchRepoStats("sleuthy-sloth", repo)
      .then((fresh) => {
        setStats(fresh);
        try {
          const existing = localStorage.getItem(CACHE_KEY);
          const parsed: CacheEntry = existing
            ? JSON.parse(existing)
            : { timestamp: Date.now(), stats: {} };
          parsed.timestamp = Date.now();
          parsed.stats[fullName] = fresh;
          localStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
        } catch {
          // ignore
        }
      })
      .catch(() => {
        // Silently fail — stars are decorative
      });
  }, [repo]);

  if (!stats) return null;

  return (
    <span className="inline-flex items-center gap-3 text-[11px] text-[var(--color-text-muted)]">
      <span className="inline-flex items-center gap-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[var(--color-accent)]"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {stats.stars}
      </span>
      <span className="inline-flex items-center gap-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5.559 4.559a4 4 0 0 1 6.441-.5 4 4 0 0 1 6.441.5c1.514 2.223.76 5.21-2.129 7.79a22.42 22.42 0 0 1-3.727 2.768.75.75 0 0 1-.67 0 22.42 22.42 0 0 1-3.728-2.768c-2.888-2.58-3.643-5.567-2.128-7.79z" />
        </svg>
        {stats.forks}
      </span>
    </span>
  );
}
