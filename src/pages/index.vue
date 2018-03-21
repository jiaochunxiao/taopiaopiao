<template>
    <div class="index-layout">
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

    </div>
</template>

<script>
    import SliderBanner from '../components/banner-slider';
    import ScrollLoading from '../components/scroll-loading';

    export default {
        data() {
            return {
                list: [1, 2, 3]
            };
        },
        components: {
            SliderBanner,
            ScrollLoading
        },
        methods: {
            infiniteFun($state) {
                console.log('test');
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
            }
        }
    };

</script>

<style lang="less">
    .index-layout {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 10px;
        .slider-banner {
            height: 40vw;
            min-height: 40vw;
        }
        .content-scroll {
            flex: 1;
        }
    }

</style>

