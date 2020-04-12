<template lang="pug">
    .row
        .col.s12.m4(v-for="feature in features")
            FeatureCard(:feature="feature" :offsetTop="feature.offsetTop" )
</template>

<script>
import FeatureCard from './FeatureCard'
export default {
  props: ['features'],
  components: {
    FeatureCard
  }
}

// let features = [{
//   src: '/images/yuna.jpg',
//   title: 'Lower minimums',
//   description:
//     'easier ascces to adjnfsd fnjsdfjknsf kjfsnj dajkdjna dadjasdh dasdas'
// }]
</script>
