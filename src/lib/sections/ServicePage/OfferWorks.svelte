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
    const regex = /(.*?):/g
    return text.replace(regex, (match, p1) => `<b>${p1}</b>: `)
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
            <a href="/cases" class="offer-works__btn-link">Все работы</a>
          </div>
          <div class="offer-works__items">
            <div class="offer-works__controls">
              <button class="offer-works__btn offer-works__btn--prev">
                <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
              </button>
              <button class="offer-works__btn offer-works__btn--next">
                <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
              </button>
            </div>
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
                  <li class="offer-works__text-list">{@html `${text}`}</li>
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
      padding-top: 90px;
    }
    @include media-breakpoint-up(xl) {
      padding-top: 216px;
    }
    &__item {
      display: grid;
      justify-content: space-between;

      @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(2, 49%);
      }
    }

    &__btn-link {
      display: flex;
      align-items: center;
      justify-content: center;
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
      width: 100%;
      height: 100%;
      align-items: center;
      position: absolute;
      display: flex;
      justify-content: space-between;
    }

    &__contains {
      @include media-breakpoint-down(xl) {
        padding-bottom: 100px;
        padding-top: 90px;
      }
      @include media-breakpoint-up(xl) {
        padding-top: 216px;
        padding-bottom: 216px;
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
      font-size: 24px;
    }

    &__categories {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    &__categories-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include media-breakpoint-up(lg) {
        padding: 40px 0 20px 0;
        border-bottom: 1px solid gray;
      }
    }

    &__text-wrapper {
      @include media-breakpoint-down(xl) {
        padding-bottom: 100px;
        padding-top: 90px;
      }
      @include media-breakpoint-up(xl) {
        padding-top: 216px;
        padding-bottom: 216px;
      }
    }

    &__text-list {
      @include media-breakpoint-down(md) {
        margin-left: 20px;
      }

      @include media-breakpoint-up(md) {
        margin-left: 40px;
      }
    }

    &__btn {
      border: none;
      outline: none;
      background-color: white;
      width: 50px;
      height: 50px;

      border-radius: 100%;
      border: 1px solid #006185;

      img {
        width: 100%;
        filter: invert(1);
      }

      &--prev {
        transform: rotate(180deg);
      }

      &:disabled {
        opacity: 0;
        background-color: red !important;
      }
    }

    &__text-title {
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
        font-size: 105px;
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
        font-size: 105px;
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
      padding: 5px;
      border: 2px solid #006185;
      border-radius: 5px;
    }
  }
</style>
