<script>
  import imageUrl from '../js/imageUrlBuilder'
  export let data
</script>

{#if data}
  <section class="ourmission">
    <div class="container">
      <div class="ourmission__wrapper">
        <p class="ourmission__text">
          {data.missionText}
        </p>
      </div>
    </div>
    <div class="ourmission__img-wrapper">
      <img src={imageUrl(data.missionImage)} alt="" class="ourmission__img" />
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .ourmission {
    @include media-breakpoint-down(lg) {
      padding-bottom: 88px;
    }
    @include media-breakpoint-up(lg) {
      margin-bottom: 30px;
    }
    &__wrapper {
      display: flex;
      justify-content: center;

      @include media-breakpoint-down(sm) {
        margin: 30px 0;
      }

      @include media-breakpoint-between(sm, lg) {
        margin: 30px 0;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 65px;
      }
    }
    &__text {
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
        width: 100%;
      }

      @include media-breakpoint-up(md) {
        font-size: 40px;
        line-height: 60px;
        width: 70%;
      }
    }

    &__img-wrapper {
      width: 100%;
      overflow: hidden;
      border-radius: 1000px;
      aspect-ratio: 3 / 1;
      min-height: 200px;
      max-height: 616px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 75%;

      @include media-breakpoint-down(md) {
        transform: scale(160%) translateY(-10%);
      }
    }
  }
</style>
