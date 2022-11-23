window.onload = function () {

    $.get(
        "/passWCData",
        (res) => {
            console.log(res);
            makeBarChart(`svg1`, res[0], [0, 1000000]);
            makeBarChart(`svg2`, res[1], [0, 20000]);
        }
    );


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

    // $.get(
    //     "/passSentimentData",
    //     (res) => {
    //         console.log(res);
    //         makeBarChart(`svg1`, res[0], [0, 1000000]);
    //         makeBarChart(`svg2`, res[1], [0, 20000]);
    //     }
    // );

    makeBarChart(`svg3`, [-0.023295940420597638, - 0.021389721104267657, - 0.0676245358910891, - 0.15207193434829655], [-.5, .5]);

    function makeBarChart(id, data, domain) {
        var id = d3.select(`#${id}`),
            // set margin
            margin = 100,
            width = id.attr("width") - margin,
            height = id.attr("height") - margin
        // set scale
        var xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);
        // set domain
        xScale.domain(data);
        yScale.domain(domain);
        // format axis
        id.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale).tickFormat(function (d) {
                return d;
            })
            );
        id.append("g")
            .call(d3.axisLeft(yScale).tickFormat(function (d) {
                return d;
            }).ticks(4));
        // create bars
        id.selectAll(".bar")
            .data(data)
            .enter().append("rect")
        id.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return xScale(d); })
            .attr("y", function (d) { return yScale(d); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) {
                return height - yScale(d);
            });
    }
}
