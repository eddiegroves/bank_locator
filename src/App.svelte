<script lang="ts">
  import { Loader } from "@googlemaps/js-api-loader";
  import AppError from "./AppError.svelte";
  import {
    isGoogleMapsScriptLoaded,
    googleMapsScriptError,
  } from "./GoogleMapsStore";

  const loader = new Loader({
    apiKey: "__GOOGLE_MAPS_API_KEY__",
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

<AppError />

{#if $googleMapsScriptError.hasError}
  <code>There is an issue loading Google Maps script</code>
{/if}

{#if $isGoogleMapsScriptLoaded}
  <div>
    <code>Google Maps script has loaded</code>
  </div>
{/if}
