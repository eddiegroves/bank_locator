<script lang="ts">
  const mapOptions: google.maps.MapOptions = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 4,
  };

  function initMap(mapDiv: HTMLElement) {
    let map: google.maps.Map | null = new google.maps.Map(mapDiv, mapOptions);

    return {
      destroy() {
        map = null;
      },
    };
  }
</script>

<div use:initMap />

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
