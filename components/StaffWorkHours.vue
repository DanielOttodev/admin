<template>
  <v-card>
    <v-card-title>
        Staff Working Hours
    </v-card-title>
    <v-divider/>
    <v-container>
        
        <v-row>
            <v-col>
                <v-btn  text small outlined color="primary" class="text-capitalize">Change Hours</v-btn>
<v-list>
      <v-list-item
        v-for="item in hours"
        :key="item.day"
        class="border mt-2"
        
      >


        <v-list-item-content>
          <v-list-item-title v-text="item.day"></v-list-item-title>
        </v-list-item-content>
       
        <v-list-item-content class="text-right" >
          <v-list-item-title v-text="item.time"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
            </v-col>
        <v-col></v-col>
        </v-row>
    </v-container>
   
  </v-card>
</template>

<script>
export default {
data:() => ({
    hours:[
        {day:'Monday',time:"9am - 5pm"},
        {day:'Tuesday',time:"9am - 5pm"},
        {day:'Wednesday',time:"9am - 5pm"},
        {day:'Thursday',time:"9am - 5pm"},
        {day:'Friday',time:"9am - 5pm"},
        {day:'Saturday',time:"8am - 12pm"},
        {day:'Sunday',time:"None"},
    ]
})
}
</script>

<style>
.border{
    border:2px solid rgba(128, 128, 128, 0.299);
    border-radius:2px;
}
.time{
    margin-right:auto;
}
</style>