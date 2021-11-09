module.exports = {
  reactStrictMode: true,
  images: {
    // loader: 'cloudinary',
    // path: '/public/',
    domains: ["production.listennotes.com", "cdn-images-1.listennotes.com"],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  experimental: { outputFileTracing: true },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/soundcloud/:slug*",
        headers: [
          {
            key: "Authorization",
            value: "OAuth 2-293028-1042060882-nzy6SsaZ3Djb9",
          },
        ],
      },
    ];
  },
};
