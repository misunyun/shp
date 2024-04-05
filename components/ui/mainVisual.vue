<template>
<div class="main_visual">
    <swiper
        :loop="true"
        :allowTouchMove="allowTouchMove"
        :centeredSlides="true"
        :autoplay="
            swiperDelay ? {
                delay: swiperDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: pauseOnMouseEnter
            } : undefined"
        :pagination="pagination"
        :navigation="navigation"
        :modules="modules"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide 
            v-for="(slide, index) in state.slides" 
            :style="{ cursor: slide?.to ? 'pointer' : undefined }"
            :key="index" 
            @click="slide?.to ? slideClick(slide) : null"
        >
            <div class="slide">
                <img :src="slide.imgSrc" alt="" class="visual" v-if="slide.imgSrc"/>
                <div class="video_player" v-else-if="slide.movSrc">
                    <video 
                        class="visual"
                        autoplay loop muted 
                        :ref="`videoPlayer`"
                        alt=""
                    >
                        <source :src="slide.movSrc" type="video/mp4" />
                    </video>
                </div>
            </div>
        </swiper-slide>

        <template v-slot:container-start><div class="swiper-pagination"></div></template>
        <template v-slot:container-end v-if="swiperDelay">
            <div class="progress_bar" >
                <span class="number">{{ activeIndex + 1 }}</span>
                <div class="bar" :class="{ stop: !isPlay }">
                    <span class="bar_active" ref="swiperProgressBar"/>
                </div>
                <span class="number">{{ slideLength }}</span>
                <button 
                    class="pause_resume" 
                    :class="isPlay? 'play' : 'stop'"
                    :title="isPlay? '정지' : '시작'"
                    @click="pauseResume"
                >
                    {{ isPlay? '정지' : '시작' }}
                </button>
            </div>
        </template>

    </swiper>
</div>
</template>

<script>
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    setup(props) {
        // console.log('props ---------------- ');
        // console.log(props);
        const swiperProgressBar = ref(null);
        const state = reactive(props);
        return {
            swiperProgressBar,
            modules: [ Autoplay, Pagination, Navigation ],
            state,
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        autoplayDelay: undefined,
        pagination: undefined,
        navigation: false,
        allowTouchMove: false,
        slides: undefined,
        pauseOnMouseEnter: false,
    },
    data() {
        return {
            swiper: null,
            swiperDelay: this.slides[0].delay ?? this.autoplayDelay,
            activeIndex: 0,
            slideLength: null,
            isPlay: false,
        }
    },
    mounted() {
        // console.log(this.state);
    },
    onUnmounted() {
    },
    methods: {
        async slideClick(slide) {
            // console.log(slide);
            if (slide.to) {
                const router = useNuxtApp().$router;
                await router.push(slide.to);
            }
        },
        onAutoplayTimeLeft (swiper, time, progress) {
            this.$refs.swiperProgressBar.style.width = ((1 - progress) * 100) + '%';
        },
        onSwiper (swiper) {
            this.swiper = swiper;
            if (!this.slideLength) {
                this.slideLength = swiper.slides.length;
            }
            if (this.autoplayDelay) {
                this.isPlay = true;
            }
        },
        onSlideChange (swiper) {
            // console.log('onSlideChange ::::::::');
            // console.log(swiper)
            if (this.autoplayDelay) {
                this.isPlay = true;
                this.$refs.swiperProgressBar.style.width = '0%';
                this.swiperDelay = this.state.slides[swiper.realIndex].delay ?? this.state.autoplayDelay;
            }
            this.activeIndex = swiper.realIndex;
        },
        
        pauseResume () {
            // const isRunning = !this.swiper?.autoplay.paused;
            // if (this.swiper.realIndex === this.activeIndex) {
                if (this.isPlay) {
                    this.swiper.autoplay.pause();
                    this.isPlay = false;
                }
                else {
                    this.swiper.autoplay.resume();
                    this.isPlay = true;
                }
            // }
        },
    },
}
</script>


<style lang="scss">
.pc {
    .main_visual {
        .swiper-button-prev, .swiper-button-next {
            display: flex;
            width: 52px;
            height: 52px;
            background-color: rgba(0, 0, 0, 0.3);
            border: {
                radius: 26px;
            }
            &:after {
                content: '';
                display: inline-block;
                width: 26px;
                height: 26px;
                background: {
                    image: url("/assets/images/svg/icon/arrow_right_white.svg");
                    repeat: no-repeat;
                    position: center;
                }
            }
        }
        .swiper-button-prev {
            transform: rotate(180deg);
        }
    }
}
.main_visual {
    .swiper-button-prev, .swiper-button-next {
        display: none;
    }
}
</style>

<style lang="scss" scoped>
.main_visual {
    .slide {
        position: relative;
        height: 59.4666vw;
        overflow: hidden;
        > a, .visual {
            display: inline-block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .progress_bar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 10px;
        width: 100%;
        z-index: 30;
        gap: 10px;
        .number {
            font: {
                family: neue haas grotesk display pro;
                size: 12px;
                weight: 600;
            }
        }
        .bar {
            position: relative;
            width: 70%;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.3);
            overflow: hidden;
            &.stop {
                height: 2px;
            }
        }
        .bar_active {
            position: absolute;
            top: 0;
            left: 0;
            height: 2px;
            background-color: #fff;
        }
    }
}

.video_player{
    width: 100%;
    height: 100%;
}
.pause_resume {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    text-indent: -9999px;
    text-align: center;
    overflow: hidden;
    &.play {
        &::before {
            content: '';
            display: inline-block;
            width: 2px;
            height: 10px;
            margin: 2px;
            background-color: #fff;
        }
        &::after {
            content: '';
            display: inline-block;
            width: 2px;
            height: 10px;
            margin: 2px;
            background-color: #fff;
        }
    }
    &.stop {
        &::before {
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 7px;
            border-bottom: 5px solid transparent;
            border-top: 5px solid transparent;
            border-left: 5px solid #fff;
            border-right: 5px solid transparent;
        }
    }
}


@media (min-width: 1125px) {
    .main_visual {
        .slide {
            height: 37.5vw;
            img, video {
                height: 37.5vw;
            }
        }
        .progress_bar {
            left:50%;
            transform:translate(-50%, -50%);
            width: 253px;
        }
    }
}
</style>