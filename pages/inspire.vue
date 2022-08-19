<template>
  <v-row>
    <v-col class="text-center">
      <v-btn @click="test">Test</v-btn>
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
  }
}
</script>
