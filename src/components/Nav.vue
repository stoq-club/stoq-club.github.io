<template lang="pug">
  nav.transparent.z-depth-0
    .container.nav-wrapper
      router-link.brand-logo.green-text(to="/") Stoq

      ul.right.hide-on-med-and-down
        li
          router-link.green-text(to="/about") About us
        li
          router-link.green-text(to="/blog") Blog
        
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped lang="scss">
@import 'materialize-css/sass/materialize.scss';

ul {
  li {
    margin-right: 4px;
    margin-left: 4px;

    .router-link-active {
      @extend .green, .white-text;
      line-height: 32px;
      margin-top: 16px;
      border-radius: 16px;
    }
  }
}
</style>
