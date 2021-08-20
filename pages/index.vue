<template>
  <main>
    <div id="particles-js"></div>
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <CallToAction />
    <ContactSection />
  </main>
</template>

<script>
if (process.browser) {
  require('particles.js')
}

export default {
  mounted() {
    this.initParticles()
    this.$scrollTrigger.gsapWhite()
  },
  beforeDestroy() {
    this.$scrollTrigger.killGsapWhite()
  },
  methods: {
    initParticles() {
      window.particlesJS.load('particles-js', '/particles.json', function () {})
    },
  },
  nuxtI18n: {
    paths: {
      lt: '/',
      en: '/',
      ru: '/',
    },
  },
}
</script>
<style lang="postcss">
.swiper-slide {
  width: 70%;
  height: 350px;
}
</style>
