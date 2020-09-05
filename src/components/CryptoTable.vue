<template>
  <div class="">
    <v-data-table
      :headers="headers"
      :items="APIvalues"
      :options.sync="options"
      :loading="loading"
      class="elevation-1"
      :items-per-page="5"
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CryptoTable",
  data() {
    return {
      APIkeys: [],
      APIvalues: [],
      loading: true,
      options: {},
      headers: [
        { text: "Currency", value: "name", align: "center"},
        { text: "Symbol", value: "symbol", align: "right" },
        { text: "Latest price", value: "last" },
      ],
    };
  },
  //this one will populate new data set when user changes current page. 
  watch: {
    options: {
      handler() {
        this.readDataFromAPI();
      },
    },
    deep: true,
  },
  methods: {
    //Reading data from API method. 
    readDataFromAPI() {
      this.loading = true;
      axios
        .get(
          "https://blockchain.info/ticker"
        )
        .then((response) => {
          //Then injecting the result to datatable parameters.
          this.loading = false;
          this.APIvalues = Object.values(response.data)
          this.APIkeys = Object.keys(response.data)
          // Adding the prop "name" with the currency name
          for(let i= 0; i < this.APIkeys.length; i++){
          this.APIvalues[i].name = this.APIkeys[i]
     }
        });
    }
  },
  //this will trigger in the onReady State
  mounted() {
    this.readDataFromAPI();
  },
};
</script>