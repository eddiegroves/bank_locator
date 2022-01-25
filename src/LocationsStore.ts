import { readable } from "svelte/store";
import { BankLocation, getLocations } from "./Locations";

export const locations = readable<
  Map<
    { position: google.maps.LatLng },
    BankLocation & { position: google.maps.LatLng }
  >
>(new Map([]), (set) => {
  getLocations().then((locations) =>
    set(
      new Map(
        locations.slice(0, 10).map((location) => [
          { position: new google.maps.LatLng(location.lat, location.lng) },
          {
            ...location,
            position: new google.maps.LatLng(location.lat, location.lng),
          },
        ])
      )
    )
  );

  const interval = setTimeout(() => {
    getLocations().then((locations) =>
      set(
        new Map(
          locations.slice(5).map((location) => [
            { position: new google.maps.LatLng(location.lat, location.lng) },
            {
              ...location,
              position: new google.maps.LatLng(location.lat, location.lng),
            },
          ])
        )
      )
    );
  }, 5000);

  return () => clearTimeout(interval);
});
