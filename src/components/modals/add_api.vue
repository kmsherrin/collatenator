\<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>Add New Dashboard Page</h2>
          </div>

          <div class="modal-body" style="display: flex; justify-content: center;">
            <h5>Type of page:</h5>
            <select v-model="selected_type" id="page_type" @change="update_fields($event)">
              <option disabled>Select type</option>
              <option
                v-for="type in types"
                :key="type"
                v-bind:value="{ display: type.display, id: type.id, field_text: type.input_field_text }"
              >{{ type.display }}</option>
            </select>
          </div>
          <div class="modal-body" style="display: flex; justify-content: center;">
            <h5>{{ selected_type.field_text }}</h5>
            <input v-model="first_input" type="text" />
          </div>
          <div
            v-if="selected_type.id === 'bom'"
            class="modal-body"
            style="display: flex; justify-content: center;"
          >
            <h5>Location:</h5>
            <input v-model="second_input" type="text" />
          </div>
          <div class="modal-footer" style="display: flex; justify-content: center;">
            <button class="modal-default-button" @click="this.save_fields">Save</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
const api_url = "http://localhost:3000/db/api-points";
//const api_url = "https://desolate-everglades-50364.herokuapp.com/db/api-points";

export default {
  name: "add_api",
  data: function() {
    return {
      first_input: "",
      second_input: "",
      selected_type: "Type",
      types: [
        {
          display: "Subreddit",
          id: "subreddit",
          input_field_text: "reddit.com/r/"
        },
        {
          display: "ABC News",
          id: "abc",
          input_field_text: "Locality:"
        },
        {
          display: "BOM Weather",
          id: "bom",
          input_field_text: "State:"
        }
      ]
    };
  },
  methods: {
    save_fields() {
      var api_point = new FormData();

      api_point.append("type", this.selected_type.id);
      api_point.append("input_1", this.first_input);

      if (this.selected_type.id === "bom") {
        api_point.append("input_2", this.second_input);
      }
      console.log(api_point);
      fetch(`${api_url}`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: api_point
      });
    }
  },
  mounted() {}
};
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>