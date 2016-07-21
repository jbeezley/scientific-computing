var map = geo.map({
	node: '#map',
	clampZoom: false,
	clampBoundsY: false,
	center: [0, 0],
	zoom: 0
});

map.interactor().options({
	animateZoom: false
});

map.createLayer('osm', {
	renderer: null,
	wrapX: false,
	keepLower: false
})
