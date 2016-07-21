Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	transition: 'fade', // none/fade/slide/convex/concave/zoom

	math: {
		mathjax: 'https://cdn.mathjax.org/mathjax/latest/MathJax.js',
		config: 'TeX-AMS_HTML-full'
	},

	// Optional reveal.js plugins
	dependencies: [
		{ src: 'js/vendor/math.js', async: true },
		{ src: '/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'js/vendor/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'js/vendor/notes/notes.js', async: true }
	]
});

window.onload = function () {
	/*
	var map5 = geo.map({
		node: '.map-demo-5',
		clampZoom: false,
		clampBoundsY: false,
		center: [0, 0],
		zoom: 0
	});
	map5.interactor().options({
		zoomAnimation: false
	});
	map5.createLayer('osm', {
		wrapX: false,
		keepLower: false,
		renderer: null
	});
	map5.draw();
	*/
	var svg = d3.select('.jb-tile')
		.append('svg')
			.attr('width', 256)
			.attr('height', 256);

};
