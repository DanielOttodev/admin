<template>
    <v-container justify="center">
        <v-row justify="center">
            <v-col justify="center">
                <v-card max-width="1000" class="mx-auto">
                    <v-card-title v-if="existing">{{ eventTitle }}</v-card-title>
                    <v-card-title v-else>Appointment Details</v-card-title>
                    <v-divider />
                    <v-container>
                        <v-row class="pa-5">
                            <v-col>
                                <h4 class="mb-3">Client</h4>
                                <v-autocomplete :items="client" label="Select Client" filled rounded> </v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-btn small text outlined class="float-right" color="primary">Change</v-btn>
                                <h4 class="mb-3">Date</h4>
                                <p>{{ date }}</p>
                            </v-col>
                        </v-row>
                        <v-divider class="mt-5"></v-divider>
                        <v-row class="pa-5">
                            <v-col>

                                <h4 class="mb-3">Service Detail</h4>
                                <v-select label="Select Service" outlined rounded></v-select>
                            </v-col>
                            <v-col>
                                <v-btn small text outlined class="float-right" color="primary">Change</v-btn>
                                <h4 class="mb-3">Time</h4>
                                <p>{{ time }}</p>

                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

        </v-row>



    </v-container>
</template>

<script>
import GoBackButtonRow from './GoBackButtonRow.vue';
export default {
    props: ['date', 'time'],
    components: { GoBackButtonRow },
    data: () => ({
        option: 'hey',
        client: ['Noah',
            'Emma',
            'Oliver	',
            'Charlotte',
            'Elijah	',
            'Amelia',
            'James',
            'Ava',
            'William',
            'Sophia',
            'Benjamin',
            'Isabella',
            'Lucas',
            'Mia',
            'Henry',
            'Evelyn',
            'Theodore',
            'Harper',
        ]
    })
}
</script>

<style>
</style>