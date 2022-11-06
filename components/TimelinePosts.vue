<script setup>
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

const { data } = await useFetch(
  'https://erabliere.ga/web/posts.json',
  {
    transform: data => {
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
    },
    key: 'arbitrary'
  }
)
</script>

<template>
  <section class="timeline">
    <ul>
      <li v-for="post in data.posts" :class="post.align" class="event font-sans">
        <div :class="post.align" class="content info">
          <div class="datetime">{{ post.short_date }} à {{ post.short_time }}</div>
          <div class="title">{{ post.title }}</div>
          <div class="tagline" v-html="post.tagline"></div>
        </div>
        <div v-html="post.content_html" class="content post"></div>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
