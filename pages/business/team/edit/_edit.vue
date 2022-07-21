<template>
    <v-container>
            <v-row>
            <v-col>
            <GoBackButton  />
            </v-col>
        </v-row>
    <AddStaffForm class="mt-10" :id="id" />
  </v-container>
</template>

<script>
export default {
  data:() =>({
    
  }),
  computed:{
    id(){
      return this.$route.query.id;
    }
  }
}
</script>

<style>

</style>