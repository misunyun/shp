<template>
    <div class="login_wrap">
        <div class="top_logo">
            <h1 class="logo">SHP</h1>
        </div>
        <div class="form_wrap">
            <UiInputField
                id="id"
                label="아이디"
                placeholder="아이디를 입력해 주세요."
            />
            <UiInputField
                id="id"
                type="password"
                label="비밀번호"
                placeholder="비밀번호를 입력해 주세요."
                :errorMsg="'비밀번호를 입력해 주세요.'"
            />
        </div>
        <div class="login_check">
            <span class="checkbox">
                <input type="checkbox" id="idSave" name="idSave" checked>
                <label for="idSave">아이디 저장</label>
            </span>
        </div>
        <div class="btn_wrap">
            <button type="button" class="btn bctype1"><span>로그인</span></button>
        </div>
        <div class="login_links">
            <ul class="find_idpw">
                <li><NuxtLink class="btn_find_id">아이디 찾기</NuxtLink></li>
                <li><NuxtLink class="btn_find_pw">비밀번호 찾기</NuxtLink></li>
            </ul>
            <NuxtLink class="btn_join">회원가입</NuxtLink>
        </div>
        <div class="login_social">
            <strong class="title"><span>간편 로그인</span></strong>
            <div class="sns_list">
                <NuxtLink class="btn_sns kakao"><span>카카오 로그인</span></NuxtLink>
                <NuxtLink class="btn_sns naver"><span>네이버 로그인</span></NuxtLink>
                <NuxtLink class="btn_sns google"><span>구글 로그인</span></NuxtLink>
                <NuxtLink class="btn_sns apple"><span>애플 로그인</span></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        definePageMeta({
            pageName: '로그인',
            explain: 'CM_01_01000000',
            layout: "signup",
        });
    },
}
</script>

<style lang="scss" scoped>
.top_logo {
    padding: 12px 0;
    margin-bottom: 32px;
    .logo {
        display: inline-block;
        width: 54px;
        height: 24px;
        background: {
            image: url("/assets/images/svg/shp_black_logo.svg");
            repeat: no-repeat;
            position: 0;
            size: 100% auto;
        }
        text-indent: -9999px;
    }
}

.login_wrap {
    .login_check {
        margin-top: 24px;
    }
    .btn_wrap {
        margin-top: 16px;
    }
}

.form_box {
    .title {
        margin-bottom: 8px;
        font: {
            size: 16px;
            weight: 400;
        }
        &.required::after {
            content:"*";
            color:#FF4B41;
        }
    }
     ~ .form_box {
        margin-top: 24px;
    }
}

.login_links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
    a {
        display: inline-block;
        font: {
            size: 16px;
            weight: 400;
        }
    }
    .find_idpw {
        display: flex;
        li {
            &:not(:last-child)::after {
                content: "";
                display: inline-block;
                width: 1px;
                height: 12px;
                margin: 0 8px;
                background: #A0A4AB;
            }
        }
    }
    .btn_join {
        font-weight: 700;
        text-decoration: underline;
    }
}

.login_social {
	margin-top: 40px;
    .title {
        display: block;
        position: relative;
        margin-bottom: 24px;
        font: {
            size: 16px;
            weight: 500;
        }
        text-align: center;
        color: #A0A4AB;
        &::before {
            content: "";
            display: block;
            position: absolute;
            top: calc(50% - 1px);
            left: 0;
            width: 100%;
            height: 1px;
            background: #DEDEDE;
        }
        span {
            display: inline-block;
            position: relative;
            padding: 0 20px;
            background-color: #fff;
        }
    }
}

.btn_sns {
	display: block;
	width: 100%;
	height: 48px;
    border: 1px solid #111;
	border-radius: 6px;
    font: {
        size: 16px;
        weight: 700;
    }
	text-align: center;
	color: #111;
    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 100%;
        margin: 0 auto;
        &::before {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            background: {
                repeat: no-repeat;
                position: 0 0;
            }
        }
    }
    &.kakao {
        background: #FEE500;
        border: none;
        span {
            &::before {
                background-image: url("/assets/images/svg/icon/sns_kakao.svg");
            }
        }
    }
    &.naver {
        background: #03C75A;
        border: none;
        color: #fff;
        span {
            &::before {
                background-image: url("/assets/images/svg/icon/sns_naver.svg");
            }
        }
    }
    &.google {
        span {
            &::before {
                background-image: url("/assets/images/svg/icon/sns_google.svg");
            }
        }
    }
    &.apple {
        span {
            &::before {
                background-image: url("/assets/images/svg/icon/sns_apple.svg");
            }
        }
    }
    ~ .btn_sns {
        margin-top: 12px;
    }
}

.find_account_wrap  {
	max-width: 544px;
    padding: 0 20px;
	margin: 0 auto;
}
.content_desc {
	margin-bottom: 20px;
    font: {
        size: 16px;
        weight: 400;
    }
}

.find_account_info {
	padding: 20px 20px 40px;
	background: #F5F7FA;
	border-radius: 10px;
}

.find_account_info dl {
	text-align: center;
}

.find_account_info dt {
	margin-bottom: 32px;
	font-size: 16px;
	font-weight: 400;
	color: #66696E;
}

.find_account_info dd {
	font-size: 24px;
	font-weight: 700;
	color: #111;
}


.flex_box {
	display: flex;
}

.flex_box .inputbox {
	flex: 1;
}

.flex_box .btn {
	width: auto;
	margin-left: 8px;
}

.pc {
    .top_logo {
        margin: 52px 0 60px;
        text-align: center;
        .logo {
            display: inline-block;
            width: 108px;
            height: 48px;
        }
    }
}
</style>