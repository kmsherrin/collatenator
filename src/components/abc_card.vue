<template>
  <div class="card">
    <a :href="fulllink" target="_blank" rel="noopener noreferrer">
      <h2 class="title">⚬ {{ title }}</h2>
    </a>
    <div>
      <a :href="fulllink" target="_blank" rel="noopener noreferrer">
        <img :src="image_url" class="post_image" />
      </a>
    </div>
    <div>
      <p class="preview_text">{{ preview_text }}</p>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "abc_card",

  props: {
    title: String,
    url: String,
    posted_time: String,
    preview_text: String,
    image_url: String
  },
  
  computed: {
    fulllink() {
      return "http://www.abc.net.au" + this.url;
    },
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

.preview_text {
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

hr {
    border: 0;
    height: 0;
    width: 80%;
    border-top: 1px solid rgba(0, 0, 0, 0.075);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>