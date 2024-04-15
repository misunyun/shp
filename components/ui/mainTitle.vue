<template>
<div class="title_wrap">
    <div class="title">
        <strong>{{ title }}</strong>
        <a 
            href="javascript:void(0);" 
            class="more" 
            v-if="more" 
            @click="clickMore"
            :title="`더보기(${title})`"
        >
            더보기({{ title }})
        </a>
    </div>
    <p class="text" v-if="text" v-html="text" />
    <slot />
</div>
</template>

<script>
export default {
    props: {
        title: String,
        text: String,
        more: Object,
        callback: Function,
    },
    methods: {
        clickMore() {
            if (this.callback) {
                this.callback({ id: this.more.id });
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.title_wrap {
    position: relative;
    padding: 0 20px;
}
.title {
    display: flex;
    > strong {
        flex: 1;
        font: {
            size: 22px;
            weight: 700;
        }
        color: $font-color-dark-ultra;
    }
    .more {
        width: 24px;
        height: 24px;
        background: {
            image: url("/assets/images/svg/icon/plus_black.svg");
            repeat: no-repeat;
            position: center 6px;
        }
        text-indent: -9999px;
    }
}
.text {
    margin-top: 8px;
    color: $font-color-light;
    font: {
        size: 16px;
        weight: 400;
    }
    > strong {
        font: {
            weight: 700;
        }
        color: $font-color-dark-ultra;
    }
}

// @media (min-width: 750px) {
//     .title {
//         .more {
//             background: {
//                 size: 20px;
//                 position: center;
//             }
//         }
//     }
// }
@media (min-width: 1125px) {
    .title_wrap {
        max-width: 1240px;
        padding: 0 $screen-1125-side-width 0 20px;
        margin: 20px auto 32px;
    }
    .title {
        > strong {
            font: {
                size: 32px;
            }
        }
        .more {
            margin-right: 4px;
            background: {
                size: 22px;
                position: center;
            }
        }
    }
    .text {
        margin-top: 7px;
        font: {
            size: 18px;
        }
    }
    
}

@media (min-width: 1176px) {
    .title_wrap {
        padding: 0 $screen-1176-side-width 0 20px;
    }
}
@media (min-width: 1440px) {
    .title_wrap {
        padding: 0 $screen-1440-side-width 0 20px;
    }
}
</style>