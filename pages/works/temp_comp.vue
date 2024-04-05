<template>
    <div style="padding:20px;">
        <p>Dafault</p>
        <UiInputField
            id="text1"
            placeholder="텍스트를 입력해주세요"
        />

        <p style="margin-top:10px">Dafault(Type="tel")</p>
        <UiInputField
            type="tel"
            id="text1-2"
            placeholder="휴대폰 번호를 입력해주세요"
        />

        <p style="margin-top:10px">Dafault(Type="password")</p>
        <UiInputField
            type="password"
            id="text1-3"
            placeholder="비밀번호를 입력해주세요"
        />

        <p style="margin-top:10px">Done</p>
        <UiInputField
            id="text2"
            value="입력값"
            placeholder="텍스트를 입력해주세요"
        />

        <p style="margin-top:10px">Disabled</p>
        <UiInputField
            id="text3"
            value="입력값"
            placeholder="텍스트를 입력해주세요"
            disabled="true"
        />

        <p style="margin-top:10px">Readonly</p>
        <UiInputField
            id="text4"
            value="입력값"
            placeholder="텍스트를 입력해주세요"
            readonly="true"
        />

        <p style="margin-top:10px">Error</p>
        <UiInputField
            id="text5"
            placeholder="텍스트를 입력해주세요"
            errorMsg="오류 메시지가 노출됩니다."
        />

        <p style="margin-top:10px">Success</p>
        <UiInputField
            id="text5"
            placeholder="텍스트를 입력해주세요"
            successMsg="성공 메시지가 노출됩니다."
        />
    </div>

    <div style="padding:20px;">
        <UiInputCheck 
            id="checkbox"
            name="checkbox"
            title="선택"
        />

        <UiInputCheck 
            id="check01"
            name="check01"
            title="항목1 선택"
            label="항목1"
        />
        <UiInputCheck 
            id="check02"
            name="check02"
            title="항목2 선택"
            label="항목2"
            checked="checked"
        />
        <UiInputCheck 
            id="check03"
            name="check03"
            title="항목3 선택"
            label="항목3"
            disabled="disabled"
        />

    </div>

    <div style="padding:20px;">

        <UiInputRadioGroup
            :radioOption="{
                name: 'radioName',
                class: 'radio_group1',
                options: [
                    { name: '예' },
                    { name: '아니오' },
                ]
            }"
        />

        <UiInputRadioGroup
            :radioOption="{
                name: 'radioName2',
                class: 'radio_group2',
                options: [
                    { name: '예' }, 
                    { name: '아니오' }
                ]
            }"
        />

        <UiInputRadioGroup
            :radioOption="{
                name: 'radioName3',
                class: 'radio_group2 small',
                options: [
                    { name: '예' }, 
                    { name: '아니오' }
                ]
            }"
        />

    </div>

    <div style="padding:20px;">

        <UiInputCheckGroup
            :checkOption="{
                name: 'checkName',
                class: 'check_group1',
                options: [
                    { name: '예' },
                    { name: '아니오' },
                ]
            }"
        />

    </div>

    <div style="padding:20px;">
        <button type="button" class="btn"></button>
    </div>
</template>



<script>
export default {
    data() {
        return {
            radioOption: {
                name: 'radioName',
                options: [
                    { type: 'active', name: '이벤트' }, 
                    { type: 'free', name: '무료' }
                ]
            },
        };
    }
}
</script>

<style lang="scss" scoped>
</style>
