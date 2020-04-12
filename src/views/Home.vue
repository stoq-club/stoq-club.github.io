<template lang="pug">
.home
    Banner
    section.section.margined-top-cozy
      .container
        Features(:features="features")
    section.section.green.inset-top
      .container.margined-top-cozy
        Nugget(color="white")
        h5.center.white-text How does Stoq work?
        p.light.center.white-text With our app, making your first investment is easy. #[br] In just 3 steps you will be able to see your return.

        Timeline

        h5.center.white-text.margined-top-cozy Download Stoq and start investing

        .center.padded-top-comfortable.padded-bottom-cozy
          .btn.white.green-text Download form Appstore

    section.section.padded-top-cozy
      .container.margined-top-cozy
        Nugget(color="green")
        h5.center What makes Stoq different?

</template>

<script>
import M from 'materialize-css'

import Nugget from '@/components/Nugget.vue'
import Banner from '@/components/Banner.vue'
import Features from '@/components/Features.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'Home',
  components: { Nugget, Banner, Features, Timeline },
  data() {
    return {
      features: [
        {
          img: '/images/yuna.jpg',
          title: 'Lower minimums',
          description:
            'easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas',
          offsetTop: false
        },
        {
          img: '/images/yuna.jpg',
          title: 'Lower minimums',
          description:
            'easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas',
          offsetTop: true
        },
        {
          img: '/images/yuna.jpg',
          title: 'Lower minimums',
          description:
            'easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas',
          offsetTop: false
        }
      ]
    }
  },
  mounted() {
    M.AutoInit()
  }
}
</script>

<style scoped lang="scss"></style>
