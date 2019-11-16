<template>
  <nav class="fixed w-full gradient">
    <div
      class="container mx-auto flex flex-wrap justify-between items-center text-white p-2"
    >
      <div class="text-white">
        <!-- Icon from <a href="https://icons8.com/icon/19806/hot-air-balloon">Hot Air Balloon icon by Icons8 -->
        <router-link class="flex items-center text-2xl lg:text-4xl" to="/">
          <img
            class="h-8"
            src="https://img.icons8.com/color/48/000000/hot-air-balloon.png"
          />
          <span class="ml-4">ICARUS</span>
        </router-link>
      </div>
      </div>

      <div class="md:hidden">
        <button
          @click="toonMenu = !toonMenu"
          class="border border-white p-2 rounded focus:outline-none"
        >
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <ul
        class="w-full md:w-auto flex-grow md:flex md:justify-end md:items-center text-center mt-2 md:mt-0 bg-white md:bg-transparent text-gray-900 p-4 md:p-0 -mx-2"
        :class="{ hidden: !toonMenu }"
      >
        <li class="p-2">
          <router-link
            class="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="p-2 md:ml-3">
          <router-link
            class="inline-block text-gray-900 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            to="/contact"
            >Contacteer ons</router-link
          >
        </li>
        <li class="p-2 md:ml-3">
          <router-link
            class="inline-block text-gray-900 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            to="/aanmelden"
            >Aanmelden</router-link
          >
        </li>
        <li class="md:ml-3">
          <button
            class="button-gradient block mx-auto md:mx-0 hover:bg-blue-200 font-bold rounded-full mt-4 md:mt-0 md:ml-3 py-4 px-8 shadow opacity-75 bg-white"
          >
            BOEKEN
          </button>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toonMenu: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
