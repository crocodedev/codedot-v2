import sanityFetch from '$lib/server/sanityFetch'

export async function GET({ setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml',
  })
  const pages = `*[_type=="page"]`

  const site = 'https://codedot-v2.netlify.app'

  let pagesQuery = await sanityFetch(pages)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
    </url>
    ${pagesQuery
      .map((post) =>
        post.slug.current !== '/'
          ? `
    <url>
    <loc>${site}${post.slug.current}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>

    </url>
    `
          : null
      )
      .join('')}
    </urlset>`
  return new Response(sitemap)
}
