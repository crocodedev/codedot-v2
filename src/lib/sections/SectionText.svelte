<script>
  import { onMount } from "svelte";
  export let data, openModal
  console.log(data)

  onMount(() => {
    const section = document.querySelector('.contact-us')
    const svg = document.querySelector('.contact-us__backgroud > svg')
    window.addEventListener('scroll', () => animationSvg(section, svg))

    console.log(section, svg)
  })

  function animationSvg(section, svg) {
    const fullSvg = 12500

    svg.style.strokeDasharray = `${fullSvg}`
    svg.style.transition = '1s'

		let sectionPosTop = window.scrollY + section.getBoundingClientRect().top
		let sectionPosBottom =
			window.scrollY + section.getBoundingClientRect().bottom

		let winPosCenter =
			window.scrollY + document.documentElement.clientHeight / 2

		let start = winPosCenter - sectionPosTop - 400
		let end = winPosCenter - sectionPosBottom + 200
		let full = start - end

		if (start <= 0) svg.style.strokeDashoffset = `${fullSvg}`
		if (end >= 0) svg.style.strokeDashoffset = '0'

		if (start >= 0 && end <= 0) {
			const visibility = Math.floor((start / full) * 100)
			svg.style.strokeDashoffset = `${fullSvg - (fullSvg / 100) * visibility}`
		}
  }

</script>

{#if data}
<section class="contact-us">
  <div class="contact-us__inner container">

    <div class="contact-us__wrapper">
      {#if data.Title}
        <h2 class="contact-us__title">{data.Title}</h2> 
      {/if}
      <p class="contact-us__text">{@html `${data.Text}`}</p>
    </div>

    <div class="contact-us__backgroud">
      <svg width="100%" height="100%" viewBox="0 0 1920 618" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-58 104.813C48.1791 55.0253 360.849 -39.5909 530.069 20.1541C741.593 94.8353 736.093 154.701 898.112 104.813C1060.13 54.9245 1096.13 -41.5258 1260.65 81.5319C1425.17 204.59 1353.66 284.108 1565.19 181.308C1776.71 78.5083 2419.79 66.8329 1985.74 181.308C1507.68 307.39 1386.67 -51.2011 1675.2 133.234C1911.31 284.156 1544.17 342.416 1326.16 259.315C1056 156.336 892.111 477.009 414.555 365.743C44.5304 279.531 675.586 623.046 596.076 480.335C422.437 168.672 244.447 346.2 123.521 447.077C30.0103 525.084 115.064 635.872 370.55 586.461C791.099 505.128 763.967 658.745 1044 588.902C1324.03 519.058 1202.2 437.003 1480.18 573.158C1609.19 636.35 1856.22 636.047 1952.73 539.899C1941.09 517.452 1882.55 486.026 1741.5 539.899" stroke="#212121">
      </svg>        
    </div>

    {#if data.wantTitle}
      <div class="want-work">
          <div class="want-work__wrapper">
            <p class="want-work__title">{data.wantTitle}</p>
            <button class="btn btn--work" on:click={openModal}>Связаться с нами</button>
          </div>
      </div>
    {/if}

  </div>
</section>

 
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .contact-us {
    position: relative;
    overflow: hidden;

    &__inner {
      position: static;
      display: flex;
      flex-direction: column;

      @include media-breakpoint-up(md) {
        gap: 150px;
      }
    }

    &__backgroud {

      @include media-breakpoint-up(md) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      @include media-breakpoint-down(md) {
        width: 100vw;
        height: 100%;

        & > svg {
          stroke-width: 3;
        }
      }
      @include media-breakpoint-between(sm, md) {
        margin: 0 calc(((100vw - 432px - 24px * 2) / 2 + 24px) * -1);
      }

      @include media-breakpoint-down(sm) {
        margin: 0 -24px
      }
    }
    
    &__wrapper {
      display: flex;
      flex-direction: column;
    }
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 50px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
        margin-bottom: 130px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
        margin-bottom: 130px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 96px;
        margin-bottom: 150px;
      }
    }

    &__text {
      color: #212121;

      @include media-breakpoint-down(md) {
        padding-bottom: 40px;
        font-size: 14px;
      }
      
      @include media-breakpoint-between(md, lg) {
        font-size: 16px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 24px;
        line-height: 36px;
        max-width: 800px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 24px;
        line-height: 36px;
        max-width: 940px;
      }
    }
  }

  .want-work {

    @include media-breakpoint-down(lg) {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    @include media-breakpoint-up(lg) {
      max-width: 800px;
      margin: 0 auto;
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
