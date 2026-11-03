// Tiny entry point in front of the static assets.
// - Redirects www.stevenkoehl.com -> stevenkoehl.com (301) for canonical URLs.
// - Otherwise serves the pre-built static export from out/ via the ASSETS binding.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.stevenkoehl.com") {
      url.hostname = "stevenkoehl.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
