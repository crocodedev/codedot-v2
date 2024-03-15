<script>
  import ContactMap from './ContactMap.svelte'

  export let data

  let activeIndex = 0

  function handleClick(idx) {
    activeIndex = idx
  }
</script>

{#if data}
  <section class="contact-us">
    <div class="container">
      <div class="contact-us__main-inner">
        <div class="contact-us__wrapper">
          <div class="contact-us__info">
            <p class="contact-us__title">Связаться с нами</p>
            <div class="contact-us__text-wrapper">
              {#each data.coordinatesList as address, idx}
                <div
                  class={activeIndex === idx
                    ? `${'contact-us__text-item'} ${'active'}`
                    : 'contact-us__text-item'}
                  data-coords={address.coordinates}
                  on:click={() => handleClick(idx)}
                >
                  <span>
                    Адрес: <span class="contact-us__address">
                      {address.placemarkText}
                    </span>
                  </span>
                  <span>
                    Наш контактный номер:
                    <a href={`tel:${address.cellNumber}`} class="contact-us__phone"
                      >{address.cellNumber}</a
                    >
                  </span>
                  <span>
                    Наша эл. почта:
                    <a href={`mailto:${address.email}`} class="contact-us__phone">{address.email}</a
                    >
                  </span>
                </div>
              {/each}
            </div>
          </div>
          <svelte:component this={ContactMap} {data} />
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .contact-us {
    padding-bottom: 60px;

    &__address {
      cursor: pointer;
      gap: 10px;
      width: max-content;
    }

    &__text-item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      padding: 15px;
      border: 1px solid black;
      border-radius: 15px;
      gap: 20px;
      transition: 0.3s ease background-color;
    }

    &__text-item.active {
      border: 2px solid #006185;
      background-color: #006185;
      font-weight: 600;
      color: white;
      box-shadow: 0 0 20px 2px #1e66e437;

      span a {
        color: white;
      }
    }

    &__main-inner {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        gap: 60px;
      }

      @include media-breakpoint-up(lg) {
        gap: 120px;
      }
    }
    @include media-breakpoint-down(lg) {
      padding-top: 20px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 40px;
    }

    &__wrapper {
      display: grid;

      @include media-breakpoint-down(lg) {
        gap: 40px;
      }

      @include media-breakpoint-up(lg) {
        grid-template-columns: 2fr 3fr;
        gap: 40px;
      }
    }

    &__title {
      font-weight: 900;

      @include media-breakpoint-down(lg) {
        font-size: 36px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 48px;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        gap: 25px;
      }

      @include media-breakpoint-up(lg) {
        gap: 50px;
      }
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      // justify-content: space-between;

      @include media-breakpoint-down(lg) {
        font-size: 16px;
        gap: 15px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 18px;
        gap: 20px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 20px;
        gap: 30px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 25px;
        gap: 40px;
      }
    }
  }
</style>
