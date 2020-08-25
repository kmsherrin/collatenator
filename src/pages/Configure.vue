<template>
  <div id="app">
    <Main>
      <div class="app_body app_thin" id="app_main">
        <div class="div-space">
          <h1>Currently Added Pages</h1>
        </div>
        <div class="div-space">
          <button class="ken-btn" id="show-modal" @click="showModal = true">Add New Page</button>
          <add_api v-if="showModal" @close="showModal = false">
          </add_api>
        </div>
        <div style="overflow-x: auto; display:flex;">
          <draggable_table/>
        </div>
      </div>
    </Main>
  </div>
</template>

<script>

import Main from "../layouts/Main.vue";
import add_api from "../components/modals/add_api.vue";
import draggable_table from "../components/draggable_table.vue";

export default {
  name: "Configure",
  props: {
  },
  components: {
    Main,
    add_api,
    draggable_table
  },
  data: function() {
    return {
      showModal: false,
      table_data: [],
    }
  },
  methods: {

  }
};
</script>

<style>
@import url("../styles/base_styles.css");

body {
  margin: 0;
  background-color: #fafafa;
  font-family: "Montserrat", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  width: auto;
}

.app_body {
  margin-top: 40px;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;

  display: flex;
  flex-flow: column;
}

.hidden {
  display: none !important;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
