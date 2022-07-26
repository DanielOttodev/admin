<template >
    <v-container>
        <GoBackButtonRow />

        <AppointmentView :time="time" :date="date" class="mt-10" />
    </v-container>
</template>

<script>
import AppointmentView from '../../components/AppointmentView.vue';
export default {
    data: () => ({}),
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
    components: { AppointmentView }
}
</script>

<style>
</style>