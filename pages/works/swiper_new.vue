<template>
<swiper
    :centeredSlides="true"
    :autoplay="{
      delay: swiperDelay,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
>
    <swiper-slide><div style="height: 200px;">AAA</div></swiper-slide>
    <swiper-slide><div style="height: 200px;">BBB</div></swiper-slide>
    <swiper-slide><div style="height: 200px;">CCC</div></swiper-slide>
    <swiper-slide><div style="height: 200px;">DDD</div></swiper-slide>
    <swiper-slide><div style="height: 200px;">EEE</div></swiper-slide>

    <template v-slot:container-start><div class="swiper-pagination"></div></template>
    
    <template v-slot:container-end>
        <div style="display: flex; justify-content: center; align-items: center; gap: 10px;" >
            <span>{{ activeIndex }}</span>
            <div style="position: relative; width: 100px; height: 10px; background-color: #dedede;">
                <span ref="progressBar" style="position: absolute; top: 0; left: 0; height: 10px; backgroundColor: #f00;" />
            </div>
            <span>{{ slideLength }}</span>
            <button @click="pauseResume">{{ isPlay? '정지' : '시작' }}</button>
        </div>
    </template>
   
</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref } from 'vue';

export default {
    setup() {
        const progressBar = ref(null);
        return {
            progressBar,
            modules: [ Autoplay, Pagination, Navigation ],
        }
    },
    components: { Swiper, SwiperSlide },
    props: {
    },
    data() {
        return {
            swiper: null,
            swiperDelay: 1000,
            activeIndex: 1,
            slideLength: null,
            isPlay: true,
        };
    },
    methods: {
        onAutoplayTimeLeft (s, time, progress) {
            this.$refs.progressBar.style.width = ((1 - progress) * 100) + '%';
        },
        onSwiper (swiper) {
            if (!this.slideLength) {
                this.slideLength = swiper.slides.length;
            }
        },
        onSlideChange (swiper) {
            if (swiper.snapIndex == 1) {
                this.swiperDelay = 3000;
            }
            else {
                this.swiperDelay = 1000;
            }
            this.swiper = swiper;
            this.activeIndex = swiper.snapIndex + 1;
            this.isPlay = true;
            if (swiper.autoplay.paused) {
                swiper.autoplay.resume();
            }
        },
        pauseResume () {
            this.isPlay = this.swiper.autoplay.paused;
            if (this.isPlay) {
                this.swiper.autoplay.resume();
            }
            else {
                this.swiper.autoplay.pause();
            }
        },
    },
    mounted() {
    },
}
</script>


<style lang="scss" scoped>
.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>