<template>
    <v-sheet>
        <v-row>
            <v-col>
                <GoBackButton/>
            </v-col>
        </v-row>

        <v-container class="ml-3 mt-5">
            <AddServiceForm />
        </v-container>
    </v-sheet>

</template>

<script>
import AddServiceForm from "../../components/AddServiceForm.vue";
import GoBackButton from "../../components/GoBackButton.vue";
export default {

    components: { AddServiceForm, GoBackButton }
}
</script>

<style>
</style>