export const useDefaultStore = defineStore("defaultStore", {
    state: () => ({
        isLogin: true,// 로그인 여부
        isMobile: false,// 모바일 접속 여부
        device: null,
        // userId: null,
        // userName: null,
        // userRole: null,
        windowInnerWidth: null,
    }),
    actions: {
        async moveToPage(data) {
            const router = useNuxtApp().$router;
            await router.push(data);
        },
        eventListener(obj) {
            const { name, type, data } = obj;
            const eventObject = {
                MOVE_TO_PAGE: () => this.moveToPage(data),
            };
            eventObject[name]();
        },

        resizeEventHandler() {
            const innerWidth = window.innerWidth;
            // console.log('innerWidth ::: ' + innerWidth);
            const mobileMaxWidth = 751;

            // 751      tablet
            // 1125     pc
            // 1176     pc medium
            // 1440     pc large

            if (innerWidth < mobileMaxWidth && !this.isMobile) {
                this.isMobile = true;
            }
            else if (innerWidth >= mobileMaxWidth) {
                this.isMobile = false;
            }
            this.windowInnerWidth = innerWidth;
            if (innerWidth > 1125) {
                console.log(innerWidth);// mian visual 사용 예정
            }
            // console.log('this.isMobile ::::: ' + this.isMobile);
        },

        getDeviceInfo() {

        },
        init(data) {
            // this.isMobile = data.isMobile;
            window.removeEventListener('resize', this.resizeEventHandler);
            window.addEventListener('resize', this.resizeEventHandler);
            this.resizeEventHandler();
        },
    },
    persist: true,
});
