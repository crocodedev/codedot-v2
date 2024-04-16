<script>
  export let data

  console.log(data)
</script>

{#if data}
  <section class="section-text">
    <div class="container">
      <div class="section-text__wrapper">
        {#if data.Title}
          <h2 class="section-text__title">{data.Title}</h2>
        {/if}
        <p class="section-text__text">{@html `${data.Text}`}</p>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';
  .section-text {
    @include media-breakpoint-down(xl) {
      padding-top: 30px;
    }
    @include media-breakpoint-up(xl) {
      padding-top: 65px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
    }
    &__title {
      font-weight: 600;
      margin-bottom: 1em;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 85px;
      }
    }

    &__text {
      @include media-breakpoint-up(lg) {
        align-self: flex-end;
        width: 50%;
      }
      @include media-breakpoint-down(lg) {
        padding-bottom: 20px;
        font-size: 16px;
      }
      @include media-breakpoint-up(lg) {
        padding-bottom: 80px;
      }
      @include media-breakpoint-between(lg, xxl) {
        font-size: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 32px;
      }
    }
  }
</style>
