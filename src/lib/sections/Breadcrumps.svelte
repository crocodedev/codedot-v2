<script>
  export let data
</script>

{#if data}
  <div class="breadcrumps">
    <div class="container">
      <div class="breadcrumps__wrapper">
        {#each data.breadcrumpsItems as item}
          <a href={item.linkTo.current}>{item.linkText}</a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .breadcrumps {
    position: relative;
    z-index: 4;
    &__wrapper {
      display: flex;
      align-items: baseline;
      gap: 30px;
      row-gap: 10px;
      flex-wrap: wrap;
      padding-right: 20px;

      a {
        pointer-events: none;
        position: relative;
        display: flex;
        align-items: center;
        color: #0082b1;
        font-weight: 600;

        @include media-breakpoint-down(lg) {
          font-size: 14px;
        }

        @include media-breakpoint-up(lg) {
          font-size: 18px;
        }
      }

      a:not(a:last-of-type) {
        pointer-events: all;
        color: black;

        &::after {
          position: absolute;
          pointer-events: none;
          content: '→';
          width: 10px;
          bottom: 1px;
          height: 100%;
          right: -18px;
          color: black;
        }
      }
    }
  }
</style>
