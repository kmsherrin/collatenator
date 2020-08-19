<template>
  <div class="neu_border" id="out">
    <div style="display:flex; justify-content: flex-end; padding-right: 2rem;">
      <button
        class="close_btn"
        style="height: 25px;"
        :id="'close_button_' + weather_obj['location']"
        v-on:click="close_bar($event)"
      >❌</button>
    </div>
    <div class="weather_grid">
      <div style="text-align: left;">
        <h2 class="header">{{ weather_obj['location'] }}</h2>
        <h6 class="sub_header">{{ weather_obj['state'] }}</h6>
      </div>

      <div style="display:block; text-align: right;">
        <h6 class="sub_header">Feels like</h6>
      </div>

      <div
        style="display: grid; grid-template-columns: 40% 60%; grid-template-rows: 1fr; gap:1rem;"
      >
        <div class="icon">
          <img src="../assets/fog.png" style="height: auto; width: 100%; max-width: 180px;" />
        </div>
        <div class="temp" style="display: flex; align-items: center; justify-content: flex-end;">
          <h1 style="font-size: 80px;">{{ weather_obj['air_temperature']['data'] }}</h1>
          <p
            style="font-size: 2rem; margin-bottom: 2rem;"
          >{{ weather_obj['air_temperature']['unit'] }}</p>
        </div>
      </div>
      <div class="extra_info_grid">
        <div v-if="weather_obj['rainfall']" style="text-align: left;">
          <h5>Rainfall</h5>
        </div>
        <div v-if="weather_obj['rainfall']" style="text-align: right;">
          <h5>{{ weather_obj['rainfall']['data'] }} {{weather_obj['rainfall']['unit'] }}</h5>
        </div>
        <div v-if="weather_obj['Humidity']" style="text-align: left;">
          <h5>Humidity</h5>
        </div>
        <div v-if="weather_obj['Humidity']" style="text-align: right;">
          <h5>{{ weather_obj['Humidity'] }}</h5>
        </div>
        <div v-if="weather_obj['pressure']" style="text-align: left;">
          <h5>Pressure</h5>
        </div>
        <div v-if="weather_obj['pressure']" style="text-align: right;">
          <h5>{{ weather_obj['pressure']['data'] }} {{ weather_obj['pressure']['unit'] }}</h5>
        </div>
        <div v-if="weather_obj['wind_speed']" style="text-align: left;">
          <h5>Wind Speed</h5>
        </div>
        <div v-if="weather_obj['wind_speed']" style="text-align: right;">
          <h5>{{ weather_obj['wind_speed']['data'][1] }} {{ weather_obj['wind_speed']['unit'][1] }}</h5>
        </div>
        <div v-if="weather_obj['wind_direction']" style="text-align: left;">
          <h5>Wind Direction</h5>
        </div>
        <div v-if="weather_obj['wind_direction']" style="text-align: right;">
          <h5>{{ weather_obj['wind_direction'] }}</h5>
        </div>

        <div style="grid-column: span 2; padding-top: 0.5em;">
          <p style="font-size:small;">Time last updated: {{ weather_obj['last_update_time']}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//const api_url = "http://localhost:3000/weather/";
const api_url = "https://desolate-everglades-50364.herokuapp.com/weather/";

export default {
  name: "weather",
  data: () => ({
    weather_obj: {}
  }),

  props: {
    place: String,
    state: String
  },
  methods: {
    close_bar: function(event) {
      let close_btn = document.getElementById(event.currentTarget.id);
      let outer_div = close_btn.closest("#out");
      outer_div.classList.toggle("hidden");
    }
  },

  mounted() {
    fetch(`${api_url}${this.state}/${this.place}`)
      .then(response => response.json())
      .then(response => {
        this.weather_obj = response;
        this.weather_obj["location"] =
          this.weather_obj["location"].charAt(0).toUpperCase() +
          this.weather_obj["location"].slice(1);
        this.weather_obj["state"] = this.weather_obj["state"].toUpperCase();
      });
  }
};
</script>


<style scoped>
.weather_grid {
  display: grid;
  gap: 2.5rem;
  grid-template-rows: 6rem 1rem 5rem auto;
  grid-template-columns: auto;

  align-items: center;
  justify-content: center;

  padding: 0rem 2rem 1.5rem 2rem;
}

.extra_info_grid {
  padding-top: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
}

.header {
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 700;

  margin: 0;
}

.sub_header {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.neu_border {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  background: #fafafa;
  box-shadow: 20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff;
}

h5 {
  font: "Hind", sans-serif;
  font-size: 22px;
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
@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>