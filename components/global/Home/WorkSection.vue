<template>
  <section class="bg-main text-white">
    <MiddleLine />
    <h2 class="uppercase font-sans">
      that's our
      <span class="font-coda">work</span>
    </h2>
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
          <div class="bg-white h-full"></div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
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
  height: 300px;
}
.nuxt-link:hover {
  cursor: url('/static/cursor.svg'), auto;
}
</style>
