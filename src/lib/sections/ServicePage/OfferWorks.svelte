<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import imageUrl from '../../js/imageUrlBuilder'

  export let data

  let swiperElSecond,
    listItems,
    categoriesList = [],
    activeCategory = 0,
    sortedArray = [],
    counter = 0

  let liItems = []

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

  Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === v) return true
    }
    return false
  }

  Array.prototype.unique = function () {
    var arr = []
    for (var i = 0; i < this.length; i++) {
      if (!arr.contains(this[i])) {
        arr.push(this[i])
      }
    }
    return arr
  }

  const reinitSwiper = () => {
    if (data) {
      const initializeSwiper = () => {
        if (swiperElSecond && swiperSecondParams) {
          Object.assign(swiperElSecond, swiperSecondParams)
          swiperElSecond.initialize()
        }
      }

      requestAnimationFrame(initializeSwiper)
    }
  }

  if (data) {
    data?.offerWorksItems?.map((el) => {
      categoriesList.push(el.projectCategory)
    })
  }

  const sortArr = (idx) => {
    activeCategory = idx
    let finalCategories = categoriesList.unique()
    sortedArray = data.offerWorksItems?.filter(
      (el) => el.projectCategory === finalCategories[activeCategory]
    )
  }

  const makeBoldBeforeColon = (text) => {
    const regex = /(.*?): */g
    return text.replace(regex, (match, p1) => `<b>${p1}:</b> `)
  }

  data.richTextBlock?.forEach((text) => {
    listItems = data.richTextBlock
      .map((text) => {
        const boldedText = makeBoldBeforeColon(text.children[0].text)
        return `${boldedText}</br>`
      })
      .join('')
  })

  const handleActive = (idx) => {
    sortArr(idx)
    reinitSwiper()
  }

  onMount(() => {
    sortArr(activeCategory)
    reinitSwiper()
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if data}
  <section class="offer-works">
    <div class="container">
      <div class="offer-works__wrapper">
        <div class="offer-works__contains">
          {#if data.offerWorksTitle}
            <div class="offer-works__title-wrapper">
              <h2 class="offer-works__title">{data?.offerWorksTitle}</h2>
            </div>
          {/if}
          {#if categoriesList.length}
            <div class="offer-works__categories-wrapper">
              <div class="offer-works__categories">
                {#each categoriesList.unique() as category, idx}
                  <span
                    class={activeCategory === idx
                      ? 'offer-works__category-item offer-works__category-item--active'
                      : 'offer-works__category-item'}
                    on:click={() => handleActive(idx)}
                  >
                    {category}
                  </span>
                {/each}
              </div>
              <div class="offer-works__categories-inner">
                <div
                  class={sortedArray.length > 1
                    ? 'offer-works__controls'
                    : 'offer-works__controls offer-works__controls--disabled'}
                >
                  <button class="offer-works__btn offer-works__btn--prev">
                    <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
                  </button>
                  <button class="offer-works__btn offer-works__btn--next">
                    <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
                  </button>
                </div>
                <a href="/cases" class="offer-works__btn-link">Все работы</a>
              </div>
            </div>
          {/if}
          {#if sortedArray?.length > 0}
            <div class="offer-works__items">
              <swiper-container
                slides-per-view="1"
                class="reviews__swiper-wrapper"
                navigation="true"
                space-between="100"
                init="false"
                bind:this={swiperElSecond}
              >
                {#each sortedArray as offerItem}
                  <swiper-slide class="offer-works__item">
                    <div class="offer-works__img-wrapper">
                      <img src={imageUrl(offerItem.projectImage)} alt="" />
                    </div>
                    <div class="offer-works__info-wrapper">
                      <p class="offer-works__item-name">
                        {offerItem.projectName}
                      </p>
                      <p class="offer-works__item-category">
                        {offerItem.projectCategoryText}
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
          {/if}
        </div>

        {#if data.offerWorksTextTitle}
          <div class="offer-works__text-wrapper">
            <h2 class="offer-works__text-title">{data.offerWorksTextTitle}</h2>
            <ul class="offer-works__text-rich">
              {#if data.offerWorksParagraph}
                <p class="offer-works__text">{data.offerWorksParagraph}</p>
              {/if}
              {#each listItems.split('</br>') as text, index}
                {#if text != '' && text !== '\n'}
                  {#if text.match('<b>')}
                    <li class="offer-works__text-list" id="offer-works__text-list">
                      <span class="offer-works__text-num">{index + 1}</span>
                      <p>{@html `${text}`}</p>
                    </li>
                  {/if}
                {/if}
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .offer-works {
    @include media-breakpoint-down(xl) {
      padding-top: 30px;
    }
    @include media-breakpoint-up(xl) {
      padding-top: 65px;
    }
    &__item {
      @include media-breakpoint-down(lg) {
        display: flex;
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(2, 49%);
      }
    }

    &__categories-inner {
      align-items: center;
      display: flex;
      gap: 30px;
    }

    &__btn-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      background-color: #0082b1;
      width: max-content;
      padding: 8px 30px;
      border: none;
      color: white;
      border-radius: 40px;
      font-size: 16px;
    }

    &__items {
      position: relative;
      margin-top: 40px;

      @include media-breakpoint-down(lg) {
        order: 2;
        margin-bottom: 40px;
      }
    }

    &__controls {
      z-index: 2;
      height: 50px;
      align-items: center;
      display: flex;
      justify-content: space-between;

      &--disabled {
        position: absolute;
        opacity: 0;
      }
    }

    &__contains {
      display: flex;
      flex-direction: column;
      @include media-breakpoint-down(xl) {
        padding-bottom: 30px;
      }
      @include media-breakpoint-up(xl) {
        padding-bottom: 65px;
      }
    }

    &__text-num {
      font-weight: 400;
      color: #0082b1;

      @include media-breakpoint-up(lg) {
        font-size: 200px;
        line-height: 300px;
      }

      @include media-breakpoint-down(lg) {
        font-size: 96px;
        line-height: 144px;
      }
    }

    &__category-item {
      cursor: pointer;
      font-size: 20px;
      &--active {
        color: #0082b1;
        font-weight: 900;
      }
    }

    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include media-breakpoint-down(lg) {
        order: 1;
      }
    }

    &__text-rich {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding-inline-start: 0px;
      list-style-type: none;

      @include media-breakpoint-down(lg) {
        font-size: 16px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 32px;
      }
    }

    &__text {
      width: 100%;
      @include media-breakpoint-down(lg) {
        padding-bottom: 20px;
        font-size: 16px;
      }
      @include media-breakpoint-up(lg) {
        text-align: center;
        padding-bottom: 80px;
      }
      @include media-breakpoint-between(lg, xxl) {
        font-size: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 32px;
      }
    }

    &__categories {
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      row-gap: 10px;
    }

    &__categories-wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      row-gap: 20px;

      @include media-breakpoint-down(lg) {
        padding: 20px 0 10px 0;
        border-top: 1px solid gray;
        order: 3;
      }

      @include media-breakpoint-up(lg) {
        padding: 40px 0 20px 0;
        border-bottom: 1px solid gray;
        height: 110px;
      }
    }

    &__text-wrapper {
      @include media-breakpoint-down(xl) {
        padding-bottom: 30px;
        padding-top: 30px;
      }
      @include media-breakpoint-up(xl) {
        padding-top: 65px;
        padding-bottom: 65px;
      }
    }

    &__text-list {
      display: flex;
      width: fit-content;
      align-items: center;

      @include media-breakpoint-down(lg) {
        gap: 10px;
      }

      @include media-breakpoint-up(lg) {
        text-align: left;
        gap: 20px;

        &:nth-of-type(4n + 1) {
          align-self: flex-start;
        }

        &:nth-of-type(4n + 2),
        &:nth-of-type(4n + 4) {
          align-self: center;
        }

        &:nth-of-type(4n + 3) {
          align-self: flex-end;
        }
      }

      p {
        display: flex;
        flex-direction: column;

        @include media-breakpoint-down(lg) {
          font-size: 16px;
        }

        @include media-breakpoint-between(lg, xxl) {
          width: 480px;
          font-size: 18px;
        }

        @include media-breakpoint-up(xxl) {
          width: 480px;
          font-size: 24px;
        }
      }
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

    &__text-title {
      font-weight: 600;

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
        margin-bottom: 50px;
      }
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 320px;
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 96px;
      }
    }

    &__img-wrapper {
      width: 100%;
      border-radius: 15px;
      overflow: hidden;

      @include media-breakpoint-down(lg) {
        height: 200px;
        order: 2;
      }

      @include media-breakpoint-up(lg) {
        height: 345px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info-wrapper {
      @include media-breakpoint-down(lg) {
        display: contents;
      }
      @include media-breakpoint-up(lg) {
        display: flex;
        flex-direction: column;
      }
    }

    &__item-name {
      font-weight: 700;
      color: #0082b1;

      @include media-breakpoint-down(lg) {
        font-size: 32px;
        line-height: 38.4px;
        text-align: center;
        order: 1;
      }

      @include media-breakpoint-up(lg) {
        font-size: 64px;
        line-height: 96px;
      }
    }

    &__item-description {
      @include media-breakpoint-down(lg) {
        font-size: 14px;
        line-height: 21px;
        order: 4;
        padding: 20px 0 10px 0;
      }

      @include media-breakpoint-up(lg) {
        font-size: 24px;
        line-height: 36px;
        padding: 20px 0;
      }
    }

    &__item-category {
      font-weight: 500;

      @include media-breakpoint-down(lg) {
        font-size: 20px;
        line-height: 30px;
        order: 3;
      }

      @include media-breakpoint-up(lg) {
        font-size: 32px;
        line-height: 48px;
        width: 520px;
      }
    }

    &__tags {
      display: flex;
      gap: 20px;

      @include media-breakpoint-down(lg) {
        order: 5;
      }
    }

    &__tag {
      color: #0082b1;
      border: 1px solid #0082b1;
      font-weight: 500;
      padding: 6px 20px;

      @include media-breakpoint-down(lg) {
        border-radius: 30px;
        font-size: 12px;
      }
      @include media-breakpoint-up(lg) {
        font-size: 14px;
        border-radius: 40px;
      }
    }
  }
</style>
