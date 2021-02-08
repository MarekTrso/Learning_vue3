const app = Vue.createApp ({
   data() {
      return {
          cart: 0,
         product: 'Socks',
         image: './img/socks_blue.jpg',
         inventory: 100,
         onSale: false,
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
             { id: 2234, color: 'green', image: './img/socks_green'},
             { id: 2235, color: 'blue', image: './img/socks_blue'}
            ]
      };
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
        removeFromCart() {
            this.cart -= 1;
        }
    }
});
