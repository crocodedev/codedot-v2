<script>
  export let data
  let listItems
  let activeIndex = -1

  const makeBoldBeforeColon = (text) => {
    const regex = /(.*?)\? */g
    return text.replace(regex, (match, p1) => `<b>${p1}?</b> `)
  }

  data.richTextBlock.forEach((text) => {
    listItems = data.richTextBlock
      .map((text) => {
        const boldedText = makeBoldBeforeColon(text.children[0].text)
        return `${boldedText}</br>`
      })
      .join('')
  })

  function handleClick(idx) {
    if (activeIndex === idx) {
      activeIndex = -1
    } else {
      activeIndex = idx
    }
  }
</script>

{#if data}
  <section class="offer">
    <div class="container">
      <div class="offer__wrapper">
        <h2 class="offer__title">{data.offerTitle}</h2>
        {#if data.offerItems?.length > 0}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="offer__items">
            {#each data.offerItems as offerItem, index}
              <div
                class={activeIndex === index ? 'offer__item offer__item--active' : 'offer__item'}
                on:click={() => handleClick(index)}
              >
                <p class="offer__name">{offerItem.offerName}</p>
                <div class="offer__text-item-wrapper">
                  <p class="offer__text">
                    {offerItem.offerText}
                  </p>
                  {#if offerItem.offerPrice}
                    <span class="offer__price">{offerItem.offerPrice}</span>
                  {/if}
                  {#if offerItem.offerLink}
                    <a href={`${offerItem.offerLink}`} class="offer__btn">
                      Подробнее
                      <img src="../icons/arrow-btn.svg" alt="" class="offer__icon" />
                    </a>
                  {/if}
                </div>
                <span class="offer__item-cross"></span>
              </div>
            {/each}
          </div>
        {/if}
        <div class="offer__text-wrapper">
          <ul class="offer__text-list">
            {#each listItems.split('</br>') as text, idx}
              {#if idx < listItems.split('</br>').length - 1}
                <li class="offer__text-list-item">
                  {@html `${text}`}
                </li>
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

  .offer {
    @include media-breakpoint-down(xl) {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    @include media-breakpoint-up(xl) {
      padding-bottom: 65px;
      padding-top: 65px;
    }

    &__text-wrapper {
      padding: 60px 0 0 0;
      font-size: 24px;
    }

    &__btn {
      color: black;
      display: flex;
      padding: 8px 30px;
      align-items: center;
      border: 1px solid black;
      width: max-content;
      border-radius: 40px;

      @include media-breakpoint-up(lg) {
        position: absolute;
        bottom: 20px;
      }
    }

    &__icon {
      filter: brightness(0);
      padding-left: 8px;
    }

    &__text-list {
      display: flex;
      flex-direction: column;
      gap: 80px;
      list-style-type: none;
      padding-inline-start: 0;
      padding-top: 65px;
    }

    &__text-list-item {
      display: flex;
      flex-direction: column;
      gap: 15px;
      &:nth-of-type(even) {
        align-self: flex-end;
        text-align: end;
      }

      @include media-breakpoint-down(lg) {
        font-size: 16px;
      }

      @include media-breakpoint-between(lg, xxl) {
        width: 52%;
        font-size: 24px;
      }

      @include media-breakpoint-up(xxl) {
        width: 52%;
        font-size: 32px;
      }
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 25px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 50px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 85px;
      }

      @include media-breakpoint-up(lg) {
        width: 940px;
      }
    }

    &__items {
      display: grid;

      @include media-breakpoint-down(lg) {
        gap: 20px;
      }

      @include media-breakpoint-between(lg, xl) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      @include media-breakpoint-up(xl) {
        gap: 40px;
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      background-color: #fafafa;
      position: relative;
      cursor: default;
      justify-content: space-between;
      transition: 0.3s ease;

      @include media-breakpoint-down(lg) {
        padding: 20px;
        border-radius: 30px;
        gap: 20px;
      }

      @include media-breakpoint-up(lg) {
        padding: 40px;
        border-radius: 40px;
        padding-bottom: 60px;
        gap: 20px;
      }
      &:hover {
        background-color: #e9f6fb;
      }
    }

    &__item--active {
      @include media-breakpoint-down(lg) {
        background-color: #e9f6fb;
      }

      .offer__text-item-wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .offer__item-cross {
        transform: rotate(-45deg);
      }
    }

    &__price {
      color: #0082b1;
      font-weight: 600;
      font-size: 18px;
      position: absolute;
      bottom: 10px;
    }

    &__text-item-wrapper {
      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    &__name {
      font-weight: 700;
      @include media-breakpoint-down(lg) {
        font-size: 24px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 28px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
      }
    }

    &__item-cross {
      position: absolute;
      width: 12px;
      height: 12px;
      top: 25px;
      right: 15px;
      min-width: 12px;
      min-height: 12px;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
      transform: rotate(-135deg);
      transition: 0.2s ease-in-out;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &__text {
      color: #838383;

      @include media-breakpoint-down(lg) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 16px;
        padding-bottom: 20px;
        line-height: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 18px;
        padding-bottom: 20px;
        line-height: 27px;
      }
    }
  }
</style>
