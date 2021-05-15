<template>
  <Card class="card-timeline">
    <p slot="title" style="text-align: left">
      <Icon type="ios-bus-outline" />
      Timeline View
    </p>
    <div id="timeline"></div>
  </Card>
</template>

<script>
export default {
  name: "AppTimeline",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-timeline {
  width: 100%;
  height: 30%;
  position: absolute;
  /* float: left; */
  bottom: 0;
  margin: 0.2%;
  margin-left: 0;
}

#timeline {
  /* position: relative;
  float: left; */
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgb(130, 125, 131); */
}
</style>
