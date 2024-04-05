<template>
<div class="inputbox" :class="{ error: errorMsg, success: successMsg }">
    <input
        :type="type"
        :id="id"
        class="inp"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
    />
    <button type="button" class="btn_del">
        삭제
    </button>
    <!-- <p v-if="errorMsg" class="error_msg">{{ errorMsg }}</p>
    <p v-if="successMsg" class="success_msg">{{ successMsg }}</p> -->
    <p v-if="errorMsg || successMsg" class="message">{{ errorMsg || successMsg }}</p>
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
        placeholder: String,
        value: null,
        disabled: false,
        readonly: false,
        errorMsg: String,
        successMsg: String,
    },
    /*
    watch: {
        errorMsg() {
            console.log('watch this.errorMsg ::: ' + this.errorMsg);
        },
        successMsg() {
        console.log('watch this.successMsg ::: ' + this.successMsg);
        }
    },
    */
}
</script>

<style lang="scss" scoped>
.inputbox {
    position: relative;
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
        display: none;
        position: absolute;
        right: 10px;
        top: 9px;
        width: 30px;
        height: 30px;
        background: {
            image: url('/assets/images/svg/icon/close_20.svg');
            repeat: no-repeat;
            position: center center;
            size: 20px auto;
        }
        border-radius: 50%;
        text-indent: -9999em;
    }

    .message {
        display: none;
        margin-top: 8px;
        font-size: 14px;
    }
    &.error .inp {
        border-color: #FF4B41;
        &:focus {
            box-shadow: none;
        }
    }
    &.error .message {
        display: block;
        color: #FF4B41;
    }
    &.success .inp {
        border-color: #00BC61;
        &:focus {
            box-shadow: none;
        }
    }
    &.success .message {
        display: block;
        color: #00BC61;
    }
}
</style>