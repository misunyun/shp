<template>
    <ul :class="checkOption.class">
        <li v-for="(option, index) in checkOption.options" :key="`${checkOption.name}_${index}`">
            <input type="checkbox" :id="`${checkOption.name}_${index}`" :name="checkOption.name">
            <label :for="`${checkOption.name}_${index}`">{{ option.name }}</label>
        </li>
    </ul>
    
</template>

<script>
export default {
    props: {
        checkOption: Object,
    },
    created() {
        console.log(this.checkOption);
    }
}
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    align-items: flex-start;
}
input, label {
    -webkit-tap-highlight-color: transparent;
}

.check_group1 {
    flex-wrap:wrap;
    gap: 0 8px;
    li {
        display: inline-flex;
        width: calc(50% - 4px);
        input[type=checkbox] {
            display: inline-block;
            flex-shrink: 0;
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
                + label {
                    cursor: default;
                }
            }
        }
        label {
            display: inline-block;
            width: 100%;
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
}
</style>