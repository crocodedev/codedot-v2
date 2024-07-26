<script>
  import imageUrl from '../../js/imageUrlBuilder'
  export let data, openModal
</script>

{#if data}
  <section class="service-hero">
    <div class="container">
      <div class="service-hero__wrapper">
        <div class="service-hero__title-wrapper">
          <h1 class="service-hero__title">{data.serviceTitle}</h1>
          <div class="service-hero__subtext-wrapper">
            <p class="service-hero__subtext">{data.serviceHeroText}</p>
            <div class="service-hero__img-wrapper">
              <img src={imageUrl(data.serviceImage)} alt="" class="service-hero__img" />
            </div>
            <button class="btn service-hero__btn" on:click={openModal}>
              {data.serviceBtn}
              <span class="btn__icon">
                <img src="../icons/arrow-btn.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
        <div class="service-hero__inner">
          <div class="service-hero__text-wrapper">
            {@html `${data.serviceText}`}
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .service-hero {
    margin-top: 0;

    &__title-wrapper {
      display: flex;
      flex-direction: column;
    }
    &__title {
      @include media-breakpoint-down(sm) {
        word-wrap: break-word;
      }
      @include media-breakpoint-down(md) {
        font-size: 40px;
        &:nth-child(1) {
          margin-bottom: 20px;
        }
      }

      @include media-breakpoint-down(md) {
        &:nth-child(2) {
          text-align: end;
        }
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
        margin-bottom: 30px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 96px;
        margin-bottom: 60px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 170px;
        line-height: 200px;
        margin-bottom: 80px;
      }

      font-weight: 600;
    }

    &__subtext-wrapper {

      @include media-breakpoint-down(md) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
      }

      @include media-breakpoint-up(md) {
        display: grid;
        grid-template-columns: 1fr, content;
        grid-template-rows: repeat(2, max-content);
        justify-content: space-between;
      }

      @include media-breakpoint-between(md, xl) {
        gap: 50px;
      }

      @include media-breakpoint-up(xl) {
        gap: 80px;
      }
    }

    &__subtext {
      text-transform: uppercase;

      @include media-breakpoint-down(md) {
        font-size: 14px;
        max-width: 240px;
      }

      @include media-breakpoint-up(md) {
        font-size: 24px;
        max-width: 350px;
      }
    }

    &__img-wrapper {
      border-radius: 1000px;
      overflow: hidden;
      width: 100%;
      position: relative;

      @include media-breakpoint-down(sm) {
        height: 200px;
      }

      @include media-breakpoint-up(md) {
        grid-column: 1/3;
      }

      @include media-breakpoint-between(sm, lg) {
        height: 360px;
      }

      @include media-breakpoint-up(lg) {
        height: 463px;
      }
    }

    &__btn {
      display: flex;
      align-items: center;
      @include media-breakpoint-down(md) {
        width: unset;
        padding: 13px 30px;
      }

      @include media-breakpoint-up(md) {
        grid-row: 1/2;
        grid-column: 2/3;
      }

      @include media-breakpoint-between(md, xl) {
        padding: 13px 30px;
      }

      @include media-breakpoint-up(xl) {
        padding: 20px 70px;
      }
    }

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__inner {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(md) {
        padding-top: 36px;
      }

      @include media-breakpoint-up(md) {
        gap: 80px;
        padding-top: 75px;
      }
    }

    &__text-wrapper {
      display: flex;
      font-family: Wix Madefor Display;

      & :global(h3) {
        font-weight: 600;
      }
      
      & :global(p) {
        color: #212121;
      }

      @include media-breakpoint-down(md) {
        & :global(h3) {
          font-size: 24px;
          line-height: 36px;
          margin-bottom: 20px;
        }

        & :global(p) {
          font-size: 14px;
          line-height: 21px;
        }
      }

      @include media-breakpoint-between(md, xl) {
        & :global(h3) {
          font-size: 28px;
          margin-bottom: 20px;
        }

        & :global(p) {
          font-size: 22px;
        }
      }

      @include media-breakpoint-down(xl) {
        flex-direction: column;
        gap: 40px;
      }

      @include media-breakpoint-between(xl, xxl) {
        gap: 90px;

        & :global(h3) {
          font-size: 30px;
          margin-bottom: 18px;
        }

        & :global(p) {
          font-size: 22px;
          line-height: 32px;
        }
      }

      @include media-breakpoint-up(xxl) {
        gap: 20px;
        justify-content: space-between;

        & :global(div) {
          &:nth-child(1) {
            max-width: 660px;
          }

          &:nth-child(2) {
            max-width: 800px;
          }
        }

        & :global(h3) {
          font-size: 40px;
          line-height: 60px;
          margin-bottom: 20px;
        }

        & :global(p) {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
  }
</style>
