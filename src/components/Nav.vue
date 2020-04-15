<template lang="pug">
  nav.transparent.z-depth-0
    .container.nav-wrapper
      router-link.brand-logo.stoq-green-text(to="/") STOQ

      ul.right.hide-on-med-and-down
        li
          router-link.stoq-green-text(to="/about") About us
        li
          router-link.stoq-green-text(to="/blog") Blog
        
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped lang="scss">
@import 'materialize-css/sass/materialize.scss';
@import '@/assets/style.scss';

ul {
  li {
    margin-right: 4px;
    margin-left: 4px;

    .router-link-active {
      @extend .stoq-green-flat, .white-text;
      line-height: 32px;
      margin-top: 16px;
      border-radius: 16px;
    }
  }
}
</style>
