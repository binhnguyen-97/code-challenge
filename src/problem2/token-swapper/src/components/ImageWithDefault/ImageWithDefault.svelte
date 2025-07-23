<script lang="ts">
  let {
    src,
    defaultSrc = '/placeholder.png',
    ...rest
  }: {
    src: string;
    defaultSrc?: string;
  } & HTMLImageElement = $props();

  let currentSrc = $state(src);

  function handleError() {
    currentSrc = defaultSrc;
  }
</script>

{#key currentSrc}
  <img src={currentSrc} onerror={handleError} {...rest} />
{/key}
