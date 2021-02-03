<script lang="ts">
  let appError: ErrorEvent;
  function appErrorHandler(event: Event) {
    appError = event as ErrorEvent;
  }
</script>

<svelte:window on:error={appErrorHandler} />

{#if appError}
  <code>
    <div><strong>App error occured</strong></div>
    {appError.error}
  </code>
{/if}
