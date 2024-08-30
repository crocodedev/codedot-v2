<script>
  export let data
</script>

{#if data}
  <section class="code">
    <p class="code__text">{data.codeText}</p>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .code {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    color: #0082b1;

    @include media-breakpoint-down(lg) {
      padding: 25px 20px;
    }

    @include media-breakpoint-up(lg) {
      padding: 43px 0;
    }

    &__text {
      word-break: break-word;
      font-weight: 800;

      @include media-breakpoint-down(sm) {
        font-size: 80px;
      }

      @include media-breakpoint-up(sm) {
        font-size: 11vw;
        white-space: nowrap;
      }
    }

  }
</style>
