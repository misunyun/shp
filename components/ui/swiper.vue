<template>
<div 
    class="swiper_wrap" 
    :class="type?.toLowerCase()" 
    ref="swiperRef" 
    @mouseenter="swiperMouseEvent($event)" 
    @mouseleave="swiperMouseEvent($event)"
>
    <swiper
        :loop="loop"
        :allowTouchMove="allowTouchMove"
        :centeredSlides="centeredSlides"
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :breakpoints="breakpoints"

        :slidesOffsetBefore="slidesOffsetBefore"
        :slidesOffsetAfter="slidesOffsetAfter"

        :pagination="pagination"
        :navigation="navigation"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @resize="resize"
    >
        <swiper-slide 
            v-for="(slide, index) in state.slides" 
            :style="{ cursor: slide?.to ? 'pointer' : undefined }"
            :key="index" 
            @click="slide?.to ? slideClick(slide) : null"
        >
            <div 
                class="slide" 
                :class="`${type?.toLowerCase()}_slide`"
                v-if="type === 'COUPON'"
            >
                <div class="title" v-if="slide.title">{{slide.title}}</div>
                <div class="type" v-if="slide.type">{{slide.type}}</div>
                <div class="text" v-if="slide.text">{{slide.text}}</div>
                <div class="detail" v-if="slide.count"><span>{{slide.count.use}}</span>/{{slide.count.total}}회</div>
                <div class="detail" v-else>자세히</div>
            </div>
            <div 
                class="slide" 
                @mouseenter="$event.target.classList.add('over')" 
                @mouseleave="$event.target.classList.remove('over')" 
                v-else-if="type === 'FACILITY_GUIDE'"
            >
                <div class="image_wrap">
                    <img :src="slide.imgSrc" alt="" v-if="slide.imgSrc"/>
                </div>
                <div class="type_title">
                    <div class="type" v-if="slide.type">{{slide.type}}</div>
                    <div class="title" v-if="slide.title">{{slide.title}}</div>
                </div>
                <div class="hover">자세히보기</div>
            </div>
            <div 
                class="slide" 
                @mouseenter="$event.target.classList.add('over')" 
                @mouseleave="$event.target.classList.remove('over')" 
                v-else 
            >
                <div class="image_wrap" >
                    <img 
                        :src="slide.imgSrc" 
                        alt="" 
                        v-if="slide.imgSrc"
                        :style="`height: ${thumbnailHeight ?? 'auto'}`"
                    />
                    <video 
                        autoplay loop muted 
                        alt=""
                        playsinline
                        webkit-playsinline=""
                        v-else-if="slide.movSrc"
                        :style="`height: ${thumbnailHeight ?? 'auto'}`"
                    >
                        <source :src="slide.movSrc" type="video/mp4" />
                    </video>
                </div>
                <ul class="events" v-if="slide.events">
                    <li 
                        v-for="(event, index) in slide.events" 
                        :class="event.type" 
                        :key="`${type?.toLowerCase()}_${index}`"
                    >
                        {{ event.name }}
                    </li>
                </ul>
                <div class="type" v-if="slide.type">{{slide.type}}</div>
                <div class="title" v-if="slide.title">{{slide.title}}</div>
                <div class="text" v-if="slide.text">{{slide.text}}</div>
                <div class="count" v-if="slide.count"><strong>{{slide.count.use}}</strong> / {{slide.count.total}}회</div>
                <div class="hover" :style="{ top: prevNextTop }">{{ type === 'MY_PROGRAM'? '자세히보기' : '상담' }}</div>
            </div>
        </swiper-slide>
        
        <button 
            class="btn_prev" 
            @click="swiper.slidePrev()"
            :style="{ top: prevNextTop }"
            v-if="isMouseOver && state.slides.length > 3"
        >
            이전 
        </button>
        <button 
            class="btn_next" 
            @click="swiper.slideNext()"
            :style="{ top: prevNextTop }"
            v-if="isMouseOver && state.slides.length > 3"
        >
            다음 
        </button>
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

        const swiperRef = ref(null);

        const swiperProgressBar = ref(null);
        const state = reactive(props);
        return {
            store,
            swiperProgressBar,
            modules: [ Autoplay, Pagination, Navigation ],
            state,
            swiperRef,
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {

        type: {
            type: String,
            default: 'NORMAL',
        },
        loop: false,
        centeredSlides: {
            type: Boolean,
            default: true,
        },
        slidesPerView: 'auto',
        spaceBetween: undefined,
        breakpoints: undefined,
        slidesOffsetBefore: undefined,
        slidesOffsetAfter: undefined,

        autoplayDelay: undefined,
        pagination: undefined,
        navigation: false,
        allowTouchMove: false,
        slides: undefined,
    },
    data() {
        return {
            swiper: null,
            activeIndex: 0,
            slideLength: null,
            prevNextTop: '50%',
            isMouseOver: false,
            thumbnailHeight: null,
        }
    },
    mounted() {
    },
    onUnmounted() {
    },
    methods: {
        async slideClick(slide) {
            if (slide.to) {
                const router = useNuxtApp().$router;
                await router.push(slide.to);
            }
        },
        swiperMouseEvent(event) {
            // 가려진 영역에 마우스 오버 시 반영되지 않게 조건 처리
            if (!event.target.classList.contains('swiper-backface-hidden')) {
                if (event.type === 'mouseover' && this.store.windowInnerWidth > 1124) {
                    // MY 프로그램, 추천 프로그램은 텍스트 컨텐츠가 있어 이미지의 높이 값을 따로 계산
                    if (this.type === 'MY_PROGRAM' || this.type === 'RECOMMEND') {
                        if (this.swiper && this.swiper.slides) {
                            this.prevNextTop = this.swiper.slides[0].children[0].children[0].clientHeight / 2 + 'px';
                        }
                    }
                    this.isMouseOver = true;
                }
                else if (event.type === 'mouseleave') {
                    this.isMouseOver = false;
                }
            }
            else {
                this.isMouseOver = false;
            }
        },
        onSwiper (swiper) {
            this.swiper = swiper;
            if (!this.slideLength) {
                this.slideLength = swiper.slides.length;
            }
            this.swiper.hostEl.removeEventListener("mouseover", this.swiperMouseEvent);
            this.swiper.hostEl.removeEventListener("mouseout", this.swiperMouseEvent);
            this.swiper.hostEl.addEventListener("mouseover", this.swiperMouseEvent);
            this.swiper.hostEl.addEventListener("mouseout", this.swiperMouseEvent);
            if (this.type === 'RECOMMEND') {// 추천프로그램
                this.thumbnailHeight = (this.swiper.slidesSizesGrid[0] * 66.77631 / 100) + 'px';
            }
        },
        resize (swiper) {
            if (this.type === 'RECOMMEND') {// 추천프로그램
                this.thumbnailHeight = (this.swiper.slidesSizesGrid[0] * 66.77631 / 100) + 'px';
            }
        },
        onSlideChange (swiper) {
            this.activeIndex = swiper.realIndex;
        },
    },
}
</script>

<style lang="scss">
@media (min-width: 751px) {
    .swiper_wrap {
        &.my_program {
            .swiper-pagination {
                display: none;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.swiper_wrap {
    position: relative;
    .btn_prev, .btn_next {
        transform: translate(0, -50%);
    }

    .swiper {
        padding: 0 20px;
    }

    .swiper {
        &::before {
            content: '';
            display: none;
            position: absolute; 
            top: 0; 
            left: -100%; 
            width: 100%; 
            height: 100%; 
            margin-left: 20px;
            background-color: #fff;
            z-index: 99;
        }
        &::after {
            content: '';
            display: none;
            position: absolute; 
            top: 0; 
            right: -100%; 
            width: 100%; 
            height: 100%;
            margin-right: 20px;
            background-color: #fff;
            z-index: 99;
        }
    }

    .image_wrap {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        img, video {
            object-fit: cover;
        }
    }

    &.coupon {
        .swiper-slide {
            
            width: 278px;

            .slide {
                height: 110px;
                padding: 13px 80px 0 20px;
                background: {
                    image: url("/assets/images/png/coupon_bg_01.png");
                    repeat: no-repeat;
                    position: 0 center;
                }
                box-sizing: border-box;
            }
            .title {
                font-size: 18px;
            }
            .type {
                margin: 6px 0 0 0;
                font: {
                    size: 15px;
                }
                color: $font-color-dark-ultra;
            }
            .text {
                font-size: 14px;
            }
            .detail {
                position: absolute;
                top: 48px;
                left: 220px;
                font-size: 14px;
                color: $font-color-light;
                > span {
                    color: $font-color-dark-ultra;
                }
            }
        }
    }

    &.recommend {
        .type {
            margin-top: 16px;
        }
    }

    &.facility_guide {
        .type, .title {
            margin: 0;
            color: #fff;
        }
        .type {
            font: {
                family: Saira Condensed Bold;
                size: 32px;
                weight: 700;
            }
            color: #fff;
            letter-spacing: -1%;
        }
        .title {
            font: {
                size: 15px;
                weight: 700;
            }
            color: #fff;
        }
        .type_title {
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    }

    .hover {
        display: none;
    }

    .slide {
        position: relative;
    }
    .type {
        margin-top: 20px;
        font: {
            size: 15px;
            weight: 400;
        }
        color: $font-color-light;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .title {
        margin-top: 7px;
        font: {
            size: 20px;
            weight: 700;
        }
        color: $font-color-dark-ultra;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .text {
        margin-top: 8px;
        font: {
            size: 15px;
            weight: 400;
        }
        color: $font-color-light;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .count {
        margin-top: 17px;
        font: {
            size: 16px;
            weight: 400;
        }
        color: $font-color-dark-ultra;
        > strong {
            font: {
                weight: 700;
            }
        }
    }
    .events {
        display: flex;
        margin-top: 12px;
        li {
            display: flex;
            align-items: center;
            height: 20px;
            max-height: 20px;
            padding: 1px 6px 0;
            margin-left: 4px;
            border: {
                style: solid;
                width: 1px;
                color: $border-color-gray;
                radius: 4px;
            }
            font: {
                size: 12px;
                weight: 400;
            }
            color: $font-color-light;
            box-sizing: border-box;
            &:first-child {
                margin-left: 0;
            }
            &.active {
                background-color: $header-background-color;
                border: {
                    color: $header-background-color;
                }
                color: #fff;
            }
            &.pay {
                border: {
                    color: $border-color-black;
                }
                color: $font-color-dark-ultra;
            }
        }
    } 
}


@media (min-width: 1125px) {
    .swiper_wrap {
        max-width: 1240px;
        padding: 0 $screen-1125-side-width-slide 0 0;
        margin: 0 auto;
        > div {
            overflow: unset;
        }
        .swiper {
            &:before {
                display: block;
            }
            &:after {
                display: block;
            }
        }



        &.my_program, &.recommend {
            .slide {
                img, video {
                    animation-duration: 0.2s;
                    animation-name: blurSlideout;
                    animation-fill-mode: forwards;
                }
                .hover {
                    animation-duration: 0.2s;
                    animation-name: upDowonOpacitySlideout;
                    animation-fill-mode: forwards;
                }
                &.over {
                    img, video {
                        animation-duration: 0.5s;
                        animation-name: blurSlidein;
                        animation-fill-mode: forwards;
                    }
                    .hover {
                        animation-duration: 0.5s;
                        animation-name: upDowonOpacitySlidein;
                        animation-fill-mode: forwards;
                    }
                }
            }
        }

        &.facility_guide {
            .image_wrap {
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    background-color: #000;
                    opacity: 0;
                    animation-duration: 0.5s;
                    animation-name: opacityOut_4;
                    animation-fill-mode: forwards;
                }
            }
            .type {
                font: {
                    size: 48px;
                }
            }
            .title {
                font: {
                    size: 18px;
                }
            }
            .slide {

                .type_title {
                    margin-top: 0;
                    animation-duration: 0.5s;
                    animation-name: upDowonSlideout;
                    animation-fill-mode: forwards;
                }
                .hover {
                    display: block;
                    margin-top: 44px;
                    opacity: 0;
                    animation-duration: 0.3s;
                    animation-name: opacityOut;
                    animation-fill-mode: forwards;
                }

                &.over {
                    .type_title {
                        animation-duration: 0.2s;
                        animation-name: upDowonSlidein;
                        animation-fill-mode: forwards;
                    }
                    .hover {
                        opacity: 0;
                        animation-delay: 0.2s;
                        animation-duration: 0.3s;
                        animation-name: opacityIn;
                        animation-fill-mode: forwards;
                    }
                    .image_wrap {
                        &:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            background-color: #000;
                            opacity: 0.5;

                            animation-duration: 0.3s;
                            animation-name: opacityIn_4;
                            animation-fill-mode: forwards;
                        }
                    }
                }
            }
        }

        

        .hover {
            display: inline-block;
            position: absolute;
            top: v-bind(prevNextTop);
            left: 50%;
            transform: translate(-50%, -50%);
            align-content: center;
            height: 40px;
            padding: 0 24px;
            margin-top: 20px;
            background-color: $header-background-color;
            border-radius: 20px;
            font-size: 15px;
            color: #fff;
            text-align: center;
        }

        &.my_program {
            .type {
                font-size: 16px;
            }
            .title {
                margin-top: 6px;
                font-size: 22px;
            }
            .text {
                margin-top: 10px;
                font-size: 16px;
            }
            .count {
                font-size: 18px;
                margin-top: 20px;
            }
        }


        &.coupon {
            .swiper-slide {
                width: 304px;
                .slide {
                    height: 115px;
                    background-image: url("/assets/images/png/coupon_bg_01_pc.png");
                }
                .title {
                    font-size: 20px;
                }
                .type {
                    font-size: 16px;
                }
                .text {
                    font-size: 15px;
                }
                .detail {
                    left: 245px;
                    font-size: 15px;
                }
            }
        }

        &.recommend {
            .events {
                margin-top: 20px;
                li {
                    height: 24px;
                    max-height: 24px;
                    padding: 0 8px;
                    font: {
                        size: 13px;
                        weight: 400;
                    }
                }
            }
            .type {
                font-size: 16px;
            }
            .title {
                margin-top: 6px;
                font-size: 22px;
            }
        }
        
    }
}
@media (min-width: 1176px) {
    .swiper_wrap {
        padding: 0 $screen-1176-side-width-slide 0 0;
    }
}
@media (min-width: 1440px) {
    .swiper_wrap {
        padding: 0 $screen-1440-side-width-slide 0 0;
    }
}


@media (min-width: 375px) {
    .swiper_wrap {
        &.recommend {
            .swiper-slide .slide {
                padding: 0;
            }
        }
    }
}
@media (min-width: 751px) {
    .pc {
        .swiper_wrap {
            &.my_program, &.coupon, &.recommend, &.facility_guide {
                .btn_prev {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    background: {
                        color: #fff;
                        image: url("/assets/images/svg/icon/arrow_right_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                    transform: rotate(180deg) translate(0, 50%);
                    border-radius: 20px;
                    box-shadow: 0px -5px 8px 0px #00000026;
                    text-indent: -9999px;
                    z-index: 999;
                }
                .btn_next {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 40px;
                    height: 40px;
                    background: {
                        color: #fff;
                        image: url("/assets/images/svg/icon/arrow_right_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                    border-radius: 20px;
                    box-shadow: 0px 5px 8px 0px #00000026;
                    text-indent: -9999px;
                    z-index: 999;
                }
            }
        }
    }
}
</style>