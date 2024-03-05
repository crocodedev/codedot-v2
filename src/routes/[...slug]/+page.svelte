<script>
  import * as Sections from '$lib/sections'
  export let data

  console.log(data)
  let activeModal
  import ErrorPage from '../../lib/sections/ErrorPage.svelte'

  $: closeModal = () => {
    activeModal = !activeModal
  }

  $: openModal = () => {
    activeModal = !activeModal
  }
</script>

<svelte:head>
  {#if data}
    {#if data.title === undefined}
      <title>404Page | Codedot v.2</title>
    {/if}
    <title>{data.title} | Codedot v.2</title>
  {/if}
</svelte:head>

{#if data && data.content.length > 0}
  <svelte:component this={Sections.Modal} {closeModal} {activeModal} {data} />
  {#each data.content as section}
    {#if section.sectionTitle in Sections}
      <svelte:component this={Sections[section.sectionTitle]} data={section} {openModal} />
    {/if}
  {/each}
{:else}
  <svelte:component this={ErrorPage} />
{/if}

<style>
  @import '../../lib/styles/styles.scss';
</style>
