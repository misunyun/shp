<template>
    <client-only><!-- Nuxt 사용 시 적용 : CSR 적용 시 필요 없음 -->
        <vue-bottom-sheet
            ref="selectStore"
        >
            <div class="sheet_header">
                <h1 class="title">Title</h1>
                <button class="btn_close">
                    <span class="blind">닫기</span>
                </button>
            </div>
            <div class="sheet_cont">
                <ul>
                    <li><button>option01</button></li>
                    <li><button>option02</button></li>
                    <li><button>option03</button></li>
                    <li><button>option04</button></li>
                    <li><button>option05</button></li>
                    <li><button>option06</button></li>
                    <li><button>option07</button></li>
                    <li><button>option08</button></li>
                    <li><button>option09</button></li>
                    <li><button>option10</button></li>
                    <li><button>option11</button></li>
                    <li><button>option12</button></li>
                    <li><button>option13</button></li>
                    <li><button>option14</button></li>
                </ul>
            </div>
        </vue-bottom-sheet>
    </client-only>

    <button @click="openSelectStore">모달 열기</button>

</template>

<script>
import { ref } from 'vue';
import { useDefaultStore } from "~/stores";

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default {
    setup() {
        const selectStore = ref(null);
        return {
            selectStore
        }
    },
    data() {
        return {
        }
    },
    created() {
    },
    mounted() {
        setTimeout(() => {this.$refs.selectStore.open();}, 1000)
    },
    onUnmounted() {
    },
    components: {
        VueBottomSheet,
    },
    methods: {
        selectValue() {
        },
        openSelectStore () {
            this.$refs.selectStore.open();
        },
    },
}
</script>

<style lang="scss" scoped>
.bottom-sheet__content{height: 600px !important;}
[class*="sheet_"]{padding:0 20px;}
.sheet_header{display: block;position: fixed;width: 100%;}
.sheet_header .title{padding-right: 48px;font-size: 16px;font-weight: 700;line-height: 48px;}
.btn_close{position: absolute;right: 20px;top: 0;width: 48px;height: 48px;background-image: url('/assets/images/svg/icon/ico_close_24.svg');background-repeat: no-repeat;background-size:24px 24px;background-position:top 12px right;}
.sheet_cont{margin-top: 48px;overflow-y: auto;max-height: 600px;height:600px;}
.sheet_cont ul li{padding: 14px 0;}
.sheet_cont::-webkit-scrollbar{width: 6px;height: 6px;}
.sheet_cont:-webkit-scrollbar-track{background-color: transparent;}
.sheet_cont::-webkit-scrollbar-thumb{background-color:#DEDEDE;border-radius: 3px;}
.blind {overflow: hidden;position: absolute;left: -9999em;width: 0 !important;height: 0 !important;margin: 0 !important;padding: 0 !important;text-indent: -9999em;}
</style>