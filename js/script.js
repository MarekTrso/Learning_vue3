const app = Vue.createApp ({
   data() {
      return {
         product: 'Socks',
         image: './img/socks_blue.jpg',
         inventory: 100,
         onSale: false,
         details: ['50% cotton', '30% wool', '20% polyester']
      };
   }
});
