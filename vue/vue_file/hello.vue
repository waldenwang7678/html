<template lang="jade">
    div
    p {{ greeting }} world!

    other-compont

</template>
<script>

    export default {

        data() {
            return {
                greeting: 'hello',
            }
        },
        component: {
            OtherCompont
        }
    }


</script>

<style lang="stylus" scoped>
    p {
        font-size 30px;
        text-align center
    }


</style>