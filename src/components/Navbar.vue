<template>
  <v-app-bar color="dark accent-4" dark>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      CHALLENGE EMDX
      <div class="dev">Conrado Cañas</div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/">Bitcoin converter</router-link>
    <router-link to="/candlesticksgraphic">Candlesticks graphic</router-link>
    <v-btn icon>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="primary" dark v-bind="attrs" v-on="on"
            >mdi-github</v-icon
          >
        </template>
        <span>Repository</span>
      </v-tooltip>
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
