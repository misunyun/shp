<template>
    <div class="guide_sec">
        <h2 class="guide_tit">Form</h2>

        <div class="guide_box">
            <h3 class="guide_stit">1. Input <span class="guide_comp">컴포넌트</span></h3>
            <div class="guide_note">
                <p>컴포넌트 : /components/ui/inputField.vue</p>
            </div>

            <UiInputField
                id="text1"
                label="기본(필수값인 경우)"
                :required="true"
                placeholder="텍스트를 입력해주세요"
            />

            <UiInputField
                type="tel"
                id="text1-2"
                label="인풋 타입 Tel"
                placeholder="휴대폰 번호를 입력해주세요"
            />

            <UiInputField
                type="password"
                id="text1-3"
                label="인풋 타입 Password"
                placeholder="비밀번호를 입력해주세요"
            />

            <UiInputField
                id="text2"
                value="입력값"
                label="값이 입력된 경우"
                placeholder="텍스트를 입력해주세요"
            />

            <UiInputField
                id="text3"
                value="입력값"
                label="비활성화(Disabled)"
                placeholder="텍스트를 입력해주세요"
                disabled="true"
            />

            <UiInputField
                id="text4"
                value="입력값"
                label="읽기전용(Readonly)"
                placeholder="텍스트를 입력해주세요"
                readonly="true"
            />

            <UiInputField
                id="text5"
                label="에러인 경우(Error)"
                placeholder="텍스트를 입력해주세요"
                :errorMsg="'오류 메시지가 노출됩니다.'"
            />

            <UiInputField
                id="text6"
                label="성공인 경우(Success)"
                placeholder="텍스트를 입력해주세요"
                :successMsg="'성공 메시지가 노출됩니다.'"
            />

            <UiInputField
                id="text7"
                label="인풋+버튼"
                placeholder="텍스트를 입력해주세요."
                :required="true"
                inputButtonText="중복확인"
                :errorMsg="'오류 메시지가 노출됩니다.'"
            />
        </div>

        <div class="guide_box">
            <h3 class="guide_stit">2. Radio <span class="guide_comp">컴포넌트</span></h3>
            <div class="guide_note">
                <p>컴포넌트 : /components/ui/inputRadio.vue</p>
            </div>

            <UiInputRadio
                class="radio_group1"
                name="radioName_1"
                :options="[
                    { name: '옵션1', value: 'RADIO_OPTION_1' },
                    { name: '옵션2', value: 'RADIO_OPTION_2', class: 'XXXXX' },
                    { name: '옵션3', value: 'RADIO_OPTION_3' },
                    { name: '비활성', value: 'RADIO_DISABLED', disabled: true },
                ]"
                :selected="['RADIO_OPTION_2']"
                :callback="(data) => { console.log(data) }"
            />

            <UiInputRadio
                class="radio_group2"
                name="radioName_2"
                :options="[
                    { name: '옵션1', value: 'RADIO_OPTION_2_1' },
                    { name: '옵션2', value: 'RADIO_OPTION_2_2' },
                ]"
                :selected="['RADIO_OPTION_2_2']"
                :callback="(data) => { console.log(data) }"
            />

            <UiInputRadio
                class="radio_group2 small"
                name="radioName_3"
                :options="[
                    { name: '옵션1', value: 'RADIO_OPTION_3_1' },
                    { name: '옵션2', value: 'RADIO_OPTION_3_2' },
                ]"
                :callback="(data) => { console.log(data) }"
            />

        </div>

        <div class="guide_box">
            <h3 class="guide_stit">3. Checkbox (단일)</h3>
            <div class="guide_note">
                <p class="red">label이 없는 경우 : checkbox 컴포넌트를 사용X.</p>
            </div>

            <!-- label이 없는 체크박스인 경우 : checkbox 컴포넌트 사용하지 않음 -->
            <span class="checkbox">
                <input type="checkbox" id="check01" name="check01" title="선택">
            </span>
        </div>


        <br />

        <div class="guide_box">
            <h3 class="guide_stit">4. Checkbox <span class="guide_comp">컴포넌트</span></h3>
            <div class="guide_note">
                <p>컴포넌트 : /components/ui/inputCheckbox.vue</p>
            </div>

            <!-- 아래 설정에서 name과 options의 value 값은 고유해야함 -->
            <UiInputCheckbox 
                class="checkbox"
                name="checkbox"
                :options="[
                    { name: '옵션1', value: 'OPTION_1' },
                    { name: '옵션2', value: 'OPTION_2' },
                    { name: '옵션3', value: 'OPTION_3' },
                    { name: '비활성', value: 'DISABLED', disabled: true },
                ]"
                :checked="['OPTION_2', 'OPTION_3']"
                :callback="(data) => { console.log(data) }"
            />


            <!-- 아래 설정에서 name과 options의 value 값은 고유해야함 -->
            <UiInputCheckbox 
                class="check_group1"
                name="check_group"
                :options="[
                    { name: '옵션1', value: 'GROUP_OPTION_1' },
                    { name: '옵션2', value: 'GROUP_OPTION_2' },
                    { name: '옵션3', value: 'GROUP_OPTION_3' },
                    { name: '비활성', value: 'GROUP_DISABLED', disabled: true },
                ]"
                :checked="['GROUP_OPTION_1', 'GROUP_OPTION_3']"
                :callback="(data) => { console.log(data) }"
            />
        </div>

        <div class="guide_box">
            <h3 class="guide_stit">5. select <span class="guide_comp">컴포넌트</span></h3>
            <div class="guide_note">
                <p>컴포넌트 : /components/ui/select.vue</p>
            </div>

            <button
                class="select_btn"
                :class="`${!selectData.id ? 'placeholder' : selectData.class ?? ''}`"
                @click="openSelect"
            >
                {{ selectData.name }}
            </button>

        </div>
    </div>

    <div class="guide_sec">
        <h2 class="guide_tit">Button</h2>
        <div class="guide_note">
            <p>버튼은 컴포넌트 하지 않음.</p>
            <p>기본 버튼 사이즈에 필요한 요소의 클래스를 추가하여 사용.</p>
        </div>

        <div class="guide_box">
            <h3 class="guide_stit">1. 기본 버튼(Size)</h3>
            <div class="guide_note">
                <p>높이 56 : btn</p>
                <p>높이 48 : btn_md</p>
                <p>높이 40 : btn_sm</p>
                <p>높이 32 : btn_xs</p>
            </div>

            <div class="btn_wrap full"><!-- 수직 정렬인 경우 full 클래스 추가 -->
                <button type="button" class="btn bctype1"><span>.btn : 버튼(H56)</span></button>
                <button type="button" class="btn_md bctype1"><span>.btn_md : 버튼(H48)</span></button>
                <button type="button" class="btn_sm bctype1"><span>.btn_sm : 버튼(H40)</span></button>
                <button type="button" class="btn_xs bctype1"><span>.btn_xs : 버튼(H32)</span></button>
            </div>

        </div>

        <div class="guide_box">
            <h3 class="guide_stit">2. 기본 버튼(Color)</h3>
            <div class="guide_note">
                <p>주버튼 (bgColor Black) : bctype1</p>
                <p>서브버튼 (bgColor Gray) : bctype2</p>
                <p>서브버튼 (lineColor Black) : bctype3</p>
                <p>서브버튼 (lineColor Gray) : bctype4</p>
            </div>

            <div class="btn_wrap full"><!-- 수직 정렬인 경우 full 클래스 추가 -->
                <button type="button" class="btn bctype1"><span>.bctype1 : 블랙</span></button>
                <button type="button" class="btn bctype2"><span>.bctype2 : 그레이</span></button>
                <button type="button" class="btn bctype3"><span>.bctype3 : 라인 블랙</span></button>
                <button type="button" class="btn bctype4"><span>.bctype4 : 라인 그레이</span></button>
            </div>
        
        </div>

        <div class="guide_box">
            <h3 class="guide_stit">3. 기본 버튼(Disabled)</h3>
            <div class="guide_note">
                <p>button 태그일 때 : disabled 속성 추가</p>
                <p>a태그(NuxtLink) 일 때 : disabled 클래스 추가</p>
            </div>

            <div class="btn_wrap full"><!-- 수직 정렬인 경우 full 클래스 추가 -->
                <button type="button" class="btn bctype1" disabled><span>H56 + 블랙</span></button>
                <button type="button" class="btn_md bctype2" disabled><span>H48 + 그레이</span></button>
                <a href="#" class="btn_sm bctype3 disabled"><span>H40 + 라인 블랙</span></a>
                <NuxtLink class="btn_xs bctype4 disabled"><span>H32 + 라인 그레이</span></NuxtLink>
            </div>
            
        </div>

        <div class="guide_box">
            <h3 class="guide_stit">4. 버튼 그룹(정렬)</h3>
            <div class="guide_note">
                <p>[기본] 수평 정렬 : .btn_wrap</p>
                <p>수직 정렬 : .btn_wrap에 <strong>full</strong> 클래스 추가</p>
            </div>
            
            <div class="btn_wrap">
                <button type="button" class="btn bctype2"><span>취소</span></button>
                <button type="button" class="btn bctype1"><span>확인</span></button>
            </div>

            <br />

            <div class="btn_wrap full"><!-- 수직 정렬인 경우 full 클래스 추가 -->
                <button type="button" class="btn bctype1"><span>확인</span></button>
                <button type="button" class="btn bctype3"><span>취소</span></button>
            </div>            

        </div>

        <div class="guide_box">
            <h3 class="guide_stit">5. 링크 버튼</h3>

            <button type="button" class="btn_link"><span>링크(Default)</span></button>

            <br /><br />

            <button type="button" class="btn_link" disabled><span>링크(Disabed)</span></button>

        </div>

        <div class="guide_box">
            <h3 class="guide_stit">6. 하단 고정 버튼</h3>

            <div class="botton_button">
                <div class="btn_wrap">
                    <!-- btn_wish 클릭 시 active 클래스 추가 -->
                    <button
                        type="button"
                        class="btn_wish"
                        :class="{ active: likeActive }"
                        @click="toggleActive"
                    >
                        <span>관심상품</span>
                    </button>
                    <button type="button" class="btn bctype2"><span>비밀번호 찾기</span></button>
                    <button type="button" class="btn bctype1"><span>로그인 하기</span></button>
                </div>
            </div>

        </div>

    </div>
</template>



<script>
import { useDefaultStore } from "~/stores";

export default {
    setup() {
        const store = useDefaultStore();
        return {
            store,
        }
    },
    data() {
        return {
            errorMsg: null,
            radioOption: {
                name: 'radioName',
                options: [
                    { type: 'active', name: '이벤트' }, 
                    { type: 'free', name: '무료' }
                ]
            },
            likeActive: false,


            // select
            selectData: {
                id: '',
                name: 'Placeholder',
                class: null,
            },
            selectOptions: [
                {
                    id: 'selectId_1',
                    name: '옵션1',
                    class: null,
                },
                {
                    id: 'selectId_2',
                    name: '옵션2',
                    class: 'class_2',
                },
                {
                    id: 'selectId_3',
                    name: '옵션3',
                    class: 'class_3',
                },
            ]
        };
    },
    methods: {
        openSelect(event) {
            this.store.openSelect({
                target: event.currentTarget,
                title: "SELECT BOX",
                // width: '100%',
                // align: 'center',
                activeId: this.selectData.id ?? null,
                options: this.selectOptions,
                callback: this.setSelectValue,
            });
        },
        setSelectValue(data) {
            this.selectData = data;
        },
        toggleActive() {
            this.likeActive = !this.likeActive;
        }
    }
}
</script>

<style lang="scss" scoped>
.guide_sec {
    padding:20px;
    ~ .guide_sec {
        margin-top: 30px;
    }
}
.guide_box {
    ~ .guide_box {
        padding: 20px 0 0 0;
    }
}
.guide_tit {
    position: relative;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        max-width: 250px;
        width: 100%;
        height: 1px;
        background: #111;
    }
}
.guide_stit {
    margin: 30px 0 10px 0;
    font-size: 18px;
    font-weight: 600;
}
.guide_note {
    padding: 10px 20px;
    margin-bottom: 15px;
    background-color: #faefef;
    p {
        line-height: 1.3;
    }
    .red {
        color: #ff5b5d;
    }
}
.guide_comp {
    padding: 5px;
    background: #f315c1;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    vertical-align: middle;
}
</style>
