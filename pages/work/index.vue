<template>
  <div>
    <div class="black-sec">
      <TopPage subtitle="Work">
        <h2
          class="
            font-cinzel
            uppercase
            leading-none
            text-center text-4xl
            lg:py-6 lg:text-[80px] lg:text-left
          "
        >
          THAT'S OUR
        </h2>
        <span
          class="
            block
            font-coda
            text-center
            lg:text-left lg:text-[80px]
            text-4xl
            pt-2
            pb-16
            uppercase
          "
          >work.</span
        >
      </TopPage>
    </div>

    <div v-if="works.length > 0" class="container mx-auto mt-[-50px] lg:pb-10">
      <div
        v-for="work in works"
        :key="work.slug"
        :to="`/work/${work.slug}`"
        class="flex card lg:pb-10"
      >
        <nuxt-link :to="`/work/${work.slug}`" class="w-full lg:w-1/2 h-[400px]">
          <!-- <picture>
          <source :srcset="work.image.small" type="image/jpeg" />
          <source :srcset="work.image.medium" type="image/jpeg" />
          <img :src="work.image.large" type="image/jpeg" />
           </picture> -->
          <img :src="work.image.url" alt="" class="h-full w-full object-cover" />
        </nuxt-link>
        <div class="hidden lg:flex lg:justify-center lg:items-left lg:flex-col w-1/2 px-16">
          <h2 class="text-4xl uppercase font-coda pb-4">{{ work.title }}</h2>
          <p class="leading-1 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vel suscipit necessitatibus
            atque ut voluptate cum velit ea optio numquam totam quis placeat consequuntur similique
          </p>
          <nuxt-link :to="`/work/${work.slug}`"> Find out more</nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>No projects</div>
  </div>
</template>
<script>
export default {
  async asyncData({ $dataApi, i18n }) {
    return { works: await $dataApi.getWorks(i18n.locale) }
  },
  mounted() {
    this.$scrollTrigger.gsapWhite()
  },
  beforeDestroy() {
    this.$scrollTrigger.killGsapWhite()
  },
  nuxtI18n: {
    paths: {
      en: '/work',
      lt: '/darbai',
      ru: '/keisi',
    },
  },
}
</script>
<style lang="postcss" scoped>
.card:nth-child(odd) {
  @apply flex-row-reverse;
}
</style>
