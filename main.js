window.onload = function() {
	const logo = document.querySelector('.logo-principal')
	const separator = document.querySelector('.separator-l')
	const socialmedia = document.querySelector('.ct-socialmedia')
	const header = document.querySelector('.ct-header')
	const navbar = document.querySelector('.ct-navbar')
	const nameB = document.querySelector('.name-banner')
	const bannerN = document.querySelector('.ct-banner-name')

	window.onscroll = function() {
		console.log('scrollie')
		let scrollpos = window.scrollY

		if (scrollpos > 0) {
			header.classList.add('shadow')
			logo.classList.add('hide')
			socialmedia.classList.add('hide')
			separator.classList.add('hide')
			navbar.classList.add('to-top')
		} 

		else if (scrollpos == 0) {
			header.classList.remove('shadow')
			logo.classList.remove('hide')
			socialmedia.classList.remove('hide')
			separator.classList.remove('hide')
			navbar.classList.remove('to-top')
		}
	}

	bannerN.onmouseover = function() {
		bannerN.classList.toggle('hide')
		nameB.classList.toggle('hide')
	}

	bannerN.onmouseout= function() {
		bannerN.classList.toggle('hide')
		nameB.classList.toggle('hide')
	}




}