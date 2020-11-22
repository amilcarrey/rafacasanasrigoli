<template>
  <div class="lg:w-1/3 w-full h-auto">
    <div class="flex relative h-full">
      <img
        alt="gallery"
        class="object-cover object-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        src="https://images.pexels.com/photos/5552608/pexels-photo-5552608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=450"
      />
      <div
        class="absolute h-full px-8 py-10 z-10 transition duration-1000 ease-in-out bg-yellow-400 opacity-0 hover:opacity-75"
      >
        <h1 class="text-lg font-medium text-gray-900 text-center mb-3">
          Shooting Stars
        </h1>
        <p class="leading-relaxed text-center">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
