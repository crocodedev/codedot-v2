<script>
  export let data, openModal

  console.log(data)
</script>

<section class="want-work">
  <div class="container">
    <div class="want-work__wrapper">
      <p class="want-work__title">{data.Title}</p>
      <button class="btn btn--work" on:click={openModal}>Связаться с нами</button>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .want-work {
    @include media-breakpoint-down(lg) {
      margin-top: 100px;
      margin-bottom: 100px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 200px;
      padding-bottom: 200px;
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
