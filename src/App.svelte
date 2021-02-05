<script lang="ts">
  import AppError from "./AppError.svelte";
  import GoogleMapsLoader from "./GoogleMapsLoader.svelte";
</script>

<AppError />
<GoogleMapsLoader googleMapsApiKey="__GOOGLE_MAPS_API_KEY__" />
