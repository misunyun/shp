<template>
    <div class="menu_wrap first only_mobile" id="bottomMenu">
        <ul class="menu">
            <!-- 현재 페이지 class active 추가 -->
            <li><button class="all">전체</button></li>
            <li><NuxtLink class="home active">홈</NuxtLink></li>
            <li><button class="qr" @click="showQr">출입</button></li>
            <li><NuxtLink class="reserve">예약</NuxtLink></li>
            <li><NuxtLink class="my">마이</NuxtLink></li>
        </ul>
    </div>

    <client-only><!-- Nuxt 사용 시 적용 : CSR 적용 시 필요 없음 -->
        <vue-bottom-sheet
            ref="qr"
            :max-width="rootStore.windowInnerWidth"
        >
            <div class="qr_container">
                <div class="qr_header">
                    <strong>입장 QR코드</strong>
                    <p>출입 시 QR코드를 찍어 출입체크를 해주세요.</p>
                </div>
                <div class="qr">
                    <img :src="'/images/dummy/qr.png'" alt="qr"/>
                </div>
                <div class="bottom_btn">
                    <button type="button" class="btn bctype1" @click="$refs.qr.close()">확인</button>
                </div>
            </div>
        </vue-bottom-sheet>
    </client-only>

</template>

<script>
import { ref } from 'vue';
import { useDefaultStore } from "~/stores";

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default {
    setup() {
        const rootStore = useDefaultStore();
        const qr = ref(null);

        return {
            rootStore,
            qr,
        }
    },
    components: {
        VueBottomSheet,
    },
    data() {
        return {
            prevScrollY: 0,
        }
    },
    mounted() {
        document.removeEventListener('scroll', this.handleScroll);
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
            if(scrollY > this.prevScrollY && scrollY > 0){
                document.querySelector('#bottomMenu').classList.remove('first');
                document.querySelector('#bottomMenu').classList.remove('up');
            }
            else {
                document.querySelector('#bottomMenu').classList.add('up');
            }
            this.prevScrollY = scrollY;
        },
    },
}
</script>

<style lang="scss" scoped>
.menu_wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;

    &:not(.first) {
        animation-duration: 1s;
        animation-name: bottomMenuOut;
        animation-fill-mode: forwards;

        &.up {
            animation-duration: 1s;
            animation-name: bottomMenuIn;
            animation-fill-mode: forwards;
        }
    }

    .menu {
        display: flex;
        > li {
            flex: 1;
            text-align: center;
            a, button {
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

            button {
                &.all {
                    padding-top: 28px;
                }
                &.home {
                    padding-top: 28px;
                }
                &.qr {
                    padding-top: 28px;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        top: -28px;
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
                        top: -24px;
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
                // &.reserve {
                // }
                // &.my {
                // }
            }
        }
    }
}
</style>