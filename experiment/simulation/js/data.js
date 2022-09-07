var graphs = [
    function () {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4");
        g.addNode("5");
        g.addNode("6");
        g.addNode("7");
        g.addNode("8", 4);
        g.addNode("9", -1);
        g.addNode("10", 2);
        g.addNode("11", 7);
        g.addNode("12", -4);
        g.addNode("13", -2);
        g.addNode("14", -1);
        g.addNode("15", 5);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("2", "5", 25);
        g.addEdge("3", "6", 36);
        g.addEdge("3", "7", 37);
        g.addEdge("4", "8", 48);
        g.addEdge("4", "9", 49);
        g.addEdge("5", "10", 510);
        g.addEdge("5", "11", 511);
        g.addEdge("6", "12", 612);
        g.addEdge("6", "13", 613);
        g.addEdge("7", "14", 714);
        g.addEdge("7", "15", 715);


    },
    function () {
        g.addNode("1");
        g.addNode("2");
        g.addNode("3");
        g.addNode("4", 3);
        g.addNode("5");
        g.addNode("6", 5);
        g.addNode("7", -4);
        g.addNode("8", 7);
        g.addEdge("1", "2", 12);
        g.addEdge("1", "3", 13);
        g.addEdge("2", "4", 24);
        g.addEdge("3", "5", 35);
        g.addEdge("3", "6", 36);
        g.addEdge("5", "7", 57);
        g.addEdge("5", "8", 58);
    }

];

var a = [
    [
        [
            { id: 1, label: '  ', level: 0 },
            { id: 2, label: '  ', level: 1 },
            { id: 3, label: '  ', level: 1 },
            { id: 4, label: '  ', level: 2 },
            { id: 5, label: '  ', level: 2 },
            { id: 6, label: '  ', level: 2 },
            { id: 7, label: '  ', level: 2 },
            { id: 8, label: ' 4', level: 3 },
            { id: 9, label: '-1', level: 3 },
            { id: 10, label: ' 2', level: 3 },
            { id: 11, label: ' 7', level: 3 },
            { id: 12, label: '-4', level: 3 },
            { id: 13, label: '-2', level: 3 },
            { id: 14, label: '-1', level: 3 },
            { id: 15, label: ' 5', level: 3 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 2, to: 4, id: "24" },
            { from: 2, to: 5, id: "25" },
            { from: 3, to: 6, id: "36" },
            { from: 3, to: 7, id: "37" },
            { from: 4, to: 8, id: "48" },
            { from: 4, to: 9, id: "49" },
            { from: 5, to: 10, id: "510" },
            { from: 5, to: 11, id: "511" },
            { from: 6, to: 12, id: "612" },
            { from: 6, to: 13, id: "613" },
            { from: 7, to: 14, id: "714" },
            { from: 7, to: 15, id: "715" },
        ]
    ],
    [
        [
            { id: 1, label: '  ', level: 0 },
            { id: 2, label: '  ', level: 1 },
            { id: 3, label: '  ', level: 1 },
            { id: 4, label: ' 3', level: 2 },
            { id: 5, label: '  ', level: 2 },
            { id: 6, label: ' 5', level: 2 },
            { id: 7, label: '-4', level: 3 },
            { id: 8, label: ' 7', level: 3 },
        ],
        [
            { from: 1, to: 2, id: "12" },
            { from: 1, to: 3, id: "13" },
            { from: 2, to: 4, id: "24" },
            { from: 3, to: 5, id: "35" },
            { from: 3, to: 6, id: "36" },
            { from: 5, to: 7, id: "57" },
            { from: 5, to: 8, id: "58" },
        ]
    ]
];
