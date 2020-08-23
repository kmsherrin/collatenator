#https://codepen.io/Philippe_Fercha/pen/yawbqB

<template>
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand brand">
          <a href=""><router-link to="/">Home</router-link></a>
        </li>
        <li class="other_links">
          <a href=""><router-link to="/">Dashboard</router-link></a>
        </li>
        <li class="other_links">
          <a href="">Search</a>
        </li>
        <li class="other_links">
          <a><router-link to="/configure">Configure</router-link></a>
        </li>
        <li class="other_links">
          <a href=""><router-link to="/history">History</router-link></a>
        </li>
        <li class="other_links">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  name: "Sidebar",
  components: {
  },

  methods: {}
};
</script>

<style>
body {
  overflow-x: hidden;
}

.brand {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
}

.other_links {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 500;
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 10;
  position: fixed;
  left: 250px;
  top: 40px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: rgb(15, 15, 15);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#wrapper.toggled {
  margin-right: -250px;
}

/* Sidebar Styles */
.sidebar-nav {
  position: absolute;
  top: 10px;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 50px;

}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #cacaca;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}


.sidebar-nav > .sidebar-brand a {
  color: #c7c7c7;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media (min-width: 800px) {

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 250px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }
}
</style>