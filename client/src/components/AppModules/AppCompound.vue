<template>
  <Card class="card-compound">
    <!-- <div id="map" ref="basicMapbox"></div> -->
    <AppMap></AppMap>
    <AppRouteStablity></AppRouteStablity>
    <AppRouteStatus></AppRouteStatus>
    <AppTimeline></AppTimeline>
  </Card>
</template>

<script>

import AppMap from "./AppMap";
import AppRouteStablity from "./AppRouteStablity";
import AppRouteStatus from "./AppRouteStatus";
import AppTimeline from "./AppTimeline";

export default {
  name: "AppCompound",
  components: {
    AppMap,
    AppRouteStablity,
    AppRouteStatus,
    AppTimeline
  },
};
</script>

<style scope>
.card-compound {
  width: 61.4%;
  height: 100%;
  /* position: relative; */
  float: left;
  /* left: 10%; */
  /* left: 0; */
  /* margin: 0.1%;
  margin-left: 0; */
  /* background-color: rgb(90, 236, 163); */
}
</style>