<template>
  <div>
    <div v-for="work in works" :key="work.id">
      <nuxt-link :to="'/works/' + work.slug + '/'">
        <p>{{ work.title }}</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { unWrap, getErrorResponse } from '~/utils/fetchUtils'
export default {
  async asyncData() {
    try {
      const works = (await unWrap(await fetch('http://localhost:1337/works'))).json
      return { works }
    } catch (error) {
      return getErrorResponse(error)
    }
  },
}
</script>
