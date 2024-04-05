<template>
    <div class="parallax_wrap">
        <div class="parallax">

            <div class="main_header">
                <button
                    class="select_store"
                    :class="{
                        vantt: store.storeName === 'VANTT',
                        sds: store.storeName === 'SDS 잠실',
                        leisure: store.storeName === '삼성레포츠센터',
                    }"
                    @click="openSelectStore"
                >
                    {{ store.storeName }}
                </button>
                
                <client-only><!-- Nuxt 사용 시 적용 : CSR 적용 시 필요 없음 -->
                    <vue-bottom-sheet
                        ref="selectStore"
                        :max-width="rootStore.windowInnerWidth"
                    >
                        <div style="height: 250px; padding: 20px">
                            {{ rootStore.windowInnerWidth }} AAA
                            <ul>
                                <li><button @click="selectStoreValue">전자화성 DSR</button></li>
                                <li><button @click="selectStoreValue">SDS 잠실</button></li>
                                <li><button @click="selectStoreValue">삼성레포츠센터</button></li>
                                <li><button @click="selectStoreValue">VANTT</button></li>
                            </ul>
                        </div>
                    </vue-bottom-sheet>
                </client-only>
                
                <div class="util">
                    <span class="store_status">쾌적</span>
                    
                    <!-- 알림이 있을때 active 클래스 추가 -->
                    <NuxtLink
                        :to="{
                            path: '/notice',
                            query: { dummyData: 'AAA' },
                            state: { data: 'TEST' }
                        }"
                        class="notice active"
                        title="알림"
                    >
                        알림
                    </NuxtLink>

                    <div class="photo_wrap">
                        <NuxtLink
                            to="/notice"
                            title="이다인"
                        >
                            <!-- 사용자 이미지가 있을때 -->
                            <img
                                src="/assets/images/dummy/user_photo_001.jpg"
                                alt="이다인"
                                class="photo"
                            />
                            <!-- 사용자 이미지가 없을때 -->
                            <!-- <span class="none_photo">다인</span> -->
                        </NuxtLink>
                    </div>
                    
                </div>
            </div>
            
            <div ref="parallax">
                <!--
                    주의 사항
                    PC 버전 슬라이드 링크가 있을때 마우스오버 시 cursor 변경
                    slides: [ to: 값이 존재 할때 마우스오버 시 cursor가 변경 ]
                -->
                <UiMainVisual 
                    :navigation="true"
                    :allowTouchMove="true"
                    :pauseOnMouseEnter="false"
                    :autoplayDelay="5000"
                    :slides="[
                        {
                            to: null,
                            imgSrc: 'https://picsum.photos/200?1',
                            movUrl: '',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            imgSrc: null,
                            movSrc: 'https://vjs.zencdn.net/v/oceans.mp4',
                        },
                        {
                            imgSrc: 'https://picsum.photos/300?1',
                            movUrl: null,
                        },
                        {
                            imgSrc: 'https://picsum.photos/400?1',
                        },
                        {
                            imgSrc: 'https://picsum.photos/500?1',
                        },

                    ]"
                />

                <div class="icon_list_wrap only_mobile">
                    <ul class="icon_list">
                        <li><NuxtLink class="coupon" to="/works">일일쿠폰</NuxtLink></li>
                        <li><NuxtLink class="pb" to="/works">PB상품/음료</NuxtLink></li>
                        <li><NuxtLink class="golf" to="/works">골프타석권</NuxtLink></li>
                        <li><NuxtLink class="counsel" to="/works">상담신청</NuxtLink></li>
                        <li><NuxtLink class="locker" to="/works">보관함</NuxtLink></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>

    <div class="container">
        <div class="contents">

            <!-- pc 전용 -->
            <div class="icon_list_wrap">
                
                <ul class="icon_list">
                    <li><NuxtLink class="coupon" to="/works"><span />일일쿠폰</NuxtLink></li>
                    <li><NuxtLink class="pb" to="/works"><span />PB상품/음료</NuxtLink></li>
                    <li><NuxtLink class="golf" to="/works"><span />골프타석권</NuxtLink></li>
                    <li><NuxtLink class="counsel" to="/works"><span />상담신청</NuxtLink></li>
                    <li><NuxtLink class="locker" to="/works"><span />보관함</NuxtLink></li>
                </ul>

                <div class="side">
                    <div class="side_header">
                        <span class="member_type">정회원</span>
                        <div>
                            <div class="member_name">
                                <strong>이다인</strong>
                            </div>
                        </div>
                        <div class="date">
                            <span>2024.03.06</span> <span>오전 10:30</span>
                        </div>
                    </div>
                    <ul class="count_info_pc">
                        <li><NuxtLink>보관함(개인)<span class="count">26</span></NuxtLink></li>
                        <li><NuxtLink>공용락커<span class="count">35</span></NuxtLink></li>
                        <li><NuxtLink><div class="exclamation_mark">총 입장횟수</div> <span class="count">7</span></NuxtLink></li>
                        <li><NuxtLink>오늘의 일정<span class="count">7</span></NuxtLink></li>
                    </ul>
                </div>
            </div>

            <!-- mobile 전용 -->
            <div class="only_mobile">
                <div class="user_status">정회원 <span class="split">|</span> 2024.03.06 오전 10:30 입장</div>
                <ul class="count_info_mobile">
                    <li><NuxtLink>보관함(개인)<span class="count">26</span></NuxtLink></li>
                    <li><NuxtLink>공용락커<span class="count">35</span></NuxtLink></li>
                    <li><NuxtLink><div class="exclamation_mark">총 입장횟수</div> <span class="count">7</span></NuxtLink></li>
                </ul>
                <div class="schedule_list_wrap">
                    <NuxtLink class="today">오늘의 일정</NuxtLink>
                    <ul class="schedule_list">
                        <li><NuxtLink><span class="subject">기구 필라테스 단체 강습 기구 필라테스 단체 강습 기구 필라테스 단체 강습 기구 필라테스 단체 강습</span> <span class="date">오전 11:00</span></NuxtLink></li>
                        <li><NuxtLink><span class="subject">골프 개인 강습</span> <span class="date">오후 3:00</span></NuxtLink></li>
                        <li><NuxtLink><span class="subject">요가 개인 강습</span> <span class="date">오후 6:30</span></NuxtLink></li>
                    </ul>
                </div>
            </div>

            <div class="article">
                <UiMainTitle
                    title="MY 프로그램"
                    text="다인님이 진행 중인 <strong class='bold'>3개 프로그램</strong>이에요"
                    class="mb_20"
                />

                <!--
                    수정 금지 ::: style 관련되어 있음
                    type="MY_PROGRAM"

                    PC 버전 슬라이드 링크가 있을때 마우스오버 시 cursor 변경
                    slides: [ to: 값이 존재 할때 마우스오버 시 cursor가 변경 ]
                -->
                <UiSwiper
                    type="MY_PROGRAM"
                    :spaceBetween="20"
                    :centeredSlides="false"
                    :allowTouchMove="true"
                    :pagination="true"
                    :breakpoints="{
                        751: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        1125: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                    }"
                    :slides="[
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/my_program_01.png',
                            type: '필라테스',
                            title: '기구 필라테스 단체 강습',
                            text: '2024.03.08 ~ 2024.03.31(1개월)',
                            count: {
                                use: 3,
                                total: 12,
                            },
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            src: '/_nuxt/assets/images/png/my_program_02.png',
                            type: '골프',
                            title: '골프 개인 강습',
                            text: '2024.03.08 ~ 2024.03.31(1개월)',
                            count: {
                                use: 0,
                                total: 3,
                            },
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/my_program_03.png',
                            type: '요가',
                            title: '요가 개인 강습',
                            text: '2024.03.08 ~ 2024.03.31(1개월)',
                            count: {
                                use: 8,
                                total: 20,
                            },
                        },


                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            src: '/_nuxt/assets/images/png/my_program_02.png',
                            type: '골프',
                            title: '골프 개인 강습',
                            text: '2024.03.08 ~ 2024.03.31(1개월)',
                            count: {
                                use: 0,
                                total: 3,
                            },
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/my_program_03.png',
                            type: '요가',
                            title: '요가 개인 강습',
                            text: '2024.03.08 ~ 2024.03.31(1개월)',
                            count: {
                                use: 8,
                                total: 20,
                            },
                        },
                    ]"
                />
            </div>



            <div class="article">
                <UiMainTitle
                    title="쿠폰"
                    :more="{ id: 'MORE_COUPON' }"
                    :callback="(data) => console.log(data)"
                    class="mb_20"
                />

                <!--
                    수정 금지 ::: style 관련되어 있음
                    type="COUPON"
                -->
                <UiSwiper
                    type="COUPON"
                    :slidesPerView="'auto'"
                    :slidesOffsetBefore="0"
                    :slidesOffsetAfter="0"
                    :spaceBetween="8"
                    :centeredSlides="false"
                    :allowTouchMove="true"
                    :breakpoints="{
                        1125: {
                            spaceBetween: 16,
                        }
                    }"
                    :slides="[
                        {
                            to: null,
                            title: '무료',
                            type: '반트 웰컴드링크 무료 쿠폰',
                            text: '2023.09.07~11.30',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            title: '3회 무료',
                            type: '반트 골프 타석 3회 이용권',
                            text: '2023.09.07~11.30',
                        },
                        {
                            to: null,
                            title: '10%',
                            type: '반트 헬스 첫 등록 10%할인',
                            text: '2023.09.07~11.30',
                        },
                        {
                            to: null,
                            title: '10%',
                            type: '반트 헬스 첫 등록 10%할인',
                            text: '2023.09.07~11.30',
                        },
                        {
                            to: null,
                            title: '10%',
                            type: '반트 헬스 첫 등록 10%할인',
                            text: '2023.09.07~11.30',
                        },
                    ]"
                />
            </div>

            <div class="article banner">
                <img src="/_nuxt/assets/images/png/main_contents_banner_001.png" alt="" />
            </div>

            <div class="article">
                <UiMainTitle
                    title="추천 프로그램"
                    text="다인님께 딱 맞는 프로그램을 추천해드릴게요"
                    :more="{ id: 'MORE_RECOMMEND' }"
                    :callback="(data) => console.log(data)"
                    class="mb_20"
                />
                <UiSwiper
                    type="RECOMMEND"
                    :slidesOffsetBefore="0"
                    :slidesOffsetAfter="0"
                    :slidesPerView="1.34"
                    :spaceBetween="8"
                    :centeredSlides="false"
                    :allowTouchMove="true"
                    :breakpoints="{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 8,
                        },
                        321: {
                            slidesPerView: 1.34,
                            spaceBetween: 8,
                        },
                        376: {
                            slidesPerView: 1.4,
                            spaceBetween: 8,
                        },
                        530: {
                            slidesPerView: 1.6,
                            spaceBetween: 8,
                        },
                        620: {
                            slidesPerView: 2.1,
                            spaceBetween: 8,
                        },
                        751: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        1125: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        }
                    }"
                    :slides="[
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/recommend_01.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '골프타석권',
                            title: '골프 강습 Tour',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            src: '/_nuxt/assets/images/png/recommend_02.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '골프',
                            title: '골프 개인 강습',
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/recommend_03.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '요가',
                            title: '요가 개인 강습',
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/recommend_04.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '필라테스',
                            title: '기구 필라테스 단체 강습',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            src: '/_nuxt/assets/images/png/recommend_05.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '골프',
                            title: '골프 개인 강습',
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/recommend_06.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '요가',
                            title: '요가 개인 강습',
                        },
                    ]"
                />
            </div>




            <div class="article type1">
                <UiMainTitle
                    title="시설안내"
                    :more="{ id: 'MORE_FACILITY_GUIDE' }"
                    :callback="(data) => console.log(data)"
                    class="mb_20"
                />
                <UiSwiper
                    type="FACILITY_GUIDE"
                    :slidesOffsetBefore="0"
                    :slidesOffsetAfter="0"
                    :slidesPerView="1.68"
                    :spaceBetween="8"
                    :centeredSlides="false"
                    :allowTouchMove="true"
                    :breakpoints="{
                        0: {
                            slidesPerView: 1.68,
                            spaceBetween: 8,
                        },
                        376: {
                            slidesPerView: 1.8,
                            spaceBetween: 8,
                        },
                        530: {
                            slidesPerView: 2.1,
                            spaceBetween: 8,
                        },
                        620: {
                            slidesPerView: 2.5,
                            spaceBetween: 8,
                        },
                        751: {
                            slidesPerView: 3.2,
                            spaceBetween: 8,
                        },
                        1125: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                    }"
                    :slides="[
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/facility_guide_01.png',
                            type: 'GYM',
                            title: '헬스장',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            src: '/_nuxt/assets/images/png/facility_guide_02.png',
                            type: 'AQUATICS',
                            title: '수영장',
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/facility_guide_03.png',
                            type: 'GOLF',
                            title: '골프 39타석',
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/facility_guide_04.png',
                            type: 'SPA',
                            title: '스파',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            src: '/_nuxt/assets/images/png/facility_guide_05.png',
                            type: 'RECEPTION',
                            title: '리셉션',
                        },
                        {
                            to: null,
                            src: '/_nuxt/assets/images/png/facility_guide_06.png',
                            type: 'LOUNGE',
                            title: '라운지',
                        },
                    ]"
                />
            </div>

            <div class="article" :class="{ up_750: rootStore.windowInnerWidth > 750 }">
                <UiMainTitle
                    title="공지사항"
                    :more="{ id: 'MORE_NOTIFICATION' }"
                    :callback="(data) => console.log(data)"
                    class="mb_20"
                />

                <div class="notification_customer_center">
                    <ul class="notification_list">
                        <li><NuxtLink><span class="subject">신규개설 GX 프로그램 안내</span> <span class="date">2024.01.15</span></NuxtLink></li>
                        <li><NuxtLink><span class="subject">시설 정비 관련 휴업 안내 (12/29~1/2)</span> <span class="date">2023.12.15</span></NuxtLink></li>
                        <li><NuxtLink><span class="subject">신규개설 프로그램 안내</span> <span class="date">2023.12.01</span></NuxtLink></li>
                    </ul>

                    
                    <UiMainTitle
                        title="고객센터"
                        class="mb_20 only_mobile"
                        :class="rootStore.windowInnerWidth < 1125? 'mt_60' : undefined"
                    />
                    <ul class="customer_center">
                        <li>
                            <a href="tel:1234-5678" class="tel_ring">
                                <div class="text">VANTT</div>
                                <div class="text">회원권 문의</div>
                                <div class="tel">1234 - 5678</div>
                            </a>
                        </li>
                        <li>
                            <a href="tel:1234-5678" class="headset">
                                <div class="text">VANTT</div>
                                <div class="text">매니지먼트</div>
                                <div class="tel">1234 - 5678</div>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                
            </div>


        </div>
    </div>



    <div class="menu_wrap only_mobile">
        <ul class="menu">
            <!-- 현재 페이지 class active 추가 -->
            <li><NuxtLink class="all">전체</NuxtLink></li>
            <li><NuxtLink class="home active">홈</NuxtLink></li>
            <li><NuxtLink class="qr">출입</NuxtLink></li>
            <li><NuxtLink class="reserve">예약</NuxtLink></li>
            <li><NuxtLink class="my">마이</NuxtLink></li>
        </ul>
    </div>

</template>

<script>
import { ref } from 'vue';
import { useDefaultStore } from "~/stores";
import { useMainStore } from "~/stores/main";

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default {
    setup() {

        definePageMeta({
            pageName: '메인 페이지',
            explain: '설명',
            layout: "common", 
        });

        const rootStore = useDefaultStore();
        const store = useMainStore();

        const parallax = ref(null);
        const selectStore = ref(null);

        return {
            rootStore,
            store,
            parallax,
            selectStore,
        }
    },
    components: {
        VueBottomSheet,
    },
    data() {
        return {
            parallaxOpacity: 0,
        }
    },
    mounted() {
        document.removeEventListener('scroll', this.handleScroll);
        document.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    onUnmounted() {
        document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        openSelectStore () {
            if (this.rootStore.windowInnerWidth < 1125) {
                this.$refs.selectStore.open();
            }
        },
        selectStoreValue (event) {
            this.store.eventListener({ name: "UPDATE_STORE_NAME", data: event.currentTarget.textContent });
            this.$refs.selectStore.close();
        },
        handleScroll() {
            // console.log('this.rootStore.isMobile ::: ' + this.rootStore.isMobile);
            if (this.rootStore.isMobile) {
                const scrollY = window.scrollY;
                const incrementSize = 115;// 노출되지 않는 영역의 height 값에 따라 수치 조절
                const increment = scrollY / (incrementSize - 100);

                if (this.$refs.parallax?.style) {
                    this.$refs.parallax.style.transform = `translate3d(0px, ${increment * 7}px, 0px)`;
                }
                this.parallaxOpacity = increment / 30;
            }
            else {
                if (this.$refs.parallax?.style) {
                    this.$refs.parallax.style.transform = `translate3d(0px, 0px, 0px)`;
                    this.parallaxOpacity = 0;
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>

.main_header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 20px 0;
    background-color: $header-background-color;
    font-weight: 500;
    color: #fff;
    z-index: 5;
    .select_store {
        font: {
            size: 16px;
            weight: 500;
        }
        color: #fff;
        &:after {
            content: "";
            display: inline-block;
            width: 20px;
            height: 5px;
            background-image: url("/assets/images/svg/icon/arrow_down_white.svg");
            background-repeat: no-repeat;
            background-position: 0;
            vertical-align: middle;
        }
        &.vantt {
            padding: 0 0 0 25px;
            background-image: url("/assets/images/svg/icon/logo_vantt.svg");
            background-repeat: no-repeat;
            background-position: 0;
        }
        &.sds {
            padding: 0 0 0 25px;
            background-image: url("/assets/images/svg/icon/logo_sds.svg");
            background-repeat: no-repeat;
            background-position: 0;
        }
        &.leisure {
            padding: 0 0 0 25px;
            background-image: url("/assets/images/svg/icon/logo_leisure.svg");
            background-repeat: no-repeat;
            background-position: 0;
        }
    }
    .util {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        text-align: right;

        .photo_wrap {
            width: 28px;
            height: 28px;
            margin-left: 16px;
            .photo,
            .none_photo {
                width: 28px;
                height: 28px;
                border-radius: 15px;
                // animation
                // animation-duration: 0.5s;
                // animation-name: blurSlideout;
                // &:hover {
                //     animation-duration: 0.5s;
                //     animation-name: blurSlidein;
                //     animation-fill-mode: forwards;
                // }
            }
            .none_photo {
                display: flex;
                align-items: center;
                justify-content: center;
                font: {
                    size: 12px;
                    weight: 400;
                }
                background-color: $active-color;
                text-align: center;
            }
        }
        .notice {
            display: block;
            position: relative;
            width: 24px;
            height: 24px;
            margin-left: 15px;
            background-image: url("/assets/images/svg/icon/schedule_white.svg");
            background-repeat: no-repeat;
            background-position: center;
            text-align: left;
            text-indent: -9999px;
            overflow: hidden;
        }
        .notice {
            background-image: url("/assets/images/svg/icon/notice_white.svg");
            &.active {
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 4px;
                    height: 4px;
                    background-color: #ff4b41;
                    border-radius: 2px;
                }
            }
        }
    }
    .store_status {
        display: inline-block;
        min-width: 47px;
        height: 20px;
        padding: 3px 8px 0 8px;
        margin-top: 2px;
        background-color: rgba(143, 239, 253, 0.1);
        border-radius: 4px;
        font: {
            size: 12px;
            weight: 500;
        }
        color: #8feffd;
        text-align: center;
        vertical-align: middle;
        &:after {
            content: "";
            display: inline-block;
            width: 12px;
            height: 14px;
            margin-left: 5px;
            background-image: url("/assets/images/svg/icon/exclamation_mark_blue.svg");
            background-repeat: no-repeat;
            vertical-align: middle;
        }
    }
}

.parallax_wrap {
    position: relative;
    .parallax {
        width: 100%;
        height: 100%;
        padding: 60px 0 0 0;
        background-color: #000;
        color: #fff;
        // scroll 적용 시 상단 어두워지는 영역
        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0; 
            right: 0; 
            background-color: #000;
            pointer-events: none;
            opacity: v-bind(parallaxOpacity);
            z-index: 10;
        }
    }
    .icon_list_wrap {
        height: 161px;
    }
    .icon_list {
        display: flex;
        justify-content: center;
        min-width: 40px;
        height: 118px;
        padding-top: 22px;
        > li {
            flex: 1;
        }
        
        a {
            display: block;
            width: 70px;
            padding: 50px 0 0;
            margin: 0 auto;
            font: {
                size: 12px;
                weight: 400;
            }
            color: #fff;
            text-align: center;
            &.coupon {
                background: {
                    image: url("/assets/images/svg/icon/coupon_white.svg");
                    repeat: no-repeat;
                    position: center 2px;
                }
            }
            &.pb {
                background: {
                    image: url("/assets/images/svg/icon/pb_white.svg");
                    repeat: no-repeat;
                    position: center 2px;
                }
            }
            &.golf {
                background: {
                    image: url("/assets/images/svg/icon/golf_white.svg");
                    repeat: no-repeat;
                    position: center 2px;
                }
            }
            &.counsel {
                background: {
                    image: url("/assets/images/svg/icon/counsel_white.svg");
                    repeat: no-repeat;
                    position: center 2px;
                }
            }
            &.locker {
                background: {
                    image: url("/assets/images/svg/icon/locker_white.svg");
                    repeat: no-repeat;
                    position: center 2px;
                }
            }
        }
    }
}


.container {
    position: relative;
    // max-width: 1240px;
    margin-top: -43px;
    // margin: -43px auto 0;
    background-color: #fff;
    border: {
        radius: 30px 30px 0 0;
    }
    z-index: 10;
}
.contents {
    position: relative;
    // max-width: 1240px;
    // margin-top: -43px;
    margin: 0 auto;
    padding: 16px 0 0;



    // pc 사용
    .icon_list_wrap {
        display: none;
        position: relative;
        // height: 10px;
        max-width: 1240px;
        margin: 0 auto;
        // background-color: #f00;
        .side {
            position: absolute; 
            top: 216px; 
            right: 20px; 
            width: 125px; 
            height: 530px; 
            background: {
                image: url("/assets/images/png/side_bg_small.png");
                repeat: no-repeat;
                position: center;
            }
            z-index: 10;
            .side_header {
                width: 100px;
                margin: 0 auto;
                text-align: center;
            }
            .member_type {
                display: inline-block;
                align-content: center;
                min-width: 50px;
                height: 24px;
                padding: 0 4px;
                margin: 32px auto 0;
                background-color: $font-color-dark-ultra;
                border-radius: 4px;
                color: #fff;
            }
            .member_name {
                display: inline-block;
                position: relative;
                padding: 0 18px 0 0;
                margin-top: 8px;
                width: auto;
                max-width: 100%;
                font: {
                    size: 22px;
                    weight: 700;
                }
                color: $font-color-dark-ultra;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                &:after {
                    content: '님';
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }
            .date {
                min-height: 24px;
                padding: 4px 5px 2px 5px;
                margin-top: 10px;
                background-color: #EEF0F8;
                border-radius: 4px;
                color: $font-color-light;
                > span {
                    display: inline-block;
                }
            }
        }
    }
    .icon_list {
        display: flex;
        justify-content: center;
        // min-width: 40px;
        // height: 118px;
        width: 800px;
        // padding-top: 22px;
        margin: 0 auto;
        > li {
            flex: 1;
        }
        
        a {
            display: block;
            position: relative;
            width: 80px;
            min-height: 116px;
            padding: 98px 0 0;
            margin: 0 auto;
            font: {
                size: 15px;
                weight: 400;
            }
            color: $font-color-dark-ultra;
            text-align: center;
            
            > span {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 80px;
                height: 80px;
                border: {
                    radius: 40px;
                }
            }

            > span {
                animation-duration: 0.5s;
                animation-name: upDowonShadowSlideout;
            }

            &:hover {
                > span {
                    animation-duration: 0.5s;
                    animation-name: upDowonShadowSlidein;
                    animation-fill-mode: forwards;
                }
            }




            &.coupon {
                > span {
                    background: {
                        image: url("/assets/images/svg/icon/coupon_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
            }
            &.pb {
                > span {
                    background: {
                        image: url("/assets/images/svg/icon/pb_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
            }
            &.golf {
                > span {
                    background: {
                        image: url("/assets/images/svg/icon/golf_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
            }
            &.counsel {
                > span {
                    background: {
                        image: url("/assets/images/svg/icon/counsel_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
            }
            &.locker {
                > span {
                    background: {
                        image: url("/assets/images/svg/icon/locker_black.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
            }
        }
    }




    .user_status {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        margin: 0 20px;
        background-color: $header-background-color;
        border: {
            radius: 20px;
        }
        font: {
            size: 12px;
            weight: 400;
        }
        color: #fff;
        .split {
            display: inline-block;
            width: 1px;
            height: 10px;
            margin: 0 10px;
            background-color: #fff;
            text-indent: -9999px;
            
        }
    }
    .count_info_pc {
        margin: 49px auto 0;
        > li {
            margin-top: 33px;
            &:first-child {
                margin-top: 0;
            }
        }
        a {
            display: block;
            font: {
                size: 14px;
                weight: 400;
            }
            color: $font-color-light;
            text-align: center;
            .exclamation_mark {
                &:after {
                    content: "";
                    display: inline-block;
                    width: 14px;
                    height: 17px;
                    margin-left: 5px;
                    background-image: url("/assets/images/svg/icon/exclamation_mark_gray.svg");
                    background-repeat: no-repeat;
                    vertical-align: middle;
                }
            }
        }
        .count {
            display: block;
            margin-top: 5px;
            font: {
                size: 24px;
                weight: 700;
            }
            color: $font-color-dark-ultra;
        }
    }
    .count_info_mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px 20px 0;
        > li {
            flex: 1;
            position: relative;
            &:nth-child(2) {
                &:before {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 1px;
                    height: 40px;
                    background-color: #dedede;
                }
                &:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 1px;
                    height: 40px;
                    background-color: #dedede;
                }
            }
        }
        a {
            display: block;
            font: {
                size: 14px;
                weight: 400;
            }
            color: $font-color-light;
            text-align: center;
            .exclamation_mark {
                &:after {
                    content: "";
                    display: inline-block;
                    width: 14px;
                    height: 17px;
                    margin-left: 2px;
                    background-image: url("/assets/images/svg/icon/exclamation_mark_gray.svg");
                    background-repeat: no-repeat;
                    vertical-align: middle;
                }
            }
        }
        .count {
            display: block;
            margin-top: 5px;
            font: {
                size: 24px;
                weight: 700;
            }
            color: $font-color-dark-ultra;
        }
    }
    
    .schedule_list_wrap {
        padding: 24px 20px 12px;
        margin: 20px 20px 0;
        background-color: #F5F7FA;
        border: {
            radius: 10px;
        }
        .today {
            display: inline-block;
            padding: 0 10px 0 0;
            background: {
                image: url("/assets/images/svg/icon/arrow_right_gray.svg");
                repeat: no-repeat;
                position: right center;
            }
            font: {
                size: 14px;
                weight: 400;
            }
            color: $font-color-light;
        }
    }
    .notification_list {
        padding: 19px 20px 7px;
        margin: 20px 20px 0;
        border: {
            style: solid;
            width: 1px;
            color: $border-color-gray;
            radius: 10px;
        }
    }
    .schedule_list, .notification_list {
        margin-top: 17px;
        > li {
            position: relative;
            height: 30px;
            > a {
                display: flex;
                .subject {
                    display: block;
                    flex: 1;
                    color: $font-color-dark-ultra;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .date {
                    display: inline-block;
                    width: 75px;
                    text-align: right;
                    color: $font-color-light;
                }
            }
        }
    }

    .article {
        margin: 60px 0 0;
        &.type1 {
            margin: 80px 0 0;
        }
        &.up_750 {// window width > 750
            .notification_customer_center {
                display: flex;
                max-width: 1240px;
                padding: 0 20px;
                margin: 0 auto;
                gap: 16px;

                .title_wrap {
                    display: none;
                }

                .notification_list {
                    width: 50%;
                    margin: 20px 0 0 0;
                }

                .customer_center {
                    width: 50%;
                    padding: 0;
                    margin: 20px 0 0;
                    > li {
                        a {
                            height: 129px;
                            .text:nth-child(1) {
                                margin-right: 5px;
                            }
                            .text:nth-child(1), .text:nth-child(2) {
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
        &.banner {
            height: 42.666vw;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .customer_center {
        display: flex;
        padding: 0 20px;
        gap: 8px;
        > li {
            flex: 1;
            > a {
                display: block;
                height: 164px;
                padding: 20px 20px;
                background-color: #F5F7FA;
                border-radius: 10px;
                &.tel_ring {
                    background: {
                        image: url("/assets/images/svg/icon/tel_ring.svg");
                        repeat: no-repeat;
                        position: right 22px bottom 20px;
                    }
                }
                &.headset {
                    background: {
                        image: url("/assets/images/svg/icon/headset.svg");
                        repeat: no-repeat;
                        position: right 22px bottom 20px;
                    }
                }
            }
            font: {
                size: 15px;
                weight: 400;
            }
            .tel {
                margin-top: 10px;
                font: {
                    size: 20px;
                    weight: 700;
                }
            }
        }
    }
}

.menu_wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;
    .menu {
        display: flex;
        > li {
            flex: 1;
            text-align: center;
            a {
                display: inline-block;
                position: relative;
                width: 60px;
                height: 62px;
                padding-top: 38px;
                font: {
                    size: 11px;
                    weight: 400;
                }
                color: $font-color-dark-ultra;

                &.active {
                    font: {
                        weight: 700;
                    }
                }
                &.all {
                    background: {
                        image: url("/assets/images/svg/icon/menu_all.svg");
                        repeat: no-repeat;
                        position: center 15px;
                    }
                }
                &.home {
                    background: {
                        image: url("/assets/images/svg/icon/menu_home.svg");
                        repeat: no-repeat;
                        position: center 11px;
                    }
                }
                &.qr {
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        top: -26px;
                        left: 0;
                        width: 60px;
                        height: 60px;
                        background-image: linear-gradient(180deg, #FFFFFF 0%, #DFDFE6 100%);
                        border-radius: 30px;
                    }
                    &:after {
                        content: '';
                        display: inline-block;
                        position: absolute;
                        top: -22px;
                        left: 4px;
                        width: 52px;
                        height: 52px;
                        background-color: $header-background-color;
                        background: {
                            image: url("/assets/images/svg/icon/menu_qr.svg");
                            repeat: no-repeat;
                            position: center;
                        }
                        border-radius: 30px;
                    }
                }
                &.reserve {
                    background: {
                        image: url("/assets/images/svg/icon/menu_reserve.svg");
                        repeat: no-repeat;
                        position: center 11px;
                    }
                }
                &.my {
                    background: {
                        image: url("/assets/images/svg/icon/menu_my.svg");
                        repeat: no-repeat;
                        position: center 12px;
                    }
                }
            }
        }
    }
}

@media (min-width: 1125px) {
    .only_mobile {
        display: none;
    }
    .container {
        margin-top: 0;
        border-radius: 0;
        .icon_list_wrap {
            display: block;
        }
    }
    .contents {
        padding: 30px 0 0;
        .article {
            margin: 100px 0 0;
            &.type1 {
                margin: 120px 0 0;
            }
            &.up_750 {
                .notification_customer_center {
                    padding: 0 165px 0 20px;
                    // padding: 0 220px 0 20px;
                    .notification_list {
                        padding: 23px 20px 7px;
                        margin: 0;
                        > li {
                            height: 31px;
                        }
                        .subject {
                            font-size: 16px;
                        }
                    }
                    .customer_center {
                        margin: 0;
                         a {
                            font-size: 16px;
                            .text:nth-child(1) {
                                margin-right: 5px;
                            }
                            .text:nth-child(1), .text:nth-child(2) {
                                display: inline-block;
                            }
                            .tel {
                                font-size: 24px;
                            }
                        }
                    }
                }
            }
        }
    }

    
    
}
@media (min-width: 1176px) {
    .container {
        .icon_list_wrap {
            .side {
                width: 176px;
                background: {
                    image: url("/assets/images/png/side_bg.png");
                    repeat: no-repeat;
                    position: center;
                }

                .side_header {
                    width: 150px;
                }
                .count_info_pc {
                    margin: 65px auto 0;
                }
            }
        }
    }
    .contents {
        .article {
            &.up_750 {
                .notification_customer_center {
                    padding: 0 212px 0 20px;
                }
            }
        }
    }
}
@media (min-width: 1440px) {
    .contents {
        .article {
            &.up_750 {
                .notification_customer_center {
                    padding: 0 276px 0 20px;
                }
            }
        }
    }
}
</style>