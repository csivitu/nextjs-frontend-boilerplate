/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: false,
	},
	rewrites: async () => {
    return [
      {
        source: "/((?!api/).*)",
        destination: "/static-app-shell",
      },
    ];
  },
};

export default nextConfig;
