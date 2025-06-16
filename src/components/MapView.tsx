"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapView() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    // Guard: Ensure this only runs in browser
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    if (mapRef.current) return; // Prevent multiple initializations

    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://raw.githubusercontent.com/go2garret/maps/main/src/assets/json/arcgis_hybrid.json",
      // style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      // style: "https://demotiles.maplibre.org/style.json",
      center: [0, 20],
      zoom: 1.5,
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const addMarker = (lng, lat, popup_text) => {
    if (!mapRef.current) return;

    const marker = new maplibregl.Marker()
      .setLngLat([lng, lat])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setText(popup_text)
      )
      .addTo(mapRef.current);
  }

  useEffect(() => {
    if (mapRef.current) {
      addMarker(31.0461, 34.8516, "🚨 Suspicious login attempt");
    }
  }, [mapRef]);

  return <div ref={mapContainerRef} className="h-full w-full" />;
}

