<template>
    <!-- 
        가로사이즈가 750보다 클때 pc 클래스 적용 

    -->
    <div class="wrap" :class="{ pc: !store.isMobile, mobile: store.isMobile }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <UiSelect :data="store.selectData" v-if="store.selectData" />
    </div>
</template>
<script >
import { ref } from 'vue';
import { useDefaultStore } from "~/stores";

import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

export default {
    setup() {
        const store = useDefaultStore();
        const bottomSheet = ref(null);
        return { 
            store,
            bottomSheet,
        };
    },
    components: {
        VueBottomSheet,
    },
    mounted() {

        const userAgent = navigator.userAgent;
        this.isMobile = /Mobile|iP(ad|hone|od)|Android|BlackBerry|IEMobile/i.test(userAgent);

        // console.log(userAgent);
        // console.log(this.isMobile);
        // console.log(window.innerWidth);

        this.store.init({ isMobile: false });
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    overflow-x: hidden;
}
</style>