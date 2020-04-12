<template lang="pug">
    section
        .parallax-container
            .parallax
                img(src="/images/banner.jpg")
        .container.center.margined-top-comfortable.margined-bottom-comfortable
            Nugget(color="green")
            h5.center Build your own portfolio of smart data-driven strategies.
            .margined-top-comfortable
                .input-field
                    input.browser-default(type="text" placeholder="E-mail address")
                    .btn.btn-flat.green.white-text Get Started
</template>

<script>
import Nugget from './Nugget'

export default {
  components: {
    Nugget
  }
}
</script>

<style scoped lang="scss">
.input-field {
  margin-left: auto;
  margin-right: auto;
  input {
    width: 300px;
  }
}
</style>
