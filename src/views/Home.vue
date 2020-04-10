<template lang="pug">
.home
  Header
  main
    section.section.margined-top-cozy
      .container
        .row
          .col.s12.m4
            .card-panel.center.feature-card
              img(src="/images/yuna.jpg")
              h6 Lower minimums
              p easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas
          .col.s12.m4
            .card-panel.center.feature-card.offset-top
              img(src="/images/yuna.jpg")
              h6 Lower minimums
              p easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas
          .col.s12.m4
            .card-panel.center.feature-card
              img(src="/images/yuna.jpg")
              h6 Lower minimums
              p easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas
    section.section.green.inset-top
      .container
        .row
</template>

<script>
import Header from '@/components/Header.vue'
import M from 'materialize-css'
export default {
  name: 'Home',
  components: { Header },
  mounted() {
    M.AutoInit()
  }
}
</script>

<style lang="scss" scoped>
.inset-top {
  margin-top: -256px;
}

.feature-card {
  border-radius: 8px !important;
  -webkit-box-shadow: 0px 4px 16px -8px rgba(75, 75, 75, 0.75);
  -moz-box-shadow: 0px 4px 16px -8px rgba(75, 75, 75, 0.75);
  box-shadow: 0px 4px 16px -8px rgba(75, 75, 75, 0.75);

  p {
    font-family: 'Futura Light';
  }

  &.offset-top {
    margin-top: 64px;
  }
}
</style>