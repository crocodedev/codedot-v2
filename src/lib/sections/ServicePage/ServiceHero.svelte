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
            <button class="btn service-hero__btn" on:click={openModal}>
              {data.serviceBtn}
              <span class="btn__icon">
                <img src="../icons/arrow-btn.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
        <div class="service-hero__inner">
          <div class="service-hero__img-wrapper">
            <img src={imageUrl(data.serviceImage)} alt="" class="service-hero__img" />
          </div>
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
    @include media-breakpoint-down(lg) {
      padding-top: 9px;
      padding-bottom: 99px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 72px;
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
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 96px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 170px;
        line-height: 230px;
      }

      font-weight: 600;
    }

    &__subtext-wrapper {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(md) {
        flex-direction: column;
        margin-top: 30px;
      }

      @include media-breakpoint-up(md) {
        align-items: center;
        margin-top: 45px;
      }
    }

    &__subtext {
      text-transform: uppercase;
      font-size: 16px;
      width: 240px;

      @include media-breakpoint-down(md) {
        font-size: 14px;
        margin-bottom: 45px;
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

      @include media-breakpoint-between(sm, lg) {
        height: 360px;
      }

      @include media-breakpoint-up(lg) {
        height: 463px;
      }
    }

    &__btn {
      @include media-breakpoint-down(md) {
        width: unset;
        padding: 13px 30px;
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
        padding-top: 40px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 75px;
      }
    }

    &__text-wrapper {
      display: flex;
      align-self: flex-end;
      flex-direction: column;
      font-weight: 400;
      font-size: 32px;
      gap: 10px;

      @include media-breakpoint-down(md) {
        padding-top: 36px;
        font-family: Wix Madefor Display;
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;

        & :global(h2) {
          font-size: 24px;
        }

        & :global(br) {
          display: none;
        }

        & :global(p) {
          font-size: 18px;
        }
      }

      @include media-breakpoint-up(md) {
        width: 50%;
      }

      @include media-breakpoint-between(md, xl) {
        & :global(h2) {
          font-size: 28px;
        }

        & :global(p) {
          font-size: 22px;
        }
      }

      @include media-breakpoint-between(xl, xxl) {
        & :global(h2) {
          font-size: 32px;
        }

        & :global(p) {
          font-size: 24px;
        }
      }

      @include media-breakpoint-up(xxl) {
        & :global(h2) {
          font-size: 42px;
        }

        & :global(p) {
          font-size: 32px;
        }
      }
    }
  }
</style>
