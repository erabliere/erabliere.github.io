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
        //post.content_html = post.content_html + '<span class="minimal"></span>'
        post.short_date = (new Date(post.date_published)).toLocaleString('fr-CA', { timeZone: 'America/New_York', year: "numeric", month: "numeric", day: "numeric" })
        post.short_time = (new Date(post.date_published)).toLocaleString('fr-CA', { timeZone: 'America/New_York', hour: "numeric", minute: "numeric", hour12: false })
        //console.log(post)
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
      <li v-for="post in data.posts" :class="post.align">
        <!-- <time>{{ post.short_date }}</time>
        <time>{{ post.short_time }}</time> -->
        <div v-html="post.content_html"></div>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
