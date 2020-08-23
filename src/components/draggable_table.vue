<template>
  <div>
    <table id="items_table">
      <thead>
        <tr>
          <th>Move</th>
          <th>Type</th>
          <th>Field 1</th>
          <th>Field 2</th>
          <th>Field 3</th>
          <th>Order</th>
        </tr>
      </thead>
      <draggable
        v-model="table_object"
        id="items_table_body"
        tag="tbody"
        handle=".handle"
        v-bind="dragOptions"
      >
        <tr v-for="(row, index) in table_object" :key="row.id">
          <td class="handle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-2"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2196F3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </td>
          <td>{{ row.type }}</td>
          <td>{{ row.input_1}}</td>
          <td>{{ row.input_2}}</td>
          <td>{{ row.input_3}}</td>
          <td scope="row">{{ index+1 }}</td>
        </tr>
      </draggable>
    </table>
    <div class="div-space">
      <button class="ken-btn" @click="save_order">Save Order</button>
    </div>
    <div class="loader_div" v-if="loading">
      <div class="loader">{{ load_text }}</div>
      <h5 style="position: absolute; top: 10%; left: 35%;">Loading..</h5>
    </div>
  </div>
</template>


<script>
// const api_url = "http://localhost:3000/json/api-points";
// const save_api_url = "http://localhost:3000/db/api-points/save";
const api_url = "https://desolate-everglades-50364.herokuapp.com/json/api-points";
const save_api_url = "https://desolate-everglades-50364.herokuapp.com/db/api-points/save";

import draggable from "vuedraggable";

export default {
  name: "draggable_table",
  components: {
    draggable
  },
  props: {
    data_object: Array
  },
  data: function() {
    return {
      table_object: Array,
      dragging: false,
      loading: false,
      load_text: "Loading ..."
    };
  },
  mounted() {
    this.get_data();
    this.$on('refresh_table', console.log("Need to update table"));
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    get_data() {
      fetch(`${api_url}`)
        .then(response => response.json())
        .then(response => {
          this.table_object = response;
        });
    },
    save_order() {
      this.loading = true;
      let new_order = this.table_object;
      new_order.forEach((element, index) => {
        new_order[index]["dashboard_order"] = index + 1;
      });
      console.log(new_order);
      fetch(`${save_api_url}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(new_order)
      }).then(response => {
        if (response.status == "200") {
          console.log("Data saved successfully");
          this.loading = false;
        } else {
          console.log("Failure");
        }
      });
    }
  }
};
</script>

<style>
@import url("../styles/base_styles.css");
@import url("../styles/loader.css");

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.4;
  background: #aebec7;
}
</style>