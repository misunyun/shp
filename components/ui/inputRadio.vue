<template>
    <div :class="customClass ? customClass : baseClass">
        <input type="radio" :id="id" :name="name" :title="title" :disabled="disabled" :checked="checked">
        <label v-if="label" :for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        name: String,
        title: String,
        label: String,
        disabled: Boolean,
        checked: Boolean,
        baseClass: {
            type: String,
            default: 'radio'
        },
        customClass: String,
    },
}
</script>

<style lang="scss" scoped>
.radio {
    display: inline-block;
    position: relative;
    line-height: 1;
    input[type=radio] {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        background: {
            color: #fff;
        }
        border: 1px solid #DEDEDE;
        border-radius: 50%;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        &:checked {
            background: {
                color: #111;
                image: url('/assets/images/svg/icon/radio_on.svg');
            }
            border: 0;
        }
        &:disabled {
            background: #F5F7FA;
            cursor: default;
            ~ label {
                cursor: default;
            }
        }
    }
    label {
        display: inline-block;
        padding-left: 8px;
        line-height: 20px;
        font: {
            size: 16px;
            weight: 400;
        }
        letter-spacing: -0.01em;
        vertical-align: top;
        word-break: break-all;
        cursor: pointer;
    }
}

.radio_tab {
    display: inline-block;
    position: relative;
    vertical-align: top;
    font-size: 0;
    input[type=radio] {
        overflow:hidden;
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        border:0;
        opacity:0;
        &:checked ~ label {
            border-color:#111;
            box-shadow: inset 0 0 0 1px #111;
            font-weight: 700;
        }
    }
    label {
        display: block;
        position: relative;
        width: 100%;
        height: 48px;
        padding: 14px 16px;
        border: 1px solid #DEDEDE;
        border-radius: 6px;
        color: #111;
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }

}
</style>