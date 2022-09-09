<template>
  <v-container>
    <v-row>
      <v-col>
        <GoBackButton />
      </v-col>
    </v-row>
    <AddStaffForm class="mt-10" />
  </v-container>
</template>

<script>
import AddStaffForm from '../../../components/AddStaffForm.vue';
import GoBackButton from '../../../components/GoBackButton.vue';
export default {
  components: { AddStaffForm, GoBackButton }
}
</script>

<style>

</style>