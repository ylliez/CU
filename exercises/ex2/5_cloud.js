window.onload = function () {

    // $.get(
    //     "/passTFData",
    //     (response) => {
    //         TFList = response;
    //     }
    // );

    let dataset1 = [791684, 155543, 155138, 620122];
    var svg1 = d3.select("#svg1"),
        margin = 100,
        width = svg1.attr("width") - margin,
        height = svg1.attr("height") - margin
    var xScale = d3.scaleBand().range([0, width]).padding(0.5),
        yScale = d3.scaleLinear().range([height, 0]);
    xScale.domain(dataset1);
    yScale.domain([0, 1000000]);
    svg1.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScale).tickFormat(function (d) { return d; }));
    svg1.append("g").call(d3.axisLeft(yScale).tickFormat(function (d) { return d; }).ticks(4));
    svg1.selectAll(".bar").data(dataset1).enter().append("rect")
    svg1.selectAll(".bar").data(dataset1).enter().append("rect").attr("class", "bar").attr("x", function (d) { return xScale(d); }).attr("y", function (d) { return yScale(d); }).attr("width", xScale.bandwidth()).attr("height", function (d) { return height - yScale(d); });

    let dataset2 = [12592, 6006, 7846, 17184];
    var svg2 = d3.select("#svg2"),
        margin = 100,
        width = svg2.attr("width") - margin,
        height = svg2.attr("height") - margin
    var xScale = d3.scaleBand().range([0, width]).padding(0.5),
        yScale = d3.scaleLinear().range([height, 0]);
    xScale.domain(dataset2);
    yScale.domain([0, 20000]);
    svg2.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScale).tickFormat(function (d) { return d; }));
    svg2.append("g").call(d3.axisLeft(yScale).tickFormat(function (d) { return d; }).ticks(4));
    svg2.selectAll(".bar").data(dataset2).enter().append("rect")
    svg2.selectAll(".bar").data(dataset2).enter().append("rect").attr("class", "bar").attr("x", function (d) { return xScale(d); }).attr("y", function (d) { return yScale(d); }).attr("width", xScale.bandwidth()).attr("height", function (d) { return height - yScale(d); });

    let dataset3 = [-0.023295940420597638, - 0.021389721104267657, - 0.0676245358910891, - 0.15207193434829655];
    var svg3 = d3.select("#svg3"),
        margin = 100,
        width = svg3.attr("width") - margin,
        height = svg3.attr("height") - margin
    var xScale = d3.scaleBand().range([0, width]).padding(0.5),
        yScale = d3.scaleLinear().range([height, 0]);
    xScale.domain(dataset3);
    yScale.domain([-.5, .5]);
    svg3.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScale).tickFormat(function (d) { return d; }));
    svg3.append("g").call(d3.axisLeft(yScale).tickFormat(function (d) { return d; }).ticks(4));
    svg3.selectAll(".bar").data(dataset3).enter().append("rect")
    svg3.selectAll(".bar").data(dataset3).enter().append("rect").attr("class", "bar").attr("x", function (d) { return xScale(d); }).attr("y", function (d) { return yScale(d); }).attr("width", xScale.bandwidth()).attr("height", function (d) { return height - yScale(d); });

    $.get(
        "/passCloudList",
        (response) => {
            cloudTfBibList = response[0];
            cloudTfQurList = response[1];
            cloudTfBagList = response[2];
            cloudTfVedList = response[3];
            cloudListTFIDF = response[4];
            cloudListTFIDFInv = response[5];
            // WordCloud.minFontSize = "15px";
            WordCloud(document.getElementById('canvas1'), { list: cloudTfBibList });
            WordCloud(document.getElementById('canvas2'), { list: cloudTfQurList });
            WordCloud(document.getElementById('canvas3'), { list: cloudTfBagList });
            WordCloud(document.getElementById('canvas4'), { list: cloudTfVedList });
            WordCloud(document.getElementById('canvas5'), { list: cloudListTFIDF });
            WordCloud(document.getElementById('canvas6'), { list: cloudListTFIDFInv });
        }
    );

}