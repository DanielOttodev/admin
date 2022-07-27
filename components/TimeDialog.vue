<template>
    <v-row>
        <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" small text outlined v-bind="attrs" v-on="on">Change</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="primary" dark>Choose Appointment Time</v-toolbar>
                        <v-card-text class="pa-10">
                            <v-row>
                                <v-col>
                                    <v-select v-model="hour" :items="hours" filled rounded label="Hour"></v-select>
                                </v-col>
                                <v-col>
                                    <v-select v-model="minute" :items="minutes" filled rounded label="Minute">
                                    </v-select>
                                </v-col>
                                <v-col>
                                    <v-select v-model="ap" :items="ampm" filled rounded label="AM/PM"></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <h2 v-if="timefilled" class="text-center">{{ hour }}:{{ minute }}:{{ ap
                                    }}
                                    </h2>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">Cancel</v-btn>
                            <v-btn text @click="saveTime(), dialog.value = false">Save</v-btn>

                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        ampm: ['AM', 'PM'],
        minutes: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '55'],
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        minute: '',
        hour: '',
        ap: ''

    }),
    computed: {
        timefilled() {
            if (this.ap && this.hour && this.minute != '') {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        saveTime() {
            let time = this.hour + ':' + this.minute + ':' + this.ap
            console.log(time);
            this.$emit('savedValue', time)
        }
    }
}
</script>

<style>
</style>