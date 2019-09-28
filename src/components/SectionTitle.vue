<template>
  <u-animate-container>
    <u-animate
      name="zoomIn"
      delay=".5s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
    >
      <h2 class="text-center">{{ text }}</h2>
    </u-animate>
  </u-animate-container>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: ['text']
}
</script>

<style>

</style>
