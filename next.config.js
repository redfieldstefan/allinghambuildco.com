/** @type {import('next').NextConfig} */

const repo = 'allinghambuildco.com'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix,
  basePath
}

module.exports = nextConfig
