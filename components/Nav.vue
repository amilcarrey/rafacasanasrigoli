<template>
  <header class="bg-black py-6 text-white">
    <div
      class="container flex md:flex-row flex-col md:justify-between justify-around items-center"
    >
      <div class=""><nuxt-link to="/">Logo</nuxt-link></div>
      <nav class="flex justify-between">
        <nuxt-link to="" class="">
          <span class="border-solid border-b-2 border-white"> work </span>
        </nuxt-link>
        <nuxt-link to="About" class="pl-24">
          <span class="border-solid border-b-2 border-white">about </span>
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
