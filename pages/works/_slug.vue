<template>
  <div>
    {{ work }}
  </div>
</template>
<script>
import { unWrap, getErrorResponse } from '~/utils/fetchUtils'
export default {
  async asyncData({ params }) {
    try {
      const work = (await unWrap(await fetch(`http://localhost:1337/works/?slug=${params.slug}`)))
        .json[0]
      return { work }
    } catch (error) {
      return getErrorResponse(error)
    }
  },
}
</script>
