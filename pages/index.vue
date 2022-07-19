<template>
  <v-container>
    <v-row>
      <v-col lg="8">
        <h2>My Dashboard</h2>
        <v-sheet class="mt-10">
          <DashboardCard />
        </v-sheet>
      </v-col>
      <v-col lg="4" justify="end">
        <v-btn color="blue-grey darken-2" dark> New Appointment </v-btn>
        <v-btn outlined text> Break </v-btn>
               <v-sheet class="mt-10">
                <v-card>
                  <v-card-title>
                    Latest News
                  </v-card-title>
  </v-card>
  </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DashboardCard from "../components/dashboard/DashboardCard.vue";
export default {
  components: { DashboardCard },
  name: "IndexPage",
};
</script>
