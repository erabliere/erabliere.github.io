<script lang="ts" setup>
import { useStore } from '~~/composables/store';

const count = ref(0);
const increment = () => count.value++

const posts = await useStore()

</script>

<template>
  <section class="timeline">
    <pre>{{posts}}</pre>
    <ul>
      <li v-for="post in posts" :class="post.align" class="event font-sans">
        <div :class="post.align" class="content info">
          <div class="datetime">{{ post.short_date }} à {{ post.short_time }}</div>
          <div class="title">{{ post.title }}</div>
          <div class="tagline" v-html="post.tagline"></div>
        </div>
        <div v-html="post.content_html" class="content post text-sm"></div>
      </li>
    </ul>
  </section>
</template>


<style scoped>

</style>
