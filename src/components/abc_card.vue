<template>
  <div class="card">
    <a :href="fulllink" target="_blank" rel="noopener noreferrer">
      <h2 class="title_header">⚬ {{ title }}</h2>
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

@import url('../styles/cards.css');
@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

</style>