<template>
  <div
    class="bg-fixed bg-no-repeat bg-cover bg-black bg-opacity-50 h-72 w-full"
    :style="{ 'background-image': `url(${image})` }"
  >
    <div class="flex bg-black bg-opacity-50 pb-24 pt-24 lg:pt-48 h-full">
      <span
        class="px-5 text-4xl font-extralight lg:text-left text-center tracking-wider leading-relaxed text-white"
      >
        {{ title }}
      </span>
    </div>
  </div>
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
      default:
        'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  },
  setup(props) {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
