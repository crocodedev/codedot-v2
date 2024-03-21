<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import imageUrl from '../../js/imageUrlBuilder'

  export let data

  let swiperElSecond

  register()

  const swiperSecondParams = {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.offer-works__btn--next',
      prevEl: '.offer-works__btn--prev',
    },
  }

  onMount(async () => {
    if (data) {
      const initializeSwiper = () => {
        Object.assign(swiperElSecond, swiperSecondParams)
        swiperElSecond.initialize()
      }

      requestAnimationFrame(initializeSwiper)
    }
  })
</script>

{#if data}
  <section class="offer-works">
    <div class="container">
      <div class="offer-works__wrapper">
        <div class="offer-works__title-wrapper">
          <h2 class="offer-works__title">{data.offerWorksTitle}</h2>
          <div class="offer-wroks__controls">
            <button class="offer-works__btn offer-works__btn--prev">
              <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
            </button>
            <button class="offer-works__btn offer-works__btn--next">
              <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
            </button>
          </div>
        </div>

        <div class="offer-works__items">
          <swiper-container
            slides-per-view="1"
            class="reviews__swiper-wrapper"
            navigation="true"
            space-between="100"
            init="false"
            bind:this={swiperElSecond}
          >
            {#each data.offerWorksItems as offerItem}
              <swiper-slide class="offer-works__item">
                <div class="offer-works__img-wrapper">
                  <img src={imageUrl(offerItem.projectImage)} alt="" />
                </div>
                <div class="offer-works__info-wrapper">
                  <p class="offer-works__item-name">
                    {offerItem.projectName}
                  </p>
                  <p class="offer-works__item-category">
                    {offerItem.projectCategory}
                  </p>
                  <p class="offer-works__item-description">
                    {offerItem.projectDescription}
                  </p>
                  <div class="offer-works__tags">
                    {#each offerItem.projectTagsList as tag}
                      <div class="offer-works__tag">{tag}</div>
                    {/each}
                  </div>
                </div>
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .offer-works {
    @include media-breakpoint-down(xl) {
      padding-top: 90px;
      padding-bottom: 100px;
    }
    @include media-breakpoint-up(xl) {
      padding-bottom: 216px;
      padding-top: 216px;
    }
    &__item {
      display: grid;
      justify-content: space-between;

      @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(2, 49%);
      }
    }

    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__btn {
      border: none;
      outline: none;
      background-color: white;
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        filter: invert(1);
      }

      &--prev {
        transform: rotate(180deg);
      }
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 11px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 320px;
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
        margin-bottom: 50px;
      }
    }

    &__img-wrapper {
      width: 100%;
      height: 400px;
      border-radius: 15px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info-wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    &__item-name {
      font-size: 36px;
      font-weight: 900;
    }

    &__item-description {
      font-size: 18px;
    }

    &__item-category {
      font-size: 24px;
      font-weight: 900;
      color: #006185;
    }

    &__tags {
      display: flex;
      gap: 20px;
    }

    &__tag {
      padding: 5px;
      border: 2px solid #006185;
      border-radius: 5px;
    }
  }
</style>
