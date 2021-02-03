import { writable } from "svelte/store";

export const isGoogleMapsScriptLoaded = writable(false);
export const googleMapsScriptError = writable<{ hasError: boolean, error?: Event}>({ hasError: false});