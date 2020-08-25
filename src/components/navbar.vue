<template>
  <div class="navbar_block">
    <div style="display: block; left:0; float:left;">
      <button
        id="menu_expand_btn"
        class="burger menu_expander"
        style="height: 40px;"
        v-on:click="menu_toggling"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#FAFAFA"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </button>
    </div>
    <div
      style="display:flex; justify-content:center; align-items: center; margin-top: 0px; margin-bottom: auto;"
    >
      <h2 style="color: #ededed; font-family: 'Montserrat', sans-serif; font-weight: 400; margin-top: 5px; font-size: 22px;">📚 Collatenator </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    menu_toggling: function() {
      var side_wrapper = document.getElementById("wrapper");
      //var toggle_btn_div = document.getElementById("toggle_button_div");
      side_wrapper.classList.toggle("toggled");
      //toggle_btn_div.classList.toggle("hidden");

      let app = document.getElementById("app_main");
      app.classList.toggle("app_thin");
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

h2 {
  margin: 0;
  padding: 0;
}

.burger {
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  outline: none;
}

.burger:hover {
  background-color: rgb(66, 66, 66);
}

.navbar_block {
  display: inline;
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0px;
  width: 100%;
  background-color: black;
  height: 42px;
}

.full_width {
  margin-left: 0 !important;
}

@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>