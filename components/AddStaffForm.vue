<template>
  <v-container>
    <v-card max-width="1000">
      <v-card-title v-if="!existing"> New Staff Member </v-card-title>
      <v-card-title v-else>Edit Information</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <h3 class="mb-5">Staff Member Information</h3>

        <v-text-field v-model="displayname" outlined label="Name"></v-text-field>
        <v-textarea v-model="bio" label="Staff Bio - This will show to clients when they view your profile." outlined>
        </v-textarea>
        <v-switch v-model="acceptClient" label="Accepting New Clients"></v-switch>
        <h3>
          User Account:
        </h3>
        <p>The email address entered below will also be where this user receives notifications for client bookings.</p>
        <v-text-field v-if="!existing" v-model="user" outlined placeholder="Username"></v-text-field>
        <v-text-field v-model="pass" outlined placeholder="Password"></v-text-field>
        <v-text-field v-if="!existing" v-model="email" outlined hint="john@domain.com" placeholder="Email">
        </v-text-field>
        <v-text-field v-model="phone" outlined placeholder="Phone"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-row justify="end">
          <v-col class="justify-end">
            <v-btn class="float-right text-capitalize" color="primary">Save</v-btn>
          </v-col>
        </v-row>

      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { routes } from '../routes';
export default {
  props: ['id'],
  data: () => ({
    acceptClient: true,
    bio: "",
    displayname: "",
    user: '',
    email: '',
    pass: '',
    phone: ''
  }),
  computed: {
    existing() {
      console.log(this.id);
      if (this.id != null) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    loadExisting() {
      console.log(this.existing);
      if (this.existing) {
        this.name = this.$store.state.users.user.FirstName + ' ' + this.$store.state.users.user.LastName
      }
    },
    async createNew() {
      let token = await this.$fire.auth.currentUser.getIdToken();
      fetch(routes.addUser, {
        method: 'POST',
        headers: {
          clienttoken: token,
          orgId: this.$store.state.orgId
        },
        body: JSON.stringify({
          email: this.email,
          name: this, displayname,
          user: this.user,
          phone: this.phone,
          acceptClient: this.acceptClient,
          bio: this.bio


        })
      }).then(res => res.json()).then((x) => {
        console.log(x);
      })
    }
  },
  created() {
    this.loadExisting();

  }
}
</script>

<style>
</style>