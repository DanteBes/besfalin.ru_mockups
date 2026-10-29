const files = import.meta.glob('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function getTitle(content) {
  const heading = content.match(/^#\s+(.+)$/m)
  return heading ? heading[1].trim() : 'Без названия'
}

export const posts = Object.entries(files)
  .map(([path, content]) => ({
    slug: path.replace('./', '').replace(/\.md$/, ''),
    title: getTitle(content),
    content,
  }))
  .sort((a, b) => a.slug.localeCompare(b.slug, undefined, { numeric: true }))

export function getPost(slug) {
  return posts.find((post) => post.slug === slug)
}
