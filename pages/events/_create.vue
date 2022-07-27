<template >
    <v-container>

        <GoBackButtonRow />
        <Transition>
            <v-container v-if="!isApp && !isClass" class="mt-10">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-hover v-slot="{ hover }">
                            <v-card height="200" @click="toggleApp" class="pa-5 text-center" :elevation="hover ? 12 : 2"
                                :class="{ 'on-hover': hover }">
                                <v-icon class="" x-large color="primary">mdi-calendar</v-icon>
                                <v-card-title class="justify-center">Appointment</v-card-title>
                                <v-card-subtitle>Create a new appointment for a 1 on 1 booking with a client and staff
                                    member</v-card-subtitle>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-hover v-slot="{ hover }">
                            <v-card @click="toggleClass" height="200" class="pa-5 text-center"
                                :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                <v-icon class="" x-large color="primary">mdi-google-classroom</v-icon>
                                <v-card-title class="justify-center">Class Session</v-card-title>
                                <v-card-subtitle>Create a new session for an existing class</v-card-subtitle>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </Transition>
        <Transition name="slide-fade" mode="out-in">
            <v-container v-if="isApp || isClass">
                <h3 v-if="isClass">Hey</h3>

                <AppointmentView @switch="toggleClass" v-if="isApp" :time="time" :date="date" class="mt-10" />

            </v-container>
        </Transition>

    </v-container>
</template>

<script>
import AppointmentView from '../../components/AppointmentView.vue';
import QCard from '../../components/QCard.vue';
export default {
    data: () => ({
        isApp: false,
        isClass: false

    }),
    methods: {
        toggleClass() {
            this.isApp = false
            this.isClass = true
            console.log(this.isApp)

        },
        toggleApp() {
            this.isApp = true
            this.isClass = false
            console.log(this.isApp)

        }
    },
    computed: {
        time() {
            let time_arr = this.$route.query.t.split(":");
            let hours = time_arr[0];

            let minutes = time_arr[1];
            console.log(hours + ":" + minutes);
            var m = (parseInt((minutes + 7.5) / 15) * 15) % 60;
            if (m.toString().length < 2) {
                m = m.toString() + "0";
            }
            var h = minutes > 52 ? (hours === 23 ? 0 : ++hours) : hours;
            let timestr = h + ":" + m + ":00";
            console.log(timestr);
            const timeString12hr = new Date("1970-01-01T" + timestr + "Z")
                .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" });
            return timeString12hr; // this.$route.query.t
        },
        date() {
            return this.$route.query.d;
        }
    },
    components: { AppointmentView, QCard }
}
</script>

<style>
/* we will explain what these classes do next! */

.v-enter-active,
.v-leave-active {
    transition: opacity 1.8s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave-from {
    opacity: 1
}

.slide-fade-enter-active {
    transition: all 1.8s ease-out;
}

.slide-fade-leave-active {
    transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {

    opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    transform: translateY(-265px);
    opacity: 1;
}
</style>