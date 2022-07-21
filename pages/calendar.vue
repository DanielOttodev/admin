<template>
    <v-container class="ma-0" fluid>
        <v-row>
            <v-col>
                <v-select label="Operator"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <Schedule />

            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
    </v-container>
</template>

<script>
import Schedule from '../components/Schedule.vue';
export default {
    components: { Schedule },
    data: () => ({

    })
}
</script>

<style>
.hw {
    background-color: red !important;
}
</style>