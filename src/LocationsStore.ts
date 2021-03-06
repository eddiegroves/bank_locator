import { readable } from "svelte/store";
import { BankLocation, getLocations } from "./Locations";

export const locations = readable<
  (BankLocation & { position: google.maps.LatLng })[]
>([], (set) => {
  getLocations().then((locations) =>
    set(
      locations.slice(0, 10).map((location) => ({
        ...location,
        position: new google.maps.LatLng(location.lat, location.lng),
      }))
    )
  );

  const interval = setTimeout(() => {
    getLocations().then((locations) =>
      set(
        locations.slice(5, locations.length).map((location) => ({
          ...location,
          position: new google.maps.LatLng(location.lat, location.lng),
        }))
      )
    );
  }, 5000);

  return () => clearTimeout(interval);
});
