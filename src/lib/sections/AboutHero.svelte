<script>
  import imageUrl from '../js/imageUrlBuilder'
  export let data
</script>

{#if data}
  <section class="about-hero">
    <div class="container">
      <div class="about-hero__wrapper">
        <div class="about-hero__title-wrapper">
          <div class="about-hero__title-inner">
            <h1 class="about-hero__title">{data.topName}</h1>
            <div class="about-hero__title-img-wrapper">
              <img src={imageUrl(data.topImage)} alt="" class="about-hero__title-img" />
            </div>
          </div>
          <div class="about-hero__title-inner">
            <p class="about-hero__text">
              {data.textBottom}
            </p>
            <h1 class="about-hero__title about-hero__title--blue">{data.bottomName}</h1>
          </div>
        </div>
        <div class="about-hero__img-wrapper">
          <img src={imageUrl(data.bottomImage)} alt="" class="about-hero__img" />
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .about-hero {
    @include media-breakpoint-down(lg) {
      padding-top: 20px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 77px;
      padding-bottom: 100px;
    }
    &__title-wrapper {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(md) {
        gap: 15px;
        margin-bottom: 20px;
      }

      @include media-breakpoint-between(md, lg) {
        gap: 25px;
        margin-bottom: 25px;
      }

      @include media-breakpoint-between(lg, xl) {
        gap: 40px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-between(xl, xxl) {
        gap: 60px;
        margin-bottom: 60px;
      }

      @include media-breakpoint-up(xxl) {
        gap: 80px;
        margin-bottom: 80px;
      }
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
        line-height: 29px;
        &:nth-child(1) {
          align-items: center;
        }

        &:nth-child(2) {
          text-align: end;
        }
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 70px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 100px;
        line-height: 110px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 145px;
        line-height: 130px;
      }

      @include media-breakpoint-up(xxl) {
        line-height: 150px;
        font-size: 210px;
      }

      &--blue {
        color: #0082b1;
      }
    }

    &__title-inner {
      display: flex;

      @include media-breakpoint-down(md) {
        display: flex;

        &:nth-child(1) {
          column-gap: 10px;
          justify-content: space-between;
        }
        
        &:nth-child(2) {
          gap: 20px;
          flex-direction: column-reverse;
        }
      }

      @include media-breakpoint-up(md) {
        justify-content: space-between;
        gap: 15px;

        &:nth-child(1) {
          align-items: center;
        }

        &:nth-child(2) {
          align-items: start;
        }
      }
    }

    &__title-img-wrapper {
      position: relative;
      border-radius: 100px;
      overflow: hidden;
      width: 100%;

      @include media-breakpoint-down(md) {
        width: 100%;
        max-width: clamp(72px, 22vw, 300px);
        height: 34px;
      }

      @include media-breakpoint-between(md, lg) {
        max-width: 300px;
        height: 80px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 380px;
        height: 110px;
      }

      @include media-breakpoint-up(xl) {
        width: 520px;
        height: 150px;
      }
    }

    &__title-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__img-wrapper {
      position: relative;
      width: 100%;
      border-radius: 1000px;
      overflow: hidden;

      @include media-breakpoint-down(md) {
        height: clamp(100px, 5vw, 150px);
      }

      @include media-breakpoint-between(md, lg) {
        height: 150px;
      }

      @include media-breakpoint-between(lg, xl) {
        height: 180px;
      }

      @include media-breakpoint-between(xl, xxl) {
        height: 220px;
      }

      @include media-breakpoint-up(xxl) {
        height: 250px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__text {
      color: #212121;
      
      @include media-breakpoint-down(sm) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 18px;
        line-height: 27px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 20px;
        line-height: 30px;
      }

      @include media-breakpoint-up(xxl) {
        max-width: 380px;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
</style>
