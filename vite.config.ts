// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Explicit plugins array so external tooling (e.g. Wrangler/Cloudflare
  // auto-configure, which fails with "could not find a valid plugins array"
  // otherwise) has a valid array it can detect and modify.
  // Keep it EMPTY: the wrapper above already injects tanstackStart, viteReact,
  // tailwindcss, nitro (Cloudflare target), etc. Listing any of them here
  // would break the build with duplicate plugins.
  plugins: [],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
} as Parameters<typeof defineConfig>[0]);
