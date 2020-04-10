<template lang="pug">
  header
    Nav
    .parallax-container
      .parallax
        img(src="/images/banner.jpg")
    .container.center.margined-top-comfortable.margined-bottom-comfortable
      h5.center Build your own portfolio of smart data-driven strategies.
      .margined-top-comfortable
        .input-field
          input.browser-default(type="text" placeholder="E-mail address")
          .btn.btn-flat.green.white-text Get Started


</template>

<script>
import M from 'materialize-css'
import Nav from './Nav'
export default {
  name: 'Header',
  components: {
    Nav
  },
  mounted() {
    M.AutoInit()
  }
}
</script>

<style scoped lang="scss">
.input-field {
  margin-left: auto;
  margin-right: auto;
  // border: 1px solid blue;
  background: #eef0fd;
  width: 458px;
  border-radius: 36px;
  padding: 1px;

  input {
    height: 36px;
    width: 300px;
    border: none;
    border-radius: 36px;
    padding-left: 16px;
    background: transparent;
    color: #8e8e96;
    font-size: 14px;
    font-weight: 500;

    &::placeholder {
      color: #8e8e96;
    }
  }
  .btn {
    display: inline-block;
    margin-left: 4px;
    margin-top: -5px;
    width: 150px;
  }
}
</style>
