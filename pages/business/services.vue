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
                    <v-card-text class="text-subtitle-1">You currently have no services! <a @click="toService()">Add a
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
export default {
    methods: {
        toService() {
            this.$router.push('/business/addservice')
        }
    }
}
</script>

<style>

</style>