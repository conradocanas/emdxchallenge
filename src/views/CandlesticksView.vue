<template>
  <div class="candleSticks">
    <Candlesticks></Candlesticks>
  </div>
</template>

<script>
import Candlesticks from "../components/Candlesticks";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Candlesticks,
  },
};
</script>
