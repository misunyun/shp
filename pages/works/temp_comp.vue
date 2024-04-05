<template>
    <div style="padding:20px;">
        <p>Dafault</p>
        <UiInputField
            :id="'text1'"
            :placeholder="'텍스트를 입력해주세요'"
        />

        <p style="margin-top:10px">Dafault(Type="tel")</p>
        <UiInputField
            :type="'tel'"
            :id="'text1-2'"
            :placeholder="'휴대폰 번호를 입력해주세요'"
        />

        <p style="margin-top:10px">Dafault(Type="password")</p>
        <UiInputField
            :type="'password'"
            :id="'text1-3'"
            :placeholder="'비밀번호를 입력해주세요'"
        />

        <p style="margin-top:10px">Done</p>
        <UiInputField
            :id="'text2'"
            :value="'입력값'"
            :placeholder="'텍스트를 입력해주세요'"
        />

        <p style="margin-top:10px">Disabled</p>
        <UiInputField
            :id="'text3'"
            :value="'입력값'"
            :placeholder="'텍스트를 입력해주세요'"
            :disabled="true"
        />

        <p style="margin-top:10px">Readonly</p>
        <UiInputField
            :id="'text4'"
            :value="'입력값'"
            :placeholder="'텍스트를 입력해주세요'"
            :readonly="true"
        />

        <p style="margin-top:10px">Error</p>
        <UiInputField
            :id="'text5'"
            :placeholder="'텍스트를 입력해주세요'"
            :errorMsg="'오류 메시지가 노출됩니다.'"
        />

        <p style="margin-top:10px">Success</p>
        <UiInputField
            :id="'text5'"
            :placeholder="'텍스트를 입력해주세요'"
            :successMsg="'성공 메시지가 노출됩니다.'"
        />
    </div>
</template>



<script>
</script>

<style lang="scss" scoped>
</style>
