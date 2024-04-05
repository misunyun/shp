<template>
    <div class="header">HEADER</div>
    <div class="parallax_wrap" ref="parallax">
        <div class="parallax">
            <button style="height: 350px; color: #fff;" @click="opacity = opacity ? 0 : 1;">PAEALLAX</button>
        </div>
    </div>

    <div class="container" ref="container">
        <div style="height: 1000px;">
            <NuxtLink to="/works">페이지 목록</NuxtLink><br />
        </div>
    </div>

</template>

<script setup>
import { useDefaultStore } from "~/stores";
const rootStore = useDefaultStore();

const opacity = ref(0);
const parallax = ref(null);
const container = ref(null);

const handleScroll = (event) => {
    if (rootStore.isMobile) {
        const scrollY = window.scrollY;
        const incrementSize = 110;// 노출되지 않는 영역의 height 값에 따라 수치 조절
        const increment = scrollY / (incrementSize - 100);
        parallax.value.style.transform = `translate3d(0px, ${increment * 7}px, 0px)`;
        container.value.style.transform = `translate3d(0px, ${increment * -7}px, 0px)`;
        opacity.value = increment / 15;
    }
}

onMounted(() => {
    document.removeEventListener('scroll', handleScroll);
    document.addEventListener('scroll', handleScroll);
    handleScroll();
});
onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll);
});


</script>

<style lang="scss" scoped>
.header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100px;
    background-color: white;
    text-align: center;
    z-index: 50;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0; 
        right: 0; 
        background-color: #000;
        pointer-events: none;
        opacity: v-bind(opacity);
    }
}
.parallax_wrap {
    position: relative;
    background-color: #dedede;
    .parallax {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        width: 100%; 
        height: 100%; 
        background-image: url('https://picsum.photos/400?6'); 
        background-size: cover;
        color: #fff;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0; 
            right: 0; 
            background-color: #000;
            pointer-events: none;
            opacity: v-bind(opacity);
        }
    }
}
.container {
    padding: 20px;
    margin-top: -30px;
    background-color: #fff;
    border: {
        radius: 30px 30px 0 0;
    }
    text-align: center;
    &:before {
            content: '';
            background-color: #000;
        }
}
</style>