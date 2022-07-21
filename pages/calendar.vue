<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <Schedule />

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Schedule from '../components/Schedule.vue';
import Cal2 from '../components/Cal2.vue';
export default {
    components: { Schedule, Cal2 },
    data: () => ({

    })
}
</script>

<style>
</style>