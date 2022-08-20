<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-10">
                    <h3>Current Plan: Foundation</h3>
                    <h4>User Count: 1</h4>
                </v-card>
            </v-col>
        </v-row>
        <v-row>

            <v-col cols="4">

                <v-card style="border-top:5px solid #41B883;" class="pt-2 px-10 text-center justify-center">

                    <v-card-title class="justify-center">Foundation <v-chip color="primary" class="ml-3"
                            style="display:inline" small>Current Plan</v-chip>
                    </v-card-title>
                    <p class="body-2 font-weight-light">Our foundation plan gives you all the must haves for your
                        business to succeed and thrive.</p>
                    <v-divider />
                    <v-card-title class="text-h3"> $24
                        <small class="body-2">AUD/MO</small>
                    </v-card-title>
                    <v-text-field readonly rounded filled placeholder="75 SMS per month included">
                    </v-text-field>
                    <v-btn block outlined color="primary" disabled class="mb-5 text-capitalize">Current Plan</v-btn>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon> Appointment + Class Calendar
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Online Payments
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Staff Management
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Client Management
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Basic Business Insights
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Free Online Support
                        </v-list-item>


                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="4">

                <v-card rounded style="border-top:5px solid orange;" class="pt-2 px-10 text-center justify-center">

                    <v-card-title class="justify-center">Premium</v-card-title>
                    <p class="body-2 font-weight-light">All foundation features
                        along with extra integrations to help seemlessly connect your business.</p>
                    <v-divider />
                    <v-card-title class="text-h3"> $39
                        <small class="body-2">AUD/MO</small>
                    </v-card-title>
                    <v-text-field readonly rounded filled placeholder="150 SMS per month included">
                    </v-text-field>
                    <v-btn block outlined color="white" class="primary mb-5 text-capitalize">Upgrade to Premium
                    </v-btn>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon> Appointment + Class Calendar
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Online Payments
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Staff Management
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Client Management
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Basic Business Insights
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Free Online Support
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="4">

                <v-card style="border-top:5px solid purple;" class="pt-2 px-10 text-center justify-center">

                    <v-card-title class="justify-center">PRO</v-card-title>
                    <p class="body-2 font-weight-light">Our foundation plan gives you all the must haves for your
                        business to succeed and thrive.</p>
                    <v-divider />
                    <v-card-title class="text-h3"> $59
                        <small class="body-2">AUD/MO</small>
                    </v-card-title>
                    <v-text-field readonly rounded filled placeholder="300 SMS per month included">
                    </v-text-field>
                    <v-btn block outlined color="primary" class="mb-5 text-capitalize">Upgrade to PRO</v-btn>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon> Appointment + Class Calendar
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Online Payments
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Staff Management
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Client Management
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Basic Business Insights
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="primary" left>mdi-check</v-icon>Free Online Support
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        plans: [
            { id: 1, cost: '24.95', desc: 'Our foundation plan gives you all the must haves for your business to succeed and thrive. ', title: 'Foundation' }
        ]
    })
}
</script>

<style>
</style>