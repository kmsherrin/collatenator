<template>
  <div id="app">
    <Main>
      <div class="app_body app_thin" id="app_main">
        <div class="div-space">
          <h1>Tracked Groceries</h1>
        </div>
        <div class="div-space">
          <button class="ken-btn" id="show-modal" @click="showModal = true">
            Add New Item
          </button>
        </div>
        <div class="div-space" style="display:grid; grid-template-columns: 30% 70%; gap: 0.3rem; min-width: 200px;">
            <div class="grid_cell">
            <h4>Sort by: </h4>

            </div>
            <div class="grid_cell">
<select name="" id="">
                <option value="">Specials</option>
                <option value="">Sort A - Z</option>
                <option value="">Sort Z - A</option>
                <option value="">Sort Price Low - High</option>
                <option value="">Sort Price High - Low</option>


            </select>
            </div>
            
        </div>
        <div class="div-space">
          <add_grocery_item v-if="showModal" @close="showModal = false" />
        </div>
        <div v-for="grocery_id in grocery_ids" :key="grocery_id">
        <grocery_card :item_id="grocery_id['item_id']" />
        </div>
      </div>
    </Main>
  </div>
</template>

<script>
//const api_url = "http://localhost:3000/json/find/groceries-id/";
const api_url = "https://desolate-everglades-50364.herokuapp.com/json/find/groceries-id/";


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
    };
  },
  mounted() {
    fetch(api_url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.grocery_ids = response;
      });
  },
  methods: {},
};
</script>

<style>
@import url("../styles/base_styles.css");

.hidden {
  display: none !important;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
