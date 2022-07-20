<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pt-5">
          <v-row>
            <v-col class="pl-5">
              <v-img
                src="/avatar.png"
                :contain="true"
                max-width="150"
                max-height="150"
              ></v-img>

              <h3 class="ml-8">{{ name }}</h3>
              <h4>{{ email }}</h4>
              <h4>{{ phone }}</h4>
            </v-col>
            <v-col>
              <h4>
                <v-icon color="green">mdi-check-circle</v-icon> Accepting new
                clients
              </h4>
              <h4 class="ml-7">Notifications: <span style="font-weight:400;">{{ notify_email }}</span> </h4>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-row>
              <v-col
                ><v-btn text color="primary" outlined class="text-capitalize float-right"
                  >Edit</v-btn
                ></v-col
              >
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>
                    Available Services
                    <v-btn text small right absolute > <v-icon small color="primary">mdi-plus</v-icon> Assign Services</v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>Add services for {{name}} to configure individual rates</v-card-text>
            </v-card>
        </v-col>
    </v-row>
  <v-row>
    <v-col>
      <StaffWorkHours/>
    </v-col>
    <v-col></v-col>
  </v-row>
  </v-container>
</template>

<script>
import StaffWorkHours from '../../../components/StaffWorkHours.vue';
export default {
    data: () => ({
        email: "otto_281@hotmail.com",
        phone: "0413864377",
        notify_email: "otto_281@hotmail.com",
        name: "Daniel Otto",
    }),
    components: { StaffWorkHours }
};
</script>

<style>
</style>