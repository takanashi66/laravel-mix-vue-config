import Vue from 'vue'

const item = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  },
]

const vm = new Vue({
  el: '#app',
  template: 
  '<div>'+
    '<ul>'+
      '<li v-for="item in items">{{item.name}}: {{item.price}} x <input type="number" v-on:change="item.quantity = $event.target.value" v-bind:value="item.quantity" min="0" /> = {{item.price * item.quantity}}</li>'+
    '</ul>'+
    '<p :class="{error: !canBuy}">税込: {{totalPriceWithTax | numberWithDelimiter}}円</p>'+
    '<p v-if="!canBuy">{{1000 | numberWithDelimiter}}円からご購入いただけます。</p>'+
    '<p v-else>ご購入いただけます。</p>'+
  '</div>',
  data: {
    items: item
  },
  
  filters: {
    numberWithDelimiter: function(value){
      if(!value){
        return '0';
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  
  computed:{
    totalPrice: function(){
      return this.items.reduce(function(sum, item){
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function(){
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function(){
      return this.totalPrice >= 1000
    }
  }
})
