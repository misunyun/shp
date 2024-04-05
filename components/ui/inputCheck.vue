<template>
    <div class="checkbox">
        <input type="checkbox" :id="id" :name="name" :title="title" :disabled="disabled" :checked="checked">
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
    },
}
</script>

<style lang="scss" scoped>
.checkbox {
    display: inline-block;
    position: relative;
    line-height: 1;
    input[type=checkbox] {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        background: {
            color: #fff;
            image: url('/assets/images/svg/icon/check_off.svg');
            repeat: no-repeat;
            position: center center;
        }
        border: 1px solid #DEDEDE;
        border-radius: 5px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        &:checked {
            background: {
                color: #111;
                image: url('/assets/images/svg/icon/check_on.svg');
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

</style>