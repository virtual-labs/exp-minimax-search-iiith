function resetedge(edgeID) {
    if (edgeID) {
        var clickedEdge = edges.get(edgeID);
        clickedEdge.color = {
            color: '#808080',
            highlight: '#808080',
            highlightwidth: 0
        };
        clickedEdge.width = 2.0;
        clickedEdge.selectionWidth = 0;
        edges.update(clickedEdge);
    }
}
function resetnode(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: "#98CB3B",
            background: "white"
        }
        clickedNode.font = {
            color: "black"
        }
        nodes.update(clickedNode);
    }
}
function regen() {
    location.reload();
}

class dfs_class {
    constructor() {
        this.dfsres = [];
        this.curPos = 0;
        this.start = 0;
        this.src = 1;
    };
};
addedEdges = 0;
let dfs_demo = new dfs_class();
var graph_chosen = Math.round(Math.random());
var nodes = new vis.DataSet(a[graph_chosen][0]);
var edges = new vis.DataSet(a[graph_chosen][1]);
graphs[graph_chosen]();
var container = document.getElementById('graph');
var data = {
    nodes: nodes,
    edges: edges
};
var graph_options = {
    layout: {
        hierarchical: {
            direction: "UD",
        },
    }
}
var graph = new vis.Network(container, data, graph_options);
handlers();
graph.setOptions({
    clickToUse: true,
    nodes: {
        borderWidth: 2,
        heightConstraint: {
            minimum: 10,
        },
        borderWidthSelected: 1,
        chosen: false,
        font: { color: 'black' },
        shape: "circle",
        scaling: {
            label: {
                enabled: true,
                min: 35,
                max: 35
            },
        },
        value: 1,
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
var networkCanvas = document.getElementById("graph").getElementsByTagName("canvas")[0];
function changeCursor(newCursorStyle) {
    networkCanvas.style.cursor = newCursorStyle;
}
function changeEventCursor(eventName, cursorType) {
    graph.on(eventName, function () {
        changeCursor(cursorType);
    });
}
graph.on('hoverNode', function () {
    changeCursor('pointer');
});
graph.on('blurNode', function () {
    changeCursor('default');
});
graph.on('hoverEdge', function () {
    changeCursor('default');
});
graph.on('blurEdge', function () {
    changeCursor('default');
});
graph.on('dragStart', function () {
    changeCursor('grabbing');
});
graph.on('dragging', function () {
    changeCursor('grabbing');
});
graph.on('dragEnd', function () {
    changeCursor('grab');
});
function clickednode(nodeID) {//green
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: '#3BFB11',
            background: "#98CB3B"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednode1(nodeID) {//blue
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: "black",
            background: "#2C9AD1"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednode2(nodeID) {//light grey
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: '#70746F',
            background: "grey"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednode3(nodeID) {//black
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: '#0C0D0C',
            background: "black"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednodeMinimizer(nodeIDs) {
    for (var i = 0; i < nodeIDs.length; i++) {
        nodeID = nodeIDs[i];
        if (nodeID) {
            var clickedNode = nodes.get(nodeID);
            clickedNode.color = {
                border: 'black',
                background: "#CCCCFF"
            }
            clickedNode.font = {
                color: "black"
            }
            nodes.update(clickedNode);
        }
    }
}

function clickednodeMaximizer(nodeIDs) {
    for (var i = 0; i < nodeIDs.length; i++) {
        nodeID = nodeIDs[i];
        if (nodeID) {
            var clickedNode = nodes.get(nodeID);
            clickedNode.color = {
                border: 'black',
                background: "#FFCCCB"
            }
            clickedNode.font = {
                color: "black"
            }
            nodes.update(clickedNode);
        }
    }
}

function clickednodeMaxSelect(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: 'red',
        }
        nodes.update(clickedNode);
    }
}

function clickednodeMinSelect(nodeID) {
    console.log(nodeID);
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode);
        clickedNode.color = {
            border: 'purple',
        }
        nodes.update(clickedNode);
    }
}

function clickednodeLabelDef(nodeID, label) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        var tempLabel;
        if (label >= 0 && label < 10) {
            tempLabel = ' ' + label.toString();
        }
        else {
            tempLabel = label.toString();
        }

        clickedNode.label = tempLabel;
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickededge1(edgeID) {
    if (edgeID) {
        var clickedEdge = edges.get(edgeID);
        clickedEdge.color = {
            color: 'black',
            highlight: 'black'
        }
        edges.update(clickedEdge);
    }
}

function clickededgeFinal(edgeID) {
    if (edgeID) {
        var clickedEdge = edges.get(edgeID);
        clickedEdge.color = {
            color: 'green',
            highlight: 'green',
            scaling: {
                min: 20,
                max: 20
            },
        }
        edges.update(clickedEdge);
    }
}

function clickednodelabel(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        nodes.update(clickedNode);
        return clickedNode.label;
    }
}
if (dfs_demo.start == 0) {
    document.getElementById("pause").disabled = true;
    document.getElementById("pause").style.backgroundColor = "grey";
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.backgroundColor = "grey";
    document.getElementById("reset").style.cursor = "not-allowed";
    document.getElementById("pause").style.cursor = "not-allowed";
}
graph.on("click", function (params) {
    dfs_demo.resetter = 0;
    console.log(params);
    // if (!params['nodes']['0'] && !params['edges']['0']) { return; }
    // if (params['edges']['0']) { return; }
    // if (addedEdges == a[0][0].length - 1) { return; }
    // if (dfs_demo.first == 0) {
    //     dfs_demo.src1 = params['nodes']['0'];
    //     dfs_demo.src = clickednodeid(params['nodes']['0']);
    //     if (dfs_demo.befstart == null) {
    //         dfs_demo.befstart = params['nodes']['0'];
    //         clickednode1(dfs_demo.befstart);
    //     }
    //     else {
    //         resetnode(dfs_demo.befstart);
    //         dfs_demo.befstart = params['nodes']['0'];
    //         clickednode1(dfs_demo.befstart);
    //     }
    //     document.getElementById("ins").innerHTML = '<b>' + dfs_demo.src + '</b>' + " is selected as source node <br>Click on <b>Start</b> to start the DFS Demo with the source node" + '<b>' + dfs_demo.src + '</b>'
    // }
    dfs_demo.src = 1;
});
function clicking() {
    if (dfs_demo.curPos < dfs_demo.dfsres.length) {
        if (!dfs_demo.dfsres[dfs_demo.curPos].wait) {
            if (dfs_demo.dfsres[dfs_demo.curPos].forward) {
                clickednode(dfs_demo.dfsres[dfs_demo.curPos].st);
                clickededge1(dfs_demo.dfsres[dfs_demo.curPos].edge_id);
                clickednode2(dfs_demo.dfsres[dfs_demo.curPos].end);
            }
            else {
                clickednode3(dfs_demo.dfsres[dfs_demo.curPos].st);
                clickednode2(dfs_demo.dfsres[dfs_demo.curPos].end);
            }
        }
        else {
            if (dfs_demo.dfsres[dfs_demo.curPos].type == "maximizer") {
                var nodesForMaximizer = []
                for (var i = 0; i < dfs_demo.dfsres[dfs_demo.curPos].childNodes.length; i++) {
                    nodesForMaximizer.push(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node);
                    // if (clickednodelabel(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node) > mx_node_val) {
                    //     mx_node = dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node;
                    //     mx_node_val = clickednodelabel(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node);
                    // }
                }
                clickednodeMaximizer(nodesForMaximizer);

            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "minimizer") {
                var nodesForMinimizer = []
                for (var i = 0; i < dfs_demo.dfsres[dfs_demo.curPos].childNodes.length; i++) {
                    nodesForMinimizer.push(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node);
                    // if (clickednodelabel(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node) < mn_node_val) {
                    //     mn_node = dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node;
                    //     mn_node_val = clickednodelabel(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node);
                    // }
                }
                clickednodeMinimizer(nodesForMinimizer);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "minSelect") {
                clickednodeMinSelect(dfs_demo.dfsres[dfs_demo.curPos].curNode);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "maxSelect") {
                clickednodeMaxSelect(dfs_demo.dfsres[dfs_demo.curPos].curNode);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "nodeValDefineMax") {
                clickednodeLabelDef(dfs_demo.dfsres[dfs_demo.curPos].curNode, dfs_demo.dfsres[dfs_demo.curPos].nodeVal);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "nodeValDefineMin") {
                clickednodeLabelDef(dfs_demo.dfsres[dfs_demo.curPos].curNode, dfs_demo.dfsres[dfs_demo.curPos].nodeVal);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "finalEdgeDisp") {
                clickededgeFinal(dfs_demo.dfsres[dfs_demo.curPos].edge_id);
            }
        }
        dfs_demo.curPos++;
    }
}
function reset() {
    for (i = 0; i < dfs_demo.res.length; i++) {
        resetedge(dfs_demo.res[i].id);
        resetnode(dfs_demo.res[i].node);
    }
    resetnode(dfs_demo.src1);
    dfs_demo.resetter = 1;
    dfs_demo.dfsres = [];
    dfs_demo.onpause = 0;
    dfs_demo.res = [];
    dfs_demo.prev = -1;
    dfs_demo.befstart = null;
    dfs_demo.src1 = 0;
    dfs_demo.first = 0;
    dfs_demo.start = 0;
    dfs_demo.dfscountarr.fill(0);
    dfs_demo.count = 0;
    g.dfsvisited.fill(0);
    g.dfspar = [];
    g.dfsres = [];
    g.dfscount = 0;
    clearInterval(dfs_demo.time);
    document.getElementById("pause").value = "Pause";
    document.getElementById("start").value = "Start";
    document.getElementById("ins").innerHTML = "Execution is reset";
    document.getElementById("interval").value = 1500;
    clearInterval(dfs_demo.time);
    document.getElementById("pause").disabled = true;
    document.getElementById("pause").style.backgroundColor = "grey";
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.backgroundColor = "grey";
    document.getElementById("reset").style.cursor = "not-allowed";
    document.getElementById("pause").style.cursor = "not-allowed";
}
function start() {
    if (dfs_demo.start == 0) {
        document.getElementById("ins").innerHTML = "DFS Demo started on node " + "<b>" + dfs_demo.src + "</b>";
        g.dfs(dfs_demo.src, dfs_demo.src, true);
        dfs_demo.dfsres = g.dfsRes;
        console.log(dfs_demo.dfsres);
        // document.getElementById("start").value = "Next";
        // document.getElementById("pause").disabled = false;
        // document.getElementById("pause").style.backgroundColor = "#288ec8";
        // document.getElementById("reset").disabled = false;
        // document.getElementById("reset").style.backgroundColor = "#288ec8";
        // document.getElementById("reset").style.cursor = "pointer";
        // document.getElementById("pause").style.cursor = "pointer";
        dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
    }
    else if (document.getElementById("start").value == "Next") {
        clearInterval(dfs_demo.time);
        if (dfs_demo.onpause == 1) {
            clicking();
        }
        else {
            clicking();
            dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
        }
    }
    else {
        document.getElementById("start").disabled = true;
        document.getElementById("start").style.backgroundColor = "grey";
    }
}
function pause() {
    if (dfs_demo.prev == -1) {
        dfs_demo.prev = document.getElementById("interval").value;
        if (dfs_demo.time != 0) {
            clearInterval(dfs_demo.time);
        }
        dfs_demo.onpause = 1;
        document.getElementById("pause").value = "Play";
    }
    else {
        dfs_demo.prev = -1;
        dfs_demo.onpause = 0;
        clearInterval(dfs_demo.time);
        dfs_demo.time = setInterval(clicking, 5000 - document.getElementById("interval").value);
        document.getElementById("pause").value = "Pause";
    }
}
function change_interval() {
    if (dfs_demo.time != 0) { clearInterval(dfs_demo.time); }
    if (document.getElementById("interval").value != 100) {
        clearInterval(dfs_demo.time);
        dfs_demo.time = setInterval(clicking, 5000 - document.getElementById("interval").value);
        document.getElementById("pause").style.backgroundColor = "#288ec8";
    }
    else document.getElementById("pause").style.backgroundColor = "grey";
}
function handlers() {
    document.getElementById("reset").onclick = function () { reset(); };
    document.getElementById("New_graph").onclick = function () { regen(); };
    document.getElementById("start").onclick = function () { start(); };
    document.getElementById("pause").onclick = function () { pause(); };
};
