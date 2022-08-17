<template>
    <Transition>

        <v-sheet class="bgimg">

            <ul class="pa-5" color=""
                style="display:flex;  justify-content:center; list-style: none; background-color:#f5f5f5;">

                <li>
                    <v-btn text color=" primary">
                        Home
                    </v-btn>
                </li>
                <li>
                    <v-btn @click="toLogin" text color="grey">Login <v-icon right>mdi-account-circle</v-icon>
                    </v-btn>
                </li>
            </ul>
            <v-container fluid>
                <v-row class="mt-5 mb-0" justify="end">

                    <!----   <v-btn text color="primary">
                        Home
                    </v-btn>
                    <v-btn @click="toLogin" text color="grey">Login <v-icon right>mdi-account-circle</v-icon>
                    </v-btn> -->
                </v-row>
            </v-container>
            <!---- <v-container fill-height>

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
            </v-container> -->
            <SignUp1 @selected="serviceSelected" v-if="selectService == ''" />
            <SignUp2 @selected="staffSelected" v-else />
        </v-sheet>
    </Transition>
</template>

<script>
import SignUp2 from "../components/SignUp2.vue";


export default {
    layout: "login",
    data: () => ({
        user: "",
        pass: "",
        loading: false,
        error: false,
        errmessage: "",
        selectService: "",
        selectStaff: ""
    }),
    methods: {
        toLogin() {
            this.$router.push("/login");
        },
        async createUser() {
            try {
                this.loading = true;
                await this.$fire.auth.createUserWithEmailAndPassword(this.user.trim(), this.pass);
                this.loading = false;
                window.location = "/";
                console.log("valid");
            }
            catch (e) {
                this.loading = false;
                alert(e);
                if (e.message === "EMAIL_EXISTS") {
                    this.errmessage = "That email already exists";
                    this.error = true;
                }
            }
        },
        serviceSelected(e) {
            this.selectService = e;
        },
        staffSelected(e) {
            alert(e)
            this.selectStaff = e;
        }
    },
    components: { SignUp2 }
}
</script>

<style >
.bgimg {

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