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
  <section class="technologies">
    <div class="container">
      <div class="technologies__wrapper">
        <h2 class="technologies__title">{data.title}</h2>
        <div class="technologies__items">
          {#each data.technologiesList as item, index}
            <div
              class={activeIndex === index
                ? 'technologies__item technologies__item--active'
                : 'technologies__item'}
              on:click={() => handleClick(index)}
            >
              <div class="technologies__name-wrapper">
                <p class="technologies__name">{item.name}</p>
                <span class="technologies__stroke"></span>
              </div>
              <div class="technologies__stack">
                {#each item.subtechnologiesList as subtech}
                  <span class="technologies__stack-item">{subtech}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .technologies {
    background-color: #e9f6fb;
    border-radius: 40px;

    @include media-breakpoint-down(lg) {
      margin-bottom: 90px;
    }

    &__wrapper {
      @include media-breakpoint-down(md) {
        padding-top: 30px;
        padding-bottom: 60px;
      }

      @include media-breakpoint-between(md, xl) {
        padding-top: 45px;
        padding-bottom: 65px;
      }

      @include media-breakpoint-up(xl) {
        padding-top: 65px;
        padding-bottom: 85px;
      }
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 31px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 54px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 96px;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__stroke {
      @include media-breakpoint-up(lg) {
        display: none;
      }
      position: relative;
      width: 12px;
      height: 12px;
      min-width: 12px;
      min-height: 12px;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
      transform: rotate(-135deg);
    }

    &__name-wrapper {
      position: relative;
      align-items: center;
      justify-content: space-between;
      display: flex;
    }

    &__item {
      display: grid;
      align-items: center;
      position: relative;
      border-bottom: 1px solid black;

      @include media-breakpoint-down(lg) {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-up(lg) {
        grid-template-columns: 35% 65%;
        padding-top: 25px;
        padding-bottom: 33px;
      }

      &--active {
        @include media-breakpoint-down(lg) {
          gap: 10px;
        }
        .technologies__stack {
          @include media-breakpoint-down(lg) {
            display: flex;
            opacity: 1;
          }
        }

        .technologies__name-wrapper .technologies__stroke {
          transform: rotate(-45deg);
        }
      }
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        margin-bottom: 10px;
      }

      @include media-breakpoint-down(md) {
        font-size: 28px;
        line-height: 42px;
      }

      @include media-breakpoint-up(md) {
        font-size: 40px;
        line-height: 60px;
      }
    }

    &__stack {
      flex-wrap: wrap;
      transition: 0.3s ease;
      row-gap: 20px;

      @include media-breakpoint-down(lg) {
        display: none;
        opacity: 0;
      }
      @include media-breakpoint-up(lg) {
        display: flex;
        justify-content: flex-end;
      }
    }

    &__stack-item {
      @include media-breakpoint-down(sm) {
        margin-right: 20px;
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(sm, lg) {
        margin-right: 30px;
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(lg) {
        margin-left: 40px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
</style>
