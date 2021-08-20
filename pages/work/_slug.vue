<template>
  <div>
    <div>
      <TopPage />
    </div>
    {{ work }}
    <h2>{{ work.title }}</h2>
    <div class="flex justify-center items-center" v-html="work.content"></div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $dataApi }) {
    return { work: await $dataApi.getWork(params.slug) }
  },
  nuxtI18n: {
    paths: {
      en: '/work/:slug',
      lt: '/darbai/:slug',
      ru: '/keisi/:slug',
    },
  },
}
</script>
