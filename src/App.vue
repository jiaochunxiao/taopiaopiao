<template>
    <div id="app">
        <div class="tpp-content">
            <router-view/>
        </div>
        <footer-nav :showNav="showNav"></footer-nav>
    </div>
</template>

<script>
import footerNav from '@/components/footer-nav';
export default {
    name: 'App',
    data() {
        return {
            showNav: true
        }
    },
    components: {
        footerNav
    }
}
</script>

<style lang="less">
    html {
        height: 100%;
    }
    body {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding-bottom: 80px;
    }
    #app {
        height: 100%;
    }
</style>

