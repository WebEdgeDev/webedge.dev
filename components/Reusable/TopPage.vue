<template>
  <div class="black-sec bg-main text-white pt-32 pb-20 lg:pt-24 lg:pb-36 flex items-center">
    <div class="container mx-auto">
      <div class="top-page-line px-6">
        <p class="font-sans lg:py-10 hidden lg:block lg:text-lg uppercase">{{ subtitle }}</p>
        <slot> </slot>
      </div>
      <ul class="px-6 text-center text-sm lg:text-left">
        <li class="pb-1 pt-1">BRANDING</li>
        <li class="pb-1">CONTENT</li>
        <li class="pb-1">ILLUSTRATION</li>
        <li>PACKAGING</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="postcss" scoped>
.top-page-line {
  @apply relative;
}
.top-page-line::before {
  @apply w-[1px] h-[100px] absolute top-[-130px] left-[50%] bg-white;

  content: '';
}

@screen lg {
  .top-page-line {
    @apply relative h-full;
  }
  .top-page-line::after {
    @apply w-[1px] h-[100px] absolute left-0 bottom-[-100px] bg-white;

    content: '';
  }
  .top-page-line::before {
    @apply h-[200px] absolute top-[-130px] left-0;

    content: '';
  }
}
</style>
