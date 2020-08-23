<template>
  <div id="app">
    <Main>
      <div class="app_body app_thin" id="app_main">
        <div class="div-space">
          <h1>Saved Posts, Articles & Weather</h1>
        </div>
        <div class="div-space">
            <h3>Select time range to search:</h3>
        </div>
        <div class="div-space">
            <h5>From date:</h5>
            <input type="date">
        </div>
        <div class="div-space">
            <h5>To date:</h5>
            <input type="date">
        </div>
        <div>
            <h5>
                Item Type:
            </h5>
            <select name="type_box" id="type">
                <option value="reddit">Reddit</option>
                <option value="abc">ABC</option>
            </select>
        </div>
        <div class="div-space">
            <button class="ken-btn">Search</button>
        </div>
        
        <div v-if="searched">
                
        </div>
      </div>
    </Main>
  </div>
</template>

<script>

import Main from "../layouts/Main.vue";

export default {
  name: "History",
  props: {
  },
  components: {
    Main,

  },
  data: function() {
    return {
        searched: false,
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
