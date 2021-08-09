<template>
  <div class="my-line" :class="{ 'my-white': !bgMain }"></div>
</template>

<script>
export default {
  props: {
    bgMain: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="postcss">
.my-line {
  @apply h-[120px] relative;
}
.my-line::before {
  @apply h-full absolute left-[50%] w-[1px] bg-main;

  content: '';
}
.my-white::before {
  @apply bg-white;
}
</style>
