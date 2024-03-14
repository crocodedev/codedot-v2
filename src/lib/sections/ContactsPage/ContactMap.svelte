<script type="text/javascript">
  ymaps.ready(init)

  function init() {
    const mainCoords = data.coordinatesList[0].coordinates.split(',')
    const mainCordsArr = []
    const placemarksArr = []

    mainCoords.forEach((el) => {
      mainCordsArr.push(+el)
    })

    if (data) {
      var myMap = new ymaps.Map('YMapsID', {
        center: mainCordsArr,
        zoom: 15,
        controls: [],
      })

      data.coordinatesList.forEach((el, idx) => {
        const newArr = []

        el.coordinates.split(',').forEach((coord) => {
          newArr.push(+coord)
        })

        window['placemark' + idx] = new ymaps.Placemark(newArr, {
          balloonContent: el.placemarkText,
          preset: 'islands#dotIcon',
        })

        placemarksArr.push(window['placemark' + idx])
      })

      placemarksArr.map((el) => {
        myMap.geoObjects.add(el)
      })

      const goToItems = document.querySelectorAll('.contact-us__address')

      goToItems.forEach((el) => {
        el.addEventListener('click', () => {
          const goToArr = []
          el.dataset.coords.split(',').map((coord) => {
            goToArr.push(+coord)
          })

          myMap.panTo(goToArr, {
            flying: true,
            checkZoomRange: true,
          })
        })
      })
    }
  }

  export let data
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
