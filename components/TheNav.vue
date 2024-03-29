<template>
  <nav class="relative">
    <div v-if="mobile" class="menu-block" :class="{ 'white-toogle': $store.state.whiteLogo }">
      <input id="menu-toogle" type="checkbox" @click="menuToggle" />
      <label for="menu-toogle"></label>
    </div>
    <div v-if="loaded" class="logo-block">
      <NuxtLink to="/">
        <MobileLogo v-if="mobile" :white="$store.state.whiteLogo" />
        <DesktopLogo v-if="!mobile" :white="$store.state.whiteLogo" />
      </NuxtLink>
    </div>
    <div class="navigation-menu" :class="{ 'hidden-block': !menuOpen }">
      <ul class="nav-links" :class="{ 'white-links': $store.state.whiteLogo }">
        <li><NuxtLink :to="localePath('/')">home</NuxtLink></li>
        <li><NuxtLink :to="localePath('work')">work</NuxtLink></li>
        <li><NuxtLink :to="localePath('about')">about</NuxtLink></li>
        <li><NuxtLink :to="localePath('contact')">contact</NuxtLink></li>
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

        <div class="lang" :class="{ 'white-links': $store.state.whiteLogo }">
          <a :href="switchLocalePath('en')">EN</a>
          <span class="shot-line">-</span>
          <a :href="switchLocalePath('lt')">LT</a>
          <span class="shot-line">-</span>
          <a :href="switchLocalePath('ru')">RU</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobile: true,
      menuOpen: false,
      windowWidth: 0,
      loaded: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
  watch: {
    $route() {
      this.menuOpen = false
    },

    windowWidth() {
      if (this.windowWidth >= 1024) {
        this.mobile = false
      } else {
        this.mobile = true
      }
    },
  },
  beforeMount() {
    this.windowWidth = window.innerWidth
  },

  mounted() {
    this.loaded = true

    document.addEventListener('click', this.menuClose)
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },

  beforeDestroy() {
    document.removeEventListener('click', this.menuClose)
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen

      if (this.menuOpen) {
        this.$store.state.whiteLogo = true
      }
      if (!this.menuOpen) {
        if (!this.$store.state.whiteLogoPage) {
          this.$store.state.whiteLogo = false
        }
      }
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
.menu-block {
  @apply fixed top-0 right-0 z-50;
}

.logo-block {
  @apply fixed top-[14px] left-[8px] z-50;
}

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
  @apply ease-in-out fixed h-screen flex flex-col justify-between items-center bg-second duration-300 z-40 pt-32 pb-6;
}

.nav-links {
  @apply text-center text-white font-coda uppercase text-[40px] mr-4;
}

.nav-links li {
  @apply block py-2 mx-8 w-screen border border-r-0 border-l-0;
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

@screen lg {
  .menu-block {
    @apply hidden;
  }

  .hidden-block {
    transform: translateX(0);
  }

  .navigation-menu {
    @apply w-full flex-row justify-end items-center bg-[transparent] h-auto pt-4 pb-4 pr-4;
  }

  .social-icons {
    display: none;
  }

  .lang {
    @apply px-2;
  }

  .lang a {
    @apply px-2 text-main;
  }

  .nav-links {
    @apply text-main flex flex-row justify-center text-base font-sans;
  }

  .white-links a {
    @apply text-white;
  }

  .nav-links li {
    @apply border-0 w-auto my-4 relative duration-500;
  }

  .nav-links li a {
    @apply py-2 px-4 font-bold tracking-wider;

    -webkit-font-smoothing: antialiased;
  }
  .nav-links .nuxt-link-exact-active::after,
  .nav-links li a::after {
    @apply absolute left-0 top-0 w-full h-full;

    content: '';

    /* border-radius: 50%; */
    border: 2px solid transparent;
  }

  .nav-links .nuxt-link-exact-active::after,
  .nav-links li a:hover::after {
    @apply border-main;

    transition: border-top-color 0.05s linear, border-right-color 0.05s linear 0.05s,
      border-bottom-color 0.1s linear 0.15s, border-left-color 0.05s linear 0.2s;
  }
  .nav-links .nuxt-link-exact-active,
  .nav-links li:hover {
    transform: rotate(-10deg);
  }

  .white-links .nuxt-link-exact-active::after,
  .white-links li a:hover::after {
    @apply border-white;
  }

  .shot-line {
    @apply hidden;
  }

  .logo-block {
    @apply pt-4;
  }
}
</style>
