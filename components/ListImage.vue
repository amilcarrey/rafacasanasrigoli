<template>
  <section class="text-gray-700">
    <div class="py-24 mx-auto">
      <div class="flex flex-wrap">
        <ImageView v-for="c in count" :key="c" :id="c"></ImageView>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const count = 6
    return { count }
  },
}
</script>

<style lang="scss" scoped></style>
