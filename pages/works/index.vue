<template>
<div style="padding: 20px;">
    <h1 style="margin-bottom: 30px; font-size: 20px; text-align: center;">페이지 목록</h1>
    <div class="page_list">
        <ul>
            <li
                v-for="(route, idx) in $router.options.routes"
                :key="idx"
                :style="route.path === '/works' || route.path === '/'? 'display: none;' : undefined"
                class="link"
            >
                <router-link
                    :to="{
                        name: route.name,
                        params: route.params,
                        query: route.query,
                    }"
                >
                    <!-- <div>
                        {{ JSON.stringify(route) }}
                    </div> -->
                    <div>
                        {{ route.meta.pageName }}
                        <span v-if="route.meta.explain">
                            ({{ route.meta.explain }})
                        </span>
                    </div>
                    <span class="path">
                        path: {{ route.path }}
                        <template v-for="(query, idx) in route.query"> ? {{ idx }}={{ query }}& </template>
                    </span>
                    <span class="param" v-if="route.params">
                        Params : {{ route.params }}
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup>
</script>


<style lang="scss" scoped>
.page_list {
    // width: 600px;
    margin: 0 auto;
    ul {
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: 10px;

        li {
            width: 32%;
            min-height: 70px;
            // width: 250px;
        }
        .path {
            margin-top: 5px;
        }

        .link {
            padding: 10px;
            margin: 0 0 10px 0;
            background: white;
            color: #555;
            border: {
                width: 1px;
                style: solid;
                color: $border-color-gray;
                radius: 5px;
            }
            //   @include border-radius(5px);
            word-break: break-all;

            &:active,
            &:hover {
                background-color: #EEF0F8;
                // color: white;
                > a {
                    // color: white;
                }
            }

            > a {
                display: flex;
                flex-direction: column;
                text-decoration: unset;
            }
        }
    }
}
</style>