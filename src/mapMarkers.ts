import { derived, writable } from "svelte/store";
import type { BankLocation } from "./Locations";
import { locations } from "./LocationsStore";
import type { MapMarker } from "./MapMarker";

/*
export const mapMarkers = derived(locations, ($locations: BankLocation[]) => {
  console.log($locations);
  return $locations.map(
    (location) =>
      new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        title: location.address1,
      })
  );
});
*/

export const mapMarkers = writable<MapMarker[]>([]);

export const mapMarkersPendingDelete = writable<google.maps.Marker[]>([]);
