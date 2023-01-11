console.log("Vue OK", Vue);
const app = Vue.createApp({
  data() {
    return {
      tasks: ["Fare i compiti", "Fare la spesa", "Fare il bucato"],
    };
  },
});
app.mount("#root");
