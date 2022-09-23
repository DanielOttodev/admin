<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card max-width="1000" class="mx-auto">
                    <v-card-title>Service Details</v-card-title>
                    <v-divider />
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="serviceName" label="Service Name"></v-text-field>
                            </v-col>

                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea v-model="desc" outlined label="Describe the service for clients online.">
                                </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <h4>Duration</h4>
                                <Counter v-on:updateTime="updTime" />
                            </v-col>
                        </v-row>
                        <v-text-field class="tf" prefix="$" outlined v-model="price" label="Price"></v-text-field>
                        <h4>Require payment details</h4>
                        <small>Accepting payments helps reduce no-shows and cancellations</small>
                        <v-radio-group v-model="payment">
                            <v-radio :value="1" label="No payment required (Default)" />
                            <v-radio :value="2" label="Payment details required" />
                            <v-radio :value="3" label="Payment required"></v-radio>
                        </v-radio-group>
                    </v-container>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-row class="my-1 mr-1" justify="end">
                            <v-btn outlined color="primary" class="mr-2 text-capitalize" @click="SaveService" dark>Save
                                and
                                create new
                            </v-btn>
                            <v-btn color="primary" class="text-capitalize" dark @click="SaveService">Save</v-btn>

                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
import { mFetch } from '../functions/common'
import { routes } from '../routes'
export default {
    data: () => ({
        payment: 1,
        price: 0,
        min: 0,
        hour: 0,
        desc: '',
        serviceName: ''


    }),
    methods: {
        test() {
            this.$mFetch('hi hi');
        },
        async SaveService() {
            if (this.min == null) this.min = 0
            if (this.hour == null) this.hour = 0
            let token = await this.$fire.auth.currentUser.getIdToken()

            let postBody = {
                price: this.price,
                paymentRequired: this.payment,
                minutes: this.min,
                hours: this.hour,
            }
            this.$mFetch({
                body: postBody,
                route: routes.services,
                method: 'GET'
            })
        },
        updTime(e) {

            this.min = e.tminutes
            this.hour = e.thours
        },
        check() {
            console.log(this.$store.state)
            checkStore();
        }
    }
}
</script>

<style>
.tf {
    max-width: 150px !important;
}
</style>