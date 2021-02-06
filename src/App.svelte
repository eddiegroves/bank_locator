<script lang="ts">
  import AppError from "./AppError.svelte";
  import GoogleMaps from "./GoogleMaps.svelte";
  import GoogleMapsLoader from "./GoogleMapsLoader.svelte";
  import { isGoogleMapsScriptLoaded } from "./GoogleMapsStore";
</script>

<AppError />
<GoogleMapsLoader googleMapsApiKey="__GOOGLE_MAPS_API_KEY__" />

{#if $isGoogleMapsScriptLoaded}
  <GoogleMaps />
{/if}
