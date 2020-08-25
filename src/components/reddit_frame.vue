<template>
  <div class="neu_border span_2" id="out" ref="reddit_frame">
    <div style="display:flex; justify-content: flex-end; padding-right: 2rem; padding-top:0.5rem;">
      <button
        class="close_btn"
        style="height: 25px;"
        :id="'close_button_' + data.input_1"
        v-on:click="close_bar($event)"
      >❌</button>
    </div>
    <div>
      <h3 class="header" style="width: 100%;">r/{{data.input_1}}</h3>
    </div>
    <div class="card_scroll">
      <div class="card_div" v-for="post in posts" :key="post._id">
        <reddit_card
          :title="post.title"
          :image_url="post.image_url"
          :score="post.score"
          :url="post.url"
          :selftext="post.self_text"
        ></reddit_card>
      </div>
    </div>
  </div>
</template>

<script>
import reddit_card from "./reddit_card.vue";

const api_url = "https://desolate-everglades-50364.herokuapp.com/reddit/";
//const api_url = "http://localhost:3000/reddit/";

export default {
  name: "reddit_frame",
  data: () => ({
    posts: []
  }),
  props: {
    data: Object
  },
  components: {
    reddit_card
  },

  methods: {
    close_bar: function(event) {
      let close_btn = document.getElementById(event.currentTarget.id);
      let outer_div = close_btn.closest("#out");
      outer_div.classList.toggle("hidden");
    }
  },

  mounted() {
    fetch(`${api_url}${this.data["input_1"]}`)
      .then(response => response.json())
      .then(response => {
        this.posts = response;

        // this.posts.forEach((element, index) => {
        //   if (this.posts[index]["selftext"]) {
        //     if (this.posts[index]["selftext"].length > 0) {
        //       this.posts[index]["selftext"] = converter.makeHtml(element["selftext"]);
        //     }
        //   }
        // });
      });
  }
};
</script>

<style scoped>
@import url("../styles/frames.css");
</style>