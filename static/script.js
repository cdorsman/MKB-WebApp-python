function changeContent(page) {
	var contentDiv = document.getElementsByClassName('content')[0];
	switch (page) {
		case 'index':
			contentDiv.innerHTML = `
				<h1>
					Welkom bij ons MKB-bedrijf!</h1>
				<p>
					Wij zijn een betrokken en flexibel bedrijf dat zich richt op het leveren van hoogwaardige diensten en producten aan onze klanten. Met een persoonlijke benadering en jarenlange ervaring ondersteunen wij ondernemers bij het realiseren van hun doelen. 
					<br><br>
					Of u nu op zoek bent naar advies, maatwerkoplossingen of betrouwbare service, ons team staat voor u klaar. Samen bouwen we aan duurzame relaties en succesvolle resultaten.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h1>Over ons</h1>
				<h3>Introductie</h3>
				<p class="intro">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
				</p>

				<h3>Subtitle 1</h3>
				<p class="sections">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lobortis volutpat. Morbi luctus dictum tincidunt. Duis nec turpis urna. In ligula mi, pretium ut sollicitudin quis, vestibulum eget sapien. Nulla convallis purus ut tristique varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed neque ipsum, vehicula ut dignissim at, lacinia ut urna. Maecenas quis dictum sapien.
				</p>
				<h3>Subtitle 2</h3>
				<p class="sections">
				Quisque dignissim suscipit diam, in vulputate ligula facilisis in. Morbi scelerisque euismod leo, non molestie sem tempor quis. Integer egestas eleifend laoreet. Donec tincidunt massa id eros aliquam, non posuere tortor vulputate. Praesent vulputate sollicitudin ullamcorper. Vestibulum eget fermentum nibh, a tincidunt dui. Sed et neque augue. Phasellus posuere turpis nec varius volutpat. Etiam vulputate velit in ligula imperdiet pulvinar ut eu lacus. Vivamus tincidunt, urna sit amet vehicula malesuada, elit sapien ultricies nunc, in dapibus massa risus et ex. Duis laoreet imperdiet viverra. In euismod odio id venenatis ultrices. Nam sit amet faucibus erat. Aliquam erat volutpat.
				</p>
				<h3>Subtitle 3</h3>
				<p class="sections">
				Sed arcu metus, vestibulum ut imperdiet et, fermentum sit amet mi. Quisque nec sapien tellus. Fusce posuere eleifend dolor vitae gravida. Morbi sodales mattis tortor, sed eleifend risus maximus tempus. Pellentesque rhoncus euismod ante vitae gravida. Curabitur nisl orci, lacinia a purus non, iaculis vestibulum diam. Maecenas a posuere ipsum. Nullam eget orci nunc. Fusce ultricies ipsum in ante condimentum, a sollicitudin velit dapibus.
				</p>
				<h3>Subtitle 4</h3>
				<p class="sections">
				Nulla gravida nibh quis lacus gravida viverra. Sed vestibulum, dolor at rutrum placerat, lectus ipsum condimentum ante, viverra tincidunt odio metus et massa. Donec dictum dui eu odio condimentum tempor imperdiet et lacus. Integer egestas sagittis condimentum. Donec nulla nulla, fringilla at augue id, fermentum egestas risus. Etiam quis purus sed orci malesuada facilisis a eget est. Duis ut quam at purus mattis porta eget a ipsum. Quisque convallis semper tempus. Sed et efficitur ex. Nulla sagittis, sapien accumsan suscipit feugiat, massa mi elementum elit, a cursus velit ligula sit amet erat. Ut eget consectetur mauris. Nullam vel arcu dapibus, scelerisque nulla a, tempor purus.
				</p>
				<h3>Subtitle 5</h3>
				<p class="sections">
				Donec et magna viverra, sollicitudin nisl vitae, gravida purus. Pellentesque molestie blandit facilisis. Fusce vitae sapien rutrum, vulputate velit in, convallis ex. Aliquam velit nibh, consequat non maximus sed, fermentum quis lectus. Nullam venenatis sed orci et mattis. Ut in diam auctor, ultrices felis ac, pellentesque justo. Maecenas ut purus placerat, rhoncus justo fermentum, gravida eros. Suspendisse ullamcorper laoreet nulla, egestas molestie eros rhoncus in. Donec venenatis pharetra ipsum eget accumsan. Vestibulum non vehicula metus. In sodales purus porttitor cursus tristique. Quisque vitae blandit libero. Morbi dolor odio, pharetra eget ultrices in, maximus non
				</p>
			`;
			break;
		default:
			contentDiv.innerHTML = '<h3>Page not found!</h3>';
	}
}

window.onload = function() {
    changeContent('index');
};