<template>
    <Transition>
        <v-sheet class="bgimg">
            <v-container>
                <v-row class="mt-5" justify="end">
                    <v-btn text color="primary">
                        Home
                    </v-btn>
                    <v-btn text color="grey">Free Trial</v-btn>
                </v-row>
            </v-container>
            <v-container fill-height>

                <v-row justify="end" align="center" no-gutters class="row">
                    <Transition>
                        <v-card elevation="5" class="mr-5 pa-10 card text-center">
                            <Transition>
                                <v-img class="mx-auto mb-5" max-height="100" max-width="450" src="/foxster_g.png" />
                            </Transition>
                            <v-divider>

                            </v-divider>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-card-title style="color:#41B883; font-weight:bold;"
                                            class="text--center justify-center text-lg-h4" justify="center">Login
                                            to Your Account
                                        </v-card-title>

                                        <v-card-text>
                                            <v-text-field append-icon="mdi-account" filled rounded label="Email">
                                            </v-text-field>
                                            <v-text-field append-icon="mdi-lock" filled rounded label="Password">
                                            </v-text-field>
                                            <v-btn rounded x-large color="primary">Login</v-btn>
                                        </v-card-text>
                                    </v-col>
                                </v-row>

                            </v-container>
                        </v-card>
                    </Transition>
                </v-row>
            </v-container>

        </v-sheet>
    </Transition>
</template>

<script>
export default {
    layout: 'login'
}
</script>

<style >
.bgimg {
    background-image: url('~@/assets/bg2.png');
    width: 100vw;
    height: 100vh;
}

.card {
    width: 800px;
    background-image: url('~@/assets/bg2.png');
    background-size: 50%;

}
</style>