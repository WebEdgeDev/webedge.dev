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
  },
  methods: {
    initParticles() {
      window.particlesJS.load('particles-js', '/particles.json', function () {})
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
