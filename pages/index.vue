<template>
  <v-container fluid>
    <v-row>
      <v-col lg="8">
        <h2>My Dashboard</h2>
        <v-sheet class="mt-10">
          <DashboardCard />
        </v-sheet>
      </v-col>
      <v-col lg="4" justify="end">
        <v-btn class="text-capitalize primary"> New Appointment </v-btn>
        <v-btn class="text-capitalize" color="orange lighten-2" outlined text>Guest Checkout</v-btn>
        <v-sheet class="mt-10">
          <v-card>
            <v-card-title>
              Latest News
            </v-card-title>
            <v-divider> </v-divider>
            <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non hic, nihil explicabo voluptatibus
              eum ad facilis asperiores et tempora ullam!</v-card-text>
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
