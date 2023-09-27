# next-css-modules-bug

Reproduction of a bug with CSS modules in Next.js where a package's CSS cannot be overridden by a page's CSS.

See [page.tsx](/site/app/page.tsx) in [site](/site) which showcases the bug where the page CSS `styles.padding` does not get applied`.

## Development

```bash
pnpm install
pnpm dev
```
