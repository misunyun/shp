<template>
    <!-- 
        가로사이즈가 750보다 클때 pc 클래스 적용 

    -->
    <div class="wrap" :class="{ pc: !store.isMobile, mobile: store.isMobile }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script >
import { useDefaultStore } from "~/stores";
export default {
    setup() {
        const store = useDefaultStore();
        return { store };
    },
    mounted() {

        const userAgent = navigator.userAgent;
        this.isMobile = /Mobile|iP(ad|hone|od)|Android|BlackBerry|IEMobile/i.test(userAgent);

        console.log(userAgent);
        console.log(this.isMobile);
        console.log(window.innerWidth);

        this.store.init({ isMobile: false });
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    overflow-x: hidden;
}
</style>