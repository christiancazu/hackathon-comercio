<template>
    <q-carousel
      animated
      v-model="slide"
      navigation infinite autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      style="margin-top: 3.2rem; min-height: 90vh; max-width: 120vw"
    >
      <q-carousel-slide
        v-for="(bannerImg, index) in bannerImgs"
        :key="index"
        :img-src="bannerImg.src"
        :name="bannerImg.name"
        class="column no-wrap flex-center"
      >
      </q-carousel-slide>
    </q-carousel>
</template>
<script>
export default {
  name: 'BannerHome',
  data () {
    return {
      slide: 1,
      bannerImgs: [
        { showTittles: false, name: 1, src: 'statics/images/slider-11.jpg', order: 'one' },
        { showTittles: false, name: 2, src: 'statics/images/slider-6.jpeg', order: 'two' },
        { showTittles: false, name: 3, src: 'statics/images/slider-5.png', order: 'tree' }
      ]
    }
  },
  mounted () {
    this.loadTextsBanner()
  },
  methods: {
    loadTextsBanner () {
      setTimeout(() => {
        this.bannerImgs[0].showTittles = true
      }, 1000)
      /* setTimeout(() => {
        this.bannerImgs[1].showTittles = true
      }, 6000)
      setTimeout(() => {
        this.bannerImgs[2].showTittles = true
      }, 11000) */
    }
  }
}
</script>

<style scoped>
.banner-full-screen {
  min-height: 100vh;
  min-width: 100vw;
  /* background-color: #000; */
}
/* .q-carousel__slide {
  filter: opacity(.7);
} */
.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
p {
  text-align: center;
  font-size: 72px;
  overflow: hidden;
  color: white;
  font-weight: 400;
  margin: 1px;
  /* filter: opacity(1) !important; */
  text-shadow: 1px 1px 6px black;
}
.Two {
  font-size: 48px;
  font-family: Georgia, serif;
}
.fadeOne-enter-active, .fadeOne-leave-active {
  transition: all 1s ease-out;
}
.fadeOne-enter, .fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}
.fadeTwo-enter-active, .fadeTwo-leave-active {
  transition: all 1s ease-out;
}
.fadeTwo-enter, .fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>
