<template>
    <v-row>
        <v-btn left absolute text outlined small>
            <v-icon @click="routeBack()">mdi-chevron-double-left</v-icon>
        </v-btn>
    </v-row>


</template>

<script>
export default {

    methods: {
        routeBack() {
            this.$router.back();
        }
    },
}
</script>

<style>
</style>