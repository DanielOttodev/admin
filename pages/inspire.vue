<template>
  <v-row>
    <v-col class="text-center">
      <v-btn @click="test">Test</v-btn>
      <p>UserID:{{ user.uid }}</p>
      <p>Name:{{ user.displayName }}</p>
      <p>Email:{{ user.email }}</p>
      <p>Org:{{ org }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  methods: {
    async test() {
      let token = await this.$fire.auth.currentUser.getIdToken()
      console.log(this.$fire.auth.currentUser)
      console.log(token)
    }
  },
  computed: {
    user() {
      console.log(this.$store.state.user)
      return this.$store.state.user
    },
    org() {
      console.log('state find:', this.$store.state.getOrg)
      return this.$store.state.orgId
    }
  }
}
</script>
