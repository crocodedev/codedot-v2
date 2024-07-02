<script>
  import { onMount } from 'svelte'

  export let data
  let listItems
  let activeIndex = -1
  let svgPath
  let svgPathLength

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

  onMount(() => {
    const section = document.querySelector('.offer__text-wrapper')

    if (section) {
      const svgPathId = 'animated-path-text'
      let svgPath
      let svgPathLength = 8300 // Set the maximum length to 8300

      const initializeSvgPath = () => {
        svgPath = document.getElementById(svgPathId)
        if (svgPath) {
          svgPath.style.strokeDasharray = svgPathLength
          svgPath.style.strokeDashoffset = 0 // Start with strokeDashoffset at full length
        }
      }

      initializeSvgPath()

      window.addEventListener('scroll', () => {
        if (!svgPath) {
          initializeSvgPath()
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 600
        const sectionBottom = sectionTop + section.getBoundingClientRect().height + 600
        const scrollPosition = window.scrollY

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const progress = (scrollPosition - sectionTop) / (sectionBottom - sectionTop)
          const dashoffset = svgPathLength * (1 + progress)
          svgPath.style.strokeDashoffset = dashoffset
        } else {
          svgPath.style.strokeDashoffset = svgPathLength
        }
      })
    }
  })
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
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" class="offer__svg">
            <path
              d="M1921.5 879C1910.33 889 1861 1017.5 1704.5 1043.5C1638.32 1054.49 1307.78 1025.48 1281.5 967.5C1233 860.5 844.425 813.848 803 866.5C749.5 934.5 385 819 163.5 786C41.17 767.775 397.833 701.167 514.5 720.5C612.167 747 825.654 792.588 901 786C992.5 778 1285.5 613 1438 602.5C1590.5 592 1365.5 662 1319.5 671C1273.85 679.931 972.5 662 928.5 602.5C873.263 527.805 251 404.5 235.5 461.5C224.507 501.927 376.001 545.667 453.501 528.5C545.167 506.667 801.537 529.222 928.5 392C1027.5 285 1559.5 193 1622.5 169C1685.5 145 1674.5 267 1593.5 325C1512.5 383 1230.5 188 1180 114.5C1129.5 41 1050 146.5 1066 169C1082 191.5 1152 146.5 1101 70.0001C1060.2 8.80011 821.334 129.667 682.5 130.5C543.666 131.334 272.424 132.222 257.5 70.0001C225 -65.4999 40.5 38.6667 -3 44.5001"
              stroke="#212121"
              id="animated-path-text"
            />
          </svg>

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
      position: relative;
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

    &__svg {
      position: absolute;
      top: 0;

      @include media-breakpoint-down(lg) {
        display: none;
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
        width: 90%;
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
