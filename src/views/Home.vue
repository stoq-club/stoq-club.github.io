<template lang="pug">
.home
  Header
  main
    Banner
    section.section.margined-top-cozy
      .container
        Features(:features="features")
    section.section.green.inset-top
      .container.margined-top-cozy
        Nugget(color="white")
        h5.center.white-text How does Stoq work?
        p.light.center.white-text With our app, making your first investment is easy. #[br] In just 3 steps you will be able to see your return.

        .timeline.margined-top-cozy
          .row
            .col.s4
            .col.s4.padded-x-comfortable
              img.center.full-width(src="/images/yuna.jpg")
            .col.s4.valign-wrapper
              .full-width.padded-top-cozy
                .row
                  .col.s12.m3
                    .round-counter.green-text 1
                  .col.s12.m9
                    h6.white-text Invest smarter
                    p.white-text.light Take advantage of AI driven strategies and secure your future today

          .row
            .col.s4.valign-wrapper
              .full-width.padded-top-cozy
                .row
                  .col.s12.m3.hide-on-med-and-up
                    .round-counter.right.green-text 2
                  .col.s12.m9
                    h6.white-text.right-align Invest smarter
                    p.white-text.right-align.light Take advantage of AI driven strategies and secure your future today
                  .col.s12.m3.hide-on-small-only
                    .round-counter.green-text 2
            .col.s4
              .vertical-line
                .dot
                .divider-line.green
            .col.s4

          .row
            .col.s4
            .col.s4
              .vertical-line
                .dot
                .divider-line.green
            .col.s4.valign-wrapper
              .full-width.padded-top-cozy
                .col.s12.m3
                    .round-counter.green-text 3
                .col.s12.m9
                  h6.white-text Invest smarter
                  p.white-text.light Take advantage of AI driven strategies and secure your future today




        h5.center.white-text.margined-top-cozy Download Stoq and start investing

        .center.padded-top-comfortable.padded-bottom-cozy
          .btn.white.green-text Download form Appstore

    section.section.padded-top-cozy
      .container.margined-top-cozy
        Nugget(color="green")
        h5.center What makes Stoq different?


  
  
  
  
  
  
  
  Footer

</template>

<script>
import M from 'materialize-css'

import Header from '@/components/Header.vue'
import Nugget from '@/components/Nugget.vue'
import Banner from '@/components/Banner.vue'
import Features from '@/components/Features.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: { Header, Nugget, Banner, Features, Footer },
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


<style scoped lang="scss">
.round-counter {
  // color:transparent;
  background: white;
  border-radius: 100%;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  margin-top: 6px;
}

.vertical-line {
  margin-left: auto;
  margin-right: auto;
  width: 2px;
  height: 300px;
  border-radius: 2px;
  background: white;

  .dot {
    margin-left: -3px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: white;

    }
    .divider-line{
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
      display: block;
      width: 2px;
      height: 32px;
    }
  
}

.timeline {
  .padded-x-comfortable {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>