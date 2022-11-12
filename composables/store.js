function filterPosts(post) {

  const conditions = [
    //Frontmatter
    //visible: oui
    (post) => post.visible === 'oui',
    //Au moins un caractère non blanc 
    (post) => post.content_html.match(/[^\s]+/gm)
  ]
  return !conditions.find(condition => !condition(post))
}

function transform(data) {
  data.posts = data.posts.map((post) => {
    if (post.author === 'kafkaah') {
      post.align = 'right'
    } else if (post.author === 'ttonatiuhh') {
      post.align = 'left'
    }
    post.short_date = (new Date(post.date_published)).toLocaleString('fr-CA', { timeZone: 'America/New_York', year: "numeric", month: "numeric", day: "numeric" })
    post.short_time = (new Date(post.date_published)).toLocaleString('fr-CA', { timeZone: 'America/New_York', hour: "numeric", minute: "numeric", hour12: false })
    post.tagline = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' &bull; ')

    return post
  }).filter(filterPosts)
    .sort((a, b) => (a.date_published > b.date_published) ? 1 : ((b.date_published > a.date_published) ? -1 : 0))
  return data
}

export const useStore = async () => {

  const url = 'https://erabliere.ga/web/posts.json'
  const res = await $fetch.raw(url)

  //console.log(res._data)
  //return transform(res._data)
  return useState('posts', () => transform(res._data).posts)
}

/* export const fetchWithCookie = async (url: string) => {
  const res = await $fetch.raw(url)
  $fetch.raw()
  const cookies = (res.headers.get('set-cookie') || '').split(',')
  for (const cookie of cookies) {
    appendHeader(useRequestEvent(), 'set-cookie', cookie)
  }
  return res._data
} */
