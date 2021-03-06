import { Loader } from "@googlemaps/js-api-loader";
import {
  isGoogleMapsScriptLoaded,
  googleMapsScriptError,
} from "./GoogleMapsStore";

export function loadGoogleMaps(apiKey: string): Promise<void> {
  const loader = new Loader({
    apiKey,
    version: "weekly",
  });

  return loader
    .load()
    .then(() => {
      isGoogleMapsScriptLoaded.set(true);
    })
    .catch((e: Event) => {
      googleMapsScriptError.set({ hasError: true, error: e });
    });
}
