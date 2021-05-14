<template>
  <Card class="card">
    <p slot="title" style="text-align: left">
      <Icon type="ios-navigate-outline" />
      Map Operation Panel
    </p>
    <div id="map" ref="basicMapbox"></div>
  </Card>
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

    this.map_config();
    this.map_points();
    // this.map_lines()
  },
  methods: {
    /*
     *@description: init mapbox
     *@author: Lelliam
     *@date: 2021-05-14 21:30:55
     *@param
     *@version V1.0.5
     */
    map_config() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoia2FwaWxiaGlzZSIsImEiOiJja2psMXV6ZnQwNDlqMnpsOXI5MTBvNmtxIn0.rSEXmuMHuTEohbUCUYpjaw";

      this.map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        // style: "mapbox://styles/mapbox/dark-v9",
        // style: "mapbox://styles/mapbox/streets-v11",
        style: "mapbox://styles/mapbox/light-v10",
        // center: [110.32953682031234, 19.973591989780688], // 设置地图中心
        // center: [-122.447303, 37.753574],
        center: [-122.48383155304096, 37.82882682974591],
        zoom: 12, // 设置地图比例
        //pitch:50
      });
      // this.map.on('click',(e)=>{
      //     console.log(e.lngLat);
      // })
    },

    /*
     *@description: add points in map
     *@author: Lelliam
     *@date: 2021-05-14 21:31:52
     *@param
     *@version V1.0.5
     */
    map_points(data) {
      // let points_features = data.map((d) => {
      //   return {
      //     type: "Feature",
      //     properties: {
      //       color: "#ab5473",
      //       opacity: 0.8,
      //       radius: 10,
      //     },
      //     geometry: {
      //       type: "Point",
      //       coordinates: [d.lng, d.lat],
      //     },
      //   };
      // });

      let points_source = {
        type: "vector",
        // data: {
        //   type: "FeatureCollection",
        //   features: points_features,
        // },
        url: "mapbox://examples.8fgz4egr",
      };

      this.map.on("load", () => {
        this.map.addSource("points_source", points_source);
        this.map.addLayer({
          id: "points",
          source: "points_source",
          minzoom: 3,
          type: "circle",
          "source-layer": "sf2010",
          paint: {
            "circle-radius": 5,
            "circle-color": "#ab5473",
            "circle-opacity": 0.5,
          },
        });
      });
    },

    /*
     *@description: add line in map
     *@author: Lelliam
     *@date: 2021-05-14 21:36:24
     *@param
     *@version V1.0.5
     */
    map_lines(data) {

      let lines_features = [
        {
          type: "Feature",
          properties: {
            color: "#F7455D", // red
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.4833858013153, 37.829607404976734],
              [-122.4830961227417, 37.82932776098012],
              [-122.4830746650696, 37.82932776098012],
              [-122.48218417167662, 37.82889558180985],
              [-122.48218417167662, 37.82890193740421],
              [-122.48221099376678, 37.82868372835086],
              [-122.4822163581848, 37.82868372835086],
              [-122.48205006122589, 37.82801003030873],
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            color: "#33C9EB", // blue
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.48393028974533, 37.829471820141016],
              [-122.48395174741744, 37.82940826466351],
              [-122.48395174741744, 37.829412501697064],
              [-122.48423874378203, 37.829357420242125],
              [-122.48422533273697, 37.829361657278575],
              [-122.48459815979002, 37.8293425906126],
              [-122.48458743095398, 37.8293447091313],
              [-122.4847564101219, 37.82932776098012],
              [-122.48474299907684, 37.829331998018276],
              [-122.4849334359169, 37.829298101706186],
              [-122.48492807149889, 37.82930022022615],
              [-122.48509705066681, 37.82920488676767],
              [-122.48509168624878, 37.82920912381288],
              [-122.48520433902739, 37.82905870855876],
              [-122.48519897460936, 37.82905870855876],
              [-122.4854403734207, 37.828594749716714],
              [-122.48543500900269, 37.82860534241688],
              [-122.48571664094925, 37.82808206121068],
              [-122.48570591211319, 37.82809689109353],
              [-122.4858346581459, 37.82797189627337],
              [-122.48582661151886, 37.82797825194729],
              [-122.4859634041786, 37.82788503534145],
              [-122.48595803976059, 37.82788927246246],
              [-122.48605459928514, 37.82786596829394],
            ],
          },
        },
      ];

      // let lines_features = data.map((d) => {
      //   return {
      //     type: "Feature",
      //     properties: {
      //       color: getcolor(d.name),
      //     },
      //     geometry: {
      //       type: "LineString",
      //       coordinates: d.track,
      //     },
      //   };
      // });

      let lines_source = {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: lines_features,
        },
      };

      this.map.on("load", () => {
        this.map.addSource("lines_source", lines_source);
        this.map.addLayer({
          id: "lines",
          type: "line",
          source: "lines_source",
          paint: {
            "line-width": 5,
            "line-color": ["get", "color"],
            "line-opacity": 0.7,
          },
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 100%;
  height: 60%;
  position: absolute;
  /* top:0; */
  /* left:22%; */
  margin: 0.2%;
  margin-left: 0;
}
#map {
  /* position: relative;
  float: left; */
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgb(151, 64, 173); */
}
</style>
