<template>
    <div class="index-layout">
        <header class="index-header border-1px-bottom">
            <div class="index-header-city" @click="showCityList">
                <span class="index-header-city-name">{{ $store.state.city.name }}</span>
                <span class="index-header-city-arrow"></span>
            </div>
            <div class="index-header-tab">
                <div class="index-header-tab-item" :class="{'index-header-tab-selected': tabSelcted}" @click="selectTab(true)">正在热映</div>
                <div class="index-header-tab-item" :class="{'index-header-tab-selected': !tabSelcted}"  @click="selectTab(false)">即将上映</div>
                <span class="index-header-tab-bottom move pa" :style="{left: moveLeft}"></span>
            </div>
        </header>
        <section v-show="isShow" class="index-content">
            <div class="slider-banner">
                <slider-banner></slider-banner>
            </div>
            <div class="content-scroll">
                <scroll-loading @infiniteFun="infiniteFun">
                    <p v-for="(item, index) in list" :key="index">
                        Line: <span v-text="item"></span>
                    </p>
                </scroll-loading>
            </div>
        </section>
        <section v-show="!isShow" class="index-content">
            <div class="index-coming"></div>
        </section>

    </div>
</template>

<script>
    import SliderBanner from '../components/banner-slider';
    import ScrollLoading from '../components/scroll-loading';
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                list: [1, 2, 3],
                tabSelcted: true,
                moveLeft: '5%',
                isShow: true
            };
        },
        components: {
            SliderBanner,
            ScrollLoading
        },
        mounted() {
            this.$store.dispatch('getCityList');
        },
        methods: {
            infiniteFun($state) {
                setTimeout(() => {
                    const temp = [];
                    for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
                        temp.push(i);
                    }
                    this.list = this.list.concat(temp);
                    $state.loaded();
                    if (this.list.length > 100) {
                        $state.complete();
                    }
                }, 1000);
            },
            showCityList() {

            },
            moveTab() {

            },
            selectTab(flag) {
                this.tabSelcted = flag;
                this.moveLeft = flag ? '5%' : '55%';
                this.isShow = !this.isShow;
            }
        }
    };

</script>

<style lang="less">
    @import '../assets/css/border.less';
    .index-layout {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 10px;
        .index-header {
            position: relative;
            font-size: 0;
            &-city {
                display: inline-block;
                width: 43%;
                vertical-align: top;
                box-sizing: border-box;
                font-size: 0;
                line-height: 10.7vw;
                background: url('../assets/images/icon.svg') no-repeat 0%;
                background-size: 25px;
                background-position: 15px;
                padding-left: 50px;
                &-name {
                    display: inline-block;
                    vertical-align: middle;
                    color: #333;
                    font-size: .14rem;
                }
                &-arrow {
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 4px;
                    width: 12px;
                    height: 12px;
                    &::after {
                        content: "";
                        display: block;
                        width: 6px;
                        height: 6px;
                        margin-left: 0;
                        border: 1px solid #50505a;
                        border-top: 0 none;
                        border-left: 0 none;
                        margin-left: 2px;
                        transform: rotate(45deg);
                    }
                }
            }
            &-tab {
                position: relative;
                display: inline-block;
                width: 57%;
                vertical-align: top;
                &-item {
                    display: inline-block;
                    vertical-align: middle;
                    width: 50%;
                    text-align: center;
                    font-size: 14px;
                    line-height: 10.7vw;

                }
                &-selected {
                    color: #ff4d64;
                }
                &-bottom {
                    position: absolute;
                    display: inline-block;
                    bottom: 0px;
                    width: 40%;
                    border-bottom: 3px solid #ff4d64;
                    transition: left 0.3s ease-in-out;
                }
            }
        }
        .slider-banner {
            height: 40vw;
            min-height: 40vw;
        }
        .content-scroll {
            flex: 1;
        }
    }

</style>

