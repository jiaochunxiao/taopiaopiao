<template>
    <swiper class="banner-slider" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="slider-swiper">
            <a class="slider-item"
               :href="slide.href"
               v-lazy:background-image='slide.src'></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    }
                },
                swiperSlides: [{
                    src: 'http://gw.alicdn.com/tfs/TB1xz4TcSCWBuNjy0FhXXb6EVXa-1280-520.jpg_720x720Q30s100.jpg',
                    href: 'http://wwww.baidu.com'
                }, {
                    src: 'http://gw.alicdn.com/tfs/TB1dbaqc_tYBeNjy1XdXXXXyVXa-1280-520.jpg_720x720Q30s100.jpg',
                    href: 'http://wwww.baidu.com'
                }, {
                    src: 'http://gw.alicdn.com/tfs/TB1xz4TcSCWBuNjy0FhXXb6EVXa-1280-520.jpg_720x720Q30s100.jpg',
                    href: 'http://wwww.baidu.com'
                }, {
                    src: 'http://gw.alicdn.com/tfs/TB1dbaqc_tYBeNjy1XdXXXXyVXa-1280-520.jpg_720x720Q30s100.jpg',
                    href: 'http://wwww.baidu.com'
                }]
            };
        },
        mounted() {
            // setInterval(() => {
            //     console.log('simulate async data')
            //     if (this.swiperSlides.length < 10) {
            //         this.swiperSlides.push(this.swiperSlides.length + 1)
            //     }
            // }, 3000)
        },
        components: {
            swiper,
            swiperSlide
        }
    };
</script>

<style lang="less">
    .banner-slider {
        height: 100%;
        font-size: 14px;
        background: #ededed;
        .slider-item {
            display: block;
            height: 100%;
            text-align: center;
            background-size: cover;
            &[lazy=loading] {
                background-repeat: no-repeat;
                background-position: center;
                background-size: 40px;
            }
        }
    }
</style>