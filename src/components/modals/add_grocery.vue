\<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>Add New Grocery Item</h2>
          </div>

          <div
            class="modal-body"
            style="display: flex; justify-content: center; align-items: center;"
          >
            <div class="div-space">
              <h5>Woolworths URL of Item:</h5>
            </div>
            <div class="div-space">
                            <input v-model="url_input" type="text" />
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
const api_url = "http://localhost:3000/db/groceries/save";
//const api_url = "https://desolate-everglades-50364.herokuapp.com/db/api-points";

export default {
  name: "add_grocery_item",
  data: function() {
    return {
      url_input: "",
    }
  },
  methods: {
    save_fields() {
      var api_form = {};
      api_form["item_id"] = this.url_input;
      
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
  max-width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flexbox;
  flex-wrap: wrap;
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