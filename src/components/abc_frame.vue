<template>
  <div class="neu_border" id="out">
      <div style="display:flex; justify-content: flex-end; padding-right: 2rem; padding-top:0.5rem;">
      <button class="close_btn" style="height: 25px;" :id="'close_button_' + locale" v-on:click="close_bar($event)">❌</button>
    </div>
    <div>
      <h3 class="header" style="width: 100%;">ABC News {{ locale_fmt }}</h3>
    </div>
    <div class="card_scroll">
      <div class="card_div" v-for="post in posts" :key="post._id">
        <abc_card
          :title="post.title"
          :image_url="post.preview_image"
          :posted_time="post.posted_time"
          :preview_text="post.preview_text"
          :url="post.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import abc_card from "./abc_card.vue";

const api_url = "https://desolate-everglades-50364.herokuapp.com/abc/";
//const api_url = "http://localhost:3000/abc/";

export default {
  name: "abc_frame",
  data: () => ({
    posts: []
  }),
  props: {
    locale: String
  },
  components: {
    abc_card
  },

  methods: {
      close_bar: function(event) {
      let close_btn = document.getElementById(event.currentTarget.id);
      let outer_div = close_btn.closest('#out');
      outer_div.classList.toggle("hidden");
    }
  },

  mounted() {
    fetch(`${api_url}${this.locale}`)
      .then(response => response.json())
      .then(response => {
        this.posts = response;
        console.log(this.posts);
      });
  },

  computed: {
    locale_fmt() {
      return this.locale.charAt(0).toUpperCase() + this.locale.slice(1);
    }
  }
};
</script>

<style scoped>

@import url('../styles/frames.css');

</style>