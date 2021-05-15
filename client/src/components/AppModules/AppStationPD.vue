<template>
  <Card class="card-spd">
    <p slot="title" style="text-align: left">
      <Icon type="ios-ionic-outline" />
      Station Probability Density Detail
    </p>
    <div id="stationPD">
      <CellGroup>
        <Cell title="" v-for="(item, index) in stations" :key="index" >
          <div class="SPD" :id="'SPD_'+index"></div>
        </Cell>
      </CellGroup>
    </div>
  </Card>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "AppStationPD",
  data(){
    return {
      stations:['A','B','C'],
      colors:d3.scaleOrdinal(d3['schemeSet3'])
    }
  },
  components: {},
  mounted() {
 
    this.stations.forEach((d,i) => {
        this.test('#SPD_'+i,i)  
    });


  },
  methods: {
    test(domid,index) {
      let width = 400;
      let height = 150; //this.$el.offsetHeight;

      // set the dimensions and margins of the graph
      let margin = { top: 20, right: 20, bottom: 20, left: 20 };

      (width = width - margin.left - margin.right),
      (height = height - margin.top - margin.bottom);

      let zoom = d3
        .zoom()
        .scaleExtent([1, 10])
        .extent([
          [margin.left, 0],
          [width - margin.right, height],
        ])
        .translateExtent([
          [margin.left, -Infinity],
          [width - margin.right, Infinity],
        ])
        .on("zoom", zoomed);

      // append the svg object to the body of the page
      let svg = d3
        .select(domid)
        .append("svg")
        // .attr("viewBox", [40, 0, width, height])
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr(
          "transform",
          "translate(" + margin.left * 2 + "," + margin.top + ")"
        );

      svg
        .append("defs")
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width - margin.left - margin.right)
        .attr("height", height);

      let startDateTime = new Date(2021, 1, 1, 0, 0, 0);

      let data = [...new Array(10)].fill(0).map((d, i) => {
        return {
          date: new Date(
            startDateTime.setMinutes(startDateTime.getMinutes() + 10)
          ),
          value: Math.random() * 10,
        };
      });

      let dateExtent = d3.extent(data, (d) => d.date);
      let maxValue = d3.max(data, (d) => d.value);

      // add the x Axis
      var x = d3
        .scaleUtc()
        .domain(dateExtent)
        .range([margin.left, width - margin.right]);

      let xAxis = (g, x) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3.axisBottom(x)
          // .ticks(5)
          //.tickSizeOuter(0)
        );

      // add the y Axis
      var y = d3
        .scaleLinear()
        .range([height - margin.bottom, margin.top])
        .domain([0, 10]);

      let yAxis = (g, y) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(5))
          .call((g) => g.select(".domain").remove());

      let gx = svg.append("g").call(xAxis, x);

      svg.append("g").call(yAxis, y);

      let area = (data, x) =>
        d3
          .area()
          .curve(d3.curveBasis)
          .x((d) => x(d.date))
          .y0(y(0))
          .y1((d) => y(d.value))(data);

      let areaPath = svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .attr("fill-opacity", 0.7)
        .append("path")
        .attr("clip-path", "url(#clip)")
        // .attr("fill", "#69b3a2")
        .attr('fill',this.colors(index))
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("stroke-opacity", 0.3)
        // .attr("stroke-linejoin", "round")
        .attr("d", area(data, x));

      svg.call(zoom);

      svg
        .append("circle")
        .attr("cx", -15)
        .attr("cy", height - 20)
        .attr("r", 4)
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("stroke-opacity", 0.3)
        .attr('fill',this.colors(index))

      svg
        .append("text")
        .text("Station *")
        .attr("x", -height / 2.3)
        .attr("y", -10)
        .classed("trend-type", true)
        .style("text-anchor", "middle")
        .attr("transform", "rotate(-90)");

      function zoomed(event) {
        const xz = event.transform.rescaleX(x);
        areaPath.attr("d", area(data, xz));
        gx.call(xAxis, xz);
      }
    },
  },
};
</script>

<style scope>
.card-spd {
  width: 22%;
  height: 70%;
  position: relative;
  float: left;
  /* top:1%; */
  /* left: 10%; */
  /* left: 0; */
  /* margin: 0.1% ; */
}

.SPD{
  width: 400px;
  height: 150px;
  /* background-color: #0ff; */
}

#stationPD {
  position: absolute;
  /* float: left; */
  width: 100%;
  height: 100%;
  /* background-color: #0ff; */
}
</style>