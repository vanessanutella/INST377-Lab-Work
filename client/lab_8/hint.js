map.eachLayer((layer) => {
  if (layer instanceof L.Marker) {
    layer.remove();
  }
});
