window.addEventListener('load', function () {
	baguetteBox.run('.gallery');
});

const gallerySearch = document.getElementById('gallerySearch');

gallerySearch.addEventListener('keyup', (e) => {
	let currentValue = e.target.value.toLowerCase();

	let images = document.querySelectorAll('a.gallery-img');
	images.forEach((image) => {
		let caption = image.getAttribute('data-caption');
		if (caption.toLowerCase().includes(currentValue)) {
			image.style.display = 'block';
		} else {
			image.style.display = 'none';
		}
	});
});
