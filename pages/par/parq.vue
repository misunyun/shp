<template>
    <div class="question_wrap">
        <ul>
            <li>
                <strong>심장질환을 앓고 있어 의사가 권고한 운동만 해야 한다고 들은 적이 있습니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_1"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_3_1' },
                        { name: '아니오', value: 'RADIO_OPTION_3_2' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>운동 시 가슴의 통증을 느끼십니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_2" 
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_2_1' },
                        { name: '아니오', value: 'RADIO_OPTION_2_2' },
                    ]" 
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>지난 몇 달간, 운동을 하고 있지 않을 경우에도 가슴에 통증을 느낀 적이 있습니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_3"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_3_1' },
                        { name: '아니오', value: 'RADIO_OPTION_3_1' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                    :errorMsg="'항목을 선택해 주세요.'"
                />
            </li>
            <li>
                <strong>현기증을 느끼거나 심하게 어지러운 적이 있습니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_4"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_4_1' },
                        { name: '아니오', value: 'RADIO_OPTION_4_2' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>운동을 할 경우 악화될 수 있는 뼈 또는 관절질환이 있습니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_5"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_5_1' },
                        { name: '아니오', value: 'RADIO_OPTION_5_2' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>최근 의사로부터 혈압 또는 심장질환 관련된 약을 처방 받은 적이 있습니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_6"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_6_1' },
                        { name: '아니오', value: 'RADIO_OPTION_6_2' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>위에 나열된 사항 외에 다른 사유로 운동을 해서는 안되는 경우가 있습니까?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_7"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_7_1' },
                        { name: '아니오', value: 'RADIO_OPTION_7_2' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>현재 임신 중인가요?</strong>
                <UiInputRadio
                    class="radio_group2 small"
                    name="radioName_8"
                    :options="[
                        { name: '예', value: 'RADIO_OPTION_8_1' },
                        { name: '아니오', value: 'RADIO_OPTION_8_2' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
        </ul>
        <div class="agree_wrap">
            <UiInputCheckbox 
                class="checkbox"
                name="checkbox"
                :options="[
                    { name: '위 사항을 충분히 읽고, 이해하고, 성실하게 답변하였음', value: 'OPTION_1' },
                ]"
                :checked="['OPTION_1']"
                :callback="(data) => { console.log(data) }"
            />
        </div>
        <div class="btn_wrap">
            <button type="button" class="btn bctype1"><span>제출하기</span></button>
        </div>
    </div>
</template>

<script>
    export default {
    setup() {
        definePageMeta({
            pageName: 'Par-q',
            explain: 'CM_01_01000000',
            layout: "signup",
        });
    },
}
</script>

<style lang="scss" scoped>
.question_wrap{
    ul{
        li{
            margin-bottom:60px;
            counter-increment: num;
            strong{
                display: block;
                position: relative;
                line-height: 1.6;
                padding-left: 35px;
                margin-bottom: 20px;
                font-size: 18px;
                letter-spacing: -0.01em;
                &::before{
                    content:'Q' counter(num)".";
                    position: absolute;
                    left: 0;
                    top: 3px;
                }
            }
        }
    }
    .btn_wrap{
        margin-top: 60px;
    }
}
</style>