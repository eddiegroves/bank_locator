import { writable } from "svelte/store";

export const isGoogleMapsScriptLoaded = writable(false);

export const googleMapsScriptError = writable<{
  hasError: boolean;
  error?: Event;
}>({ hasError: false });

export const googleMap = writable<google.maps.Map | null>(null);
