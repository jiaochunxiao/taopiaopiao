<template>
    <div class="infinite-loading">
        <slot></slot>
        <infinite-loading @infinite="infiniteHandler" spinner="circles">
            <span slot="no-more"></span>
        </infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        props: {
            infiniteFun: {
                type: Function,
                default: function () {}
            }
        },
        methods: {
            infiniteHandler($state) {
                this.$emit('infiniteFun', $state)
            }
        },
        components: {
            InfiniteLoading
        }
    };

</script>

<style lang="less" scoped>

</style>