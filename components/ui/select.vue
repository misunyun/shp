<template>
    <!-- <div  style="position: absolute; top: 200px; left: 0; width: 500px; height: 500px; background-color: #fff;">
        {{ JSON.stringify(selectData) }}<br />{{ isShow }}
    </div> -->
    <div class="select" ref="select" :style="{ minWidth: selectData?.minWidth ?? undefined }">
        <ul class="options" >
            <li v-for="(option, index) in selectData?.options" :key="index">
                <button :class="{ active: selectData?.activeId === option.id }" @click="selectValue(option)">{{ option.name }}</button>
            </li>
        </ul>
    </div>

    
    <vue-bottom-sheet
        ref="bootomSheet"
        :max-width="store.windowInnerWidth"
        @opened="isBottomSheet=true"
        @closed="isBottomSheet=false"
    >
        <div id="bootomSheetContainer">
            <div class="title">
                {{ selectData?.title }}
                <button class="close" @click="$refs.bootomSheet.close()">닫기</button>
            </div>
            <div class="contents">
                <ul class="options">
                    <li v-for="(option, index) in selectData?.options" :key="index">
                        <button :class="{ active: selectData?.activeId === option.id }" @click="selectValue(option)">{{ option.name }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </vue-bottom-sheet>
</template>
<script >
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { useDefaultStore } from "~/stores";

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default {
    setup() {
        const store = useDefaultStore();
        const bottomSheet = ref(null);
        const select = ref(null);

        const isOutsideClick = ref(false);

        onClickOutside(select, (event) => {
            if (buttonRef.value != event.target) {
                isOutsideClick.value = !isOutsideClick.value;
            }
        });
        const resetOutsideClick = () => {
            isOutsideClick.value = false;
        };

        const buttonRef = ref(null);
        const setButtonRef = (ref) => {
            buttonRef.value = ref;
        };

        return { 
            store,
            bottomSheet,
            select,
            isOutsideClick,
            resetOutsideClick,
            setButtonRef,
        };
    },
    props: {
        data: Object,
    },
    data() {
        return {
            selectData: this.data,
            isBottomSheet: false,
            isShow: false,
            selectButton: null,
        }
    },
    components: {
        VueBottomSheet,
    },
    mounted() {
        this.openCloseOptions();
    },
    beforeUnmount() {
        this.initSelect();
        this.resetOutsideClick();
        window.removeEventListener('resize', this.setOptionsPosition);
    },
    methods: {
        initSelect() {

            this.isShow = false;
            this.$refs.select.style.display = 'none';

            this.resetOutsideClick();
            window.removeEventListener('resize', this.setOptionsPosition);
            if (this.isBottomSheet) {
                this.$refs.bootomSheet.close();
            }
        },
        selectValue (option) {
            this.$refs.select.style.display = 'none';

            this.isShow = false;

            if (this.data.callback) {
                this.selectData.activeId = option.id;
                this.data.callback(option);
                this.initSelect();
            }
            if (this.isBottomSheet) {
                this.initSelect();
                this.$refs.bootomSheet.close();
            }
        },
        setOptionsPosition () {
            if (this.isShow) {
                this.selectButton = this.data.target;
                this.setButtonRef(this.selectButton);

                const targetPosition = this.selectButton.getBoundingClientRect();
                const select = this.$refs.select;

                select.style.display = 'block';
                select.style.top = '-9999px';

                select.style.width = targetPosition.width + 'px';

                if (this.selectData?.width) {
                    select.style.width = this.selectData?.width;
                }
                if (this.selectData?.align === 'center') {
                    select.style.left = targetPosition.left + (targetPosition.width / 2) + 'px';
                    select.style.marginLeft = '-' + select.clientWidth / 2 + 'px';
                }
                else {
                    select.style.left = targetPosition.left + 'px';
                }
                select.style.top = (targetPosition.top + targetPosition.height + window.scrollY - 1) + 'px';
                this.resetOutsideClick();
            }
            else {
                this.initSelect();
            }

            if (this.store.windowInnerWidth < 1125) {
                this.initSelect();
            }
        },
        openCloseOptions () {
            if (this.store.windowInnerWidth < 1125) {
                if (this.data) {
                    this.isShow = true;
                    window.addEventListener('resize', this.setOptionsPosition);
                    document.querySelector('#bootomSheetContainer').closest('.bottom-sheet__main').scrollTop = 0;
                    this.$refs.bootomSheet.open();
                }
                else {
                    this.isShow = false;
                    this.$refs.bootomSheet.close();
                    this.initSelect();
                }
            }
            else {
                const select = this.$refs.select;
                if (select) {
                    if (!select.style.display || select.style.display === 'none') {
                        this.isShow = true;
                        window.removeEventListener('resize', this.setOptionsPosition);
                        window.addEventListener('resize', this.setOptionsPosition);
                        this.setOptionsPosition();
                    }
                    else {
                        this.isShow = false;
                        select.style.display = 'none';
                        window.removeEventListener('resize', this.setOptionsPosition);
                    }
                }
            }
        }
    },
    watch: {
        data() {
            this.selectData = this.data;
            this.openCloseOptions();
        },
        isOutsideClick() {
            if (this.isOutsideClick) {
                this.initSelect();
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.title {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 49px;
    padding: 17px 40px 0 20px;
    background-color: #fff;
    font: {
        size: 16px;
        weight: 700;
    }
    z-index: 2;
}
.contents {
    height: auto;
    padding: 30px 20px 20px;
}
.close {
    position: absolute;
    top: 17px;
    right: 24px;
    width: 24px;
    height: 24px;
    background-image: url("/assets/images/svg/icon/close_black.svg");
    background-repeat: no-repeat;
    background-position: center -2px;
    text-indent: -9999px;
}

.options {
    height: 100%;
    > li {
        
        button {
            display: block;
            width: 100%;
            height: auto;
            min-height: 48px;
            padding: 10px 20px 10px 0;
            font: {
                size: 16px;
            }
            color: #000;
            text-align: left;

            &.active {
                background-image: url("/assets/images/svg/icon/check_purple.svg");
                background-repeat: no-repeat;
                background-position: right center;
                font-weight: 700;
                color: $purple;
            }
        }
    }
}

.select {
    // display: none;
    position: absolute;
    top: -9999px;
    left: 0;
    width: auto;
    background-color: #fff;
    border: {
        style: solid;
        width: 1px;
        color: $border-color-gray;
        radius: 6px;
    }
    z-index: 9999;
    .options {
         > li {
            padding: 0 16px;
         }
    }
}
</style>