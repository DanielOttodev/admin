<template>
  <v-card  max-width="1000">
    <v-card-title>Change Schedule</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
         <h4>Your Current Schedule:</h4>
    </v-card-text>
    <v-row v-for="i in days" :key="i">
    <v-col><p class="text-right mt-5 ">{{i.day}} :</p></v-col>
        <v-col> <v-select v-if="i.in" class="inline shrink" label="from" outlined></v-select></v-col>
        <v-col><v-select  v-if="i.in" label="to" outlined></v-select></v-col>
        <v-col><v-switch v-model="i.in" inset dense label="Available" color="success"> <template #prepend></template> </v-switch></v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
data:() => ({
    days:[{
        day:'Monday',
        from:'',
        to:'',
        in:true
    },
    {
        day:'Tuesday',
        from:'',
        to:'',
        in:true
    },{
        day:'Wednesday',
        from:'',
        to:'',
        in:true
    },{
        day:'Thursday',
        from:'',
        to:'',
        in:true
    },{
        day:'Friday',
        from:'',
        to:'',
        in:true
    },
    ]

})
}
</script>

<style >

</style>