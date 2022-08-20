<template>
    <v-container>
        <v-row class="justify-center">
            <v-col>
                <v-card max-width="500" class="mx-auto pa-10 justify-center text-center">
                    <v-icon :size="125" color="green">
                        mdi-check-circle
                    </v-icon>
                    <v-card-title class="justify-center">Success!</v-card-title>
                    <v-card-subtitle>Confirm your email then you're ready to login!
                    </v-card-subtitle>
                    <v-btn @click="toLogin" block x-large outlined color="primary">Login</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    methods: {
        toLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style>
</style>