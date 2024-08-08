'use strict'

const swiper = new Swiper('.body-main-screen__swiper', {
	loop: false,

	navigation: {
		nextEl: '.body-main-screen__arrow.swiper-button-next',
		prevEl: '.body-main-screen__arrow.swiper-button-prev',
	},
})
