<template>
    <div class="parallax_wrap">
        <div class="parallax">
            
            <UiHeader />

            <div ref="parallax">
                <UiMainVisual 
                    :navigation="true"
                    :allowTouchMove="true"
                    :pauseOnMouseEnter="false"
                    :autoplayDelay="50000"
                    :slides="[
                        {
                            to: { path: '/' },
                            imgSrc: '/images/dummy/main_visual_01.png',
                            title: 'WE’RE STRONGER TOGETHER',
                            text: '운동메이트와 함께 목표를 향해 달리다',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            movSrc: '/images/video/video_2.mp4',
                            title: 'WE’RE STRONGER TOGETHER',
                            text: '운동메이트와 함께 목표를 향해 달리다',
                        },
                        {
                            to: { path: '/' },
                            movSrc: '/images/video/video_1.mp4',
                            title: 'WE’RE STRONGER TOGETHER',
                            text: '운동메이트와 함께 목표를 향해 달리다',
                        },
                        {
                            to: { path: '/' },
                            movSrc: '/images/video/video_3.mp4',
                            title: 'WE’RE STRONGER TOGETHER',
                            text: '운동메이트와 함께 목표를 향해 달리다',
                        },

                    ]"
                />

                <!-- mobile 전용 -->
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
            <div class="icon_list_wrap only_pc">
                
                <ul class="icon_list">
                    <li><NuxtLink class="coupon" to="/works"><span />일일쿠폰</NuxtLink></li>
                    <li><NuxtLink class="pb" to="/works"><span />PB상품/음료</NuxtLink></li>
                    <li><NuxtLink class="golf" to="/works"><span />골프타석권</NuxtLink></li>
                    <li><NuxtLink class="counsel" to="/works"><span />상담신청</NuxtLink></li>
                    <li><NuxtLink class="locker" to="/works"><span />보관함</NuxtLink></li>
                </ul>

                <!-- 정회원 일때 사용 -->
                <div class="side" id="sideMenu">
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
                        <li><NuxtLink><div class="today">오늘의 일정</div><span class="count">7</span></NuxtLink></li>
                    </ul>
                </div>

                <!-- 준회원 일때 사용 -->
                <!--
                <div class="side" id="sideMenu">
                    <div class="side_header">
                        <span class="member_type associate_member">준회원</span>
                        <div>
                            <div class="member_name">
                                <strong>이다인</strong>
                            </div>
                        </div>
                        <div class="date">
                            <span>출입이용시간을 <br/>안내해드립니다.</span>
                        </div>
                    </div>
                    <ul class="count_info_pc type1">
                        <li><NuxtLink>보관함(개인)<span class="count">-</span></NuxtLink></li>
                        <li><NuxtLink>공용락커<span class="count">-</span></NuxtLink></li>
                        <li><NuxtLink><div class="exclamation_mark">총 입장횟수</div> <span class="count">-</span></NuxtLink></li>
                        <li><NuxtLink><div class="today">오늘의 일정</div><span class="count">-</span></NuxtLink></li>
                    </ul>
                </div>
                -->
            </div>

            <!-- mobile 전용 -->
            <div class="only_mobile">
                <!-- 정회원 -->
                <div class="user_status">정회원 <span class="split">|</span> 2024.03.06 오전 10:30 입장</div>
                <ul class="count_info_mobile">
                    <li><NuxtLink>보관함(개인)<span class="count">26</span></NuxtLink></li>
                    <li><NuxtLink>공용락커<span class="count">35</span></NuxtLink></li>
                    <li><NuxtLink><div class="exclamation_mark">총 입장횟수</div> <span class="count">7</span></NuxtLink></li>
                </ul>
                <div class="schedule_list_wrap">
                    <NuxtLink class="today">오늘의 일정</NuxtLink>
                    <ul class="schedule_list">
                        <li><NuxtLink><span class="subject">기구 필라테스 단체 강습</span> <span class="date">오전 11:00</span></NuxtLink></li>
                        <li><NuxtLink><span class="subject">골프 개인 강습</span> <span class="date">오후 3:00</span></NuxtLink></li>
                        <li><NuxtLink><span class="subject">요가 개인 강습</span> <span class="date">오후 6:30</span></NuxtLink></li>
                    </ul>
                </div>

                <!-- 준회원 -->
                <!--
                <div class="user_status associate_member">준회원 <span class="split">|</span> 출입이용시간을 안내해드립니다.</div>
                <ul class="count_info_mobile">
                    <li><NuxtLink>보관함(개인)<span class="count">-</span></NuxtLink></li>
                    <li><NuxtLink>공용락커<span class="count">-</span></NuxtLink></li>
                    <li><NuxtLink><div class="exclamation_mark">총 입장횟수</div> <span class="count">-</span></NuxtLink></li>
                </ul>
                <div class="schedule_list_wrap">
                    <NuxtLink class="today">오늘의 일정</NuxtLink>
                    <p class="none_schedule">오늘의 일정이 없습니다.</p>
                </div>
                -->
            </div>

            <div class="article">
                <UiMainTitle
                    title="MY 프로그램"
                    text="다인님이 진행 중인 프로그램입니다."
                    class="mb_20"
                />

                <!--
                    수정 금지 ::: style 관련되어 있음
                    type="MY_PROGRAM"
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
                            to: { path: '/' },
                            imgSrc: '/images/png/my_program_01.png',
                            type: '강습개인',
                            title: '기구 필라테스',
                            text: '2024.03.08 ~ 2024.03.31',
                        },
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/my_program_03.png',
                            type: '강습개인',
                            title: '요가',
                            text: '2024.03.08 ~ 2024.03.31',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            imgSrc: '/images/png/my_program_02.png',
                            type: '강습단체',
                            title: '골프',
                            text: '2024.03.08 ~ 2024.03.31',
                        },
                    ]"
                />
                <!-- 데이터가 없을때 사용 -->
                <div class="none_list none_program">
                    <p class="text">진행 중인 프로그램이 없습니다.</p>
                    <div class="btn_area">
                        <button type="button" class="btn_md bctype1"><span>상담 예약하기</span></button>
                    </div>
                </div>
            </div>



            <div class="article">
                <UiMainTitle
                    title="쿠폰"
                    text="쿠폰 하나도 건강하게 준비했습니다."
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
                            to: { path: '/' },
                            title: '무료',
                            type: '반트 웰컴드링크 무료 쿠폰',
                            text: '2024.09.07~2024.11.30',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            title: '3회 무료',
                            type: '반트 골프 타석 3회 이용권',
                            text: '2024.09.07~2024.11.30',
                            count: {
                                use: 1,
                                total: 3,
                            }
                        },
                        {
                            to: { path: '/' },
                            title: '10%',
                            type: '반트 헬스 첫 등록 10%할인',
                            text: '2024.09.07~2024.11.30',
                        },
                        {
                            to: { path: '/' },
                            title: '10%',
                            type: '반트 헬스 첫 등록 10%할인',
                            text: '2024.09.07~2024.11.30',
                        },
                        {
                            to: { path: '/' },
                            title: '10%',
                            type: '반트 헬스 첫 등록 10%할인',
                            text: '2024.09.07~2024.11.30',
                        },
                    ]"
                />

                <!-- 데이터가 없을때 사용  -->
                <div class="none_list none_coupon">
                    <p class="text">준비된 쿠폰이 없습니다.</p>
                    <div class="btn_area">
                        <button type="button" class="btn_md bctype1"><span>쿠폰 구매하기</span></button>
                    </div>
                </div>
               
            </div>

            <div class="article banner">
                <img src="/images/png/banner_01.png" alt="" />
                <div class="text_area">
                    <p class="title">BREAK YOUR BEST</p>
                    <p class="text">사이클 기록깨기에 도전하세요</p>
                </div>
            </div>

            <div class="article">
                <UiMainTitle
                    title="VANTT 추천 프로그램"
                    text="다양한 추천 프로그램을 즐겨보세요."
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
                            to: { path: '/' },
                            movSrc: '/images/video/video_3.mp4',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '강습단체',
                            title: '골프 강습 Tour',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            imgSrc: '/images/png/recommend_02.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'pay', name: '유료' }],
                            type: '강습개인',
                            title: '기구 필라테스',
                        },
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/recommend_03.png',
                            events: [{ type: 'free', name: '무료' }],
                            type: '강습개인',
                            title: '수영 신규초급(물공포)',
                        },
                    ]"
                />
                <!--
                        imgSrc: '/images/png/recommend_01.png',
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/recommend_04.png',
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
                            imgSrc: '/images/png/recommend_05.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '골프',
                            title: '골프 개인 강습',
                        },
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/recommend_06.png',
                            events: [{ type: 'active', name: '이벤트' }, { type: 'free', name: '무료' }],
                            type: '요가',
                            title: '요가 개인 강습',
                        },
                -->
            </div>




            <div class="article type1">
                <UiMainTitle
                    title="시설안내"
                    text="편안하고 안전한 시설을 소개합니다."
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
                            to: { path: '/' },
                            imgSrc: '/images/png/facility_guide_01.png',
                            type: 'GYM',
                            title: '헬스장',
                        },
                        {
                            to: {
                                path: '/notice',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            imgSrc: '/images/png/facility_guide_02.png',
                            type: 'AQUATICS',
                            title: '수영장',
                        },
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/facility_guide_03.png',
                            type: 'GOLF',
                            title: '골프 39타석',
                        },
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/facility_guide_04.png',
                            type: 'SPA',
                            title: '스파',
                        },
                        {
                            to: {
                                path: '/',
                                query: { dummyData: 'AAA' },
                                state: { data: 'TEST' }
                            },
                            imgSrc: '/images/png/facility_guide_05.png',
                            type: 'RECEPTION',
                            title: '리셉션',
                        },
                        {
                            to: { path: '/' },
                            imgSrc: '/images/png/facility_guide_06.png',
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

    <UiMobileBottom v-if="rootStore.windowInnerWidth < 1125" />

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

        return {
            rootStore,
            store,
            parallax,
        }
    },
    components: {
        VueBottomSheet,
    },
    data() {
        return {
            parallaxOpacity: 0,
            prevScrollY: 0,
        }
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    beforeUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {

        showQr() {
            this.$refs.qr.open();
        },
        handleScroll() {
            const scrollY = window.scrollY;

            if (this.rootStore.windowInnerWidth < 1125) {
                // 노출되지 않는 영역의 height 값에 따라 수치 조절
                const incrementSize = 
                    this.rootStore.windowInnerWidth < 750 
                        ? 115 
                        : this.rootStore.windowInnerWidth < 900 
                            ? 130 
                            : 150;
                // console.log(incrementSize);
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
                const sideMenu = document.querySelector('#sideMenu');
                if (scrollY > document.querySelector('.parallax_wrap').clientHeight + 212) {

                    const scrollWidth = 17;
                    const sideRightPosition = (window.innerWidth - scrollWidth - document.querySelector('.icon_list_wrap.only_pc').getBoundingClientRect().width) / 2 + 20;

                    sideMenu.style.position = 'fixed';
                    sideMenu.style.right = sideRightPosition + 'px';
                    sideMenu.style.top = '40px';
                }
                else {
                    sideMenu.style.position = 'absolute';
                    sideMenu.style.right = '20px';
                    sideMenu.style.top = '216px';
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.none_list {
    padding: 0 20px;
    &.none_program {
        .text {
            background: {
                image: url("/assets/images/svg/icon/none_program.svg");
                repeat: no-repeat;
                position: center 36px;
            }
        }
    }
    &.none_coupon {
        .text {
            background: {
                image: url("/assets/images/svg/icon/none_coupon.svg");
                repeat: no-repeat;
                position: center 48px;
            }
        }
    }
    .text {
        padding: 127px 20px 0;
        font: {
            size: 16px;
            weight: 700;
        }
        text-align: center;
    }
    .btn_area {
        // max-width: 330px;
        margin: 48px auto 0;
    }
}


.pc {
    .parallax_wrap {
        .parallax {
            padding: 0;
        }
    }
}

.parallax_wrap {
    position: relative;
    .parallax {
        width: 100%;
        height: 100%;
        padding: 60px 0 0 0;
        background-color: $header-background-color;
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
            top: 224px; 
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
                font-size: 13px;
                color: #fff;
                &.associate_member {
                    background-color: #A0A4AB;
                }
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
                font-size: 13px;
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
            width: 90px;
            min-height: 116px;
            padding: 98px 0 0;
            margin: 0 auto;
            font: {
                size: 16px;
                weight: 400;
            }
            color: $font-color-dark-ultra;
            text-align: center;
            
            > span {
                display: block;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
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
        &.associate_member {
            background-color: #A0A4AB;
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
            /*
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
            */
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
        .today {
            display: inline-block;
            padding: 0 10px 0 0;
            background: {
                image: url("/assets/images/svg/icon/arrow_right_gray.svg");
                repeat: no-repeat;
                position: right center;
            }
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
            /*
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
            */
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
    .none_schedule {
        align-content: center;
        height: 90px;
        padding-bottom: 25px;
        margin-top: 17px;
        font: {
            size: 16px;
            weight: 700;
        }
        text-align: center;
    }
    .schedule_list, .notification_list {
        margin-top: 17px;
        > li {
            position: relative;
            height: 30px;
            > a {
                display: flex;
                font-size: 15px;
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
            position: relative;
            height: 42.666vw;
            img, video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .text_area {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 90%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            .title {
                font: {
                    family: Saira Condensed Bold;
                    size: 32px;
                    weight: 700;
                }
                color: #fff;
            }
            .text {
                margin-top: 9px;
                font: {
                    size: 14px;
                }
                color: #fff;
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
@media (min-width: 750px) {
    .none_list {
        .btn_area {
            max-width: 330px;
            margin: 48px auto 0;
        }
    }
}

@media (min-width: 1125px) {
    .none_list {
        max-width: 1240px;
        padding: 0 $screen-1125-side-width 0 20px;
        margin: 0 auto;
        .text {
            padding: 132px 20px 0;
            font: {
                size: 18px;
            }
        }
        .btn_area {
            max-width: 330px;
            margin: 93px auto 0;
        }
    }

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

            &.banner {
                .title {
                    font: {
                        size: 48px;
                    }
                }
                .text {
                    font: {
                        size: 18px;
                    }
                }
            }
        }
    }
}

@media (min-width: 1176px) {
    .none_list {
        padding: 0 $screen-1176-side-width 0 20px;
    }

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
                    &.type1 {
                        margin: 51px auto 0;
                    }
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
    .none_list {
        padding: 0 $screen-1440-side-width 0 20px;
    }

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