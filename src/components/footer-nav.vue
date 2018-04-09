<template>
    <div class="footer-nav">
        <div class="footer-nav-content">
            <div class="footer-nav-content-item" :class="{'nav-active': route === '/'}">
                <router-link to="/">
                    <div class="nav-icon">
                        <img v-show="route !== '/'" src="../assets/images/hno.svg" alt="">
                        <img v-show="route === '/'" src="../assets/images/hok.svg" alt="">
                    </div>
                    <div class="nav-text">热映</div>
                </router-link>
            </div>
            <div class="footer-nav-content-item" :class="{'nav-active': route === '/cinema'}">
                <router-link to="cinema">
                    <div class="nav-icon">
                        <img v-show="route !== '/cinema'" src="../assets/images/mno.svg" alt="">
                        <img v-show="route === '/cinema'" src="../assets/images/mok.svg" alt="">
                    </div>
                    <div class="nav-text">影院</div>
                </router-link>
            </div>
            <div class="footer-nav-content-item" :class="{'nav-active': route === '/me'}">
                <router-link to="me">
                    <div class="nav-icon">
                        <img v-show="route !== '/me'" src="../assets/images/eno.svg" alt="">
                        <img v-show="route === '/me'" src="../assets/images/eok.svg" alt="">
                    </div>
                    <div class="nav-text">我的</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            route () {
                return this.$route.path
            }
        }
    };
</script>

<style lang="less">
    .footer-nav {
        display: block;
        position: fixed;
        z-index: 999;
        bottom: 0;
        width: 100%;
        background: #fff linear-gradient(180deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 0 repeat-x;
        background-size: 100% 1px;
        background-color: hsla(0,0%,100%,.98);
        &-content {
            display: flex;
            height: 13.1vmin;
            align-items: stretch;
            box-sizing: border-box;
            padding-top: 1.9vmin;
            a {
                color: #777;
            }
            &-item {
                flex: 1;
                justify-content: center;
            }
            .router-link-active {
                color: #ff4d64;
            }
            .nav-icon {
                display: flex;
                margin: 0 auto;
                height: 5.9vmin;
                width: 100%;
                justify-content: center;
                img {
                    display: block;
                    margin: 0;
                    height: 100%;
                }
            }
            .nav-text {
                display: flex;
                justify-content: center;
                font-size: 10px;
                line-height: 4.8vmin;

            }
        } 
    }
</style>