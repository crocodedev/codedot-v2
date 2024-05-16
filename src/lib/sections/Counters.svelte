<script>
  export let data
</script>

{#if data}
  <section class="counters">
    <div class="container">
      <div class="counters__wrapper">
        <div class="counters__items">
          {#each data.countersItems as counter}
            <div class="counters__item">
              <span class="counters__number">{counter.number}</span>
              <div class="counters__text">{counter.text}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';
  .counters {
    background-color: #e9f6fb;
    border-radius: 40px;

    @include media-breakpoint-up(lg) {
      margin-top: 65px;
      margin-bottom: 65px;
    }

    &__wrapper {
      @include media-breakpoint-down(lg) {
        padding-top: 47px;
        padding-bottom: 70px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 40px;
        padding-bottom: 84px;
      }
    }

    &__items {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(xxl) {
        &:nth-child(2) {
          padding-left: 245px;
          padding-right: 245px;
        }
      }

      @include media-breakpoint-down(md) {
        &:not(&:last-of-type) {
          margin-bottom: 77px;
        }
      }
    }

    &__number {
      font-weight: 800;

      @include media-breakpoint-down(md) {
        font-size: 80px;
        line-height: 100px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
        line-height: 85px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 85px;
        line-height: 150px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 24px;
        line-height: 40px;
      }

      @include media-breakpoint-up(lg) {
        transform: translateY(-10px);
        font-size: 32px;
        line-height: 48px;
      }
    }
  }
</style>
