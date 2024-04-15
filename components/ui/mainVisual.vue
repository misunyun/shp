<template>
<div class="main_visual">
    <!--
        :autoplay="
            swiperDelay ? {
                delay: swiperDelay,
                disableOnInteraction: true,
                pauseOnMouseEnter: pauseOnMouseEnter
            } : undefined"

        @autoplayTimeLeft="autoplayTimeLeft"
        :centeredSlides="true"
    -->
    <swiper
        :loop="true"
        :allowTouchMove="allowTouchMove"
        
        
        :pagination="pagination"
        :navigation="navigation"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @realIndexChange="realIndexChange"
        @init="onInit"
    >
        <swiper-slide 
            v-for="(slide, index) in state.slides" 
            :style="{ cursor: slide?.to ? 'pointer' : undefined }"
            :key="index" 
            @click="slide?.to ? slideClick(slide) : null"
        >
            <div 
                class="slide"
            >
                <img :src="slide.imgSrc" alt="" class="visual" v-if="slide.imgSrc"/>
                <div class="video_player" v-else-if="slide.movSrc">
                    <video 
                        class="visual"
                        autoplay loop muted 
                        :ref="`videoPlayer`"
                        alt=""
                        playsinline
                        webkit-playsinline=""
                    >
                        <source :src="slide.movSrc" type="video/mp4" />
                    </video>
                </div>
                <div class="text_area">
                    <p class="title">{{ slide.title }}</p>
                    <p class="text">{{ slide.text }}</p>
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

import { useDefaultStore } from "~/stores";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    setup(props) {
        
        const store = useDefaultStore();

        const swiperProgressBar = ref(null);
        const state = reactive(props);
        return {
            swiperProgressBar,
            modules: [ Autoplay, Pagination, Navigation ],
            state,
            store,
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
            slideInterval: null,
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeEventHandler);
        this.resizeEventHandler();
    },
    beforeUnmount() {
        clearInterval(this.slideInterval);
        window.removeEventListener('resize', this.resizeEventHandler);
    },
    methods: {
        onInit(swiper) {
            if (this.store.windowInnerWidth > 1124) {
                document.querySelectorAll('.main_visual .swiper-slide').forEach((slide) => {
                    if (slide.classList.contains('swiper-slide-active')) {
                        slide.querySelector('.text_area').style.display = 'none';
                    }
                });
            }
            this.swiper = swiper;
            this.realIndexChange();
        },
        resizeEventHandler() {
            if (this.store.windowInnerWidth > 1124) {
                const position = (window.innerWidth - 17 - 1200) / 2;
                document.querySelector('.main_visual .swiper-button-prev').style.left = position + 'px';
                document.querySelector('.main_visual .swiper-button-next').style.right = position + 'px';
            }
            else {
                document.querySelector('.main_visual .swiper-button-prev').style.left = '10px';
                document.querySelector('.main_visual .swiper-button-next').style.right ='10px';
            }
        },
        async slideClick(slide) {
            if (slide.to) {
                const router = useNuxtApp().$router;
                await router.push(slide.to);
            }
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
        setAutoplay() {
            const _this = this;
            
            const autoplayDelay = this.autoplayDelay / 1000;
            const addValue = autoplayDelay / 100;

            let timer = 0;
            let isActiveClass = false;
            function autoplayTime() {
                if (_this.isPlay) {
                    
                    if (!_this.$refs.swiperProgressBar) {
                        clearInterval(this.slideInterval);
                        return;
                    }
                    
                    timer += addValue;
                    // console.log(timer);
                    const widthPercent = Math.floor((timer / autoplayDelay) * 100); // Calculate based on ratio
                    // console.log(widthPercent);
                    // const widthPercent = Math.floor(timer * 2.5);// 10 = 10, 20 = 5, 30 = ???
                    _this.$refs.swiperProgressBar.style.width = widthPercent + '%';
                    // console.log(widthPercent);

                    // if (_this.store.windowInnerWidth > 1124 && !isActiveClass) {
                    //     if (widthPercent >= 10) {
                    //     }
                    // }
                    
                    if (widthPercent >= 80 && !isActiveClass) {
                        isActiveClass = true;
                        if (document.querySelector('.main_visual .swiper-slide-active').classList.contains('active')) {
                            document.querySelector('.main_visual .swiper-slide-active').classList.remove('active');
                        }
                    }
                    if (timer >= autoplayDelay) {
                        document.querySelectorAll('.main_visual .swiper-slide').forEach((slide) => {
                            if (slide.classList.contains('swiper-slide-active')) {
                                slide.querySelector('.text_area').style.display = 'none';
                            }
                        });
                        clearInterval(this.slideInterval);
                        _this.swiper.slideNext();
                    }
                }
            }
            this.slideInterval = setInterval(autoplayTime, 50);
        },
        realIndexChange() {
            clearInterval(this.slideInterval);
            this.setAutoplay();
        },
        onSlideChange (swiper) {
            // console.log('onSlideChange ------------------------------ 1');
            if (this.autoplayDelay) {
                this.isPlay = true;
                this.$refs.swiperProgressBar.style.width = '0%';
                this.swiperDelay = this.state.slides[swiper.realIndex].delay ?? this.state.autoplayDelay;
            }
            this.activeIndex = swiper.realIndex;

            if (this.store.windowInnerWidth > 1124) {
                document.querySelectorAll('.main_visual .swiper-slide').forEach((slide, index) => {
                    slide.classList.remove('active');
                    slide.querySelector('.text_area').style.display = 'none';
                });

                setTimeout(() => {
                    const activeSlide = document.querySelector('.main_visual .swiper-slide.swiper-slide-active');
                    if (activeSlide) {
                        activeSlide.classList.add('active');
                        activeSlide.querySelector('.text_area').style.display = 'block';
                    }
                    // document.querySelectorAll('.main_visual .swiper-slide').forEach((slide) => {
                    //     // slide.classList.remove('active');
                    //     if (slide.classList.contains('swiper-slide-active')) {
                    //         slide.classList.add('active');
                    //         slide.querySelector('.text_area').style.display = 'block';
                    //     }
                    // });
                }, 1000);
            }
            else {
                document.querySelectorAll('.main_visual .swiper-slide').forEach((slide, index) => {
                    slide.querySelector('.text_area').style.display = 'block';
                });
            }
        },
        
        pauseResume () {
            if (this.isPlay) {
                // this.swiper.autoplay.pause();
                this.isPlay = false;
            }
            else {
                // this.swiper.autoplay.resume();
                this.isPlay = true;
            }
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
    .text_area {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        transform: translate(-50%, -50%);
        margin-top: -8px;
        text-align: center;
    }
    .title {
        font: {
            family: Saira Condensed Bold;
            size: 36px;
            weight: 700;
        }
        color: #fff;
    }
    .text {
        margin-top: 6px;
        font: {
            size: 14px;
        }
        color: #fff;
    }
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
        bottom: 6px;
        width: 100%;
        z-index: 30;
        gap: 10px;
        .number {
            font: {
                family: neue haas grotesk display pro;
                size: 12px;
                weight: 600;
            }
            color: #fff;
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
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    text-indent: -9999px;
    overflow: hidden;
    color: #fff;
    &.play {
        &:before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 5px;
            left: 6px;
            width: 2px;
            height: 10px;
            margin: 2px;
            background-color: #fff;
        }
        &:after {
            content: '';
            display: inline-block;
            position: absolute;
            top: 5px;
            right: 6px;
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
            position: absolute;
            top: 6px;
            left: 10px;
            width: 0;
            height: 0;
            border-bottom: 6px solid transparent;
            border-top: 6px solid transparent;
            border-left: 6px solid #fff;
            border-right: 6px solid transparent;
        }
    }
}

@media (min-width: 600px) {
    .main_visual {
        .title {
            font: {
                size: 45px;
            }
        }
        .text {
            // margin-top: 6px;
            font: {
                size: 16px;
            }
        }
    }
}
@media (min-width: 800px) {
    .main_visual {
        .title {
            font: {
                size: 60px;
            }
        }
        .text {
            font: {
                size: 17px;
            }
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

        .title {
            margin-top: 90px;
            opacity: 0;
        }
        .text {
            opacity: 0;
        }
        
        .swiper-slide {
            .slide {
                .title {
                    margin-top: 90px;
                    font: {
                        family: Saira Condensed Bold;
                        size: 72px;
                        weight: 700;
                    }
                    color: #fff;
                    opacity: 0;
                    
                    animation-duration: 0.5s;
                    animation-name: upDowonOpacitySlideout_mainVisual;
                    animation-fill-mode: forwards;
                }
                .text {
                    margin-top: 6px;
                    font: {
                        size: 18px;
                    }
                    color: #fff;
                    opacity: 0;

                    animation-duration: 0.5s;
                    animation-name: opacityout;
                    animation-fill-mode: forwards;
                }
            }

            &.active {
                .slide {
                    .title {
                        opacity: 0;
                        animation-duration: 0.5s;
                        animation-name: upDowonOpacitySlidein_mainVisual;
                        animation-fill-mode: forwards;
                    }
                    .text {
                        opacity: 0;
                        animation-delay: 0.5s;
                        animation-duration: 0.5s;
                        animation-name: opacityIn;
                        animation-fill-mode: forwards;
                    }
                }
            }
        }

            
        
    }
}
</style>