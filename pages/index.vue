<template>
  <v-container>
    <v-row>
      <v-col lg="8"> <h2>My Dashboard</h2></v-col>
      <v-col lg="4" justify="end">
        <v-btn>
          New Appointment
        </v-btn>
        <v-btn outlined text>
          Break
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
