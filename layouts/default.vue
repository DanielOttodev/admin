<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" color="primary" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dark color="blue-grey darken-4">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>
        <v-img :src="img" max-height="100" max-width="300"></v-img>
      </v-toolbar-title>
      <v-spacer />

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="grey lighten-4">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>

        <v-list-item>
          <v-row justify="center">
            <v-btn @click="signOut" grow color="primary" text>
              Sign Out
            </v-btn>
          </v-row>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  middleware: 'auth',
  methods: {
    signOut() {
      this.$fire.auth.signOut();
      this.$router.push('/login')
    }
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-home-variant-outline",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-calendar-range",
          title: "Calendar",
          to: "/calendar",
        },
        {
          icon: "mdi-book-outline",
          title: "Classes",
          to: "/inspire",
        },
        {
          icon: "mdi-account-supervisor-circle-outline",
          title: "Clients",
          to: "/clients",
        },
        {
          icon: "mdi-trending-up",
          title: "Marketing",
          to: "/marketing",
        },
        {
          icon: "mdi-storefront-outline",
          title: "My Business",
          to: "/business",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "ScheduleM8",
      img: '/montelo-w.png'
    };
  },
};
</script>

<style scoped>

</style>