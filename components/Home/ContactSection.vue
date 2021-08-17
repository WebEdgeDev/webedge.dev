<template>
  <section class="container mx-auto bg-white text-main pb-24">
    <h2 class="font-coda text-[40px] uppercase relative z-30 text-center p-10">
      Contact
      <span class="font-sans text-[44px]">Us.</span>
    </h2>
    <form class="px-6">
      <input
        type="text"
        class="block border-2 border-main w-full p-3 mb-4"
        placeholder="WRITE YOUR NAME"
      />
      <input
        type="text"
        class="block border-2 border-main w-full p-3 mb-4"
        placeholder="WRITE YOUR EMAIL"
      />
      <input
        type="text"
        class="block border-2 border-main w-full p-3 mb-4"
        placeholder="WRITE YOUR PHONE"
      />
      <textarea
        class="block border-2 border-main w-full p-3 mb-4"
        rows="7"
        placeholder="WRITE YOUR MESSAGE"
      ></textarea>
      <h4
        class="
          font-coda
          relative
          before:absolute before:bottom-0 before:w-[135px] before:h-[2px] before:bg-main
        "
      >
        Send message
      </h4>
    </form>
  </section>
</template>
