<template>
  <section class="text-gray-700">
    <div class="mx-auto">
      <div class="flex flex-wrap">
        <ImageView
          v-for="c in count"
          :key="c"
          :title="title"
          :subtitle="subtitle"
          :url="url"
        ></ImageView>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const count = 6
    const title = 'Shooting Stars'
    const subtitle =
      'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
    const url =
      'https://images.pexels.com/photos/5552608/pexels-photo-5552608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=450'
    return { count, title, subtitle, url }
  },
}
</script>

<style lang="scss" scoped></style>
