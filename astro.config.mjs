import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const siteUrl = env.SITE_URL || (
  env.VERCEL_PROJECT_PRODUCTION_URL && `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
);
const site = siteUrl ? new URL(siteUrl) : undefined;

export default defineConfig({
  site: site?.origin,
  base: site?.pathname,
  output: 'static',
  devToolbar: { enabled: false },
});
