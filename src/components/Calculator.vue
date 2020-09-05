<template>
  <div class="row main-container mx-auto">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <h2>Currency Converter</h2>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            @change="updateInputs"
            v-model="selected"
            label="Pick a currency"
            :items="APIkeys"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>

    <div class="row">
      <!-- input field 1 -->
      <div class="col">
        <h2 class="country-name">BTC</h2>
        <p class="rate">Rate: 1 BTC</p>
        <input
          id="currencyInput"
          class="currency-input"
          @keyup="calcInput_1"
          :value="calc2"
        />
      </div>
      <!-- input field 2 -->
      <div class="col">
        <template v-for="APIvalue in APIvalues">
          <template v-if="selected === APIvalue.name">
            <h2 class="country-name" :key="APIvalue.name">
              {{ APIvalue.name }}
            </h2>
            <p class="rate" :key="APIvalue.sell">Rate: {{ APIvalue.sell }}</p>
            <input
              class="currency-input"
              @keyup="calcInput_2"
              :value="calc1"
              v-bind:key="APIvalue.buy - 2"
            />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "calculatorComponent",
  data() {
    return {
      APIkeys: [],
      APIvalues: [],
      selected: "Pick",
      countryRate: 0,
      calc1: "",
      calc2: "",
      firstInputSelected: true,
      input: document.getElementById("currencyInput"),
    };
  },
  mounted: function() {
    this.readDataFromAPI();
  },
  methods: {
    //Reading data from API BlockChain.info
    readDataFromAPI() {
      this.loading = true;
      axios.get("https://blockchain.info/ticker").then((response) => {
        //Then injecting the result to datatable parameters.
        this.loading = false;
        this.APIvalues = Object.values(response.data);
        this.APIkeys = Object.keys(response.data);
        // Adding the prop "name" with the currency name
        for (let i = 0; i < this.APIkeys.length; i++) {
          this.APIvalues[i].name = this.APIkeys[i];
        }
      });
    },
    calcInput_1: function(e, rate) {
      this.firstInputSelected = true;
      this.calculate(e, rate);
    },
    calcInput_2: function(e, rate) {
      this.firstInputSelected = false;
      this.calculate(e, rate);
    },
    updateInputs: function() {
      var selected;
      this.APIvalues.forEach((elem) => {
        if (this.selected == elem.name) {
          selected = elem;
        }
      });
      this.countryRate = selected.last;

      var input2 = parseFloat(document.getElementById("currencyInput").value);
      if (isNaN(input2)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }
      this.calc1 = (input2 * this.countryRate).toFixed(2);
    },
    calculate: function(e, value) {
      value = parseFloat(e.target.value);
      if (isNaN(value)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }

      if (this.firstInputSelected) {
        this.calc2 = value;
        this.calc1 = (value * this.countryRate).toFixed(2);
      } else {
        this.calc1 = value;
        this.calc2 = (value / this.countryRate).toFixed(2);
      }
    },
  },
};
</script>
