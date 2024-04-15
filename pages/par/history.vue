<template>
    <div class="question_wrap">
        <ul>
            <li>
                <strong>가장 신경 쓰이거나 통증이 있는 부위가 있으신가요?</strong>
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
                <strong>운동 빈도와 시간은 어느 정도입니까?</strong>
                <UiInputCheckbox 
                    class="check_group1"
                    name="check_group"
                    :options="[
                        { name: '매일', value: 'GROUP_OPTION_1' },
                        { name: '주2~3회', value: 'GROUP_OPTION_2' },
                        { name: '주1회', value: 'GROUP_OPTION_3' },
                        { name: '월2~3회', value: 'GROUP_DISABLED' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
            </li>
            <li>
                <strong>자주(선호)하는 운동 종목/종류/PT 여부는?</strong>
                <UiInputField
                    id="id"
                    placeholder="직접 입력"
                    :errorMsg="'항목을 입력해 주세요.'"
                />
                
            </li>
            <li>
                <strong>수면시간, 자세 및 식습관</strong>
                <UiInputCheckbox 
                    class="check_group1"
                    name="check_group"
                    :options="[
                        { name: '바른 자세', value: 'GROUP_OPTION_1' },
                        { name: '옆으로', value: 'GROUP_OPTION_2' },
                        { name: '엎드려', value: 'GROUP_OPTION_3' },
                        { name: '대자형', value: 'GROUP_DISABLED' },
                        { name: '새우잠', value: 'GROUP_DISABLED' },
                    ]"
                    :callback="(data) => { console.log(data) }"
                />
                <UiInputField
                    id="id"
                    placeholder="구체적으로 작성"
                />
                <UiInputField
                    id="id"
                    label="식습관"
                    placeholder="직접 입력"
                    :errorMsg="'항목을 입력해 주세요.'"
                />
            </li>
            <li>
                <strong>최근 X-ray 검사를 받은 적이 있습니까?</strong>
                <div class="second">
                    <p>운동을 할 때 가슴이나 가슴 주위에 통증이나 불편함을 느낀 적이 있다</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>평상시 가끔 호흡곤란이 온다</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>알 수 없는 어지럼증이나 기절한 경험</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>앉아있는 상태를 제외하고 밤에 호흡이 곤란하다</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>부상과 관련없이 재발되는 발목의 부종</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>보통 때보다 심장박동이 불규칙하거나 빨리 뛰는 경우</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>걷다가 멈췄을 때 다리에 통증이 있는 경우(절뚝거림)</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                    />
                </div>
                <div class="second">
                    <p>위의 항목들을 주치의와 상의한 적 있다</p>
                    <UiInputRadio
                        class="radio_group2 small"
                        name="radioName_5"
                        :options="[
                            { name: '예', value: 'RADIO_OPTION_5_1' },
                            { name: '아니오', value: 'RADIO_OPTION_5_2' },
                        ]"
                        :callback="(data) => { console.log(data) }"
                        :errorMsg="'항목을 선택해 주세요.'"
                    />
                </div>
                
            </li>
            <li>
                <strong>임신중이거나 지금 가능성이 있는지 의심스러운 경우</strong>
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
                <strong>콜레스테롤 수치가 높거나 지난 1년 이상 이상 증세가 있어 약을 복용하고 있는 경우( 고혈압, 당뇨, 지방간, 콜레스테롤, 기타)</strong>
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
                <strong>최근에 담배를 피우거나 끊은 기간이 6개월 미만인 경우</strong>
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
            <li>
                <strong>운동을 할 때 뼈나 관절 또는 근육에 부담이 느껴지는 경우</strong>
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
            <li>
                <strong>평소 목이나 등에 문제가 있어 치료 또는 마사지 등을 받은 경우</strong>
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
            <li>
                <strong>최근 6개월 동안 알 수 없는 이유로 체중이 빠지거나 늘어난 경우(5kg 이상 차이나는 경우)</strong>
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
        <div class="btn_wrap">
            <button type="button" class="btn bctype1"><span>제출하기</span></button>
        </div>
    </div>
</template>

<script>
    export default {
    setup() {
        definePageMeta({
            pageName: '메디컬 히스토리',
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
            .second{
                counter-increment: alpha;
                & + .second{
                    margin-top: 32px;
                }
                p{
                    position: relative;
                    padding-left: 18px;
                    margin-bottom: 16px;
                    font-size: 16px;
                    &::before{
                        content: counter(alpha, lower-alpha)".";
                        position: absolute;
                        top:0;
                        left:0;
                    }
                }
            }
        }
    }
    .btn_wrap{
        margin-top: 60px;
    }
}
</style>