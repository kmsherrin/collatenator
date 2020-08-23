\<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>Add New Dashboard Page</h2>
          </div>

          <div
            class="modal-body"
            style="display: flex; justify-content: center; align-items: center;"
          >
            <div class="div-space">
              <h5>Type of page:</h5>
            </div>
            <div class="div-space">
              <select v-model="selected_type" id="page_type">
                <option disabled>Select type</option>
                <option
                  v-for="type in types"
                  :key="type.id"
                  v-bind:value="{ display: type.display, id: type.id, field_text: type.input_field_text }"
                >{{ type.display }}</option>
              </select>
            </div>
          </div>

          <div
            v-if="selected_type.id === 'abc'"
            class="modal-body"
            style="display: flex; justify-content: center; align-items:center;"
          >
            <div class="div-space">
              <h5>{{ selected_type.field_text }}</h5>
            </div>
            <div class="div-space">
              <select v-model="first_input">
                <option
                  v-for="place in abc_localities"
                  :key="place.url"
                  v-bind:value="place.url"
                >{{ place.display }}</option>
              </select>
            </div>
          </div>

          <div
            v-else
            class="modal-body"
            style="display: flex; justify-content: center; align-items:center;"
          >
            <div class="div-space">
              <h5>{{ selected_type.field_text }}</h5>
            </div>
            <div class="div-space">
              <input v-model="first_input" type="text" />
            </div>
          </div>
          <div
            v-if="selected_type.id === 'bom'"
            class="modal-body"
            style="display: flex; justify-content: center; align-items: center;"
          >
            <div class="div-space">
              <h5>Location:</h5>
            </div>
            <div class="div-space">
              <input v-model="second_input" type="text" />
            </div>
          </div>

          <div class="modal-footer" style="display: flex; justify-content: center;">
            <div class="div-space">
            <button class="modal-default-button ken-btn" @click="$emit('close')">Close</button>

            </div>
            <div class="div-space">
            <button class="modal-default-button ken-btn" @click="this.save_fields">Save</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
const nfetch = require("node-fetch");
//const api_url = "http://localhost:3000/db/api-points";
const api_url = "https://desolate-everglades-50364.herokuapp.com/db/api-points";

export default {
  name: "add_api",
  data: function() {
    return {
      first_input: "",
      second_input: "",
      selected_type: "Type",
      order: 1,
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
      ],
      abc_localities: [
        {
          display: "Hobart",
          url: "hobart"
        },
        {
          display: "Northern Tas",
          url: "northtas"
        },
        {
          display: "Tasmania",
          url: "tas"
        },
        {
          display: "Victoria",
          url: "vic"
        },
        {
          display: "Melbourne",
          url: "melb"
        },
        {
          display: "National",
          url: "national"
        }
      ],
      component_conv: {
        subreddit: 'reddit_frame',
        bom: 'weather_frame',
        abc: 'abc_frame'
      }
    };
  },
  methods: {
    save_fields() {
      //var api_form = new FormData();
      var api_form = {};
      //api_form.append("type", this.selected_type.id);
      //api_form.append("input_1", this.first_input);

      api_form["type"] = this.selected_type.id;
      api_form["input_1"] = this.first_input;
      api_form["dashboard_order"] = this.order;
      api_form["input_2"] = this.second_input;

      api_form['component'] = this.component_conv[this.selected_type.id];

      // for (var key of api_form.entries()) {
      //   console.log(key[0] + ', ' + key[1]);
      // }
      nfetch(`${api_url}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(api_form)
      })
      .then(response => {
        if (response.status == "200") {
          this.$emit("close");
          this.$emit("refresh_table");
        } else {
          console.log("TODO: didn't save")
          alert("didn't save")
        }
      });
    }
  },
  mounted() {}
};
</script>


<style scoped>
@import url("../../styles/base_styles.css");

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
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flexbox;
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