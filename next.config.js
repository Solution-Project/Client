/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.bunjang.co.kr",
                port: "",
                pathname: "/images/nocrop/**"
            },
            {
                protocol: "https",
                hostname: "media.bunjang.co.kr",
                port: "",
                pathname: "/product/**"
            }
        ]
    }
}

module.exports = nextConfig
