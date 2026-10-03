<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Site architecture
- Keep the five public content pages as file routes with shared navigation and footer in `SiteLayout`, so page links and head metadata stay independent.
- Keep project photographs in the public `project-media` Cloud storage bucket and their references in `src/lib/site.ts`, so the gallery has one source of truth.
