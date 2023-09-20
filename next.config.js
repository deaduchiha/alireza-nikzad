/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "menu.storage.iran.liara.space",
        port: "",
        pathname: "/alireza-nikzad/**",
      },
    ],
  },
};

module.exports = nextConfig;
