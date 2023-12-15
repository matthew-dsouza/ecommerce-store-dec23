// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             "tailwindui.com",
//             "res.cloudinary.com"
//         ]
//     }
// }
// 
// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ],
    },

}

module.exports = nextConfig