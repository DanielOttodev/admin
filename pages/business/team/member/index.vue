<template>
  <v-container>
    <v-row justify="start">
      <GoBackButton />
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pt-5 mt-10">
          <v-row>
            <v-col class="pl-5">
              <v-img src="/avatar.png" :contain="true" max-width="150" max-height="150"></v-img>
              <v-btn class="ml-3" text small>Change Image</v-btn>

              <h3 class="ml-8">{{ name }}</h3>

              <h5>{{ email }}</h5>
              <h5>{{ phone }}</h5>
            </v-col>
            <v-col>
              <h4>
                <v-icon color="green">mdi-check-circle</v-icon> Accepting new
                clients
              </h4>
              <h4 class="ml-7">
                Notifications:
                <span style="font-weight: 400">{{ email }}</span>
              </h4>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn @click="deleteUser" text color="red" class="ml-2 text-capitalize float-right">Delete
                  User
                </v-btn>
                <v-btn @click="editInfo" text color="primary" outlined class="text-capitalize float-right">Edit
                </v-btn>

              </v-col>
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
            <v-btn text small right absolute>
              <v-icon small color="primary">mdi-plus</v-icon> Assign
              Services
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>Add services for {{ name }} to configure individual
            rates</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <StaffWorkHours />
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-title>History</v-card-title>
          <v-divider />
          <v-data-table> </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StaffWorkHours from "../../../../components/StaffWorkHours.vue";
import GoBackButton from "../../../../components/GoBackButton.vue";
export default {
  data: () => ({

  }),
  components: { StaffWorkHours, GoBackButton },
  methods: {
    pageLoad() {
      this.email = this.$store.state.users.Email
      console.log('mounted!')
      console.log(this.email)
    },
    editInfo() {
      this.$router.push(`/business/team/edit?id=${this.$route.query.id}`);

    },
  },
  computed: {
    email() {
      return this.$store.state.users.user.Email
    },
    phone() {
      return this.$store.state.users.user.Phone
    },
    name() {
      return `${this.$store.state.users.user.FirstName} ${this.$store.state.users.user.LastName}`
    }
  },
  mounted: () => {

  },
};
</script>

<style>
</style>