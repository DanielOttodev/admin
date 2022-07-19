<template>
    <v-container>
        <v-row>
            <v-col lg="4" v-for="i in items" :key="i">
                <v-hover>
                    <QCard :title="i.title" :description="i.desc" :icon="i.icon" :link="i.link" />
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QCard from '../../components/QCard.vue';
export default {
    components: { QCard },
    data: () => ({
        items: [
            { title: "Services", desc: "Manage the services your business provides", icon: "mdi-account-circle", link: "/services" },
            { title: "Classes", desc: "Manage your class schedules", icon: "mdi-google-classroom", link: "/classes" },
            { title: "Team", desc: "Setup team members, assign roles and profiles", icon: "mdi-account-supervisor", link: "/team" },
            { title: "Payments", desc: "Connect Stripe to start accepting payments", icon: "mdi-currency-usd", link: "/payments" },
            { title: "Subscription", desc: "Change your plan or update payment details", icon: 'mdi-credit-card-outline', link: '/subscription' },



        ]
    })
}
</script>

<style>
</style>