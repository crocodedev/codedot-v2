<script>
  export let data
  let listItems
  console.log(data)

  const makeBoldBeforeColon = (text) => {
    const regex = /(.*?):/g
    return text.replace(regex, (match, p1) => `<b>${p1}</b>: `)
  }

  data.richTextBlock.forEach((text) => {
    listItems = data.richTextBlock
      .map((text) => {
        const boldedText = makeBoldBeforeColon(text.children[0].text)
        return `${boldedText}</li>`
      })
      .join('')
  })

  console.log()
</script>

{#if data}
  <section class="offer">
    <div class="container">
      <div class="offer__wrapper">
        <h2 class="offer__title">{data.offerTitle}</h2>

        <div class="offer__items">
          {#each data.offerItems as offerItem}
            <div class="offer__item">
              <p class="offer__name">{offerItem.offerName}</p>
              <p class="offer__text">
                {offerItem.offerText}
              </p>
              <span class="offer__price">{offerItem.offerPrice}</span>
            </div>
          {/each}
        </div>
        <div class="offer__text-wrapper">
          <ul class="offer__text-list">
            {#each listItems.split('</li>') as text, idx}
              {#if idx < listItems.split('</li>').length - 1}
                <li>
                  {@html `
                    ${text}
                `}
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
      padding-top: 90px;
      padding-bottom: 100px;
    }

    @include media-breakpoint-up(xl) {
      padding-bottom: 216px;
      padding-top: 216px;
    }

    &__text-wrapper {
      padding: 60px 0 0 0;
      font-size: 24px;
    }

    &__text-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style-type: decimal;
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
        font-size: 105px;
      }

      @include media-breakpoint-up(lg) {
        width: 940px;
      }
    }

    &__items {
      display: grid;

      @include media-breakpoint-down(md) {
        gap: 40px;
      }

      @include media-breakpoint-between(md, xl) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      @include media-breakpoint-up(xl) {
        gap: 40px;
        grid-template-columns: repeat(4, 1fr);
      }
    }

    &__item {
      border-radius: 40px;
      background-color: #fafafa;
      position: relative;

      @include media-breakpoint-down(md) {
        padding-bottom: 40px;
        padding: 20px;
        height: 300px;
      }

      @include media-breakpoint-up(md) {
        padding: 40px;
        padding-bottom: 60px;
      }
    }

    &__price {
      color: #006185;
      font-weight: 600;
      font-size: 18px;
      position: absolute;
      bottom: 10px;
    }

    &__name {
      font-weight: 700;
      @include media-breakpoint-down(lg) {
        margin-bottom: 20px;
        font-size: 24px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 40px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 28px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
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
        line-height: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
</style>
