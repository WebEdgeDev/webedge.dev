<template>
  <div class="overflow-hidden text-center">
    <h2 class="scrolling text-main uppercase whitespace-nowrap">
      <p class="font-sans text-[47px] lg:text-[141px] leading-none">
        web <span class="font-coda text-[44px] lg:text-[130px]">edge </span>development
      </p>
    </h2>
    <h2 class="scrolling text-main uppercase whitespace-nowrap">
      <p class="font-sans text-[47px] lg:text-[141px] leading-none">
        web <span class="font-coda text-[44px] lg:text-[130px]">edge </span>development
      </p>
    </h2>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    const h2s = gsap.utils.toArray('.scrolling')

    const showDemo = () => {
      h2s.forEach((h2, index) => {
        const p = h2.querySelector('p')
        const [x, xEnd] =
          index === 0 ? ['100%', (p.scrollWidth - h2.offsetWidth) * -2] : [p.scrollWidth * -1, 0]
        gsap.fromTo(
          p,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: h2,
              scrub: 0.1,
            },
          }
        )
      })
    }

    showDemo()
  },
}
</script>
