<template>
  <nav class="relative">
    <div class="fixed top-0 right-0 z-50" :class="{ 'white-toogle': whiteLogo }">
      <input id="menu-toogle" type="checkbox" @click="menuToggle" />
      <label for="menu-toogle"></label>
    </div>
    <div class="fixed top-[14px] left-[8px] z-50">
      <NuxtLink to="/">
        <MobileLogo :white="whiteLogo" />
      </NuxtLink>
    </div>
    <div class="navigation-menu" :class="{ 'hidden-block': !menuOpen }">
      <ul class="nav-links">
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/">work</NuxtLink></li>
        <li><NuxtLink to="/">contact</NuxtLink></li>
      </ul>
      <div class="flex flex-col items-center">
        <ul class="social-icons">
          <li>
            <a href="">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="">
              <InstagramIcon />
            </a>
          </li>
        </ul>
        <div class="lang">
          <NuxtLink to="/">EN</NuxtLink>
          -
          <NuxtLink to="/">LT</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  data() {
    return {
      menuOpen: false,
      whiteLogo: true,
      whiteLogoPage: false,
    }
  },
  watch: {
    $route() {
      this.menuOpen = false
    },
  },
  mounted() {
    document.addEventListener('click', this.menuClose)
    gsap.registerPlugin(ScrollTrigger)

    const sections = gsap.utils.toArray('.black-sec')

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 30px',
        end: 'bottom 30px ',
        onEnter: () => this.setWhite(true),
        onLeave: () => this.setWhite(false),
        onEnterBack: () => this.setWhite(true),
        onLeaveBack: () => this.setWhite(false),
      })
    })
  },
  beforeDestroy() {
    document.removeEventListener('click', this.menuClose)
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen

      if (this.menuOpen) {
        this.whiteLogo = true
      }
      if (!this.menuOpen) {
        if (!this.whiteLogoPage) {
          this.whiteLogo = false
        }
      }
    },
    menuClose(e) {
      if (!this.$el.contains(e.target)) {
        this.menuOpen = false
      }
    },
    setWhite(bool) {
      this.whiteLogo = bool
      this.whiteLogoPage = bool
    },
  },
}
</script>

<style lang="postcss" scoped>
#menu-toogle {
  @apply cursor-pointer absolute top-[14px] right-[24px] w-[40px] h-[40px] opacity-0;
}

.white-toogle label {
  @apply bg-white;
}

.white-toogle label::after {
  @apply bg-white;
}

.white-toogle label::before {
  @apply bg-white;
}

label {
  @apply cursor-pointer absolute top-[34px] right-[24px] bg-main h-[3px] w-[40px] duration-300;
}

label::after {
  @apply absolute top-[-10px] left-[6px] bg-main h-[3px] w-[28px] duration-300;

  content: '';
}

label::before {
  @apply absolute top-[10px] left-[6px] bg-main h-[3px] w-[28px] duration-300;

  content: '';
}

#menu-toogle:checked ~ label {
  @apply bg-main;
}

#menu-toogle:checked ~ label::after {
  @apply bg-white top-0;

  transform: rotateZ(41deg);
}

#menu-toogle:checked ~ label::before {
  @apply bg-white top-0;

  transform: rotateZ(-41deg);
}

.hidden-block {
  transform: translateX(100vw);
}

.navigation-menu {
  @apply ease-in-out fixed h-screen flex flex-col justify-between items-center bg-main duration-300 z-40 pt-32 pb-6;
}

.nav-links {
  @apply text-center text-white font-coda uppercase text-[40px];
}

.nav-links li {
  @apply block py-2 w-screen border border-r-0 border-l-0;
}

.social-icons {
  @apply flex flex-row;
}

.social-icons li {
  @apply p-2;
}

.lang {
  @apply text-white text-lg;
}
</style>
