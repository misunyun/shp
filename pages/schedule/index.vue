<template>
    일정 페이지<br />
    <NuxtLink to="/works">페이지 목록</NuxtLink><br />
</template>

<script>
export default {
    components: {},
    props: {
    },
    data() {
        return {
            data: 'AAA'
        }
    },
    methods: {
        func () {
        },
    },
    mounted() {
        console.log(history.state);
        console.log(history.state.data);
    },
}
</script>