<script lang="ts">
  import AppError from "./AppError.svelte";
  import { GOOGLE_MAPS_API_KEY } from "./environment";
  import GoogleMaps from "./GoogleMaps.svelte";
  import { loadGoogleMaps } from "./googleMapsLoader";
  import {
    googleMapsScriptError,
    isGoogleMapsScriptLoaded,
  } from "./GoogleMapsStore";

  loadGoogleMaps(GOOGLE_MAPS_API_KEY);
</script>

<AppError />

{#if $googleMapsScriptError.hasError}
  <code>There is an issue loading Google Maps script</code>
{/if}

{#if $isGoogleMapsScriptLoaded}
  <GoogleMaps />
{/if}
