<template>
    <v-container>
        <v-row>
            <v-col>
                <v-select v-model="thours" solo label="Hours" :items="hours"></v-select>
            </v-col>
            <v-col>
                <v-select v-model="tminutes" solo label="Minutes" :items="hours"></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        thours: null,
        tminutes: null,
        price: null,
    }),
    computed: {
        hours() {
            let hours = []
            for (let x = 0; x <= 60; x++) {
                hours.push(x);
            }
            return hours;
        }
    }
}
</script>

<style>
.tf {
    max-width: 150px !important;
}
</style>