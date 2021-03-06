<script lang="ts">
  import { googleMap } from "./GoogleMapsStore";
  import { locations } from "./LocationsStore";
  import type { MapMarker } from "./MapMarker";
  import { mapMarkers, mapMarkersPendingDelete } from "./mapMarkers";

  const mapOptions: google.maps.MapOptions = {
    center: {
      lat: -32.7162,
      lng: 151.5264,
    },
    zoom: 4,
  };

  function initMap(mapDiv: HTMLElement) {
    googleMap.set(new google.maps.Map(mapDiv, mapOptions));
    return {
      destroy() {
        googleMap.set(null);
      },
    };
  }

  mapMarkers.subscribe((mapMarkers) => {
    if ($googleMap) {
      mapMarkers
        .filter(({ onMap }) => onMap === false)
        .forEach((mapMarker) => mapMarker.marker.setMap($googleMap));
    }
  });

  mapMarkersPendingDelete.subscribe((mapMarkers) =>
    mapMarkers.forEach((mapMarker) => mapMarker.setMap(null))
  );

  locations.subscribe((locations) => {
    mapMarkers.update((markers) => {
      const existingMarkers = markers.filter((marker) =>
        locations.some(({ position }) => position.equals(marker.position))
      );

      const updateMarkers: MapMarker[] = locations.map((location) => {
        const existingMarker = existingMarkers.find((marker) =>
          marker.position.equals(location.position)
        );
        if (existingMarker) {
          return existingMarker;
        }

        return {
          marker: new google.maps.Marker({
            position: location.position,
            title: location.address1,
          }),
          onMap: false,
          position: location.position,
        };
      });

      const staleMarkers = markers.filter(
        (marker) =>
          !locations.some(({ position }) => position.equals(marker.position))
      );

      mapMarkersPendingDelete.set(
        staleMarkers.map((staleMarker) => staleMarker.marker)
      );

      return updateMarkers;
    });
  });
</script>

<div use:initMap />

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
