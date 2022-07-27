<template>
    <v-container justify="center">
        <v-row justify="center">
            <v-col justify="center">
                <v-card max-width="1000" class="mx-auto">
                    <v-card-title v-if="existing">{{ eventTitle }}</v-card-title>
                    <v-card-title v-else>Appointment Details <v-btn @click="switchClass" right absolute small text
                            outlined color="primary">
                            <v-icon>mdi-repeat</v-icon> Class Session
                        </v-btn>
                    </v-card-title>

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
                                <TimeDialog @savedValue="updateTime" class="float-right" />

                                <h4 class="mb-3">Time</h4>
                                <v-text-field disabled filled rounded v-model="time">

                                </v-text-field>

                            </v-col>
                        </v-row>
                        <v-divider class="mt-5"></v-divider>
                        <v-row class="pa-5">
                            <v-col cols="12" md="6">

                                <h4 class="mb-3">Staff Member</h4>
                                <v-select label="Select staff" outlined rounded></v-select>
                                <v-divider></v-divider>
                                <h4 class="mt-3">Notifications</h4>
                                <v-row>
                                    <v-col>
                                        <v-switch inset label="Send Notification to Staff Member"></v-switch>
                                    </v-col>
                                    <v-col>
                                        <v-switch inset label="Send Notification to Client"></v-switch>

                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="6">
                                <h4 class="mb-3">Additional Notes</h4>
                                <v-textarea filled rounded
                                    placeholder="Notes specific to this appointment incase there any special requirements or considerations...">
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-divider></v-divider>
                    <v-row class="pt-3 px-3">
                        <v-col>
                            <v-btn color="primary" class="float-right text-capitalize" md>Save</v-btn>

                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import GoBackButtonRow from './GoBackButtonRow.vue';
import TimeDialog from './TimeDialog.vue';
export default {
    props: ['date', 'time'],
    components: { GoBackButtonRow, TimeDialog },
    data: () => ({
        timeslots: ['1:00pm', '1:15pm'],
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
    }),
    methods: {
        updateTime(e) {
            console.log(e);
            this.time = e
        },
        switchClass() {
            this.$emit('switch')
        }
    }
}
</script>

<style>
</style>