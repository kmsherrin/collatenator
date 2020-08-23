<template>
  <div id="app">
    <Main>
      <div class="app_body app_thin" id="app_main">
        <div class="loader_div" v-if="loading">
          <div class="loader">Loading...</div>
          <h5 style="position: absolute; top: 10%; left: 35%;">Loading..</h5>
        </div>
        <div class="dashboard_grid" v-else>
          <div class="respondant" v-for="item in dashboard_items" :key="item.dashboard_order">
            <component :id="'item_'+item.dashboard_order" v-bind:is="item.component" :data="item" />
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script>
const api_url = "http://localhost:3000/json/api-points/";
//const api_url = "https://desolate-everglades-50364.herokuapp.com/json/api-points";

import Main from "../layouts/Main.vue";
import reddit_frame from "../components/reddit_frame.vue";
import weather_frame from "../components/weather_frame.vue";
import abc_frame from "../components/abc_frame.vue";

export default {
  name: "Home",
  data: function() {
    return {
      loading: false,
      dashboard_items: Array
    };
  },
  components: {
    Main,
    weather_frame,
    reddit_frame,
    abc_frame
  },
  mounted() {
    this.get_data();
  },
  methods: {
    get_data() {
      fetch(`${api_url}`)
        .then(response => response.json())
        .then(response => {
          this.dashboard_items = response;
          console.log(this.dashboard_items);
        });
    }
  }
};
</script>

<style>
@import url("../styles/base_styles.css");

body {
  margin: 0;
  background-color: #fafafa;
}

.dashboard_grid {
  max-width: 98%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(185px, 0.25fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 400px));
}


@media (min-width: 1600px) {
  .respondant {
    max-width: 30%
  }
}

@media (min-width: 2000px) {
  .respondant {
    max-width: 25%;
  }
}

@media (max-width: 500px) {
  .app_body {
    width: 100vw;
    overflow-y: hidden;
  }
  .dashboard_grid {
    overflow-y: hidden;

    overflow-x: scroll;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(20px);
    scroll-snap-type: x mandatory;

    flex-flow: row;

    padding: 0;
  }

  .neu_border {
    scroll-snap-align: start;
    min-width: 99%;
    height: 92vh;
  }
  .respondant {
    min-width: 98%;
  }
}

@media (max-width: 800px) {
  .app_body {
    margin-left: 0;
  }
  .respondant {
    max-width: 46%;
  }
}

*::-webkit-scrollbar {
  width: 6px; /* width of the entire scrollbar */
}
*::-webkit-scrollbar-track {
  background: rgb(206, 206, 206); /* color of the tracking area */
  border-radius: 20px;
}
*::-webkit-scrollbar-thumb {
  background-color: rgb(29, 29, 29); /* color of the scroll thumb */
  border-radius: 1px; /* roundness of the scroll thumb */
  border: 0px solid black; /* creates padding around scroll thumb */
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

.close_btn {
  background-color: transparent;
  border: 0px;
  border-radius: 15px;
  cursor: pointer;
}

.close_btn:hover {
  background-color: #c9c9c9;
}

.hidden {
  display: none !important;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
