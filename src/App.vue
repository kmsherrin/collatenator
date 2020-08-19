<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <div class="app_body app_thin" id="app_main">
      <div class="dashboard_grid">
        <weather_frame state="tas" place="hobart" style="grid-row: span 2;" class="span_2" />
        <reddit_frame subreddit="python" style="grid-row: span 3;" class="span_3" />
        <reddit_frame subreddit="node" style="grid-row: span 3;" class="span_3" />
        <reddit_frame subreddit="programmerhumor" style="grid-row: span 3;" class="span_3" />
        <reddit_frame subreddit="hardware" style="grid-row: span 3;" class="span_2" />
        <abc_frame locale="hobart" style="grid-row: span 3;" class="span_2" />
        <weather_frame state="tas" place="penguin" style="grid-row: span 2;" class="span_2" />
        <weather_frame state="tas" place="burnie" style="grid-row: span 2;" class="span_2" />
        <abc_frame locale="tas" style="grid-row: span 3;" class="span_2" />
        <abc_frame locale="world" style="grid-row: span 3;" class="span_2" />
        <abc_frame locale="politics" style="grid-row: span 3;" class="span_2" />
      </div>
    </div>
  </div>
</template>

<script>
import reddit_frame from "./components/reddit_frame.vue";
import weather_frame from "./components/weather_frame.vue";
import abc_frame from "./components/abc_frame.vue";
import Navbar from "./components/navbar.vue";
import Sidebar from "./components/sidebar.vue";

export default {
  name: "App",
  components: {
    weather_frame,
    reddit_frame,
    abc_frame,
    Navbar,
    Sidebar
  }
};
</script>

<style>
@import url("./styles/base_styles.css");

body {
  margin: 0;
  background-color: #fafafa;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}

.app_thin {
  margin-left: 250px;
}

.dashboard_grid {
  max-width: 98%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(185px, 0.25fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 300px));
}

.span_3 {
  grid-column: span 3;
}
.span_2 {
  grid-column: span 2;
}
.span_1 {
  grid-column: span 1;
}

@media (min-width: 1600px) {
  .dashboard_grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 0.3fr));
  }
}

@media (min-width: 1800px) {
  .dashboard_grid {
    grid-template-columns: repeat(auto-fill, minmax(190px, 0.3fr));
  }
}
@media (min-width: 2000px) {
  .dashboard_grid {
    grid-template-columns: repeat(auto-fill, minmax(210px, 0.2fr));
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

    display: flex;
  }

  .neu_border {
    scroll-snap-align: start;
    min-width: 99%;
    height: 92vh;
  }

}

@media (max-width: 800px) {
  .app_body {
    margin-left: 0;
  }

  .dashboard_grid {
    grid-template-columns: repeat(auto-fill, minmax(390px, 0.3fr));
    padding-right: 1rem;
  }

  .span_3 {
    grid-column: span 1;
  }
  .span_2 {
    grid-column: span 1;
  }
  .span_1 {
    grid-column: span 1;
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
