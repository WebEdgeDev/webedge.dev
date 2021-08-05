<template>
  <section class="black-sec bg-main text-white">
    <MiddleLine />
    <div class="flex justify-center text-center max-w-[400px] m-auto -mb-10">
      <h2 class="uppercase font-sans text-[47px] relative z-30">
        that's our
        <span class="font-coda text-[47px]">work.</span>
      </h2>
    </div>
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
}
</script>

<style>
.swiper-slide {
  width: 70%;
  height: 350px;
}
</style>
