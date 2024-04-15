export const useDefaultStore = defineStore("defaultStore", {
    state: () => ({
        isLogin: true,// 로그인 여부
        isMobile: false,// 모바일 접속 여부
        device: null,
        // userId: null,
        // userName: null,
        // userRole: null,
        windowInnerWidth: null,
        selectData: null,

        activeCenter: {
            id: 'dsr',
            name: '전자화성 DSR',
            class: 'cfc',
        }
    }),
    actions: {
        changeCenter(data) {
            this.activeCenter = data;
        },
        openSelect(data) {
            this.selectData = data;
        },
        closeSelect() {
            this.selectData = null;
        },
        async moveToPage(data) {
            const router = useNuxtApp().$router;
            await router.push(data);
        },
        eventListener(obj) {
            const { name, type, data } = obj;
            const eventObject = {
                MOVE_TO_PAGE: () => this.moveToPage(data),
                CHANGE_CENTER: () => this.changeCenter(data),
            };
            eventObject[name]();
        },

        resizeEventHandler() {
            const innerWidth = window.innerWidth;
            // console.log('innerWidth ::: ' + innerWidth);
            const mobileMaxWidth = 1125;

            if (innerWidth < mobileMaxWidth && !this.isMobile) {
                this.isMobile = true;
            }
            else if (innerWidth >= mobileMaxWidth) {
                this.isMobile = false;
            }
            this.windowInnerWidth = innerWidth;
            if (innerWidth < mobileMaxWidth) {
                if (document.querySelector('#sideMenu')) {
                    const sideMenu = document.querySelector('#sideMenu');
                    sideMenu.style.position = 'absolute';
                    sideMenu.style.right = '20px';
                    sideMenu.style.top = '0';
                }
            }
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
    // persist: true,
});
