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

          <div
            class="modal-footer"
            style="display: flex; justify-content: center;"
          >
            <div class="div-space">
              <button
                class="modal-default-button ken-btn"
                @click="$emit('close')"
              >
                Close
              </button>
            </div>
            <div class="div-space">
              <button
                class="modal-default-button ken-btn"
                @click="this.save_fields"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
//const api_url = "http://localhost:3000/db/groceries/save";
const api_url = "https://desolate-everglades-50364.herokuapp.com/db/groceries/save";

export default {
  name: "add_grocery_item",
  data: function() {
    return {
      url_input: "",
      pot_id: "",
      api_form: {},
    };
  },
  methods: {
    save_fields() {
      console.log(this.api_form);
      this.pot_id = this.parse_url(this.url_input);
      fetch(
        `https://www.woolworths.com.au/apis/ui/product/detail/${this.pot_id}`
      )
        .then((response) => this.check_error(response))
        .then((response) => this.check_exists(response, this.pot_id))
        .then(this.add_id(this.pot_id))
        .then((id) => this.post_data(id, this.api_form))
        .catch(function(error) {
          console.log(error);
          alert(error.message);
        });
    },

    add_id(id) {
      return new Promise((resolve) => {
        console.log("This is me logging the ID: " + id);
        this.api_form["id"] = id;
        resolve(this.api_form);
      });
    },

    post_data(id, api_form) {
      let to_submit = { item_id: api_form["id"] };
      return new Promise((resolve, reject) => {
        fetch(api_url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(to_submit),
        }).then((response) => {
          if (response.status == "200") {
            this.$emit("close");
            this.$emit("refresh");
            alert("Saved Item!");
            resolve("Added Item");

          } else {
            alert("Didn't Save");
            reject("Didn't save item!!");
          }
        });
      });
    },

    parse_url(url) {
      let split_url = url.split("/");
      let potential_id = split_url.filter((el) => {
        if (el.match(/^[0-9]+$/g)) {
          if (el.length > 3) {
            return el;
          }
        }
      });
      if (potential_id.length > 0) {
        return potential_id[0];
      }
    },

    check_exists(response, id) {
      return new Promise(function(resolve, reject) {
        console.log(response);
        if (response["Product"]["Stockcode"] == id) {
          resolve(id);
        } else {
          let reason = "Item doesn't actually exist? Yo what up with that.";
          reject(reason);
        }
      });
    },
    check_error(response) {
      return new Promise(function(resolve, reject) {
        if (response.status >= 200 && response.status <= 299) {
          resolve(response.json());
        } else {
          reject(response.statusText);
        }
      });
    },
  },
  mounted() {},
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
