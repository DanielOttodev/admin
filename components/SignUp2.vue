<template>
    <v-container fill-height>

        <v-row justify="center" align="center" no-gutters class="row">
            <Transition>
                <v-card elevation="5" class="mr-5 pa-10 text-center">
                    <v-img class="mx-auto" src="/montelo.png" height="75" width="75">
                    </v-img>


                    <v-divider class="mt-2">
                    </v-divider>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-card-title style="color:#41B883; font-weight:bold;"
                                    class="text--center justify-center text-lg-h6" justify="center">How many people in
                                    your business?
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" lg="6" sm="6" v-for="item in services" :key="item.name">

                                            <v-sheet @click="select(item)" rounded
                                                class="pa-5 text-center mysheet align-center" outlined>
                                                <v-icon size="56" color="primary">{{ item.icon }}</v-icon>
                                                <h3 class="mt-5" color="primary">{{ item.name }}</h3>
                                            </v-sheet>
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
        services: [{
            name: 'Just Me', icon: 'mdi-account', id: 1
        }, { name: '2-7 staff', icon: 'mdi-account-multiple', id: 2 }, { name: '8-15 staff', icon: 'mdi-account-group', id: 3 }, { name: 'Over 15 staff', icon: 'mdi-google-classroom', id: 4 }],
        selected: []
    }),
    methods: {
        select(e) {
            this.$emit('selected', e.name)
            console.log(e);
            if (!this.selected.includes(e.name)) {
                this.selected.push(e.name);
            } else {
                let index = this.selected.indexOf(e.name);
                // Check not last element
                if (index !== 1) {
                    this.selected.splice(index, 1);
                } else {
                    this.selected = [];
                }

            }

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