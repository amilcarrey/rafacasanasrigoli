<template>
  <section>
    <div
      class="bg-fixed bg-no-repeat bg-cover h-72 w-full"
      :style="{ 'background-image': `url(${image})` }"
    >
      <div
        class="flex bg-black md:py-24 py-12 h-full"
        :class="image ? 'bg-opacity-50' : 'bg-opacity-100'"
      >
        <div class="container">
          <div class="md:w-4/6 w-5/6">
            <span
              class="md:text-4xl text-2xl font-extralight md:text-left text-center tracking-wider leading-relaxed text-white"
            >
              {{ title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title of this website made by @amilcarrey to @rafaelcasanas',
    },
    image: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
