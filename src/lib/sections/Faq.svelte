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
  <section class="faq">
    <div class="container">
      <div class="faq__wrapper">
        <p class="faq__title">{data.title}</p>
        <div class="faq__items">
          {#each data.faqList as faqItem, index}
            <div
              class={activeIndex === index ? `faq__item faq__item--active` : `faq__item`}
              on:click={() => handleClick(index)}
            >
              <div class="faq__question-wrapper">
                <p class="faq__question">{faqItem.question}</p>
                <span class="faq__stroke"></span>
              </div>
              <p class="faq__answer">{faqItem.Answer}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .faq {
    @include media-breakpoint-down(lg) {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 65px;
      margin-bottom: 65px;
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 31px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 57px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 85px;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .faq__answer {
      height: 0;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s linear;
      font-size: 24px;
      line-height: 36px;
    }

    &__item {
      border-radius: 40px;
      background-color: #fafafa;
      padding: 45px 40px;
      position: relative;
      transition: 0.3s linear;
      cursor: pointer;
    }

    &__question-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__question {
      font-size: 24px;
      line-height: 36px;
    }

    &__stroke {
      position: relative;
      width: 12px;
      height: 12px;
      min-width: 12px;
      min-height: 12px;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
      transform: rotate(-135deg);
      transition: 0.3s linear;
    }

    &__item--active {
      background-color: #e9f6fb;
    }

    &__item--active .faq__answer {
      height: auto;
      opacity: 1;

      padding-top: 18px;
    }

    &__item--active .faq__question-wrapper .faq__stroke {
      transform: rotate(-45deg);
    }

    &__question {
      font-size: 40px;
      font-weight: 600;
      line-height: 60px;
      pointer-events: none;
    }

    &__answer {
    }
  }
</style>
