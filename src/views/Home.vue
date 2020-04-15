<template lang="pug">
.home
  Banner
  section.section.margined-top-cozy
    .container
      Features(:features="features")
  section.section.inset-top.stoq-green-flat
    .container.margined-top-cozy
      Nugget(color="white")
      h5.center.white-text How does STOQ work?
      p.light.center.white-text With our app, making your first investment is easy. #[br] In just 3 steps you will be able to see your return.

      Timeline

      h5.center.margined-top-cozy.white-text Download STOQ and start investing

      .center.padded-top-comfortable.padded-bottom-cozy
        .btn.btn-large.white.stoq-green-text Download from Appstore

  section.section.padded-top-cozy
    .container.margined-top-cozy
      Nugget(color="stoq-green-flat")
      h5.center What makes STOQ different?

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
          img: '/images/flower-svgrepo-com.svg',
          title: 'Lower minimums',
          description: 'Easier access to quant hedge fund strategies.',
          offsetTop: false
        },
        {
          img: '/images/profits-svgrepo-com.svg',
          title: 'True diversification',
          description:
            'Pick strategies to build portfolios with broad selection of risks.',
          offsetTop: true
        },
        {
          img: '/images/stats-svgrepo-com.svg',
          title: 'We share the risk',
          description: "Don't pay for strategies that dont meet minmum returns",
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
