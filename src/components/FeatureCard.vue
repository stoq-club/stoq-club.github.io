<template lang="pug">
    .card-panel.center.feature-card.margined-compact(:class="{'offset-top':offsetTop}")
        img(:src="feature.img")
        h6 {{ feature.title }}
        p.light {{ feature.description }}
</template>

<script>
export default {
  props: ['feature', 'offsetTop']
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 601px) {
  .offset-top {
    margin-top: 64px;
  }
}
</style>
