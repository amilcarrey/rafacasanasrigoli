<template>
  <div
    class="h-72 w-full mb-24 mx-12 pt-48 text-4xl font-extralight text-left tracking-wider leading-relaxed text-white"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title of this website made by @amilcarrey to @rafaelcasanas.',
    },
  },
  setup(props) {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
