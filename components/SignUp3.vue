<template>
    <v-container fill-height>

        <v-row justify="center" align="center" no-gutters class="row">
            <Transition>
                <v-card elevation="5" class="mr-5 pa-10 text-center">
                    <v-img class="mx-auto" src="/montelo.png" height="75" width="75">
                    </v-img>

                    <v-card-title class="justify-center text-h4">Sign up for free with a 14-day
                        trial
                    </v-card-title>
                    <ul style="display:flex; justify-content: space-around; color:grey; font-size:15px;">
                        <li class="mx-2">
                            Up to 50 Bookings
                        </li>
                        <li class="mx-2">No credit card required</li>
                        <li class="mx-2">No contracts or obligations</li>
                    </ul>
                    <v-divider class="mt-2">
                    </v-divider>
                    <v-container rounded class="grey lighten-5">
                        <v-row>
                            <v-col cols="12">
                                <v-card-title style="color:#41B883; font-weight:bold;"
                                    class="text--center justify-center text-lg-h6" justify="center">Great! Just a few
                                    more details and you're good to go!
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="businessName" label="Business Name" outlined />
                                            <v-text-field v-model="phone" label="Phone" type="phone" outlined />
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-text-field v-model="fname" outlined label="First Name" />
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-text-field v-model="sname" outlined label="Last Name" />
                                                </v-col>

                                            </v-row>
                                            <v-text-field v-model="email" label="Email" type="email" outlined />
                                            <v-text-field v-model="pass" label="Password" type="password" outlined />
                                            <v-checkbox v-model="policy"
                                                label="I've read and agree to the Terms & Privacy policy">
                                            </v-checkbox>
                                            <v-btn @click="save" block class="text-capitalize" color="primary" x-large>
                                                Submit
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>

                </v-card>
            </Transition>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        businessName: '',
        phone: '',
        email: '',
        pass: '',
        fname: '',
        sname: '',
        policy: false,
    }),
    methods: {
        save() {
            // Validate before emit
            this.$emit('createNew', {
                businessName: this.businessName,
                phone: this.phone,
                email: this.email,
                pass: this.pass,
                fname: this.fname,
                sname: this.sname,
                policy: this.policy
            })
        }
    }
}
</script>
<style>
.mysheet:hover {
    background-color: rgba(228, 228, 228, 0.448);
    transition: all 0.25s;
    cursor: pointer;
}
</style>