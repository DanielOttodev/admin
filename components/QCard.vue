<template>
    <v-hover v-slot="{ hover }">
        <v-card height="200" @click="routeTo()" class="pa-5 text-center" :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }">
            <v-icon class="" x-large color="deep-orange darken-3">{{ icon }}</v-icon>
            <v-card-title class="justify-center">{{ title }}</v-card-title>
            <v-card-subtitle>{{ description }}</v-card-subtitle>
        </v-card>
    </v-hover>


</template>

<script>
export default {
    props: ['title', 'description', 'icon', 'link'],
    data: () => ({
    }),
    methods: {
        routeTo() {
            this.$router.push(`/business/${this.link}`)
        }
    }
}
</script>

<style>
</style>