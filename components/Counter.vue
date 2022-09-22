<template>
    <v-container>
        <v-row>
            <v-col class="shrink">
                <v-select @change="updateTime" v-model="thours" outlined label="Hours" :items="hours"></v-select>
            </v-col>
            <v-col class="shrink">
                <v-select @change="updateTime" v-model="tminutes" outlined label="Min" :items="hours"></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        thours: null,
        tminutes: null,

    }),
    computed: {
        hours() {
            let hours = []
            for (let x = 0; x <= 60; x++) {
                hours.push(x);
            }
            return hours;
        }
    },
    methods: {
        updateTime() {
            this.$emit('updateTime', { thours: this.thours, tminutes: this.tminutes })
        }
    }
}
</script>

<style>
.tf {
    max-width: 150px !important;
}
</style>