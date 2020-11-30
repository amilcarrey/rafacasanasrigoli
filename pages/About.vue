<template>
  <section>
    <Title :title="pageName" />
    <Me />
  </section>
</template>

<script>
export default {
  setup() {
    const pageName = 'about'
    return { pageName }
  },
}
</script>

<style lang="scss" scoped></style>
