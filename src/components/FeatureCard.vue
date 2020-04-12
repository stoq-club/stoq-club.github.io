<template lang="pug">
    .card-panel.center.feature-card(:class="{'offset-top':offsetTop}")
        img(:src="feature.img")
        h6 {{ feature.title }}
        p {{ feature.description }}
</template>

<script>
export default {
  props: ['feature', 'offsetTop']
}
</script>

<style lang="scss" scoped>
.feature-card {
  border-radius: 8px !important;
  -webkit-box-shadow: 0px 4px 16px -8px rgba(75, 75, 75, 0.75);
  -moz-box-shadow: 0px 4px 16px -8px rgba(75, 75, 75, 0.75);
  box-shadow: 0px 4px 16px -8px rgba(75, 75, 75, 0.75);

  p {
    font-family: 'Futura Light';
  }
}

@media only screen and (min-width: 601px) {
  .offset-top {
    margin-top: 64px;
  }
}
</style>