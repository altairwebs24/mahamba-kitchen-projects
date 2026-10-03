// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Explicit plugins array so external tooling (e.g. Wrangler/Cloudflare
  // auto-configure) has a valid array it can detect and modify.
  // Only the Cloudflare plugin is listed here — the wrapper above already
  // injects tanstackStart, viteReact, tailwindcss, nitro, etc., and listing
  // any of those here would break the build with duplicate plugins.
  plugins: [cloudflare()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
