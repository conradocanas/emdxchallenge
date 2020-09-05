<template>
  <v-container>
    <v-row>
      <v-col sm="7">
        <Calculator></Calculator>
      </v-col>
      <v-col sm="5">
        <CryptoTable></CryptoTable>
      </v-col>
    </v-row>
    <DashBoard></DashBoard>
  </v-container>
</template>

<script>
import DashBoard from "./Dashboard"
import Calculator from "../components/Calculator";
import CryptoTable from "../components/CryptoTable";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Calculator,
    CryptoTable,
    DashBoard
  }
};
</script>
