<template>
    <div class="main_header_wrap">
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
        
        <div class="user_schedule">
            <ul class="user_count">
                <li>보관함(개인) <strong class="count">21</strong></li>
                <li>공용락커 <strong class="count">35</strong></li>
                <li><span class="icon_title">총 입장횟수</span><strong class="count">10</strong></li>
            </ul>
            <div class="list_title">오늘의 일정</div>
            <ul class="list">
                <li>
                    <a href="javascript:void(0)">
                        <strong class="subject">필라테스 1:1 8세션</strong>
                        <span class="date">오전 11:00</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <strong class="subject">수영 단체 강습 (신규 초급)</strong>
                        <span class="date">오후 6:30</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <strong class="subject">수영 단체 강습 (신규 초급)</strong>
                        <span class="date">오후 6:30</span>
                    </a>
                </li>
            </ul>
        </div> 
    </div>
    
    <div>
        <div>
            <UiInputDatePicker
                id="selectDate"
                :date="new Date('2024-03-01')"
                :placeholder="'날짜 선택'"
                :callback="
                    (date) => {
                        console.log(date);
                    }
                "
            />
        </div>
        
        <div>
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
    
    
    <button @click="clickButton">클릭</button><br />
    <button @click="store.eventListener({ name: 'CLICK_BUTTON' })">store 바로 접근</button><br />
    <NuxtLink to="/login">로그아웃</NuxtLink><br />
   

</template>



<script>
import { useDefaultStore } from "~/stores";
import { useMainStore } from "~/stores/main";

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
    setup() {
        definePageMeta({
            layout: "common",
        });

        const selectStore = ref(null);
        const rootStore = useDefaultStore();
        const store = useMainStore();

        return {
            rootStore,
            store,
            selectStore,
        }
    },
    components: { VueBottomSheet, FullCalendar },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: "dayGridMonth",
                // weekends: true,
                locale: "ko",
                customButtons: {
                    arrow: {
                        text: "년,월 선택",
                        click: function () {
                            console.log("clicked the arrow");
                        },
                    },
                },
                headerToolbar: {
                    // left: 'dayGridMonth,dayGridWeek,dayGridDay',
                    left: "",
                    center: "title arrow",
                    right: "",
                    // right : 'today prev,next'
                },
                contentHeight: "auto",
                
                dayCellContent(info) {
                    // console.log(info)
                    if (info.view.type === "dayGridMonth") {
                        return {
                            html: `<span>${info.dayNumberText.replace("일", "")}</span>`,
                        };
                    } else if (info.view.type === "dayGridDay") {
                        // console.log(info.dayNumberText);
                        return {
                            html: "",
                        };
                    }
                    // return {
                        //   domNodes: []
                    // };
                },
                dateClick() {
                    console.log("dateClick -------------");
                },
                eventClick(arg) {
                    console.log("eventClick -------------");
                },
                select: function (start, end, allDay, jsEven, view) {
                    console.log("select");
                },
                events: [
                    // 같은 날짜에 이벤트가 5개까지 노출되게 style 적용 되었음
                    // 6개 부터는 화면에서 노출 되지 않음 : display: none
                    { title: "Meeting", start: new Date(), color: "#324BA5" },
                    { title: "Meeting", start: new Date(), color: "#FFCB0B" },
                    { title: "Meeting", start: new Date(), color: "#F6468C" },
                    { title: "Meeting", start: new Date(), color: "#3BE78D" },
                    { title: "Meeting", start: new Date(), color: "#35D0F9" },
                    { title: "Meeting", start: new Date("2024-03-19"), color: "#5A7FE7" },
                    // {
                        //   title: '개인 일정',
                        //   start: '2024-03-05',
                        //   end: '2024-03-13',
                        //   color: '#f00',
                        //   className: 'btn_notice_day',
                        //   // startTime: "10:00",
                        //   // endTime: "10:00",
                    // },
                ],
                editable: true,
                navLinks: true,
                
                windowResizeDelay: 0,
                windowResize(view) {
                    // console.log('fullcalendar windowResize ::: ');
                    // console.log(view);
                },
                selectable: true,
            }
        };
    },
    methods: {
        openSelectStore () {
            if (this.rootStore.isMobile) {
                this.$refs.selectStore.open();
            }
        },
        selectStoreValue (event) {
            this.store.eventListener({ name: "UPDATE_STORE_NAME", data: event.currentTarget.textContent });
            this.$refs.selectStore.close();
        },
        clickButton () {
            this.store.eventListener({ name: "CLICK_BUTTON" });   
        },
    },
    mounted() {
        
    },
}
</script>

<style lang="scss" scoped>
.main_header_wrap {
    // min-height: 264px;
    // background-image: linear-gradient(
    //     180deg,
    //     rgba(3, 15, 34, 1) 0%,
    //     rgba(3, 15, 34, 1) 264px,
    //     rgba(255, 255, 255, 1) 264px
    // );
}
.main_header {
    display: flex;
    height: 60px;
    padding: 0 20px 0;
    background-color: $header-background-color;
    font-weight: 500;
    color: #fff;
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
        // .schedule,
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

.user_schedule {
    padding: 20px 20px 18px;
    margin-top: 32px;
    background-color: #fff;
    border: {
        style: solid;
        width: 1px;
        color: $border-color-gray;
        radius: 20px;
    }
    .user_count {
        display: flex;
        padding-bottom: 15px;
        border: {
            style: solid;
            width: 0 0 1px;
            color: $border-color-gray;
        }
        > li {
            flex: 1;
            font: {
                size: 13px;
            }
            color: $font-color-light-middle;
            text-align: center;
            .count {
                display: block;
                margin-top: 3px;
                font: {
                    family: "Neue Haas Grotesk Display Pro";
                    size: 20px;
                    weight: 600;
                }
                color: $font-color-dark-ultra;
                text-align: center;
            }
            .icon_title {
                &:after {
                    content: "";
                    display: inline-block;
                    width: 14px;
                    height: 17px;
                    margin-left: 3px;
                    background-image: url("/assets/images/svg/icon/exclamation_mark_gray.svg");
                    background-repeat: no-repeat;
                    vertical-align: middle;
                }
            }
        }
    }
    .list_title {
        margin-top: 17px;
        font: {
            size: 13px;
            weight: 500;
        }
        color: $font-color-light-middle;
    }
    .list {
        > li {
            > a {
                display: flex;
                margin-top: 15px;
                &:first-child {
                    margin-top: 13px;
                }
            }
        }
        .subject {
            flex: 1;
            font: {
                size: 14px;
                weight: 500;
            }
            color: $font-color-dark-ultra;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .date {
            width: 75px;
            font: {
                size: 14px;
                weight: 400;
            }
            color: $font-color-light-middle;
            text-align: right;
        }
    }
}



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
