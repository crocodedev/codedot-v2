<script>
  import Counters from './Counters.svelte'
  import { onMount } from 'svelte'
  let showDignity = false,
    countersItems

  onMount(() => {
    let svgPath, svgPathLength
    let scrollPositionDignity = 0
    const section = document.querySelector('.dignity__inner')

    if (section) {
      const svgPathId = 'animated-path'

      const checkVisibility = () => {
        if (window.innerWidth <= 992) {
          const elem = document.querySelectorAll('.dignity__item')
          if (elem) {
            elem.forEach((el) => {
              const rect = el.getBoundingClientRect()
              showDignity = rect.top - 400 < window.scrollY
            })
          }
        }
      }

      window.addEventListener('scroll', () => {
        scrollPositionDignity = window.scrollY - 695
        if (section.getBoundingClientRect().top <= window.scrollY && window.scrollY <= 2439) {
          if (!svgPath) {
            svgPath = document.getElementById(svgPathId)
            svgPathLength = svgPath.getTotalLength()
            svgPath.style.strokeDasharray = svgPathLength
            svgPath.style.strokeDashoffset = svgPathLength
          }

          if (scrollPositionDignity >= 0) {
            const dashoffset =
              svgPathLength -
              (scrollPositionDignity * svgPathLength) /
                (section.getBoundingClientRect().height - 600)
            svgPath.style.strokeDashoffset = dashoffset > 0 ? dashoffset : 0
          } else {
            svgPath.style.strokeDashoffset = svgPathLength
          }
        }

        checkVisibility()
      })
    }
  })

  export let data, openModal
</script>

{#if data}
  <div class="dignity__inner">
    <div class="dignity__background">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1561 2496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <path
          class="anima"
          id="animated-path"
          d="M522 111.5C1217.57 207.512 1204.16 12.0141 1163.83 129.294C1123.51 246.575 1169.9 986.873 648.215 578.519C126.535 170.165 196.092 364.823 736.925 428.018C1279.51 491.418 1825.53 -390.625 1411.26 213.687C916.8 934.977 1084.23 1226.03 867.424 933.641C528.492 476.564 -60.9648 661.795 325.964 768.965L648.215 861.198C904.052 941.482 1173.33 1118.11 1324.79 1558C1424.12 1846.5 1611 2352.5 1365.5 2394C1238 2410 1154 2206 1273.5 2199C1348.5 2210 1338.06 2297.89 1262.5 2371C1185.5 2445.5 626.5 2619.5 517 1906.5C517 2051 563 2303 473.5 2300.5C445 2302.83 367.5 2268.5 285.5 2112.5C235.5 2009 139.715 1814.33 94.5 1804.5C83 1802 38.5 1804.5 1 1884"
          stroke="#212121"
          shape-rendering="geometricPrecision"
        />
      </svg>
    </div>
    <section class="dignity">
      <div class="container">
        <div class="dignity__text-wrapper">
          {#each data.dignityItems as item, idx}
            <div class="dignity__item">
              <p class="dignity__name">{item.Name}</p>
              <p class="dignity__text">
                {item.Text}
              </p>
            </div>
            {#if idx == 0}
              <div class="dignity__item-img-wrapper">
                <svg
                  viewBox="0 0 282 298"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="dignity__item-img"
                >
                  <path
                    d="M48.8427 52.839C202.43 95.095 199.646 20.7618 190.742 72.3783C181.839 123.995 194.862 419.363 79.6715 239.641C-35.519 59.9196 -20.1602 145.591 99.2592 173.404C219.066 201.307 349.683 -193.443 239.379 127.272"
                    stroke="#212121"
                    stroke-linecap="round"
                    class="animated-path"
                  />
                </svg>
              </div>
            {/if}
            {#if idx == 1}
              <div class="dignity__item-img-wrapper">
                <svg
                  viewBox="0 0 282 306"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="dignity__item-img"
                >
                  <path
                    d="M281 1C168.895 325.462 197.52 366.676 143.411 234.928C60.5607 33.194 -50.3565 24.9692 27.3516 128.843L117.014 239.824"
                    stroke="#212121"
                    stroke-linecap="round"
                    class="animated-path"
                  />
                </svg>
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </section>
    {#if data.countersItems.length}
      <section class="counters">
        <div class="container">
          <div class="counters__wrapper">
            <div class="counters__items">
              {#each data?.countersItems as counter}
                <div class="counters__item">
                  <span class="counters__number">{counter.number}</span>
                  <div class="counters__text">{counter.text}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </section>
    {/if}
    {#if data.wantTitle}
      <section class="want-work">
        <div class="container">
          <div class="want-work__wrapper">
            <p class="want-work__title">{data.wantTitle}</p>
            <button class="btn btn--work" on:click={openModal}>Связаться с нами</button>
          </div>
        </div>
      </section>
    {/if}
  </div>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @include media-breakpoint-down(lg) {
    .animated-path {
      stroke-dasharray: 8000;
      stroke-dashoffset: 8000;
      animation: draw 4s ease-in-out forwards;
    }
  }

  .dignity {
    overflow: hidden;
    .anima {
      stroke-dashoffset: 8800;
      stroke-dasharray: 8800;
      stroke-width: 1px;
    }

    .container {
      position: sticky;

      @include media-breakpoint-down(xxl) {
        top: 0px;
      }

      @include media-breakpoint-up(xxl) {
        top: -50px;
      }
    }

    @include media-breakpoint-down(lg) {
      margin-bottom: 30px;
    }
    @include media-breakpoint-up(lg) {
      margin-bottom: 300px;
    }
    position: relative;

    &__background {
      @include media-breakpoint-down(lg) {
        display: none;
      }

      @include media-breakpoint-up(lg) {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      @include media-breakpoint-between(lg, xl) {
        left: 15px;
        transform: translateY(-13%);
      }

      @include media-breakpoint-between(xl, xxl) {
        left: 15px;
        transform: translateY(-120px);
      }

      @include media-breakpoint-up(xxl) {
        left: -80px;
        transform: translateY(-65px);
      }
    }

    &__inner {
      position: relative;
      overflow: hidden;
      @include media-breakpoint-down(lg) {
        padding-top: 25px;
        padding-bottom: 25px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 105px;
        padding-bottom: 105px;
      }
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      @include media-breakpoint-up(lg) {
        gap: 150px;
        top: 0;
      }
    }

    &__name {
      font-weight: 600;
      width: max-content;

      @include media-breakpoint-down(lg) {
        font-size: 24px;
        line-height: 60px;
        margin-bottom: 5px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
        line-height: 90px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
        line-height: 120px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 96px;
        line-height: 170px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(md) {
        font-size: 24px;
        line-height: 27px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;

      &:nth-child(1) {
        @include media-breakpoint-between(lg, xl) {
          transform: translateY(-32px);
        }
        @include media-breakpoint-between(xl, xxl) {
          transform: translateY(-28px);
        }

        @include media-breakpoint-up(xxl) {
          transform: translateY(-60px);
        }
      }

      &:nth-child(1) .dignity__text {
        @include media-breakpoint-up(lg) {
          width: 436px;
        }
      }

      &:nth-child(3) {
        align-self: flex-end;
        @include media-breakpoint-up(xl) {
          transform: translateX(-52px) translateY(-10px);
        }
      }

      &:nth-child(3) .dignity__text {
        @include media-breakpoint-up(lg) {
          width: 509px;
        }
      }

      &:nth-child(5) {
        @include media-breakpoint-between(lg, xl) {
          transform: translateY(20px) translateX(5px);
        }
        @include media-breakpoint-between(xl, xxl) {
          transform: translateY(20px);
        }
        @include media-breakpoint-up(xxl) {
          transform: translateY(7px) translateX(10px);
        }
      }

      &:nth-child(3) .dignity__text {
        @include media-breakpoint-up(lg) {
          width: 440px;
        }
      }

      @include media-breakpoint-down(lg) {
        &:not(&:last-of-type) {
          transform: translate(-4px, 5px);
          margin-bottom: 35px;
        }

        &:last-of-type {
          transform: translateX(-4px);
          margin-bottom: 35px;
        }
      }
    }

    &__item-img-wrapper {
      @include media-breakpoint-down(lg) {
        position: relative;
        width: 100%;
        height: 305px;
        margin-bottom: 15px;
      }
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &__item-img {
      @include media-breakpoint-down(lg) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .counters {
    background-color: #e9f6fb;
    border-radius: 40px;

    @include media-breakpoint-up(lg) {
      margin-top: 65px;
      margin-bottom: 65px;
    }

    &__wrapper {
      @include media-breakpoint-down(lg) {
        padding-top: 47px;
        padding-bottom: 70px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 40px;
        padding-bottom: 84px;
      }
    }

    &__items {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(xxl) {
        &:nth-child(2) {
          padding-left: 245px;
          padding-right: 245px;
        }
      }

      @include media-breakpoint-down(md) {
        &:not(&:last-of-type) {
          margin-bottom: 77px;
        }
      }
    }

    &__number {
      font-weight: 800;

      @include media-breakpoint-down(md) {
        font-size: 80px;
        line-height: 100px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
        line-height: 85px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 96px;
        line-height: 150px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 24px;
        line-height: 40px;
      }

      @include media-breakpoint-up(lg) {
        transform: translateY(-10px);
        font-size: 32px;
        line-height: 48px;
      }
    }
  }

  .want-work {
    @include media-breakpoint-down(lg) {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 200px;
      padding-bottom: 100px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;
      align-items: center;
    }
    &__title {
      font-size: 90px;
      font-weight: 600;
      line-height: 108px;
      text-align: center;
    }
  }
</style>
