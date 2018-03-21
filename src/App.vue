<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
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

