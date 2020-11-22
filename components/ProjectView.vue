<template>
  <div flex>
    <img
      alt="gallery"
      class="place-content-center justify-items-center object-fill object-center"
      :src="src"
    />
  </div>
</template>

<script>
export default {
  setup() {
    const src =
      'https://images.pexels.com/photos/5552608/pexels-photo-5552608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=450'
    return { src }
  },
}
</script>

<style lang="scss" scoped></style>
