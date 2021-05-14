<template>
  <Card class="card">
    <p slot="title" style="text-align: left">
      <Icon type="ios-bus-outline" />
      Route Stablity
    </p>
    <div id="route-stablity"></div>
  </Card>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "AppRouteStablity",
  data() {
    return {};
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {

      let width = document.getElementById('route-stablity').offsetWidth; 
      let height = document.getElementById('route-stablity').offsetHeight; 

      // set the dimensions and margins of the graph
      let margin = { top: 50, right: 30, bottom: 80, left: 50 };

      (width = width - margin.left - margin.right),
        (height = height - margin.top - margin.bottom);

      // append the svg object to the body of the page
      let svg = d3
        .select('#route-stablity')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      let data = [...new Array(5)].fill(0).map((d, i) => {
        let min = 1 + Math.random() * 5,
          max = 5 + Math.random() * 5;
        return {
          name: "Station" + i,
          min: min,
          max: max,
          mid: (min + max) / 2,
        };
      });

      let dataTypes = data.map((d) => d.name);
      let dataExtent = [d3.min(data, (d) => d.min), d3.max(data, (d) => d.max)];

      // add the x Axis
      var x = d3
        .scaleBand()
        .domain(dataTypes)
        .range([0, width])
        .paddingInner(1)
        .paddingOuter(0.5);

      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // add the y Axis
      var y = d3.scaleLinear().range([height, 0]).domain([0, 10]);
      svg.append("g").call(d3.axisLeft(y));

      let area = d3
        .area()
        // .curve(d3.curveBasis)
        .x((d) => x(d.name))
        .y0((d) => y(d.min))
        .y1((d) => y(d.max));

      svg
        .append("g")
        .attr("fill-opacity", 0.4)
        .append("path")
        // .data(data)
        .attr("fill", "#ddd")
        .attr("d", area(data));

      // Show the main vertical line
      svg
        .selectAll("vertLines")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", function (d) {
          return x(d.name);
        })
        .attr("x2", function (d) {
          return x(d.name);
        })
        .attr("y1", function (d) {
          return y(d.min);
        })
        .attr("y2", function (d) {
          return y(d.max);
        })
        .attr("stroke", "black")
        .style("width", 2);

      // rectangle for the main box
      svg
        .selectAll("boxes")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) {
          return x(d.name) - 10;
        })
        .attr("y", function (d) {
          return y(d.mid) - 5;
        })
        .attr("height", 10)
        .attr("width", 20)
        .attr("stroke", "black")
        .style("fill", "#69b3a2");

      // rectangle for the main box
      svg
        .selectAll(".downdot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", ".downdot")
        .attr("cx", function (d) {
          return x(d.name);
        })
        .attr("cy", function (d) {
          return y(d.min);
        })
        .attr("r", 2)
        .style("fill", "#d76c8c");

      // dot for the max
      svg
        .selectAll(".updot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", ".updot")
        .attr("cx", function (d) {
          return x(d.name);
        })
        .attr("cy", function (d) {
          return y(d.max);
        })
        .attr("r", 2)
        .style("fill", "#847ac9");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 50%;
  height: 33%;
  position: absolute;
  /* float: left; */
  top: 66%;
  /* bottom: 0; */
  margin: 0.2%;
  margin-left: 0;
}
#route-stablity {
  /* position: relative;
  float: left; */
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgb(64, 173, 128); */
}
</style>
