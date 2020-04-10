<template lang="pug">
  #app
    router-view
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  mounted() {
    M.AutoInit()
  }
}
</script>