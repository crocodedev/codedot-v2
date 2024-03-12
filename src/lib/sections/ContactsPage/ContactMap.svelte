<script type="text/javascript">
  ymaps.ready(init)

  function init() {
    var myMap = new ymaps.Map('YMapsID', {
      center: [55.158066, 30.214017],
      zoom: 15,
      controls: [],
    })

    var placemark = new ymaps.Placemark([55.158066, 30.214017], {
      balloonContent: 'Vitebsk, Chkalova 56A',
      preset: 'islands#circleDotIcon',
    })

    myMap.geoObjects.add(placemark)
  }
</script>

<div id="YMapsID" class="yMap"></div>

<style lang="scss">
  @import '../../styles/styles.scss';

  .yMap {
    border-radius: 15px;
    overflow: hidden;

    @include media-breakpoint-down(lg) {
      height: 480px;
    }

    @include media-breakpoint-up(lg) {
      height: 520px;
    }
  }
</style>
