<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import imageUrl from '../../js/imageUrlBuilder'

  export let data

  let swiperElSecond,
    listItems,
    categoriesList = [],
    activeCategory = 0,
    sortedArray = []

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
        Object.assign(swiperElSecond, swiperSecondParams)
        swiperElSecond.initialize()
      }

      requestAnimationFrame(initializeSwiper)
    }
  }

  onMount(async () => {
    sortArr(activeCategory)
    reinitSwiper()
  })

  if (data) {
    data.offerWorksItems.map((el) => {
      categoriesList.push(el.projectCategory)
    })
  }

  const sortArr = (idx) => {
    activeCategory = idx
    let finalCategories = categoriesList.unique()
    sortedArray = data.offerWorksItems.filter(
      (el) => el.projectCategory === finalCategories[activeCategory]
    )
  }
  const makeBoldBeforeColon = (text) => {
    const regex = /(.*?): */g
    return text.replace(regex, (match, p1) => `<b>${p1}:</b> `)
  }

  data.richTextBlock.forEach((text) => {
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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if data}
  <section class="offer-works">
    <div class="container">
      <div class="offer-works__wrapper">
        <div class="offer-works__contains">
          <div class="offer-works__title-wrapper">
            <h2 class="offer-works__title">{data.offerWorksTitle}</h2>
          </div>
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
        </div>

        <div class="offer-works__text-wrapper">
          <h2 class="offer-works__text-title">{data.offerWorksTextTitle}</h2>
          <ul class="offer-works__text-rich">
            {#each listItems.split('</br>') as text}
              {#if text != '' && text !== '\n'}
                {#if text.match('<b>')}
                  <li class="offer-works__text-list">
                    <p>
                      {@html `${text}`}
                    </p>
                  </li>
                {:else}
                  <p class="offer-works__text">{@html `${text}`}</p>
                {/if}
              {/if}
            {/each}
          </ul>
        </div>
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
      display: grid;
      justify-content: space-between;

      @include media-breakpoint-up(lg) {
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
      background-color: #006185;
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
      @include media-breakpoint-down(xl) {
        padding-bottom: 30px;
      }
      @include media-breakpoint-up(xl) {
        padding-bottom: 65px;
      }
    }

    &__category-item {
      cursor: pointer;
      font-size: 20px;
      &--active {
        color: #006185;
        font-weight: 900;
      }
    }

    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__text-rich {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
      }
      @include media-breakpoint-up(lg) {
        text-align: center;
        padding-bottom: 80px;
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
        border-bottom: 1px solid gray;
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
      justify-content: center;

      @include media-breakpoint-up(lg) {
        margin-left: 40px;
        width: 70%;
        text-align: center;
        padding-bottom: 60px;

        &:nth-of-type(even) {
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
          width: 50%;
          font-size: 24px;
        }

        @include media-breakpoint-up(xxl) {
          width: 50%;
          font-size: 32px;
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
        font-size: 85px;
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
        font-size: 85px;
      }
    }

    &__img-wrapper {
      width: 100%;
      border-radius: 15px;
      overflow: hidden;

      @include media-breakpoint-down(lg) {
        height: 320px;
      }

      @include media-breakpoint-up(lg) {
        height: 400px;
      }

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
      padding: 5px 10px;
      background-color: #00628585;
      color: black;
      border-radius: 25px;
    }
  }
</style>
