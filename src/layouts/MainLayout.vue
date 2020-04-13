<template lang="pug">
    .layout.main-layout
        Header
        main
            router-view
        Footer
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
