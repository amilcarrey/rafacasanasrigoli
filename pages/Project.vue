<template>
  <div class="bg-gray-900">
    <Title :title="testTitle" />
    <!-- <ProjectView /> -->
  </div>
</template>

<script>
export default {
  setup() {
    const testTitle = 'This is a test title for this route.'
    return { testTitle }
  },
}
</script>

<style lang="scss" scoped></style>
