<template>
  <div id="map" ref="basicMapbox"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "AppTest",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    //地图处理
    this.map_config();
  },
  methods: {
    map_config() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoia2FwaWxiaGlzZSIsImEiOiJja2psMXV6ZnQwNDlqMnpsOXI5MTBvNmtxIn0.rSEXmuMHuTEohbUCUYpjaw";

      this.map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: "mapbox://styles/mapbox/dark-v9",
        center: [110.32953682031234, 19.973591989780688], // 设置地图中心
        zoom: 12, // 设置地图比例
        //pitch:50
      });
      // this.map.on('click',(e)=>{
      //     console.log(e.lngLat);
      // })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
