<template lang="pug">
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


</template>

<style scoped lang="scss">
.timeline {
  .padded-x-comfortable {
    padding-left: 20px;
    padding-right: 20px;
  }
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
