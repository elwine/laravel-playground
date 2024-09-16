/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: process.env.API_BASE_URL,
    APP_URL: process.env.APP_URL,
  },
  images: {
    domains: ["media.discordapp.net"],
  },
};

export default nextConfig;
