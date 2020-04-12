<template lang="pug">
    .nugget(:class="color")
</template>

<script>
export default {
  name: 'Nugget',
  props: ['color']
}
</script>

<style lang="scss" scoped>
.nugget {
    width: 50px;
    height: 4px;
    border-radius: 2px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>