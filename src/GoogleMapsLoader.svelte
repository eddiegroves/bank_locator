<script lang="ts">
  import { Loader } from "@googlemaps/js-api-loader";
  import {
    isGoogleMapsScriptLoaded,
    googleMapsScriptError,
  } from "./GoogleMapsStore";

  export let googleMapsApiKey: string;

  const loader = new Loader({
    apiKey: googleMapsApiKey,
    version: "weekly",
  });

  loader
    .load()
    .then(() => {
      isGoogleMapsScriptLoaded.set(true);
    })
    .catch((e: Event) => {
      googleMapsScriptError.set({ hasError: true, error: e });
    });
</script>

{#if $googleMapsScriptError.hasError}
  <code>There is an issue loading Google Maps script</code>
{/if}

{#if $isGoogleMapsScriptLoaded}
  <div>
    <code>Google Maps script has loaded</code>
  </div>
{/if}
