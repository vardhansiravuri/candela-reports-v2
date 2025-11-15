/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      //
      // 🔥 Automated Test Reports
      //
      { source: "/automated", destination: "/category/automated-test-reports" },
      {
        source: "/automated-test-reports",
        destination: "/category/automated-test-reports",
      },

      //
      // 🔥 Comparison charts
      //
      {
        source: "/comparison",
        destination: "/category/comparison-charts",
      },
      {
        source: "/comparison-charts",
        destination: "/category/comparison-charts",
      },

      //
      // 🔥 DFS
      //
      { source: "/dfs", destination: "/category/dfs" },

      //
      // 🔥 Interop Reports
      //
      { source: "/interop", destination: "/category/interop-reports" },
      {
        source: "/interop-reports",
        destination: "/category/interop-reports",
      },

      //
      // 🔥 IoT Reports
      //
      { source: "/iot", destination: "/category/iot-reports" },
      { source: "/iot-reports", destination: "/category/iot-reports" },

      //
      // 🔥 Mesh Reports
      //
      { source: "/mesh", destination: "/category/mesh-reports" },
      { source: "/mesh-reports", destination: "/category/mesh-reports" },

      //
      // 🔥 Network-In-A-Box Reports
      //
      {
        source: "/nib",
        destination: "/category/network-in-a-box-reports",
      },
      {
        source: "/network-in-a-box-reports",
        destination: "/category/network-in-a-box-reports",
      },

      //
      // 🔥 Test House Reports
      //
      {
        source: "/testhouse",
        destination: "/category/test-house-reports",
      },
      {
        source: "/test-house-reports",
        destination: "/category/test-house-reports",
      },

      //
      // 🔥 TR-398
      //
      { source: "/tr398", destination: "/category/tr-398" },
      { source: "/tr-398", destination: "/category/tr-398" },

      //
      // 🔥 Wi-Fi 7
      //
      { source: "/wifi7", destination: "/category/wifi-7" },
      { source: "/wifi-7", destination: "/category/wifi-7" },

      //
      // 🔥 Wi-Fi AP TaaS
      //
      { source: "/aptaas", destination: "/category/wifi-ap-taas" },
      { source: "/wifi-ap-taas", destination: "/category/wifi-ap-taas" },
    ];
  },
};

export default nextConfig;
