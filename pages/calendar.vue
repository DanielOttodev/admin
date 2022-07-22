<template>
    <v-container class="ma-0" fluid>
        <v-row>
            <v-col>
                <v-select outlined :items="team" v-model="selected" label="Currently viewing"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <Schedule />

            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import Schedule from '../components/Schedule.vue';
export default {
    components: { Schedule },
    data: () => ({
        selected: 'Daniel Otto',
        team: ['Daniel Otto', 'John Doe', 'Jane Smith']
    })
}
</script>

<style>
.hw {
    background-color: red !important;
}
</style>