<template>
    <Transition>
        <v-sheet class="bgimg">
            <v-container>
                <v-row class="mt-5 mb-0" justify="end">
                    <v-btn text color="primary">
                        Home
                    </v-btn>
                    <v-btn @click="toLogin" text color="grey">Login <v-icon right>mdi-account-circle</v-icon>
                    </v-btn>
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
                                            class="text--center justify-center text-lg-h4" justify="center">Create
                                            a New Account
                                        </v-card-title>

                                        <v-card-text>
                                            <v-text-field append-icon="mdi-account" v-model="user" filled rounded
                                                label="Email">
                                            </v-text-field>
                                            <v-text-field append-icon="mdi-lock" v-model="pass" filled rounded
                                                label="Password">
                                            </v-text-field>
                                            <v-btn @click="createUser" rounded x-large color="primary">Sign Up</v-btn>
                                            <v-progress-linear v-if="loading" class="mt-3" indeterminate
                                                color="primary">
                                            </v-progress-linear>
                                            <p v-if="error">{{ errmessage }}</p>
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
    layout: 'login',
    data: () => ({
        user: '',
        pass: '',
        loading: false,
        error: false,
        errmessage: ''
    }),
    methods: {
        toLogin() {
            this.$router.push('/login')
        },

        async createUser() {
            try {
                this.loading = true
                await this.$fire.auth.createUserWithEmailAndPassword(
                    this.user.trim(), this.pass
                )
                this.loading = false
                window.location = '/'
                console.log('valid');
            }
            catch (e) {
                this.loading = false;
                alert(e);
                if (e.message === 'EMAIL_EXISTS') {
                    this.errmessage = 'That email already exists'
                    this.error = true;
                }
            }
        }
    }
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
<style>
.home-enter-active,
.home-leave-active {
    transition: opacity .5s;
}

.home-enter,
.home-leave-active {
    opacity: 0;
}
</style>