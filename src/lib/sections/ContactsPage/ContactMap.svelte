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
        zoom: 6,
        controls: [],
      })

      data.coordinatesList.forEach((el, idx) => {
        const newArr = []

        el.coordinates.split(',').forEach((coord) => {
          newArr.push(+coord)
        })

        window['placemark' + idx] = new ymaps.Placemark(
          newArr,
          {
            balloonContent: el.placemarkText,
          },
          {
            zoom: 16,

            iconLayout: 'default#image',
            iconImageHref: '/placemark.svg',
            iconImageSize: [52, 56],
            iconImageOffset: [-3, -42],
          }
        )

        placemarksArr.push(window['placemark' + idx])
      })

      placemarksArr.map((el) => {
        myMap.geoObjects.add(el)
      })

      const goToItems = document.querySelectorAll('.contact-us__text-item')

      goToItems.forEach((el) => {
        el.addEventListener('click', () => {
          const goToArr = []
          el.dataset.coords.split(',').map((coord) => {
            goToArr.push(+coord)
          })

          myMap
            .panTo(goToArr, {
              checkZoomRange: true,
              flying: true,
            })
            .then(() => myMap.setZoom(14, { duration: 1000 }))

          myMap.options.set('maxAnimationZoomDifference', 4)
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
