/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        has: [
          {
            type: 'query',
            key: 'error'
          }
        ],
        destination: '/404',
        permanent: true,
      },
    ]
  },
}
