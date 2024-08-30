<script>
  import { onMount } from 'svelte'
  let svgPath, svgPathLength

  onMount(() => {
    const section = document.querySelector('.text')

    if (section) {
      let scrollPositionText = 0
      const svgPathId = 'animated-path-text'
      window.addEventListener('scroll', () => {
        scrollPositionText = window.scrollY - 5240

        if (
          section.getBoundingClientRect().top <= window.scrollY &&
          scrollPositionText <= section.getBoundingClientRect().height
        ) {
          if (!svgPath) {
            svgPath = document.getElementById(svgPathId)
          }
          if (svgPath) {
            svgPathLength = svgPath?.getTotalLength()
            svgPath.style.strokeDasharray = svgPathLength
            svgPath.style.strokeDashoffset = svgPathLength
          }
          if (scrollPositionText >= 0) {
            const dashoffset =
              svgPathLength -
              (scrollPositionText * svgPathLength) / section.getBoundingClientRect().height -
              600
            svgPath.style.strokeDashoffset = dashoffset > 0 ? dashoffset : 0
          } else {
            if (svgPath) {
              svgPath.style.strokeDashoffset = 13165.2
            }
          }
        }
      })
    }
  })

  export let data, openModal
</script>

{#if data}
  <div class="text__inner">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text__svg"
    >
      <path
        class="animated-path-text"
        id="animated-path-text"
        d="M-58 117.182C48.1791 61.4624 360.849 -44.4273 530.069 22.4362C741.593 106.016 736.093 173.014 898.112 117.182C1060.13 61.3496 1096.13 -46.5927 1260.65 91.1271C1425.17 228.847 1353.66 317.84 1565.19 202.792C1776.71 87.7434 2419.79 74.6768 1985.74 202.792C1507.68 343.896 1386.67 -57.4208 1675.2 148.99C1911.31 317.894 1544.17 383.096 1326.16 290.093C1056 174.844 892.111 533.725 414.555 409.202C44.5304 312.718 675.586 697.162 596.076 537.448C422.437 188.65 244.447 387.33 123.521 500.226C30.0103 587.528 115.064 711.516 370.55 656.218C791.099 565.195 763.967 737.115 1044 658.95C1324.03 580.784 1202.2 488.952 1480.18 641.33C1609.19 712.051 1856.22 711.712 1952.73 604.108C1941.09 578.987 1882.55 543.817 1741.5 604.108C1565.19 679.473 1579.5 844.262 1439 834.302C1298.5 824.342 1298.5 632.39 1013 857.24C786.261 1035.81 135.5 1011.47 62.5 967.703C-12.5 937.824 -16.5 887.421 -41.5 869.916C-38.8404 845.369 -41.5212 786.616 41 842.451C123.521 898.286 150.687 1181.64 269 1083.6C463.5 922.431 474.151 1267.68 596.076 1213.38C716.399 1159.79 897.928 833.364 1369.5 1060.66C1522.98 1134.64 1592.8 1314.81 1439 1315.99C1289.76 1317.14 1377 1160.26 1524.5 1160.26C1672 1160.26 1709 1186.82 1768 1226.96C1815.2 1259.07 1923.67 1254.22 1972 1247.78"
        stroke="#212121"
      />
    </svg>

    <section class="text">
      <div class="text__wrapper">
        <div class="container container--text">
          <div class="text__items">
            {#each data.textItems as item, index}
              <p class="text__item">
                {item}
              </p>
              {#if index == 0}
                <div class="text__item-img-wrapper">
                  <svg
                    width="320"
                    height="105"
                    viewBox="0 0 320 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text__item-img"
                  >
                    <path
                      d="M-34 21.7829C-15.197 11.8156 40.1731 -7.12613 70.14 4.83456C107.598 19.7854 106.624 31.7703 135.316 21.7829C164.008 11.7955 170.384 -7.51349 199.518 17.1221C228.652 41.7578 215.989 57.6771 253.448 37.097C290.906 16.5168 404.787 14.1795 327.922 37.097C243.264 62.3379 221.834 -9.45045 272.93 27.4727C314.741 57.6867 249.726 69.3501 211.119 52.7136C163.276 32.0975 134.253 96.2951 49.6839 74.0201C-15.8431 56.7608 95.9093 125.531 81.8291 96.961C51.0797 34.5672 19.5597 70.1076 -1.85476 90.3027"
                      stroke="#212121"
                    />
                  </svg>
                </div>
              {/if}
              {#if index == 1}
                <div class="text__item-img-wrapper">
                  <svg
                    width="320"
                    height="104"
                    viewBox="0 0 320 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text__item-img"
                  >
                    <path
                      d="M23.4727 1C7.90502 15.7474 22.0647 36.6921 64.598 27.3509C134.611 11.9748 130.094 41.0164 176.714 27.8123C223.334 14.6083 203.051 -0.904457 249.329 24.8359C270.807 36.7824 311.933 36.7253 328 18.5482C326.062 14.3046 316.315 8.36349 292.834 18.5482C263.482 31.2792 265.864 59.1162 242.473 57.4337C219.083 55.7513 219.083 23.3258 171.553 61.3084C133.805 91.4737 25.4669 87.361 13.3139 79.9684C0.827916 74.921 0.161997 66.4068 -4 63.4497C-3.55723 59.3031 -4.00353 49.3783 9.73459 58.8103C23.4727 68.2422 27.9952 116.107 47.692 99.546"
                      stroke="#212121"
                    />
                  </svg>
                </div>
              {/if}
              {#if index == 2}
                <div class="text__item-img-wrapper">
                  <svg
                    width="320"
                    height="89"
                    viewBox="0 0 320 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text__item-img"
                  >
                    <path
                      d="M-13 1C1.99997 11.258 6.93784 63.3148 28.4438 45.3034C63.7983 15.6939 65.7343 79.1225 87.8969 69.1463C109.768 59.3013 142.765 -0.669509 228.483 41.0893C256.382 54.6807 269.073 87.7822 241.116 87.9989C213.988 88.2091 229.846 59.3874 256.657 59.3874C283.469 59.3874 290.194 64.2668 300.919 71.6415C309.498 77.5412 329.214 76.6504 338 75.4675"
                      stroke="#212121"
                    />
                  </svg>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </section>
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

  .animated-path-text {
    stroke-dashoffset: 13165;
    stroke-dasharray: 8800;
  }

  .container--text {
    height: 100%;
  }

  .text {
    margin: 0;
    &__inner {
      position: relative;
      height: 100%;

      @include media-breakpoint-down(lg) {
        padding-top: 40px;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      height: 100%;

      @include media-breakpoint-down(md) {
        justify-content: space-between;
        gap: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        gap: 60px;
      }

      @include media-breakpoint-up(lg) {
        gap: 150px;
      }
    }

    &__svg {
      position: absolute;

      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    &__item {
      &:nth-of-type(2) {
        @include media-breakpoint-up(md) {
          align-self: flex-end;
        }
      }

      @include media-breakpoint-up(md) {
        width: 56%;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 18px;
        line-height: 32px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 22px;
        line-height: 36px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 24px;
        line-height: 60px;
      }
    }

    &__item-img {
      width: 100%;
    }

    &__item-img-wrapper {
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }
  }

  .want-work {
    margin: 0;

    @include media-breakpoint-down(lg) {
      margin: 50px 0;
    }

    @include media-breakpoint-up(lg) {
      padding: 150px 0;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;
      align-items: center;
    }
    &__title {
      font-weight: 600;
      text-align: center;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        line-height: 48px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 90px;
        line-height: 108px;
      }
    }
  }
</style>
