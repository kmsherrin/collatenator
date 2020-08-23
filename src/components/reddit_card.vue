<template>
  <div class="card" :id="'reddit-card-id-'+fulllink" ref="card_w">
    <a :href="fulllink" target="_blank" rel="noopener noreferrer">
      <h2 class="title_header">{{ title }}</h2>
    </a>

    <div v-if="textpost" class="preview_text" :id="'md_insert'+fulllink">
      <VueShowdown :markdown="selftext"></VueShowdown>
      <slot></slot>
    </div>

    <div v-else-if="youtube_id">
      <youtube :video-id="youtube_id" :player-width="youtube_width"></youtube>
    </div>

    <div v-else>
      <div v-if="imagepost">
        <a :href="image_url" target="_blank" rel="noopener noreferrer">
            <img :src="image_url" class="post_image" />
          </a>
      </div>

      <div v-if="crosspost">
        <a :href="image_url" target="_blank" rel="noopener noreferrer">{{ image_url }}</a>
      </div>

      <div v-if="vreddit_post">
        <a :href="image_url" target="_blank" rel="noopener noreferrer">
          Reddit Video
        </a>
      </div>

      <div v-if="!imagepost & !vreddit_post">
        <a :href="image_url" target="_blank" rel="noopener noreferrer">{{ image_url }}</a>
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
export default {
  name: "reddit_card",
  components: {
  },
  props: {
    title: String,
    image_url: String,
    url: String,
    score: Number,
    selftext: String
  },
  data: function() {
    return {
      youtube_width: 350,
    };
  },
  methods: {
    parse_youtube_link(url) {
      let temp_arr = url.split("/");
      let youtube_id = temp_arr[temp_arr.length - 1];
      if (youtube_id.length == 11) {
        return youtube_id;
      } else {
        let temp_arr = url.split("=");
        let youtube_id = temp_arr[temp_arr.length - 1];
        if (youtube_id.length == 11) {
          return youtube_id;
        }
      }
    },
  },
  computed: {
    fulllink() {
      return "http://www.reddit.com" + this.url;
    },
    vreddit_post() {
      if (this.image_url.includes("v.redd")) {
        return true;
      } else {
        return false;
      }
    },
    youtube_id() {
      if (this.image_url.includes("youtu")) {
        let utube_id = this.parse_youtube_link(this.image_url);
        return utube_id;
      } else {
        return false;
      }
    },
    textpost() {
      if (this.selftext.length > 1) {
        return true;
      } else {
        return false;
      }
    },
    imagepost() {
      if (this.image_url.match(/(.png)|(.jpg)|(.jpeg)|(.gif)/g)){
        return true
      } else {
        return false
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
    //document.getElementById("md_insert"+this.fulllink).innerHTML =  this.selftext;
  }
};
</script>

<style scoped>
@import url("../styles/cards.css");

h2 {
  margin-bottom: 1rem;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>