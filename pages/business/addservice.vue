<template>
    <v-sheet>
        <v-row>
            <v-col>
        <v-btn left absolute text outlined small>
            <v-icon @click="routeBack()">mdi-chevron-double-left</v-icon>
        </v-btn>
            </v-col>
        </v-row>

        <v-container class="ml-3 mt-5">
            <AddServiceForm />
        </v-container>
    </v-sheet>

</template>

<script>
import AddServiceForm from "../../components/AddServiceForm.vue";
export default {
    methods: {
        routeBack() {
            this.$router.back();
        }
    },
    components: { AddServiceForm }
}
</script>

<style>
</style>