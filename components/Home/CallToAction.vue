<template>
  <section class="black-sec bg-second text-white">
    <div class="rel">
      <!-- <MiddleLine />
    <div class="flex justify-center text-center max-w-[400px] m-auto pt-4">
      <h2 class="uppercase font-sans text-[47px] relative z-30">
        What we <br />
        <span class="font-coda text-[47px]">do ?</span>
      </h2>
    </div>
    <div class="flex justify-center items-center pt-16 pb-24">
      <h4 class="uppercase mr-3">check our services</h4>
      <img src="arrow.svg" class="w-16 h-16 text-white" alt="" />
    </div> -->
      <div class="my-container">
        <div class="text-content">
          <h1>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </h1>
        </div>

        <div class="mask-container">
          <div class="mask">
            <div class="mask-content">
              <h1>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.my-container {
  height: 500px;
}

.rel {
  position: relative;
}

h1 {
  margin-top: 0;
  line-height: 1.4;
  font-size: 3rem;
}

.text-content h1 {
  z-index: 1000;
}

.text-content {
  width: 100%;
  height: 100%;
  background: pink;
  color: white;
}

.mask-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mask {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.mask-content {
  background: url('https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80');
  color: green;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
