<template>
  <section class="black-sec bg-main text-white">
    <MiddleLine />
    <div class="flex justify-center text-center max-w-[400px] m-auto -mb-10 pt-4">
      <h2 class="uppercase font-sans text-[47px] relative z-30">
        that's our
        <span class="font-coda text-[47px]">work.</span>
      </h2>
    </div>

    <div class="area">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <nuxt-link to="/">
              <div class="bg-pink h-full"></div>
            </nuxt-link>
          </swiper-slide>
          <swiper-slide>
            <nuxt-link to="/">
              <div class="bg-red h-full"></div>
            </nuxt-link>
          </swiper-slide>
          <swiper-slide>
            <nuxt-link to="/">
              <div class="bg-green h-full"></div>
            </nuxt-link>
          </swiper-slide>
          <swiper-slide>
            <nuxt-link to="/">
              <div class="bg-blue h-full"></div>
            </nuxt-link>
          </swiper-slide>
          <swiper-slide>
            <nuxt-link to="/">
              <div class="bg-gray h-full"></div>
            </nuxt-link>
          </swiper-slide>
        </swiper>
      </client-only>

      <div
        class="
          follower
          z-30
          font-coda
          text-main
          flex
          justify-center
          items-center
          text-2xl
          leading-none
          pt-1
        "
      >
        drag
      </div>
    </div>
    <div class="flex justify-center items-center pt-16 pb-24">
      <h4 class="uppercase mr-3">see more</h4>
      <img src="arrow.svg" class="w-16 h-16 text-white" alt="" />
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },

  mounted() {
    this.boxRotation()
  },
  methods: {
    boxRotation() {
      const gsap = this.$gsap
      const area = document.querySelector('.area')
      gsap.set('.follower', { xPercent: -50, yPercent: -50, opacity: 0 })
      area.addEventListener('mousemove', (e) => {
        gsap.to('.follower', { x: e.clientX, y: e.clientY, opacity: 1 })
      })
      area.addEventListener('mouseleave', (e) => {
        gsap.to('.follower', { opacity: 0 })
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.swiper-slide {
  width: 70%;
  height: 350px;
}
.follower {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  pointer-events: none;
}
</style>
