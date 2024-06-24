<script>
  import Header from './Header.svelte'
  import * as Sections from '$lib/sections'
</script>

<section class="error">
  <div class="container">
    <svelte:component this={Sections.Header} />
    <div class="error__page">
      <div class="error__img-wrapper">
        <img src="/images/error.webp" alt="" />
      </div>

      <div class="error__text-wrapper">
        <h1 class="error__text">page not found</h1>
        <p class="error__description">The link is broken or the page has been moved.</p>
        <a href="/" class="error__link">Back to main page</a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .error {
    &__page {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @include media-breakpoint-up(lg) {
        gap: 50px;
      }

      @include media-breakpoint-down(lg) {
        gap: 20px;
      }
    }

    &__description {
      font-weight: 600;
      font-size: 18px;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
      color: #0082b1;
    }

    &__text {
      @include media-breakpoint-down(lg) {
        font-size: 38px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 64px;
      }
    }

    &__img-wrapper {
      position: relative;

      @include media-breakpoint-up(lg) {
        width: 400px;
        height: 200px;
      }

      @include media-breakpoint-down(lg) {
        width: 100%;
        height: 200px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
