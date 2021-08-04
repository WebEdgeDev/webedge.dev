<template>
  <nav class="relative h-[70px]">
    <div class="absolute top-0 right-0 z-50">
      <input id="menu-toogle" type="checkbox" @click="menuToggle" />
      <label for="menu-toogle"></label>
    </div>
    <div class="navigation-menu" :class="{ 'hidden-block': !menuOpen }">
      <ul class="text-center">
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/">work</NuxtLink></li>
        <li><NuxtLink to="/">contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  computed: {
    isRouteActive() {
      if (this.$nuxt.$route.path === '/' || this.$nuxt.$route.path === '/en') {
        return true
      } else {
        return false
      }
    },
  },
  watch: {
    $route() {
      this.menuOpen = false
    },
  },
  mounted() {
    document.addEventListener('click', this.menuClose)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.menuClose)
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen
    },
    menuClose(e) {
      if (!this.$el.contains(e.target)) {
        this.menuOpen = false
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
#menu-toogle {
  @apply cursor-pointer absolute top-[14px] right-[24px] w-[40px] h-[40px] opacity-0;
}

label {
  @apply cursor-pointer absolute top-[34px] right-[24px] bg-main h-[3px] w-[40px];
}

label::after {
  @apply absolute top-[-10px] left-[6px] bg-main h-[3px] w-[28px] duration-300;

  content: '';
}

label::before {
  @apply absolute top-[10px] left-[6px] bg-main h-[3px] w-[28px] duration-300;

  content: '';
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
  /* @apply invisible opacity-0; */

  transform: translateX(100vw);
}

.navigation-menu {
  @apply ease-in-out fixed h-screen flex justify-center items-center bg-main duration-300;
}

ul {
  @apply text-white font-coda uppercase text-[40px];
}

li {
  @apply block py-2 w-screen border border-r-0 border-l-0;
}
</style>
