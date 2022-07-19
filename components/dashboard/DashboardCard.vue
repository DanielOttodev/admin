<template>
  <v-card>
    <v-tabs v-model="tab" background-color="blue-grey darken-2" fixed dark>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1"> Today </v-tab>

      <v-tab href="#tab-2"> This Week </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
</style>