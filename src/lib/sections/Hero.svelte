<script>
  import imageUrl from '../js/imageUrlBuilder'
  export let openModal, data
</script>

{#if data}
  <section class="hero">
    <div class="hero__background">
      <div class="hero__background-img-wrapper">
        <img
          src={imageUrl(data.backgroundImage)}
          alt="hero__background"
          class="hero__background-img"
        />
      </div>
    </div>
    <div class="hero__wrapper">
      <div class="hero__mobile-wrapper">
        <div class="hero__description-wrapper">
          <div class="hero__description">
            <div class="hero__title-wrapper">
              <p class="hero__title">CODEDOT</p>
              <picture class="hero__title-icon">
                <source media="(max-width: 767px)" srcset="/icons/Arrow_mobile.svg" />
                <source media="(min-width: 768px)" srcset="/icons/Arrow.svg" />
                <img src="/icons/Arrow.svg" alt="arrow" />
              </picture>
            </div>
            <p class="hero__text">
              {@html data.Text}
            </p>
            <div class="hero__tag-wrapper">
              {#each data.taglist as tag}
                <div class="hero__tag">
                  <div class="hero__tag-name">{tag}</div>
                </div>
              {/each}
            </div>
            <button class="btn btn--hero" on:click={openModal}>
              Обсудить проект
              <span class="btn__icon">
                <img src="../icons/arrow-btn.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .hero {
    height: 100%;
    position: relative;
    margin-top: 0;

    @include media-breakpoint-down(xl) {
      padding-bottom: 40px;
    }

    @include media-breakpoint-down(md) {
    }

    @include media-breakpoint-up(xl) {
      padding-bottom: 60px;
    }
    &__mobile-wrapper {
      @include media-breakpoint-up(lg) {
        display: contents;
      }

      @include media-breakpoint-down(lg) {
        display: flex;
        flex-direction: column;
      }
    }

    &__background {
      position: absolute;
      width: 100%;
      height: calc(100% + 141px);
      top: -141px;
      left: 0;
      border-radius: 0 0 40px 40px;
      overflow: hidden;
    }

    &__background-img-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      user-select: none;
    }

    &__background-img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      user-select: none;
      object-fit: cover;
      left: 0;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      border: 1px solid #fff;

      backdrop-filter: blur(10px);

      @include media-breakpoint-down(md) {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        border-radius: 30px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-between(md, lg) {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 40px;
      }

      @include media-breakpoint-down(lg) {
        margin-left: 20px;
        margin-right: 20px;
      }

      @include media-breakpoint-between(lg, xl) {
        padding-top: 40px;
        padding-bottom: 23px;
        padding-left: 60px;
        padding-right: 60px;
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 40px;
      }

      @include media-breakpoint-between(xl, xxl) {
        padding-top: 40px;
        padding-bottom: 23px;
        padding-left: 60px;
        padding-right: 60px;
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 40px;
      }

      @include media-breakpoint-up(xxl) {
        padding-top: 200px;
        padding-bottom: 163px;
        padding-left: 80px;
        padding-right: 80px;
        margin-left: 60px;
        margin-right: 60px;
        border-radius: 40px;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        order: 0;
      }

      @include media-breakpoint-up(lg) {
        margin-right: 20px;
      }
    }

    &__tag-wrapper {
      display: flex;
      flex-wrap: wrap;

      @include media-breakpoint-down(sm) {
        margin-top: 10px;
      }

      @include media-breakpoint-between(sm, lg) {
        margin-top: 20px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 35px;
      }
    }

    &__tag {
      text-transform: uppercase;
      border: 1px solid black;
      margin-bottom: 20px;
      border-radius: 40px;
      width: max-content;

      @include media-breakpoint-down(sm) {
        padding: 3px 8px;
      }

      @include media-breakpoint-up(sm) {
        padding: 8px 20px;
      }
      @include media-breakpoint-down(md) {
        margin-bottom: 10px;
      }

      @include media-breakpoint-up(md) {
        margin-bottom: 30px;
      }
    }

    &__tag:not(&__tag:last-of-type) {
      @include media-breakpoint-down(md) {
        margin-right: 13px;
      }

      @include media-breakpoint-between(md, xxl) {
        margin-right: 10px;
      }

      @include media-breakpoint-up(xxl) {
        margin-right: 30px;
      }
    }

    &__tag-name {
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        font-size: 10px;
        line-height: 15px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 14px;
        line-height: 20px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 14px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__img-wrapper {
      position: relative;

      width: 100%;
      overflow: hidden;

      @include media-breakpoint-down(sm) {
        order: 2;
        height: 201px;
        margin-top: 36px;
        margin-bottom: 40px;
        border-radius: 30px;
      }

      @include media-breakpoint-between(sm, lg) {
        order: 2;
        height: 201px;
        margin-top: 40px;
        margin-bottom: 40px;
        border-radius: 40px;
      }

      @include media-breakpoint-up(lg) {
        border-radius: 40px;
        height: 328px;
      }

      @include media-breakpoint-between(xl, xxl) {
        max-width: 500px;
        height: 290px;
      }

      @include media-breakpoint-up(xxl) {
        max-width: 800px;
      }
    }

    &__title {
      color: #0082b1;
      font-weight: 800;

      @include media-breakpoint-down(sm) {
        font-size: 46px;
        line-height: 50px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 65px;
        line-height: 70px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 84px;
        line-height: 96px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 100px;
        line-height: 112px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 128px;
        line-height: 140px;
      }
    }

    &__title-wrapper {
      display: flex;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }

      @include media-breakpoint-up(md) {
        align-items: center;
        gap: 15px;
      }
    }

    &__title-icon {
      position: relative;

      @include media-breakpoint-down(md) {
        height: 70px;
        width: 100%;
      }

      @include media-breakpoint-between(md, lg) {
        height: 70px;
        width: 92px;
      }

      @include media-breakpoint-up(lg) {
        height: 96px;
        width: 112px;
      }

      @include media-breakpoint-between(xl, xxl) {
        height: 112px;
        width: 132px;
      }

      @include media-breakpoint-up(xxl) {
        height: 140px;
        width: 172px;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    &__text {
      font-weight: 500;
      @include media-breakpoint-down(md) {
        font-size: 32px;
        line-height: 35.2px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 48px;
        line-height: 52px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 78px;
        line-height: 85px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 100px;
        line-height: 110px;
      }
    }

    &__tagline-wrapper {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(sm) {
        order: 1;

        margin-top: 14px;
      }

      @include media-breakpoint-between(sm, lg) {
        order: 1;
        margin-top: 25px;
      }

      @include media-breakpoint-up(xxl) {
        margin-top: 55px;
      }
    }

    &__tagline {
      font-weight: 600;
      text-transform: uppercase;

      @include media-breakpoint-down(sm) {
        font-size: 30px;
        line-height: 30px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 40px;
        line-height: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
        line-height: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 50px;
        // line-height: 80px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 50px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 96px;
        line-height: 110px;
      }
    }

    &__tagline:nth-of-type(even) {
      color: #0082b1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    &__tagline:nth-child(odd) {
      @include media-breakpoint-down(xl) {
        filter: blur(2px);
      }

      @include media-breakpoint-up(xl) {
        filter: blur(5px);
      }
    }

    &__word {
      display: flex;
      align-items: center;
      width: max-content;
    }

    &__letter {
      position: relative;

      @include media-breakpoint-down(sm) {
        width: 70px;
        height: 38px;
      }

      @include media-breakpoint-between(sm, md) {
        width: 120px;
        height: 50px;
      }

      @include media-breakpoint-between(md, lg) {
        width: 150px;
        height: 75px;
      }

      @include media-breakpoint-between(lg, xxl) {
        width: 181px;
        height: 51px;
      }

      @include media-breakpoint-up(xxl) {
        width: 257px;
        height: 132px;
      }
    }

    &__letter-img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &__discuss-wrapper {
      @include media-breakpoint-down(lg) {
        display: contents;
      }

      @include media-breakpoint-up(lg) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__discuss-inner {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        order: 3;
        align-items: start;
      }

      @include media-breakpoint-up(lg) {
        align-items: end;
        transform: translateY(34px);
      }
    }

    &__discuss-text {
      @include media-breakpoint-down(lg) {
        font-size: 18px;
        line-height: 27px;
        padding-bottom: 10px;
        text-align: start;
      }

      @include media-breakpoint-up(lg) {
        font-size: 24px;
        line-height: 36px;
        padding-bottom: 20px;
        text-align: end;
      }
    }
  }
</style>
