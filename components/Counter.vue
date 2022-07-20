<template>
    <v-container>
        <v-row>
            <v-col class="shrink">
                <v-select v-model="thours" outlined label="Hours" :items="hours"></v-select>
            </v-col>
            <v-col class="shrink">
                <v-select v-model="tminutes" outlined label="Min" :items="hours"></v-select>
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