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
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-card-title style="color:#41B883; font-weight:bold;"
                                    class="text--center justify-center text-lg-h6" justify="center">What services do you
                                    offer?
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" lg="4" sm="6" v-for="item in services" :key="item.name">

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
            name: 'Hair', icon: 'mdi-content-cut', id: 1
        }, { name: 'Cosmetics', icon: 'mdi-eye', id: 2 }, { name: 'Spa & Massage', icon: 'mdi-spa-outline', id: 3 }, { name: 'Personal Training', icon: 'mdi-weight-lifter', id: 4 }, { name: 'Health', icon: 'mdi-heart-pulse', id: 5 }, { name: 'General services', icon: 'mdi-view-grid-plus', id: 6 }],
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