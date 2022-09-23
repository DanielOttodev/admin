<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="text-center">
                    <v-card-title>Services
                        <v-btn @click="toService()" right absolute small color="primary" dark>Add
                            New</v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text v-if="services.length < 1" class="text-subtitle-1">You currently have no services! <a
                            @click="toService()">Add a
                            service
                            to
                            create bookings.
                        </a>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { routes } from '../../routes'
export default {
    data: () => ({
        services: [],
    }),

    methods: {
        toService() {
            this.$router.push('/business/addservice')
        },
        async getServices() {
            if (this.min == null) this.min = 0
            if (this.hour == null) this.hour = 0
            const response = await this.$mFetch({
                route: routes.services,
                method: 'GET'
            })
            console.log(response.res);

        },
    },
    mounted() {
        this.getServices();
    }
}
</script>

<style>

</style>