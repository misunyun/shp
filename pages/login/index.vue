<template>
    로그인 페이지<br />
    <NuxtLink to="/works">페이지 목록</NuxtLink><br />
</template>

<script>
export default {
    components: {},
    setup() {

        definePageMeta({
            pageName: '로그인 페이지',
            explain: '설명',
        });
    },
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
        func () {
        },
    },
    mounted() {
    },
}
</script>