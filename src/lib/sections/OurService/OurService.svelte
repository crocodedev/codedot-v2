<script>
  export let data

  let activeIndex = -1

  function handleClick(idx) {
    if (activeIndex === idx) {
      activeIndex = -1
    } else {
      activeIndex = idx
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if data}
  <section class="our-services">
    <div class="container">
      <div class="our-services__wrapper">
        <h1 class="our-services__title">{data.Title}</h1>
        <div class="our-services__items">
          {#each data.servicesItems as servicesItem, index}
            <div
              class={activeIndex === index
                ? 'our-services__item our-services__item--active'
                : 'our-services__item'}
              on:click={() => handleClick(index)}
            >
              <span class="our-services__name">{servicesItem.serviceName}</span>

              <div class="our-services__text-wrapper">
                <p class="our-services__text">
                  {servicesItem.serviceText}
                </p>

                <a href={`${servicesItem.serviceLink}`} class="our-services__btn">
                  Подробнее
                  <img src="../icons/arrow-btn.svg" alt="" class="our-services__icon" />
                </a>
              </div>

              <span class="our-services__item-cross"></span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .our-services {
    @include media-breakpoint-down(lg) {
      padding-top: 10px;
      padding-bottom: 187px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 76px;
      padding-bottom: 279px;
    }

    &__title {
      text-transform: uppercase;
      @include media-breakpoint-down(md) {
        font-size: 40px;
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
        line-height: 150px;
        font-size: 210px;
      }

      font-weight: 600;
    }

    &__items {
      display: grid;

      @include media-breakpoint-between(md, lg) {
        grid-template-columns: 1fr;
      }

      @include media-breakpoint-between(lg, xl) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media-breakpoint-down(lg) {
        gap: 20px;
        margin-top: 29px;
      }

      @include media-breakpoint-up(lg) {
        gap: 40px;
        margin-top: 85px;
      }

      @include media-breakpoint-between(xl, xxl) {
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
      }

      @include media-breakpoint-up(xxl) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__item {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fafafa;
      transition: 0.3s ease;
      gap: 20px;
      cursor: default;

      @include media-breakpoint-down(lg) {
        padding: 20px;
        border-radius: 30px;
      }

      @include media-breakpoint-up(lg) {
        border-radius: 40px;
      }

      @include media-breakpoint-between(lg, xxl) {
        padding: 30px;
        padding-bottom: 80px;
      }

      @include media-breakpoint-up(xxl) {
        padding: 40px;
        padding-bottom: 80px;
      }

      &:hover {
        background-color: #e9f6fb;
      }
    }

    &__item--active {
      @include media-breakpoint-down(lg) {
        background-color: #e9f6fb;
      }

      .our-services__text-wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .our-services__item-cross {
        transform: rotate(-45deg);
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

    &__text-wrapper {
      @include media-breakpoint-down(lg) {
        display: none;
      }

      @include media-breakpoint-up(lg) {
        display: contents;
      }
    }

    &__name {
      font-weight: 700;

      @include media-breakpoint-down(xl) {
        font-size: 24px;
        width: 90%;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 31px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
      }
    }

    &__text {
      font-size: 18px;
      text-align: left;
      color: #838383;

      @include media-breakpoint-down(lg) {
        overflow: hidden;
      }
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
  }
</style>
