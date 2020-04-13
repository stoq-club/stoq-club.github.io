<template lang="pug">
	.timeline.margined-top-cozy
		.row
			.col.s4
			.col.s4.padded-x-comfortable
				.center
					img(src="/images/iphone.png")
			.col.s4.valign-wrapper
				.full-width.margined-top-cozy
					
						.col.s12.m3
							.round-counter.white 1
						.col.s12.m9
							.card-panel
								h6 Invest smarter
								p.light.no-margin Take advantage of AI driven strategies and secure your future today

		.row
			.col.s4.valign-wrapper
				.full-width.margined-top-cozy
					
						.col.s12.m3.hide-on-med-and-up
							.round-counter.white 2
						.col.s12.m9
							.card-panel
								h6.right-align Invest smarter
								p.right-align.light.no-margin Take advantage of AI driven strategies and secure your future today
						.col.s12.m3.hide-on-small-only
							.round-counter.white 2
			.col.s4
				.vertical-line.white
					.dot.white
					.divider-line
			.col.s4

		.row
			.col.s4
			.col.s4
				.vertical-line.white
					.dot.white
					.divider-line
			.col.s4.valign-wrapper
				.full-width.margined-top-cozy
					.col.s12.m3
						.round-counter.white 3
					.col.s12.m9
						.card-panel
							h6 Invest smarter
							p.light.no-margin Take advantage of AI driven strategies and secure your future today


</template>

<style scoped lang="scss">
.timeline {
  .padded-x-comfortable {
    padding-left: 20px;
    padding-right: 20px;

    img {
      max-height: 300px;
      // margin-left: auto;
      // margin-right: auto;
    }
  }

  .card-panel {
    overflow: hidden;
    -webkit-box-shadow: 0px 8px 24px 0px #28c76f;
    -moz-box-shadow: 0px 8px 24px 0px #28c76f;
    box-shadow: 0px 8px 24px 0px #28c76f;

    padding: 16px;
    padding-top: 4px;
  }

  .round-counter {
    // color:transparent;
    // background: white;
    border-radius: 100%;
    text-align: center;
    line-height: 32px;
    width: 32px;
    height: 32px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  .vertical-line {
    margin-left: auto;
    margin-right: auto;
    width: 2px;
    height: 250px;
    border-radius: 2px;
    // background: white;

    .dot {
      margin-left: -3px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      // background: white;
    }
    .divider-line {
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
      display: block;
      width: 2px;
      height: 32px;
    }
  }
}
</style>
