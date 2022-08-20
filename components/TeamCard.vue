<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="text-center" max-width="750">
          <v-card-title>Team Members
            <v-btn @click="toAdd()" absolute small outlined text light right color="primary">
              <v-icon x-small>mdi-plus</v-icon> Add New
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-autocomplete prepend-icon="mdi-database-search" outlined dense placeholder="Search Team..." class="pa-3">
          </v-autocomplete>
          <v-simple-table>
            <template>
              <tbody>
                <tr @click="toStaff(item)" class="t-item" v-for="item in staff" :key="item.id">
                  <td class="align-left">
                    <v-icon>mdi-account</v-icon>
                  </td>
                  <td>{{ item.FirstName }} {{ item.LastName }}</td>
                  <td>{{ item.Email }}</td>

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
import { routes } from '../routes';
export default {
  data: () => ({
    staff: [

    ]
  }),
  methods: {
    toAdd() {
      this.$router.push('/business/team/add')
    },
    toStaff(e) {
      this.$router.push(`/business/team/member?id=${e.Uid}`)
    },
    async listStaff() {
      let token = await this.$fire.auth.currentUser.getIdToken()
      fetch(`${routes.listUsers}`, {
        method: 'GET',
        headers: {
          clienttoken: token,
          orgId: this.org
        }
      }).then(res => res.json()).then((x) => {
        let resjson = JSON.parse(x);
        console.log(resjson.res.recordsets)
        let results = resjson.res.recordsets[0]
        console.log(results);
        this.staff = results
      })
    }
  },
  computed: {
    org() {

      return this.$store.state.orgId
    }
  },
  created() {
    this.listStaff();
  }
};
</script>

<style>
td {
  text-align: left;
}

.t-item:hover {
  cursor: pointer;
}
</style>