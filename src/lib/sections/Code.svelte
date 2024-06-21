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
    color: #0082b1;
    @include media-breakpoint-down(lg) {
      padding-top: 37px;
      padding-bottom: 19px;
      padding-left: 20px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 23px;
      padding-bottom: 40px;
      margin-top: 65px;
      display: flex;
      justify-content: center;
    }

    overflow: hidden;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    &__text {
      display: flex;
      align-items: center;
      position: relative;
      font-weight: 800;
      gap: 30px;

      @include media-breakpoint-down(sm) {
        font-size: 80px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 11vw;
        white-space: nowrap;
      }

      @include media-breakpoint-up(md) {
        font-size: 11vw;
        white-space: nowrap;
      }
    }

    &__icon {
      padding-top: 40px;
    }
  }
</style>
