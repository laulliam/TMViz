<template>
  <Card class="card">
    <p slot="title" style="text-align: left">
      <Icon type="ios-bus-outline" />
      Route Status
    </p>
    <div id="route-status"></div>
  </Card>
</template>

<script>
export default {
  name: "AppRouteStatus",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 50%;
  height: 33%;
  position: absolute;
  /* float: left; */
  /* bottom: 0; */
  top:66%;
  right: 0;
  margin: 0.2%;
  margin-left: 0;
}

#route-status {
  /* position: relative;
  float: left; */
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgb(130, 125, 131); */
}
</style>
