<template>
    <div class="main_header">
        <div class="header">
            <div class="store_logo_wrap">
                <span 
                    class="store_logo"
                    :class="{
                        vantt: store.activeCenter.class === 'vantt',
                        cfc: store.activeCenter.class === 'cfc',
                        leisure: store.activeCenter.class === 'leisure',
                    }"
                >
                    {{ store.activeCenter.name }}
                </span>
            </div>
            <div class="select_store_wrap">
                <button
                    class="select_store"
                    :class="{
                        vantt: store.activeCenter.class === 'vantt',
                        cfc: store.activeCenter.class === 'cfc',
                        leisure: store.activeCenter.class === 'leisure',
                        alone: centerOptions.length === 1,
                    }"
                    @click="openSelectCenter"
                >
                    {{ store.activeCenter.name }}
                </button>
            </div>
            
            
            <div class="util">
                <span class="store_status">여유</span>
                <!-- 상태 표시 아래 코드 참조 -->
                <!--
                    <span class="store_status">여유</span>
                    <span class="store_status normal">보통</span>
                    <span class="store_status busy">혼잡</span>
                -->

                
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
                        <!-- <img
                            src="/images/dummy/main_visual_01.png"
                            alt="이다인"
                            class="photo"
                        /> -->
                        <!-- 사용자 이미지가 없을때 -->
                        <span class="none_photo">다인</span>
                    </NuxtLink>
                </div>
                
            </div>
        </div>
        <div class="main_menu">
            <button class="all_menu" @click="console.log('전체메뉴 클릭')">전체메뉴</button>
            <ul>
                <!-- 현재 페이지 class active 추가 -->
                <li><NuxtLink class="active">홈</NuxtLink></li>
                <li><NuxtLink>상품</NuxtLink></li>
                <li><NuxtLink>예약</NuxtLink></li>
                <li><NuxtLink>고객센터</NuxtLink></li>
                <li><NuxtLink>마이</NuxtLink></li>
            </ul>

        </div>
    </div>
</template>

<script>
import { useDefaultStore } from "~/stores";

export default {
    setup() {
        const store = useDefaultStore();
        return {
            store,
        }
    },
    components: {
    },
    data() {
        return {
            centerOptions: [
                {
                    id: 'dsr',
                    name: '전자화성 DSR',
                    class: 'cfc',
                },
                {
                    id: 'cfc',
                    name: 'SDS 잠실',
                    class: 'cfc',
                },
                {
                    id: 'leisure',
                    name: '삼성레포츠센터',
                    class: 'leisure',
                },
                {
                    id: 'vantt',
                    name: 'VANTT',
                    class: 'vantt',
                },
            ]
        }
    },
    methods: {
        openSelectCenter (event) {
            if (this.centerOptions.length > 1) {
                this.store.openSelect({
                    target: event.currentTarget,
                    title: "업장선택",
                    width: '288px',
                    align: 'center',
                    activeId: this.store.activeCenter.id,
                    options: this.centerOptions,
                    callback: this.selectCenterValue,
                });
            }
        },
        selectCenterValue (data) {
            console.log(data);
            this.store.eventListener({ name: "CHANGE_CENTER", data: data });
        },
    },
}
</script>

<style lang="scss" scoped>
.main_header {
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
    .header {
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
        .select_store_wrap {
            align-content: center;
            align-self: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .select_store {
            max-width: 100%;
            padding: 0 20px 0 0;
            background-image: url("/assets/images/svg/icon/arrow_down_white.svg");
            background-repeat: no-repeat;
            background-position: right center;
            font: {
                size: 16px;
                weight: 500;
            }
            color: #fff;
            text-overflow: ellipsis;
            overflow: hidden;
            // white-space: nowrap;

            // &:after {
            //     content: "";
            //     display: inline-block;
            //     width: 20px;
            //     height: 5px;
            //     background-image: url("/assets/images/svg/icon/arrow_down_white.svg");
            //     background-repeat: no-repeat;
            //     background-position: 0;
            //     vertical-align: middle;
            // }
            &.vantt {
                padding: 0 25px 0 25px;
                background-image: url("/assets/images/svg/icon/logo_vantt.svg"), url("/assets/images/svg/icon/arrow_down_white.svg");
                background-repeat: no-repeat;
                background-position: 0, right center;
            }
            &.cfc {
                padding: 0 25px 0 25px;
                background-image: url("/assets/images/svg/icon/logo_sds.svg"), url("/assets/images/svg/icon/arrow_down_white.svg");
                background-repeat: no-repeat;
                background-position: 0, right center;
            }
            &.leisure {
                padding: 0 25px 0 28px;
                background-image: url("/assets/images/svg/icon/logo_leisure.svg"), url("/assets/images/svg/icon/arrow_down_white.svg");
                background-repeat: no-repeat;
                background-position: 0, right center;
                background-size: 26px;
            }
            &.alone {
                background-image: none;
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
                }
                .none_photo {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url("/assets/images/svg/icon/none_photo.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 28px;
                    // background-color: $active-color;
                    // font: {
                    //     size: 12px;
                    //     weight: 400;
                    // }
                    // color: #fff;
                    // text-align: center;
                    text-align: left;
                    text-indent: -9999px;;
                }
            }
            .notice {
                display: block;
                position: relative;
                width: 24px;
                height: 24px;
                margin-left: 15px;
                background-image: url("/assets/images/svg/icon/notice_white.svg");
                // background-image: url("/assets/images/svg/icon/schedule_white.svg");
                background-repeat: no-repeat;
                background-position: center;
                text-align: left;
                text-indent: -9999px;
                overflow: hidden;
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
            background-color: rgba(143, 239, 253, 0.2);
            border-radius: 4px;
            font: {
                size: 12px;
                weight: 400;
            }
            color: #8feffd;
            text-align: center;
            vertical-align: middle;
            &.normal {
                background-color: rgba(255, 143, 0, 0.2);
                color: #FF8F00;
            }
            &.busy {
                background-color: rgba(255, 75, 65, 0.2);
                color: #FF4B41;
            }
            // &:after {
            //     content: "";
            //     display: inline-block;
            //     width: 12px;
            //     height: 14px;
            //     margin-left: 5px;
            //     background-image: url("/assets/images/svg/icon/exclamation_mark_blue.svg");
            //     background-repeat: no-repeat;
            //     vertical-align: middle;
            // }
        }
    }

    .main_menu {
        display: none;
        position: relative;
        height: 34px;
        margin-top: 16px;
        .all_menu {
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            background-image: url("/assets/images/svg/icon/all_menu.svg");
            background-repeat: no-repeat;
            background-position: center;
            text-indent: -9999px;
        }
        ul {
            display: flex;
            justify-content: center;
            margin-top: -2px;
        }
        a {
            display: inline-block;
            padding: 0 30px 3px;
            font-size: 16px;
            color: #fff;
            &.active {
                font-weight: 700;
            }
        }
    }
    .store_logo_wrap {
        display: none;
    }
}

.pc {
    .main_header {
        position: relative;
        padding: 0 20px;
        background-color: $header-background-color;

        .store_logo_wrap {
            display: block;
            align-content: center;
            .store_logo {
                display: inline-block;
                min-width: 150px;
                max-width: 310px;
                height: 26px;
                font-size: 20px;
                color: #fff;
                text-align: left;

                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;

                &.vantt {
                    background-image: url("/assets/images/svg/icon/logo_vantt_white.svg");
                    background-repeat: no-repeat;
                    background-position: 0 center;
                    background-size: 120px auto;
                    text-indent: -9999px;
                }
                &.cfc {
                    background-image: url("/assets/images/svg/icon/logo_sds_white.svg");
                    background-repeat: no-repeat;
                    background-position: 0 center;
                    background-size: 90px auto;
                    text-indent: -9999px;
                }
                &.leisure {
                    background-image: url("/assets/images/svg/icon/logo_leisure_white.svg");
                    background-repeat: no-repeat;
                    background-position: 0 center;
                    background-size: 120px auto;
                    text-indent: -9999px;
                }
            }
        }

        .select_store_wrap {
            flex: 1.5;
            text-align: center;
        }

        .store_logo_wrap, .util {
            flex: 1;
        }
        .select_store {
            max-width: 80%;
            height: 48px;
            font: {
                size: 18px;
                weight: 400;
            }
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            // &:after {
            //     width: 20px;
            //     height: 10px;
            //     margin-left: 5px;
            //     background-size: 24px;
            // }
            &.vantt {
                padding: 0 25px 0 0;
                background-image: url("/assets/images/svg/icon/arrow_down_white.svg");
                background-repeat: no-repeat;
                background-position: right center;
            }
            &.cfc {
                padding: 0 25px 0 0;
                background-image: url("/assets/images/svg/icon/arrow_down_white.svg");
                background-repeat: no-repeat;
                background-position: right center;
            }
            &.leisure {
                padding: 0 25px 0 0;
                background-image: url("/assets/images/svg/icon/arrow_down_white.svg");
                background-repeat: no-repeat;
                background-position: right center;
            }
        }
        .header {
            display: flex;
            position: relative;
            top: unset;
            align-content: center;
            max-width: 1240px;
            height: 64px;
            padding: 0;
            margin: 0 auto;
            .util {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex: 1;
                text-align: right;
                .photo_wrap {
                    width: 32px;
                    height: 32px;
                    margin-left: 20px;
                    .photo,
                    .none_photo {
                        width: 32px;
                        height: 32px;
                        background-size: 32px;
                        border-radius: 16px;
                    }
                    .none_photo {
                        font: {
                            size: 13px;
                        }
                    }
                }
                .notice {
                    margin-left: 20px;
                }
            }
            .store_status {
                min-width: 55px;
                height: 24px;
                padding: 4px 8px 0 8px;
                font: {
                    size: 14px;
                }
                &:after {
                    background-size: 12px;
                }
            }
        }
    }
    .main_menu {
        display: block;
    }
}
</style>