<script>
  import { onMount } from 'svelte'
  let svgPath, svgPathLength

  onMount(() => {
    const section = document.querySelector('.text')

    if (section) {
      let scrollPositionText = 0
      console.log(document.querySelectorAll('section'))
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

  export let data
</script>

{#if data}
  <section class="text">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1323"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text__svg"
    >
      <path
        class="animated-path-text"
        id="animated-path-text"
        d="M-58 117.712C48.1791 61.7383 360.849 -44.6345 530.069 22.5341C741.593 106.495 736.093 173.799 898.112 117.712C1060.13 61.625 1096.13 -46.8099 1260.65 91.5384C1425.17 229.887 1353.66 319.286 1565.19 203.713C1776.71 88.1391 2419.79 75.013 1985.74 203.713C1507.68 345.46 1386.67 -57.6874 1675.2 149.665C1911.31 319.34 1544.17 384.839 1326.16 291.412C1056 175.637 892.111 536.156 414.555 411.065C44.5304 314.14 675.586 700.339 596.076 539.895C422.437 189.506 244.447 389.093 123.521 502.504C30.0103 590.204 115.064 714.758 370.55 659.208C791.099 567.769 763.967 740.474 1044 661.952C1324.03 583.43 1202.2 491.179 1480.18 644.251C1609.19 715.295 1856.22 714.955 1952.73 606.86C1941.09 581.624 1882.55 546.293 1741.5 606.86C1565.19 682.569 1579.5 848.11 1439 838.104C1298.5 828.099 1298.5 635.271 1013 861.147C786.261 1040.53 135.5 1016.08 62.5 972.114C-12.5 942.098 -16.5 891.466 -41.5 873.881C-38.8404 849.221 -41.5212 790.201 41 846.29C123.521 902.38 150.687 1187.02 269 1088.54C463.5 926.635 474.151 1273.46 596.076 1218.91C716.399 1165.08 897.928 837.162 1369.5 1065.5C1522.98 1139.81 1592.8 1320.81 1439 1321.99C1289.76 1323.14 1377 1165.55 1524.5 1165.55C1672 1165.55 1709 1192.23 1768 1232.55C1815.2 1264.81 1923.67 1259.94 1972 1253.47"
        stroke="#212121"
      />
    </svg>

    <div class="text__wrapper">
      <div class="container container--text">
        <div class="text__inner">
          {#each data.textItems as item}
            <p class="text__item">
              {item}
            </p>
            <div class="text__item-img">
              <img src="" alt="" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
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
    position: relative;
    height: 100%;
    @include media-breakpoint-down(lg) {
      padding-top: 40px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 40px;
      padding-bottom: 30px;
    }

    &__wrapper {
      // position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      height: 100%;

      @include media-breakpoint-down(md) {
        justify-content: space-between;
        gap: 40px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 65px;
        padding-bottom: 65px;
        gap: 80px;
      }
    }

    &__svg {
      position: absolute;
      @include media-breakpoint-down(sm) {
        // padding: 251px 0 366px 0;
      }

      @include media-breakpoint-between(sm, md) {
        padding: 170px 0 215px 0;
      }

      @include media-breakpoint-down(lg) {
        // display: none;
      }
    }

    &__item {
      &:not(&:nth-child(even)) {
        @include media-breakpoint-up(md) {
          text-align: start;
          align-self: flex-start;
        }
      }

      @include media-breakpoint-up(md) {
        width: 56%;
        align-self: flex-end;
        text-align: end;
      }

      @include media-breakpoint-down(xl) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 30px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 32px;
        line-height: 60px;
      }
    }
  }
</style>
