<template>
    <div class="footer">
        <div class="footer_inner">
            <span class="logo">SHP</span>
            <ul class="link_list">
                <li><NuxtLink>서비스 이용약관</NuxtLink></li>
                <li><NuxtLink class="bold">개인정보처리방침</NuxtLink></li>
                <li><NuxtLink>이메일무단수집금지</NuxtLink></li>
                <li><NuxtLink>법적고지</NuxtLink></li>
                <li><NuxtLink>윤리경영(부정제보)</NuxtLink></li>
                <li><NuxtLink>보안신고</NuxtLink></li>
            </ul>
            <div class="footer_bottom">
                <div class="footer_info">
                    <div class="info">
                        <div class="company">에스에이치피코퍼레이션 (대표자: 양진우)</div>
                        <div>사업자등록번호: 716-88-02417</div>
                    </div>
                    <div class="info">
                        <div>서울특별시 강남구 언주로 30길 26, 반트 타워팰리스 m1층</div>
                        <div>팩스번호: 02-3498-0079</div>
                    </div>
                    <div class="copy_right">©에스에이치피코퍼레이션. All Rights Reserved.</div>
                </div>
                <ul class="app_download">
                    <li><NuxtLink class="google_play">이메일무단수집금지</NuxtLink></li>
                    <li><NuxtLink class="app_store">이메일무단수집금지</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer {
    padding: 32px 20px 174px;
    // padding: 32px 20px 86px;
    margin-top: 60px;
    background-color: $header-background-color;
    color: #fff;
    a {
        &.bold {
            font: {
                weight: 700;
            }
        }
        font: {
            size: 13px;
            weight: 400;
        }
        color: #fff;
    }
    .logo {
        display: inline-block;
        width: 68px;
        height: 30px;
        background: {
            image: url("/assets/images/svg/bottom_logo.svg");
            repeat: no-repeat;
            position: 0;
        }
        text-indent: -9999px;
    }
    .link_list {
        margin-top: 16px;
        li {
            display: inline-block;
            padding: 4px 0;
            // padding: 0 10px 0 0;
            &:not(:last-child) {
                &:after {
                    content: "";
                    display: inline-block;
                    width: 1px;
                    height: 12px;
                    margin: 0 8px;
                    background-color: #fff;
                    vertical-align: middle;
                    opacity: 0.4;
                }
            }
        }
    }
    .footer_bottom {
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 20px;
    }
    .footer_info {
        .info {
            font: {
                size: 12px;
                weight: 400;
            }
            ~ .info {
                margin-top: 16px;
            }
            > div ~ div {
                margin-top: 6px;
            }
        }
        .company {
            font-weight: 700;
        }
    }
    .copy_right {
        margin-top: 16px;
        font: {
            size: 12px;
            weight: 400;
        }
        opacity: 0.6;
    }
    .app_download {        
        display: flex;
        align-items: center;
        gap: 7px;
        // text-align: center;

        > li {
            max-width: 164px;
            width: 100%;
            > a {
                display: block;
                width: 100%;
                height: 48px;
                background-color: #000;
                border: {
                    style: solid;
                    width: 1px;
                    color: #A6A6A6;
                    radius: 7px;
                }
                text-indent: -9999px;
                &.google_play {
                    background: {
                        image: url("/assets/images/svg/bottom_google_play.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
                &.app_store {
                    background: {
                        image: url("/assets/images/svg/bottom_app_store.svg");
                        repeat: no-repeat;
                        position: center;
                    }
                }
            }
        }
    }
}

@media (max-width: 359px) {
    .footer {
        .app_download {
            display: block;
            > li {
                &:nth-child(2) {
                    margin-top: 10px;
                }
            }
        }
    }
}

.pc {
    .footer {
        padding: 40px 20px 80px;
        .footer_inner {
            max-width: 1200px;
            margin: 0 auto;
        }
        a {
            font-size: 14px;
        }
        .logo {
            margin-right: 32px;
            vertical-align: top;
        }
        .link_list {
            display: inline-block;
            margin-top: 4px;
            vertical-align: top;
            li {
                display: inline-block;
                padding: 4px 0;
                &:not(:last-child) {
                    &:after {
                        margin: 0 20px;
                    }
                }
            }
        }
        .footer_bottom {
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 40px;
        }
        .footer_info {
            .info {
                font: {
                    size: 13px;
                }
                ~ .info {
                    margin-top: 12px;
                }
                > div {
                    display: inline-block;
                    &:not(:last-child) {
                        &:after {
                            content: "";
                            display: inline-block;
                            width: 1px;
                            height: 12px;
                            margin: 0 8px;
                            background-color: #fff;
                            vertical-align: middle;
                            opacity: 0.4;
                        }
                    }
                }
                > div ~ div {
                    margin-top: 0;
                }
            }
            .company {
                font-weight: 400;
            }
        }
        .copy_right {
            margin-top: 24px;
            font: {
                size: 13px;
            }
        }
        
        .app_download {
            justify-content: flex-end;
            align-items: center;
            > li {
                width: 164px;
            }
        }
    }
}
</style>
