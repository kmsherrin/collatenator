<template>
  <div
    class="card"
    ref="card_w"
    :class="{ on_special_: product_data['Product']['IsOnSpecial'] == true }"
  >
  <div class="on_special" v-if="product_data['Product']['IsOnSpecial'] == true">
      <h4 style="color: #fafafa; font-weight: 500; font-;">SAVE ${{ savings  }}</h4>
  </div>
    <div
      v-if="product_data['Product']['IsOnSpecial'] == true"
      style="position:absolute; left: 30px; transform: rotate(-20deg);"
    >
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-discount"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#67c4ff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >

        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="9" y1="15" x2="15" y2="9" />
        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
        <path
          d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1"
        />
      </svg>
    </div>
    <div class="product_grid">
      <div class="span_2">
        <a :href="fulllink" target="_blank" rel="noopener noreferrer">
          <img :src="product_data['Product']['MediumImageFile']" alt="" />
        </a>
      </div>
      <div class="span_2">
        <a :href="fulllink" target="_blank" rel="noopener noreferrer">
          <h2>{{ product_data["Product"]["Name"] }}</h2><p>{{ product_data['Product']['PackageSize'] }}</p>
        </a>
      </div>
      <div class="grid_cell span_2">
        <span class="price">
          <p>$</p>
          <h2 style="margin:0;">{{ dollars }}</h2>
          <h3>.{{ cents }}</h3>
        </span>
      </div>
      <div
        class="grid_cell span_2"
        v-if="product_data['Product']['IsOnSpecial'] == true"
      >
        <p>
          Was: ${{ product_data["Product"]["WasPrice"] }}.{{
            parse_cents(product_data["Product"]["WasPrice"])
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//const api_url = "http://localhost:3000/json/groceries/";
const api_url = "https://desolate-everglades-50364.herokuapp.com/json/groceries/";


export default {
  name: "grocery_card",
  components: {},
  props: {
    item_id: String,
  },
  data: function() {
    return {
      product_data: Object,
    };
  },
  mounted() {
    let full_url = api_url + this.item_id;
    console.log(full_url);
    fetch(full_url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.product_data = response;
      });
  },
  computed: {
    fulllink() {
      return `https://www.woolworths.com.au/shop/productdetails/${this.item_id}`;
    },
    dollars() {
      let price_string = "" + this.product_data["Product"]["Price"];
      let split_string = price_string.split(".");
      return split_string[0];
    },
    cents() {
      return this.parse_cents(this.product_data["Product"]["Price"]);
    },
    savings() {
      return (
        (this.product_data["Product"]["WasPrice"] -
        this.product_data["Product"]["Price"]).toFixed(2)
      );
    },
  },
  methods: {
    parse_cents(price) {
      let price_string = "" + price;
      let split_string = price_string.split(".");

      if (split_string.length > 1) {
        console.log(split_string);
        if (split_string[split_string.length - 1].length == 1) {
          return split_string[split_string.length - 1] + "0";
        } else {
          return split_string[split_string.length - 1];
        }
      } else {
        return "00";
      }
    },
  },
};
</script>

<style scoped>
@import url("../styles/cards.css");

h2 {
  margin-bottom: 1rem;
}
.card {
  max-width: 400px;
  background-color: #ffffff;
  border: 1px solid #f5f8fb;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
