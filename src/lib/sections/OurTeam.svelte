<script>
  import imageUrl from '../js/imageUrlBuilder'

  export let data
</script>

{#if data}
  <section class="our-team">
    <div class="container">
      <div class="our-team__wrapper">
        <p class="our-team__title">Наша команда</p>
        <div class="our-team__images">
          {#each data.ourTeamImages as image}
            <div class="our-team__image">
              <img src={imageUrl(image)} alt={image.asset._ref} />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  .our-team {
    @import '../styles/base/mixins.scss';

    @include media-breakpoint-down(lg) {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 65px;
      margin-bottom: 65px;
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 31px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 57px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 96px;
      }
    }

    &__images {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }

    &__image {
      position: relative;
      width: 100%;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
      }

      @include media-breakpoint-down(lg) {
        height: 200px;
        border-radius: 30px;
      }

      @include media-breakpoint-up(lg) {
        height: 500px;
        border-radius: 40px;
      }

      &:nth-of-type(1) {
        @include media-breakpoint-up(lg) {
          width: calc(65% - 20px);
        }
      }
      &:nth-of-type(2) {
        @include media-breakpoint-up(lg) {
          width: calc(35% - 20px);
        }
      }
      &:nth-of-type(3) {
        @include media-breakpoint-up(lg) {
          width: calc(43% - 20px);
        }
      }
      &:nth-of-type(4) {
        @include media-breakpoint-up(lg) {
          width: calc(57% - 20px);
        }
      }
    }
  }
</style>
