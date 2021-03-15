var mult = 3;   //Used to scale the bars to fit
var max = 100;  //Max value possible, Helps with the borders the borders
var pi = Math.PI;
var cornerRadius = 2;
var borderWidth = 2;
var idNumber = 1;   //Starter value


//Handles number input
d3.select("#buttonSize").on("input", changeSize)

function changeSize() {
  idNumber = this.value;
  grabData(idNumber);
}

//Setup
var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height"),
  g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var categories = [
    "INTEGRATIVE",
    "EXPERIMENTAL",
    "FLEXIBLE",
    "RELIABLE",
    "METHODICAL",
    "EXPERTISE",
    "CURIOUS",
    "CONNECTIVE",
    "CURATORIAL",
    "GENERATIVE",
    ]

//Creating initial arrays
var percents = new Array(10).fill(1*mult);
var percentsName = ["Tester"];

//Helper function for borders
function makeBorder(val, width) {
  console.log("In make border")
  var arc = d3.arc()
    .innerRadius(val)
    .outerRadius(val+width)
    .cornerRadius(cornerRadius)
    .startAngle(0)
    .endAngle(2*pi);
  return arc();
}


var scale = svg.append('g')
        .attr('class', 'outerScale')
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

//Could the next 100 lines or so be better done with an array of values?
//The answer is surely yes.

svg.select(".outerScale")
    .append("path")
    .attr("d",
    function() {
        return makeBorder(max*mult, borderWidth);
    })
    .attr("id", "outerScale");

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(10*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(20*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(30*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(40*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(50*mult, borderWidth*2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(60*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(70*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(80*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("path")
    .attr("d",
        function() {
            return makeBorder(90*mult, borderWidth/2);
    });

svg.select(".outerScale")
    .append("rect")
   .attr("id","myRect")
   .attr("fill","black")
   .attr("width",max*mult)
   .attr("height",5)
   .attr("x",-max*mult)
   .attr("y",-2.5)
   .attr("transform","rotate("+18+")");

svg.select(".outerScale")
    .append("rect")
   .attr("id","myRect")
   .attr("fill","black")
   .attr("width",max*mult)
   .attr("height",5)
   .attr("x",-max*mult)
   .attr("y",-2.5)
   .attr("transform","rotate("+162+")");

svg.select(".outerScale")
    .append("rect")
   .attr("id","myRect")
   .attr("fill","black")
   .attr("width",max*mult)
   .attr("height",5)
   .attr("x",-max*mult)
   .attr("y",-2.5)
   .attr("transform","rotate("+270+")");


scale.selectAll(".labels")
    .data(categories)
    .enter()
    .append("text")
    .attr("dy", -10)
    .attr('class', 'labels')
    .append("textPath")
    .attr("xlink:href", "#outerScale")
    .style("text-anchor","middle")
    .text(function(d, i) {
        return categories[i];
    })
    .attr("startOffset",function(d, i) {
        return 2.5+5*(i) + "%"
    });

svg.selectAll(".names")
    .data(percentsName)
    .enter()
    .append("text")
    .attr('class', 'names')
    .attr("text-anchor", "start")
    .attr("x", 8)
    .attr("y", 28)
    .attr("font-size", "20px")
    .text("StartFiller")


function updateRadar() {

    console.log(percents)
    makeColorScale(percents)

    var colorScale = d3.scaleThreshold()
    .domain(makeColorScale(percents))
    .range(['red', 'yellow', 'green']);

    var areas = g.selectAll("path")
                .data(percents)

    areas.enter()
    .append("path")

    areas.exit().remove()

    areas.attr("d", function(d, i) {
          return deriveArcs(d, i);
        })
        .style('fill', function(d){
            return colorScale(d)
        })



    var names = svg.selectAll(".names")
    .data(percentsName)

    names.enter()
    .append("text")

    names.exit().remove()

    names.text(percentsName);


console.log("Ready to Download!")

}

function makeColorScale(percents) {
    per = [...percents]
    per = per.sort(compareDecimals);
    console.log(per)
    console.log(per[3])
    console.log(per[7])
    return [per[2]+0.01, per[7]];
}

function compareDecimals(a, b) {
    if (a === b)
         return 0;

    return a < b ? -1 : 1;
}


function deriveArcs(val, i) {
  var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(val)
    .cornerRadius(cornerRadius)
    .startAngle(pi*0.2*i)
    .endAngle(pi*0.2*i+0.2*pi-0.01);
  return arc();
}

function grabData(idNumber) {

//CHOOSE ONE
//ManagerData
//RegionsPercentile
d3.csv('RegionsPercentile.csv').then(function(dataset) {
    //dataset = dataset.filter(function(d) { return d.RegionsIDCode == "R_3IRBpVDS3ltbdcw"; })

    dataset = dataset[idNumber]

    console.log(dataset["RegionsIDCode"])

percentsName = dataset["RegionsIDCode"]

var percent = [
    dataset["Percentile_Integrat"]*mult,
    dataset["Percentile_Experiment"]*mult,
    dataset["Percentile_Flexible"]*mult,
    dataset["Percentile_Reliable"]*mult,
    dataset["Percentile_Method"]*mult,
    dataset["Percentile_Expert"]*mult,
    dataset["Percentile_Curious"]*mult,
    dataset["Percentile_Connective"]*mult,
    dataset["Percentile_Curative"]*mult,
    dataset["Percentile_Generative"]*mult
    ]


    percents = percent


    updateRadar();
});

}


//Saver code is below
//No idea how the saver works http://bl.ocks.org/Rokotyan/0556f8facbaf344507cdc45dc3622177

// Set-up the export button
d3.select('#saveButton').on('click', function(){
    saveClick();
});

function saveClick() {
    var svgString = getSVGString(svg.node());
    svgString2Image( svgString, 2*width, 2*height, 'png', save ); // passes Blob and filesize String to the callback

    function save( dataBlob, filesize ){
        saveAs( dataBlob, percentsName.concat('.png') ); // FileSaver.js function
    }
}

// Below are the functions that handle actual exporting:
// getSVGString ( svgNode ) and svgString2Image( svgString, width, height, format, callback )
function getSVGString( svgNode ) {
    svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
    var cssStyleText = getCSSStyles( svgNode );
    appendCSS( cssStyleText, svgNode );

    var serializer = new XMLSerializer();
    var svgString = serializer.serializeToString(svgNode);
    svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
    svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

    return svgString;

    function getCSSStyles( parentElement ) {
        var selectorTextArr = [];

        // Add Parent element Id and Classes to the list
        selectorTextArr.push( '#'+parentElement.id );
        for (var c = 0; c < parentElement.classList.length; c++)
                if ( !contains('.'+parentElement.classList[c], selectorTextArr) )
                    selectorTextArr.push( '.'+parentElement.classList[c] );

        // Add Children element Ids and Classes to the list
        var nodes = parentElement.getElementsByTagName("*");
        for (var i = 0; i < nodes.length; i++) {
            var id = nodes[i].id;
            if ( !contains('#'+id, selectorTextArr) )
                selectorTextArr.push( '#'+id );

            var classes = nodes[i].classList;
            for (var c = 0; c < classes.length; c++)
                if ( !contains('.'+classes[c], selectorTextArr) )
                    selectorTextArr.push( '.'+classes[c] );
        }

        // Extract CSS Rules
        var extractedCSSText = "";
        for (var i = 0; i < document.styleSheets.length; i++) {
            var s = document.styleSheets[i];

            try {
                if(!s.cssRules) continue;
            } catch( e ) {
                    if(e.name !== 'SecurityError') throw e; // for Firefox
                    continue;
                }

            var cssRules = s.cssRules;
            for (var r = 0; r < cssRules.length; r++) {
                if ( contains( cssRules[r].selectorText, selectorTextArr ) )
                    extractedCSSText += cssRules[r].cssText;
            }
        }


        return extractedCSSText;

        function contains(str,arr) {
            return arr.indexOf( str ) === -1 ? false : true;
        }

    }

    function appendCSS( cssText, element ) {
        var styleElement = document.createElement("style");
        styleElement.setAttribute("type","text/css");
        styleElement.innerHTML = cssText;
        var refNode = element.hasChildNodes() ? element.children[0] : null;
        element.insertBefore( styleElement, refNode );
    }
}


function svgString2Image( svgString, width, height, format, callback ) {
    var format = format ? format : 'png';

    var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    var image = new Image();
    image.onload = function() {
        context.clearRect ( 0, 0, width, height );
        context.drawImage(image, 0, 0, width, height);

        canvas.toBlob( function(blob) {
            var filesize = Math.round( blob.length/1024 ) + ' KB';
            if ( callback ) callback( blob, filesize );
        });


    };

    image.src = imgsrc;
}


