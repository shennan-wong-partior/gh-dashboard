/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
    // domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
  },
  output: "export",
  // experimental: {
  //   serverComponentsExternalPackages: ['@tremor/react']
  // }
};

module.exports = nextConfig;
