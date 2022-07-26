<template>
    <v-container justify="center">
        <v-row justify="center">
            <v-col justify="center">
                <v-card max-width="1000" class="mx-auto">
                    <v-card-title v-if="existing">{{ eventTitle }}</v-card-title>
                    <v-card-title v-else>Appointment Details</v-card-title>
                    <v-divider />

                    <v-row class="pa-5">
                        <v-col>
                            <h4>Client</h4>
                            <v-select label="Select Client" outlined rounded></v-select>
                        </v-col>
                        <v-col>
                            <h4>Date</h4>
                            <p>{{ date }}</p>
                        </v-col>
                    </v-row>

                </v-card>
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
import GoBackButtonRow from './GoBackButtonRow.vue';
export default {
    props: ['date', 'time'],
    components: { GoBackButtonRow }
}
</script>

<style>
</style>