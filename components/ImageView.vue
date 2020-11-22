<template>
  <div
    class="lg:w-1/3 w-full h-auto z-0 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:z-40"
  >
    <div class="flex relative h-full">
      <img alt="gallery" class="object-cover object-center" :src="url" />
      <div
        class="absolute flex flex-col place-content-center h-full px-8 py-10 z-10 transition duration-700 ease-in-out bg-yellow-400 opacity-0 hover:opacity-75"
      >
        <h1 class="text-lg font-medium text-gray-900 text-center mb-3">
          {{ title }}
        </h1>
        <p class="leading-relaxed text-center">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    url: String,
  },
  setup(props) {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
