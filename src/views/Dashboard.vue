<template>
    <div>
        <CryptoBoard></CryptoBoard>
    </div>
</template>
<script>
  import coins from '@/assets/group.json'
  import CryptoBoard from '@/views/CryptoBoard.vue'
  import { isEmpty } from '../util/Utility'
  import {subscribeSymbol} from '../services/binance'
  import { mapState } from 'vuex'
  export default {
    name: 'dashboard',
    data() {
      return {
        currencyList: coins,
        quote: 'BNB',
        quoteOptions: ['BNB','BTC','ETH', 'USDT'],
        baseCurrency: {}
      }
    },
    mounted(){
      if(this.currencies) {
        this.currencies.forEach(currency => {
          subscribeSymbol(currency.symbol);
        });
      }
    },
    computed: {
      ...mapState(['currencies'])
    },
    components: {
      CryptoBoard
    },
    methods: {
      resetBase() {
        this.baseCurrency = {}
      },
      addCoinPair() {
        if(!isEmpty(this.baseCurrency)){
          const symbol = `${this.baseCurrency.value}${this.quote}`;
          subscribeSymbol(symbol);
          this.$store.commit('ADD_COIN_PAIR',{"symbol": symbol ,"base": this.baseCurrency.value, "quote": this.quote, "name": this.baseCurrency.name})
        }
      }
    }
  }
</script>