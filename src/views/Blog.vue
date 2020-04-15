<template lang="pug">
  .blog
    section.section
      .container.center.margined-top-comfortable.margined-bottom-comfortable
        Nugget(color="green")
        h5.center Keep upto date with our blog posts
        .margined-top-comfortable
          .input-field
            input.browser-default(type="text" placeholder="Find something...")
            .btn.btn-flat.stoq-green-flat.white-text Search

    section.section.margined-top-comfortable.margined-bottom-comfortable
      .container
        .row
          .col.s6.m4
            router-link(to="/blog/somepost")
              .card.hoverable
                .card-image.waves-effect.waves-light
                  img(src="/images/office.jpg", alt="alt")
                .card-content
                  span.card-title.stoq-green-text Title of post
                  p.light Some small description or exerpt

          .col.s6.m4
            router-link(to="/blog/somepost")
              .card.hoverable
                .card-image.waves-effect.waves-light
                  img(src="/images/office.jpg", alt="alt")
                .card-content
                  span.card-title.stoq-green-text Title of post
                  p.light Some small description or exerpt

          .col.s6.m4
            router-link(to="/blog/somepost")
              .card.hoverable
                .card-image.waves-effect.waves-light
                  img(src="/images/office.jpg", alt="alt")
                .card-content
                  span.card-title.stoq-green-text Title of post
                  p.light Some small description or exerpt

</template>

<style scoped lang="scss">
.input-field {
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import Nugget from '@/components/Nugget'
export default {
  components: {
    Nugget
  }
}
</script>
