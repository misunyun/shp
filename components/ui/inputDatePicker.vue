<template>
    <VueDatePicker
        :uid="id"
        v-model="dateValue"
        :enable-time-picker="false"
        @update:model-value="updateDate"
        locale="ko"
        :format="format"
        :placeholder="placeholder ?? '날짜 선택'"
        auto-apply
    />
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
export default {
    components: { VueDatePicker },
    props: {
        id: String,
        date: Date,
        placeholder: String,
        callback: Function,
    },
    data() {
        return {
            dateValue: this.date,
            format: (date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                return `${year}년 ${month}월 ${day}일`;
            }
        }
    },
    methods: {
        updateDate(date) {
            if (this.callback) {
                this.callback({
                    name: 'DATE_PICKER',
                    id: this.id,
                    value: date
                });
            }
        },
    },
    mounted() {
    },
}
</script>

<style lang="scss">
.dp__month_year_wrap {
    flex-direction: row-reverse;
}
/*
.dp__input_wrap {
    > input {
        height: 32px;
        background: {
            image: url('../../assets/images/svg/calendar_icon.svg');
            repeat: no-repeat;
            position: 10px center;
        };
        border: {
            radius: 0;
            color: #8d8d8d;
        };
        font: {
            family: 'Inter Extra Light BETA';
            size: 16px;
        }
        color: #262626;
        text-align: center;
    }
    .dp__input_icon {
        display: none;
    }
}
*/
</style>