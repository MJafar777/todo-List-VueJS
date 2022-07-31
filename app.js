const app = Vue.createApp({
  data() {
    return {
      message: "Add your Message",
      mess: "",
      messageArr: [],
      edit: null,
    };
  },
  methods: {
    addMesage() {
      if (this.edit != null) {
        let userniTop = this.messageArr.find((info) => info.id == this.edit);
        userniTop.text = this.mess;
        this.edit = null;
        this.mess = "";
      } else if (this.mess) {
        let newInfo = {
          id: this.messageArr.length + 1,
          text: this.mess,
        };
        this.messageArr.push(newInfo);
        this.mess = "";
      } else {
        alert("siz ma'lumot kiritmadingiz!");
      }
    },
    deleteItems(id) {
      this.messageArr = this.messageArr.filter((info) => info.id != id);
    },
    editItems(id) {
      let userniTop = this.messageArr.find((info) => info.id == id);
      this.mess = userniTop.text;
      this.edit = id;
    },
  },
  computed: {
    revorseInfo() {
      return this.messageArr.reverse();
    },
  },
});
app.mount("#app");
