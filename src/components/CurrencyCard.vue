<template>
  <div class="coin-box" @dblclick.stop="openDetails">
    <div class="row no-gutters coin-info">
      <div class="col-7">
        <div class="font-weight-bold">{{ info.name }}</div>
        <div class="row no-gutters mt-1">
          <div class="box-icon">
            <span :style="{ backgroundImage: 'url(' + iconbase + ')' }"></span>
          </div>
          <div class="col">
            <div>
              <b>{{ info.base }}</b
              >/{{ info.quote }}
            </div>
            <div class="coin-price" v-if="ticker.price">
              {{ ticker.price || ""
              }}<span
                style="font-size: x-small; font-weight: 700; padding-left: 3px;"
                >{{ info.quote }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        :class="[ticker.percent < 0 ? 'down' : 'up', 'col-5', 'text-right']"
        v-if="ticker.price"
      >
        <div class="coin-per">
          <span class="indicator"></span><span>{{ ticker.percent }}%</span>
        </div>
      </div>
    </div>
    <div class="sparkline-chart" v-if="ticker.price">
      <Sparkline :cdata="ticker.price" :width="380" :height="90"></Sparkline>
    </div>
  </div>
</template>
<script>
import Sparkline from "./Sparkline.vue";
import { unSubscribeSymbol } from "../services/binance";
export default {
  props: ["ticker", "info"],
  data() {
    return {
      showDropDown: false,
      iconbase:
        "https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/" +
        this.info.base.toLowerCase() +
        "_.png",
    };
  },
  methods: {
    onDropDown() {
      this.showDropDown = true;
    },
    removeCard() {
      this.showDropDown = false;
      unSubscribeSymbol(this.info.symbol);
      this.$store.commit("REMOVE_COIN_PAIR", this.info.symbol);
    },
    openDetails() {
      this.showDropDown = false;
      this.$router.push({
        name: "infoview",
        params: { symbol: this.info.symbol },
      });
    },
    closeDropDown() {
      this.showDropDown = false;
    },
  },
  components: {
    Sparkline,
  },
};
</script>
