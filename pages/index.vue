<template>
</template>

<script>
import { useDefaultStore } from "~/stores";
export default {
    setup() {
        const store = useDefaultStore();
        console.log(store);
        return {
            store,
        };
    },
    components: {
    },
    beforeCreate() {
        navigateTo({ path: '/works' });
        // if (!this.store.isLogin) {
            //   navigateTo("/login");
        // }
        // else {
            //   navigateTo({ path: '/main' });
        // }
    },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
};
</script>