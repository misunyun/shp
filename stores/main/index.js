export const useMainStore = defineStore("mainStore", {
    state: () => ({
        storeName: '전자화성 DSR',
    }),
    actions: {
        onSwiper(swiper) {
            console.log('onSwiper');
            console.log(swiper);
        },
        onSlideChange() {
            console.log('onSlideChange');
        },
        updateStoreName(storeName) {
            this.storeName = storeName;
        },
        selectStore() {
            console.log('selectStore ------------------');
        },
        clickButton() {
            console.log('clickButton ------------------');
        },
        eventListener(obj) {
            console.log('eventListener');
            console.log(obj);
            const { name, type, data } = obj;
            const eventObject = {
                ON_SWIPER: () => this.onSwiper(data),
                ON_SLIDE_CHANGE: () => this.onSlideChange(data),
                UPDATE_STORE_NAME: () => this.updateStoreName(data),
                CLICK_BUTTON: () => this.clickButton(),
                SELECT_STORE: () => this.selectStore(),
                
            };
            eventObject[name]();
        }
    },
});
