<template>
<swiper
    :centeredSlides="true"
    :autoplay="{
      delay: state.swiperDelay,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="[Autoplay, Pagination, Navigation]"
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
            <span>{{ state.activeIndex }}</span>
            <div style="position: relative; width: 100px; height: 10px; background-color: #dedede;">
                <span ref="progressContent" style="position: absolute; top: 0; left: 0; height: 10px; backgroundColor: #f00;" />
            </div>
            <span>{{ swiperObj?.slides.length }}</span>
            <button @click="pauseResume">{{ state.isPlay? '정지' : '시작' }}</button>
        </div>
    </template>
</swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted } from 'vue';

const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
    progressContent.value.style.width = ((1 - progress) * 100) + '%';
};

let swiperObj = null;
const state = reactive({
    swiperDelay: 1000,
    activeIndex: 0,
    isPlay: true
});

const onSwiper = (swiper) => {
    swiperObj = swiper;
};

const onSlideChange = (swiper) => {
    console.log(swiperObj.autoplay);
    if (swiper.snapIndex == 1) {
        state.swiperDelay = 5000;
    }
    else {
        state.swiperDelay = 1000;
    }
    state.activeIndex = swiper.snapIndex;
    state.isPlay = true;
    if (swiperObj.autoplay.paused) {
        swiperObj.autoplay.resume();
    }
};

const pauseResume = () => {
    state.isPlay = swiperObj.autoplay.paused;
    if (swiperObj.autoplay.paused) {
        swiperObj.autoplay.resume();
    }
    else {
        swiperObj.autoplay.pause();
    }
};

onMounted(() => {
});

watchEffect(() => {
});

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