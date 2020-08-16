<template>
  <div class="centered neu_border" id="out">
      <div style="display:flex; justify-content: flex-end; padding-right: 2rem; padding-top:0.5rem;">
      <button class="close_btn" style="height: 25px;" :id="'close_button_' + subreddit" v-on:click="close_bar($event)">❌</button>
    </div>
    <div>
      <h3 class="header" style="width: 100%;">r/{{subreddit}}</h3>
    </div>
    <div class="card_scroll">
      <div class="card_div" v-for="post in posts" :key="post._id">
        <reddit_card
          :title="post.title"
          :image_url="post.image_url"
          :score="post.score"
          :url="post.url"
          :selftext="post.self_text"
        />
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
    subreddit: String
  },
  components: {
    reddit_card
  },

  methods: {
      close_bar: function(event) {
      let close_btn = document.getElementById(event.currentTarget.id);
      let outer_div = close_btn.closest('#out');
      outer_div.classList.toggle("hidden");
    }
  },

  mounted() {
    fetch(`${api_url}${this.subreddit}`)
      .then(response => response.json())
      .then(response => {
        this.posts = response;
        console.log(this.posts);
      });
  }
};
</script>

<style scoped>
.header {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem;
}

.neu_border {
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  background: #fafafa;
  box-shadow: 20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff;
}

.card_scroll {
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0.2rem;
}

*::-webkit-scrollbar {
  width: 6px; /* width of the entire scrollbar */
}
*::-webkit-scrollbar-track {
  background: rgb(206, 206, 206); /* color of the tracking area */
  margin: 0 0.2rem 3rem 0;
  border-radius: 20px;
}
*::-webkit-scrollbar-thumb {
  background-color: grey; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 0px solid black; /* creates padding around scroll thumb */
}
</style>