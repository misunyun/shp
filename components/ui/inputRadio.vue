<template>
    <ul :class="{ error: errorMsg }">
        <li 
            v-for="(option, index) in options" 
            :key="`${name}_${index}`" 
            :class="option.class"
        >
            <input 
                type="radio" 
                :id="`${name}_${index}`" 
                :name="name" 
                :disabled="option.disabled ?? false" 
                :value="option.value ?? option.name" 
                :checked="selectedData == option.value"
                v-model="selectedData"
            >
            <label :for="`${name}_${index}`">{{ option.name }}</label>
        </li>
        <p v-if="errorMsg" class="message">{{ errorMsg }}</p>
    </ul>
</template>

<script>
export default {
    props: {
        name: String,
        options: Array,
        selected: Array,
        callback: Function,
        errorMsg: String,
    },
    data () {
        return {
            selectedData: this.selected ?? []
        }
    },
    watch: {
        selectedData() {
            if (this.callback) {
                this.callback(this.selectedData);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    align-items: flex-start;
    &.error{
        .message{
            display: block;
            color: #FF4B41;
        }
    }
}
input, label {
    -webkit-tap-highlight-color: transparent;
}

.radio_group1 {
    flex-wrap:wrap;
    gap: 0 8px;
    li {
        display: inline-flex;
        width: calc(50% - 4px);
        // padding: 14px 0;
        input[type=radio] {
            display: inline-block;
            flex-shrink: 0;
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

.radio_group2 {
    flex-wrap:wrap;
    gap: 12px;
    li {
        display: inline-flex;
        position: relative;
        width: calc(50% - 6px);
        input[type=radio] {
            position: absolute;
            left: 0;
            top: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            appearance: none;
            -webkit-appearance: none;
            cursor: pointer;
            &:checked + label {
                border-color: #111;
                box-shadow: inset 0 0 0 1px #111;
                font-weight: 700;
                color: #111;
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
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 48px;
            padding: 0 16px;
            border: 1px solid #DEDEDE;
            border-radius: 6px;
            font: {
                size: 16px;
                weight: 400;
            }
            color: #66696E;
            text-align: center;
            letter-spacing: -0.01em;
            word-break: break-all;
            cursor: pointer;
        }
    }
    &.small {
        li {
            label {
                height: 40px;
                font-size: 14px;
            }
        }
    }
}

.message{
        display: none;
        font: {
            size: 14px;
            weight: 400;
        }
}
</style>