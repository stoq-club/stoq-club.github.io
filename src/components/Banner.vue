<template lang="pug">
    section
        .full-width.center
          img.hero-image(src="/images/banner.png")
        .container.center.margined-top-comfortable.margined-bottom-comfortable
            Nugget(color="stoq-green-flat")
            h5.center Build your own portfolio of smart data-driven strategies.
            .margined-top-comfortable
                .input-field
                    input.browser-default(type="text" placeholder="E-mail address")
                    .btn.btn-flat.stoq-green-flat.white-text.shadow-text Get Started
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

.hero-image {
  margin-left: auto;
  margin-right: auto;
  max-height: 450px;
}
</style>
