<template>
  <div class="bg-gray-900">
    <Title :title="title" />
    <ListImage />
  </div>
</template>

<script>
export default {
  setup() {
    const title =
      'Acá va a ir una frase re piola, pero que no la pensé todavia así que queda esta por ahora.'
    return { title }
  },
}
</script>

<style lang="scss" scoped></style>
