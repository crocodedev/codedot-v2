<script>
  export let data, openModal
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
  {#if data.wantTitle}
    <section class="want-work">
      <div class="container">
        <div class="want-work__wrapper">
          <p class="want-work__title">{data.wantTitle}</p>
          <button class="btn btn--work" on:click={openModal}>Связаться с нами</button>
        </div>
      </div>
    </section>
  {/if}
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
        font-size: 96px;
      }
    }

    &__text {
      @include media-breakpoint-up(lg) {
        width: 50%;

        &:nth-child(odd) {
          align-self: flex-end;
        }
      }
      @include media-breakpoint-down(lg) {
        padding-bottom: 20px;
        font-size: 16px;
      }
      @include media-breakpoint-up(lg) {
        padding-bottom: 150px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 24px;
      }
    }
  }

  .want-work {
    @include media-breakpoint-down(lg) {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 200px;
      padding-bottom: 100px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;
      align-items: center;
    }
    &__title {
      font-weight: 600;
      text-align: center;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        line-height: 48px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 90px;
        line-height: 108px;
      }
    }
  }
</style>
