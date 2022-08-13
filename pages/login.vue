<template>
    <Transition>
        <v-sheet class="bgimg">
            <v-container>
                <v-row class="mt-5 mb-0" justify="end">
                    <v-btn text color="primary">
                        Home
                    </v-btn>
                    <v-btn @click="toSignUp" text color="grey">Free Trial</v-btn>
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
                                            <v-text-field @keydown="reset" type="email" append-icon="mdi-account"
                                                v-model="user" filled rounded label="Email">
                                            </v-text-field>
                                            <v-text-field type="password" append-icon="mdi-lock" v-model="pass" filled
                                                rounded label="Password">
                                            </v-text-field>
                                            <v-btn @click="createUser" rounded x-large color="primary">Login</v-btn>
                                            <v-progress-linear v-if="loading" class="mt-3" indeterminate
                                                color="primary">
                                            </v-progress-linear>
                                            <p class="text-lg-h6 mt-3" style="color:grey;" v-if="error">{{ errmessage }}
                                            </p>
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
        errmessage: '',
        okemail: null
    }),
    methods: {
        reset() {
            this.errmessage = ''
            this.error = false;
        },

        toSignUp() {
            this.$router.push('/signup')
        },
        async createUser() {
            let result = this.validateEmail()
            if (result) {
                try {
                    this.loading = true
                    await this.$fire.auth.signInWithEmailAndPassword(
                        this.user.trim(), this.pass
                    )
                    this.loading = false
                    window.location = '/'
                    console.log('valid');
                }
                catch (e) {
                    this.loading = false;
                    this.error = true
                    this.errmessage = e.message
                    console.log(e);
                }
            } else {

            }

        },

        validateEmail() {
            let email = this.user.toString();
            if (!email.includes('@')) {

                this.error = true
                this.errmessage = 'Uh Oh! This email looks invalid.'
            }
            if (!email.includes('.')) {
                this.error = true
                this.errmessage = 'Uh Oh! This email looks invalid.'
                return false


            }
            else return true

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