<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center" max-width="750">
          <v-card-title
            >Team Members
            <v-btn absolute small outlined text light right color="primary">
              <v-icon x-small>mdi-plus</v-icon> Add New</v-btn
            >
          </v-card-title>
          <v-divider></v-divider>
          <v-autocomplete
            prepend-icon="mdi-database-search"
            outlined
            dense
            placeholder="Search Team..."
            class="pa-3"
          ></v-autocomplete>
          <v-simple-table >
            <template >
                <tbody>
                    <tr class="t-item" v-for="item in staff" :key="item.id">
                    <td class="align-left"><v-icon>mdi-account</v-icon></td>
                    <td>{{item.name}}</td>
                    <td>{{item.role}}</td>
  
                    </tr>
                 
                </tbody>
            </template>
          </v-simple-table>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data:() => ({
        staff:[
            {
                id:0,
                name:"Dan",
                role:"Admin"
            },
                    {
                id:1,
                name:"Emma",
                role:"Admin"
            }
        ]
    })
};
</script>

<style>
td{
    text-align:left;
}
.t-item:hover{
    cursor:pointer;
}
</style>