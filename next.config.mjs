/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `next build` emits a plain HTML/CSS/JS site into ./out,
  // deployable to any static host. Also guards the "purely static, no
  // backend" constraint — server-only features fail the build.
  output: "export",
  // GitHub project pages serve from /<repo-name>; the CI workflow sets this
  // env var so asset URLs resolve there. Unset everywhere else (local builds,
  // Vercel, custom domains), the site builds for the root path.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
