<template>
<div class="form_box">
    <label :class="{required: required}" :for="id" v-if="label">{{ label }}</label>
    <div class="inputbox_set" :class="{ error: errorMsg, success: successMsg }">
        <div class="inputbox">
            <input
                :type="type"
                :id="id"
                class="inp"
                :placeholder="placeholder"
                v-model="inputValue"
                :disabled="disabled"
                :readonly="readonly"
                @input="checkInput"
                @focus="focusEvent"
                @blur="blurEvent"
                
            />
            <button 
                v-if="this.inputValue && focus && !disabled && !readonly" 
                type="button" 
                class="btn_del" 
                @click="clearInput" 
            >
                삭제
            </button>
        </div>
        <button type="button" :class="inputButtonClass" v-if="inputButtonText"><span>{{ inputButtonText }}</span></button>
    </div>
    <p v-if="errorMsg || successMsg" class="message">{{ errorMsg || successMsg }}</p>
    <slot />
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        id: String,
        name: String,
        placeholder: String,
        value: null,
        disabled: false,
        readonly: false,
        errorMsg: String,
        successMsg: String,
        label: null,
        required: Boolean,
        inputButtonText: null,
        inputButtonClass: {
            type: String,
            default: 'btn_md bctype3'
        }

    },
    data () {
        return {
            focus: false,
            inputValue: this.value ?? ''
        };
    },
    watch: {
        value() {
            this.inputValue = this.value;
        }
    },
    methods: {
        checkInput(event) {
            this.focus = true;
            this.inputValue = event.currentTarget.value;
        },
        focusEvent() {
            this.focus = true;
        },
        blurEvent(event) {
            const _this = this;
            console.log(event.currentTarget);
            setTimeout(() => {
                _this.focus = false;
            }, 200);
        },
        clearInput() {
            this.inputValue = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.inputbox_set {
    display: flex;
    gap: 8px;
    .btn_md {
        flex: 0 1;
        min-width: 99px;
    }
    ~ .message {
        display: none;
        margin-top: 8px;
        font: {
            size: 14px;
            weight: 400;
        }
    }
    &.error {
        .inp {
            border-color: #FF4B41;
            &:focus {
                box-shadow: none;
                border-color: #FF4B41;
            }
        }
        ~ .message {
            display: block;
            color: #FF4B41;
        }
    }
    &.success {
        .inp {
            border-color: #00BC61;
            &:focus {
                box-shadow: none;
                border-color: #00BC61;
            }
        }
        ~ .message {
        display: block;
        color: #00BC61;
        }
    }
}

.inputbox {
    position: relative;
    width: 100%;
    .inp {
        display: block;
        position: relative;
        width: 100%;
        height: 48px;
        padding: 0 16px;
        border: {
            width: 1px;
            style: solid;
            color: #DEDEDE;
            radius: 6px;
        }
        font: {
            size: 16px;
            weight: 400;
        }
        color: #111;
        &:focus {
            border-color: #111;
            box-shadow: inset 0 0 0 1px #111;

        }
        &::-webkit-input-placeholder {
            color: #A0A4AB;
            font-weight: 400;
        }
        &:read-only {
            background-color: #F5F7FA;
            cursor: default;
            -webkit-tap-highlight-color: transparent;
        }
        &:read-only:focus {
            border-color: #DEDEDE;
            box-shadow: none;
        }
        &:disabled {
            background-color: #F5F7FA;
            color: #A0A4AB;
            opacity: 1;
        }
    }
    .btn_del {
        position: absolute;
        right: 10px;
        top: 9px;
        width: 30px;
        height: 30px;
        background: {
            image: url('/assets/images/svg/icon/close_black.svg');
            repeat: no-repeat;
            position: center center;
            size: 20px auto;
        }
        text-indent: -9999px;
    }
}
</style>