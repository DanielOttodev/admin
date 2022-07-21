<template>
    <v-container>
        <v-row justify="start">
            <GoBackButton />
        </v-row>
        <v-row class="mt-10">
            <v-col>
                <v-card max-width="1000">
                    <v-card-title>Change Schedule</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <h4>Your Current Schedule:</h4>
                    </v-card-text>
                    <v-row v-for="i in days" :key="i">
                        <v-col>
                            <p class="text-right mt-4 ">{{ i.day }} :</p>
                        </v-col>
                        <v-col>
                            <v-select v-if="i.in" class="inline shrink" color="primary" v-model="from" dense
                                :items="timeRange" label="from" outlined></v-select>
                        </v-col>
                        <v-col>
                            <v-select v-if="i.in" label="to" color="primary" v-model="to" dense :items="timeRange"
                                outlined>
                            </v-select>
                        </v-col>
                        <v-col>
                            <v-switch v-model="i.in" inset dense label="Available" color="success">
                            </v-switch>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-card-actions class="px-3">
                        <v-row>
                            <v-col>
                                <v-btn class="primary text-capitalize float-right">Save</v-btn>

                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>

</template>

<script>
import GoBackButton from '../../../../components/GoBackButton.vue';
export default {
    data: () => ({
        days: [{
            day: "Monday",
            from: "",
            to: "",
            in: true
        }, {
            day: "Tuesday",
            from: "",
            to: "",
            in: true
        }, {
            day: "Wednesday",
            from: "",
            to: "",
            in: true
        }, {
            day: "Thursday",
            from: "",
            to: "",
            in: true
        }, {
            day: "Friday",
            from: "",
            to: "",
            in: true
        }, {
            day: "Saturday",
            from: "",
            to: "",
            in: true
        }, {
            day: "Sunday",
            from: "",
            to: "",
            in: true
        },
        ],
    }),
    computed: {
        timeRange() {
            var x = 15; //minutes interval
            var times = []; // time array
            var tt = 0; // start time
            var ap = ["AM", "PM"]; // AM-PM
            //loop to increment the time and push results in array
            for (var i = 0; tt < 24 * 60; i++) {
                var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
                var mm = (tt % 60); // getting minutes of the hour in 0-55 format
                if (("0" + (hh % 12)).slice(-2) == "00") {
                    times[i] = "12" + ":" + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]    
                }
                else {
                    times[i] = ("0" + (hh % 12)).slice(-2) + ":" + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
                }
                tt = tt + x;
            }
            return times;
        }
    },
    components: { GoBackButton }
}
</script>

<style >
</style>