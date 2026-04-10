import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';

// Map setup with drawing tools and polygon layers.
function MapComponent({ propertiesGeoJSON, affectedPropertyIds, onUpdateLine, drawnLine }) {
  const mapRef = useRef(null);
  const drawItemsRef = useRef(null);
  const propertyLayersRef = useRef([]);

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 14,
    });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    drawItemsRef.current = new L.FeatureGroup();
    drawItemsRef.current.addTo(map);

    const drawControl = new L.Control.Draw({
      draw: {
        polyline: true,
        polygon: false,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawItemsRef.current,
        remove: true,
      },
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (event) => {
      drawItemsRef.current.clearLayers();
      drawItemsRef.current.addLayer(event.layer);
      onUpdateLine(event.layer.toGeoJSON());
    });

    map.on(L.Draw.Event.DELETED, () => {
      drawItemsRef.current.clearLayers();
      onUpdateLine(null);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      drawItemsRef.current = null;
    };
  }, [onUpdateLine]);

  useEffect(() => {
    if (!mapRef.current || !drawItemsRef.current) return;
    if (!drawnLine) {
      drawItemsRef.current.clearLayers();
    }
  }, [drawnLine]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    propertyLayersRef.current.forEach((layer) => {
      map.removeLayer(layer);
    });
    propertyLayersRef.current = [];

    propertiesGeoJSON.features.forEach((feature) => {
      const isAffected = affectedPropertyIds.includes(feature.properties.id);
      const layer = L.geoJSON(feature, {
        style: {
          color: isAffected ? '#d62728' : '#1f78b4',
          weight: 2,
          fillOpacity: 0.15,
        },
      }).bindPopup(
        `<strong>${feature.properties.name}</strong><br/>ID: ${feature.properties.id}<br/>Status: ${isAffected ? 'Affected' : 'Not Affected'}`
      );

      layer.addTo(map);
      propertyLayersRef.current.push(layer);
    });
  }, [propertiesGeoJSON, affectedPropertyIds]);

  return <div id="map" className="map-root" />;
}

export default MapComponent;
