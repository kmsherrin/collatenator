<template>
  <div class="card">
    <a :href="fulllink" target="_blank" rel="noopener noreferrer">
      <h2 class="title">⚬ {{ title }}</h2>
    </a>
    <div v-if="textpost" class="reddit_text" :id="'md_insert'+fulllink">
        <p>Hllo</p>
    </div>

    <div v-else>
      <div v-if="crosspost">
        <a :href="image_url" target="_blank" rel="noopener noreferrer">{{ image_url }}</a>
      </div>

      <div v-else>
        <a :href="image_url" target="_blank" rel="noopener noreferrer">
          <img :src="image_url" class="post_image" />
        </a>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: 50% 50%;">
      <div class="button_below">
        <h3 class="below_text">{{ score }}</h3>
      </div>
      <div class="button_below">
        <a :href="fulllink" target="_blank" rel="noopener noreferrer">
          <h3 class="below_text">Comments</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const md = require("markdown").markdown;

export default {
  name: "reddit_card",

  props: {
    title: String,
    image_url: String,
    url: String,
    score: Number,
    selftext: String
  },
  
  computed: {
    fulllink() {
      return "http://www.reddit.com" + this.url;
    },
    textpost() {
      if (this.selftext.length > 1) {
        return true;
      } else {
        return false;
      }
    },
    crosspost() {
      if (this.image_url.substring(this.image_url.length - 1) == "/") {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    document.getElementById("md_insert"+this.fulllink).innerHTML =  md.toHTML(this.selftext);
  },
};
</script>

<style scoped>
p,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}

h2 {
  margin: 1rem;
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

a {
  text-decoration: none;
  color: rgb(65, 74, 155);
  margin: 0;
}

.reddit_text {
  font: "Hind", sans-serif;
  font-size: large;
  line-height: 1.6;
  text-align: left;
  padding: 1rem;
  white-space: pre-wrap;
}

.title {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
}

.card {
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  border: 0px rgb(177, 177, 177) solid;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.post_image {
  max-width: 95%;
}
.button_below {
  border: 0.5px solid rgb(156, 156, 156);
  border-radius: 10px;
  margin: 0.5rem 1rem 0.5rem 1rem;
  height: 20px;
  padding: 0.3rem;
}

.below_text {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>