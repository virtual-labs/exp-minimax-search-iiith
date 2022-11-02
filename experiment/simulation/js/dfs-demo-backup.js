var nodes = null;
var edges = null;
var network = null;

var DIR = "img/refresh-cl/";
var LENGTH_MAIN = 150;
var LENGTH_SUB = 50;

function svgImg(states) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
        '<rect width="300" height="300" fill="#ffffff" stroke-width="0" stroke="#ffffff" ></rect>' +
        '<foreignObject x="15" y="10" width="100%" height="100%">' +
        '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
        '<table style="border-collapse: collapse;border-style: hidden;">' +
        '<tr>' +
        '<td style="border: 1px solid black;">' + states[0] + '</td>' +
        '<td style="border: 1px solid black;">' + states[1] + '</td>' +
        '<td style="border: 1px solid black;">' + states[2] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 1px solid black;">' + states[3] + '</td>' +
        '<td style="border: 1px solid black;">' + states[4] + '</td>' +
        '<td style="border: 1px solid black;">' + states[5] + '</td>' +
        "</tr>" +
        "<tr>" +
        '<td style="border: 1px solid black;">' + states[6] + '</td>' +
        '<td style="border: 1px solid black;">' + states[7] + '</td>' +
        '<td style="border: 1px solid black;">' + states[8] + '</td>' +
        "</tr>" +
        "</table>" +
        "</div>" +
        "</foreignObject>" +
        "</svg>";

    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

    return url;
}

var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
    '<rect width="100" height="100" fill="#ffffff" stroke-width="0" stroke="#ffffff" ></rect>' +
    '<foreignObject x="15" y="10" width="100%" height="100%">' +
    '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
    '<table style="border-collapse: collapse;border-style: hidden;">' +
    '<tr>' +
    '<td style="border: 1px solid black;">' + 'O' + '</td>' +
    '<td style="border: 1px solid black;"> </td>' +
    '<td style="border: 1px solid black;">X</td>' +
    "</tr>" +
    "<tr>" +
    '<td style="border: 1px solid black;">X</td>' +
    '<td style="border: 1px solid black;"> </td>' +
    '<td style="border: 1px solid black;"> </td>' +
    "</tr>" +
    "<tr>" +
    '<td style="border: 1px solid black;">X</td>' +
    '<td style="border: 1px solid black;">O</td>' +
    '<td style="border: 1px solid black;">O</td>' +
    "</tr>" +
    "</table>" +
    "</div>" +
    "</foreignObject>" +
    "</svg>";

var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

// Called when the Visualization API is loaded.
function draw() {
    // Create a data table with nodes.
    nodes = [];

    // Create a data table with links.
    edges = [];

    nodes.push({ id: 1, level: 0, image: svgImg(['O', ' ', 'X', 'X', ' ', ' ', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 2, level: 1, image: svgImg(['O', ' ', 'X', 'X', 'X', ' ', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 3, level: 1, image: svgImg(['O', 'X', 'X', 'X', ' ', ' ', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 4, level: 1, image: svgImg(['O', ' ', 'X', 'X', ' ', 'X', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 5, level: 2, image: svgImg(['O', 'X', 'X', 'X', 'O', ' ', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 6, level: 2, image: svgImg(['O', 'X', 'X', 'X', ' ', 'O', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 7, level: 2, image: svgImg(['O', ' ', 'X', 'X', 'O', 'X', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 8, level: 2, image: svgImg(['O', 'O', 'X', 'X', ' ', 'X', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 9, level: 3, image: svgImg(['O', 'X', 'X', 'X', 'X', 'O', 'X', 'O', 'O']), shape: "image" });
    nodes.push({ id: 10, level: 3, image: svgImg(['O', 'O', 'X', 'X', 'X', 'X', 'X', 'O', 'O']), shape: "image" });
    edges.push({ from: 1, to: 2 });
    edges.push({ from: 1, to: 3 });
    edges.push({ from: 1, to: 4 });
    edges.push({ from: 3, to: 5 });
    edges.push({ from: 3, to: 6 });
    edges.push({ from: 4, to: 7 });
    edges.push({ from: 4, to: 8 });
    edges.push({ from: 6, to: 9 });
    edges.push({ from: 8, to: 10 });

    nodes.push({ id: 11, level: 0 });
    nodes.push({ id: 12, level: 1 });
    nodes.push({ id: 13, level: 1 });
    nodes.push({ id: 14, level: 1 });
    nodes.push({ id: 15, level: 2 });
    nodes.push({ id: 16, level: 2 });
    nodes.push({ id: 17, level: 2 });
    nodes.push({ id: 18, level: 2 });
    nodes.push({ id: 19, level: 3 });
    nodes.push({ id: 20, level: 3 });
    edges.push({ from: 11, to: 12, length: 1 });
    edges.push({ from: 11, to: 13, length: 1 });
    edges.push({ from: 11, to: 14, length: 1 });
    edges.push({ from: 13, to: 15 });
    edges.push({ from: 13, to: 16 });
    edges.push({ from: 14, to: 17 });
    edges.push({ from: 14, to: 18 });
    edges.push({ from: 16, to: 19 });
    edges.push({ from: 18, to: 20 });


    // create a network
    var container = document.getElementById("graph");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        layout: {
            hierarchical: {
                direction: "UD",
            },
        }
    };
    network = new vis.Network(container, data, options);
    network.setOptions({
        clickToUse: true,
        nodes: {
            font: { color: 'black' },
            shape: "circle",
            color: {
                border: "#98CB3B",
                background: "#ffffff",
                highlight: {
                    border: "#98CB3B",
                    background: "#ffffff"
                },
                hover: {
                    border: "#98CB3B",
                    background: "#ffffff",
                }
            }
        },
        interaction: {
            dragView: false,
            zoomView: false,
            selectConnectedEdges: false,
            hover: true,
            hoverConnectedEdges: false,
            keyboard: {
                enabled: true,
                bindToWindow: true
            },
            navigationButtons: true,
            zoomView: false
        },
        physics: {
            enabled: false,
            stabilization: false
        },
        edges: {
            scaling: {
                min: 1,
                max: 3,
                label: {
                    enabled: true,
                    min: 20,
                    max: 20
                }
            },
            hoverWidth: 0,
            value: 1,
            selectionWidth: 0,
            font: { background: 'white' },
            width: 2,
            labelHighlightBold: false,
            color: {
                inherit: false,
                color: "#808080",
                opacity: 2.0
            },
            chosen: {
                inherit: false
            },
            arrows: {
                to: { enabled: true, scaleFactor: 1, type: 'arrow' },
                middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
                from: { enabled: false, scaleFactor: 1, type: 'arrow' }
            },
            chosen: {
            },
            physics: false
        }
    });
}

window.addEventListener("load", () => {
    draw();
});
