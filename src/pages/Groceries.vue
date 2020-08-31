<template>
  <div id="app">
    <Main>
      <div class="app_body app_thin" id="app_main">
        <div class="div-space">
          <h1>Tracked Groceries 🥴</h1>
        </div>
        <div class="div-space">
          <button class="ken-btn" id="show-modal" @click="showModal = true">
            Add New Item
          </button>
        </div>
        <div
          class="div-space"
          style="display:grid; grid-template-columns: 30% 70%; gap: 0.3rem; min-width: 200px;"
        >
          <div class="grid_cell">
            <h4>Sort by:</h4>
          </div>
          <div class="grid_cell">
            <select name="" id="" @change="on_sort_change($event)">
              <option value="specials">Specials</option>
              <option value="a-to-z">Sort A - Z</option>
              <option value="z-to-a">Sort Z - A</option>
              <option value="low-to-high">Sort Price Low - High</option>
              <option value="high-to-low">Sort Price High - Low</option>
            </select>
          </div>
        </div>
        <div class="div-space">
          <add_grocery_item
            v-if="showModal"
            @close="showModal = false"
            v-on:refresh="fetch_groceries"
          />
        </div>
        <div class="grocery_layout">
          <div
            v-for="grocery in grocery_data"
            :key="grocery['Product']['Title']"
          >
            <grocery_card class="grocery_card" :product_data="grocery" />
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script>
//const api_url = "http://localhost:3000/json/find/groceries-id/";
const api_url =
  "https://desolate-everglades-50364.herokuapp.com/json/find/groceries-id/";

const api_url_data =
  "https://desolate-everglades-50364.herokuapp.com/json/groceries/";

//const api_url_data = "http://localhost:3000/json/groceries/";

import Main from "../layouts/Main.vue";
import grocery_card from "../components/grocery_card.vue";
import add_grocery_item from "../components/modals/add_grocery.vue";

export default {
  name: "Groceries",
  props: {},
  components: {
    Main,
    grocery_card,
    add_grocery_item,
  },
  data: function() {
    return {
      searched: false,
      grocery_ids: Array,
      showModal: false,
      grocery_data: Array,
    };
  },
  mounted() {
    this.data_fetch();
  },

  methods: {
    data_fetch() {
      this.fetch_grocery_ids()
        .then((ids) => this.fetch_grocery_data(ids))
        .then((res) => {
          console.log(res);
          this.grocery_ids = res["grocery_ids"];
          this.grocery_data = res["grocery_data"];
          this.grocery_data = this.grocery_data.sort(this.special_sort);
        });
    },

    fetch_grocery_ids() {
      return new Promise((resolve, reject) => {
        fetch(api_url)
          .then((response) => response.json())
          .then((response) => {
            resolve(response);
          })
          .catch(function(error) {
            console.log(error);
            reject(error);
          });
      });
    },
    fetch_grocery_data(grocery_ids) {
      return new Promise((resolve) => {
        let grocery_dat_temp = [];
        grocery_ids.forEach((element) => {
          fetch(api_url_data + element.item_id)
            .then((response) => response.json())
            .then((response) => {
              grocery_dat_temp.push(response);
            });
          let dat = {
            grocery_ids: grocery_ids,
            grocery_data: grocery_dat_temp,
          };
          resolve(dat);
        });
      });
    },

    on_sort_change(event) {
      var self = this;
      console.log(self);
      switch (event.target.value) {
        case "a-to-z":
          this.grocery_data = this.grocery_data.sort(self.a_to_z_sort);
          break;
        case "z-to-a":
          this.grocery_data = this.grocery_data.reverse(self.a_to_z_sort);
          break;
        case "low-to-high":
          this.grocery_data = this.grocery_data.sort(self.price_sort);
          break;
        case "high-to-low":
          this.grocery_data = this.grocery_data.reverse(self.price_sort);
          break;
        case "specials":
          this.grocery_data = this.grocery_data.sort(self.special_sort);
          break;
      }
    },

    a_to_z_sort(a, b) {
      if (a["Product"]["Name"] < b["Product"]["Name"]) {
        return -1;
      }
      if (a["Product"]["Name"] > b["Product"]["Name"]) {
        return 1;
      }
      return 0;
    },
    price_sort(a, b) {
      if (a["Product"]["Price"] < b["Product"]["Price"]) {
        return -1;
      }
      if (a["Product"]["Price"] > b["Product"]["Price"]) {
        return 1;
      }
      return 0;
    },
    special_sort(a, b) {
      if (a["Product"]["IsOnSpecial"]) {
        if (b["Product"]["IsOnSpecial"]) {
          return this.price_off_sort(a, b);
        } else {
          return -1;
        }
      } else if (b["Product"]["IsOnSpecial"]) {
        return 1;
      } else {
        return this.price_sort(a, b);
      }
    },
    price_off_sort(a, b) {
      if (a["Product"]["SavingsAmount"] > b['Product']["SavingsAmount"]) {
        return -1;
      } 
      if (a["Product"]["SavingsAmount"] < b['Product']["SavingsAmount"]) {
        return 1;
      }
      return 0;
    }
  },
};
</script>

<style>
@import url("../styles/base_styles.css");

.hidden {
  display: none !important;
}

.grocery_layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grocery_card {
  flex: 1 1 400px;
  margin: 1rem;
  height: 600px;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
