<template>
    <v-container>
        <v-card>
            <v-card-title>Service Details</v-card-title>
            <v-divider />
            <v-container>
                <v-row>
                    <v-col>
                        <v-text-field label="Service Name"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-sheet>
                            <h5>Calendar Color</h5>
                            <v-icon color="primary">mdi-circle</v-icon>
                            <v-icon color="deep-purple">mdi-circle</v-icon>
                            <v-icon color="warning">mdi-circle</v-icon>
                            <v-icon color="success">mdi-circle</v-icon>
                            <v-icon color="error">mdi-circle</v-icon>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea outlined label="Describe the service for clients online.">
                        </v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <h4>Duration</h4>
                        <Counter />
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
                    <v-btn outlined color="deep-orange lighten-1" class="mr-2 text-capitalize" dark>Save and create new
                    </v-btn>
                    <v-btn color="deep-orange lighten-1" class="text-capitalize" dark>Save</v-btn>

                </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        payment: 1
    })
}
</script>

<style>
.tf {
    max-width: 150px !important;
}
</style>