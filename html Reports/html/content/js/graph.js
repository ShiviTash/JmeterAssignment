/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 650.0, "minX": 0.0, "maxY": 1373.0, "series": [{"data": [[0.0, 650.0], [0.1, 650.0], [0.2, 650.0], [0.3, 650.0], [0.4, 650.0], [0.5, 650.0], [0.6, 650.0], [0.7, 650.0], [0.8, 650.0], [0.9, 650.0], [1.0, 679.0], [1.1, 679.0], [1.2, 679.0], [1.3, 679.0], [1.4, 679.0], [1.5, 679.0], [1.6, 679.0], [1.7, 679.0], [1.8, 679.0], [1.9, 679.0], [2.0, 726.0], [2.1, 726.0], [2.2, 726.0], [2.3, 726.0], [2.4, 726.0], [2.5, 726.0], [2.6, 726.0], [2.7, 726.0], [2.8, 726.0], [2.9, 726.0], [3.0, 803.0], [3.1, 803.0], [3.2, 803.0], [3.3, 803.0], [3.4, 803.0], [3.5, 803.0], [3.6, 803.0], [3.7, 803.0], [3.8, 803.0], [3.9, 803.0], [4.0, 829.0], [4.1, 829.0], [4.2, 829.0], [4.3, 829.0], [4.4, 829.0], [4.5, 829.0], [4.6, 829.0], [4.7, 829.0], [4.8, 829.0], [4.9, 829.0], [5.0, 859.0], [5.1, 859.0], [5.2, 859.0], [5.3, 859.0], [5.4, 859.0], [5.5, 859.0], [5.6, 859.0], [5.7, 859.0], [5.8, 859.0], [5.9, 859.0], [6.0, 862.0], [6.1, 862.0], [6.2, 862.0], [6.3, 862.0], [6.4, 862.0], [6.5, 862.0], [6.6, 862.0], [6.7, 862.0], [6.8, 862.0], [6.9, 862.0], [7.0, 874.0], [7.1, 874.0], [7.2, 874.0], [7.3, 874.0], [7.4, 874.0], [7.5, 874.0], [7.6, 874.0], [7.7, 874.0], [7.8, 874.0], [7.9, 874.0], [8.0, 884.0], [8.1, 884.0], [8.2, 884.0], [8.3, 884.0], [8.4, 884.0], [8.5, 884.0], [8.6, 884.0], [8.7, 884.0], [8.8, 884.0], [8.9, 884.0], [9.0, 927.0], [9.1, 927.0], [9.2, 927.0], [9.3, 927.0], [9.4, 927.0], [9.5, 927.0], [9.6, 927.0], [9.7, 927.0], [9.8, 927.0], [9.9, 927.0], [10.0, 932.0], [10.1, 932.0], [10.2, 932.0], [10.3, 932.0], [10.4, 932.0], [10.5, 932.0], [10.6, 932.0], [10.7, 932.0], [10.8, 932.0], [10.9, 932.0], [11.0, 940.0], [11.1, 940.0], [11.2, 940.0], [11.3, 940.0], [11.4, 940.0], [11.5, 940.0], [11.6, 940.0], [11.7, 940.0], [11.8, 940.0], [11.9, 940.0], [12.0, 948.0], [12.1, 948.0], [12.2, 948.0], [12.3, 948.0], [12.4, 948.0], [12.5, 948.0], [12.6, 948.0], [12.7, 948.0], [12.8, 948.0], [12.9, 948.0], [13.0, 952.0], [13.1, 952.0], [13.2, 952.0], [13.3, 952.0], [13.4, 952.0], [13.5, 952.0], [13.6, 952.0], [13.7, 952.0], [13.8, 952.0], [13.9, 952.0], [14.0, 968.0], [14.1, 968.0], [14.2, 968.0], [14.3, 968.0], [14.4, 968.0], [14.5, 968.0], [14.6, 968.0], [14.7, 968.0], [14.8, 968.0], [14.9, 968.0], [15.0, 970.0], [15.1, 970.0], [15.2, 970.0], [15.3, 970.0], [15.4, 970.0], [15.5, 970.0], [15.6, 970.0], [15.7, 970.0], [15.8, 970.0], [15.9, 970.0], [16.0, 980.0], [16.1, 980.0], [16.2, 980.0], [16.3, 980.0], [16.4, 980.0], [16.5, 980.0], [16.6, 980.0], [16.7, 980.0], [16.8, 980.0], [16.9, 980.0], [17.0, 983.0], [17.1, 983.0], [17.2, 983.0], [17.3, 983.0], [17.4, 983.0], [17.5, 983.0], [17.6, 983.0], [17.7, 983.0], [17.8, 983.0], [17.9, 983.0], [18.0, 986.0], [18.1, 986.0], [18.2, 986.0], [18.3, 986.0], [18.4, 986.0], [18.5, 986.0], [18.6, 986.0], [18.7, 986.0], [18.8, 986.0], [18.9, 986.0], [19.0, 996.0], [19.1, 996.0], [19.2, 996.0], [19.3, 996.0], [19.4, 996.0], [19.5, 996.0], [19.6, 996.0], [19.7, 996.0], [19.8, 996.0], [19.9, 996.0], [20.0, 1002.0], [20.1, 1002.0], [20.2, 1002.0], [20.3, 1002.0], [20.4, 1002.0], [20.5, 1002.0], [20.6, 1002.0], [20.7, 1002.0], [20.8, 1002.0], [20.9, 1002.0], [21.0, 1003.0], [21.1, 1003.0], [21.2, 1003.0], [21.3, 1003.0], [21.4, 1003.0], [21.5, 1003.0], [21.6, 1003.0], [21.7, 1003.0], [21.8, 1003.0], [21.9, 1003.0], [22.0, 1004.0], [22.1, 1004.0], [22.2, 1004.0], [22.3, 1004.0], [22.4, 1004.0], [22.5, 1004.0], [22.6, 1004.0], [22.7, 1004.0], [22.8, 1004.0], [22.9, 1004.0], [23.0, 1011.0], [23.1, 1011.0], [23.2, 1011.0], [23.3, 1011.0], [23.4, 1011.0], [23.5, 1011.0], [23.6, 1011.0], [23.7, 1011.0], [23.8, 1011.0], [23.9, 1011.0], [24.0, 1012.0], [24.1, 1012.0], [24.2, 1012.0], [24.3, 1012.0], [24.4, 1012.0], [24.5, 1012.0], [24.6, 1012.0], [24.7, 1012.0], [24.8, 1012.0], [24.9, 1012.0], [25.0, 1020.0], [25.1, 1020.0], [25.2, 1020.0], [25.3, 1020.0], [25.4, 1020.0], [25.5, 1020.0], [25.6, 1020.0], [25.7, 1020.0], [25.8, 1020.0], [25.9, 1020.0], [26.0, 1023.0], [26.1, 1023.0], [26.2, 1023.0], [26.3, 1023.0], [26.4, 1023.0], [26.5, 1023.0], [26.6, 1023.0], [26.7, 1023.0], [26.8, 1023.0], [26.9, 1023.0], [27.0, 1033.0], [27.1, 1033.0], [27.2, 1033.0], [27.3, 1033.0], [27.4, 1033.0], [27.5, 1033.0], [27.6, 1033.0], [27.7, 1033.0], [27.8, 1033.0], [27.9, 1033.0], [28.0, 1044.0], [28.1, 1044.0], [28.2, 1044.0], [28.3, 1044.0], [28.4, 1044.0], [28.5, 1044.0], [28.6, 1044.0], [28.7, 1044.0], [28.8, 1044.0], [28.9, 1044.0], [29.0, 1049.0], [29.1, 1049.0], [29.2, 1049.0], [29.3, 1049.0], [29.4, 1049.0], [29.5, 1049.0], [29.6, 1049.0], [29.7, 1049.0], [29.8, 1049.0], [29.9, 1049.0], [30.0, 1080.0], [30.1, 1080.0], [30.2, 1080.0], [30.3, 1080.0], [30.4, 1080.0], [30.5, 1080.0], [30.6, 1080.0], [30.7, 1080.0], [30.8, 1080.0], [30.9, 1080.0], [31.0, 1080.0], [31.1, 1080.0], [31.2, 1080.0], [31.3, 1080.0], [31.4, 1080.0], [31.5, 1080.0], [31.6, 1080.0], [31.7, 1080.0], [31.8, 1080.0], [31.9, 1080.0], [32.0, 1110.0], [32.1, 1110.0], [32.2, 1110.0], [32.3, 1110.0], [32.4, 1110.0], [32.5, 1110.0], [32.6, 1110.0], [32.7, 1110.0], [32.8, 1110.0], [32.9, 1110.0], [33.0, 1132.0], [33.1, 1132.0], [33.2, 1132.0], [33.3, 1132.0], [33.4, 1132.0], [33.5, 1132.0], [33.6, 1132.0], [33.7, 1132.0], [33.8, 1132.0], [33.9, 1132.0], [34.0, 1201.0], [34.1, 1201.0], [34.2, 1201.0], [34.3, 1201.0], [34.4, 1201.0], [34.5, 1201.0], [34.6, 1201.0], [34.7, 1201.0], [34.8, 1201.0], [34.9, 1201.0], [35.0, 1203.0], [35.1, 1203.0], [35.2, 1203.0], [35.3, 1203.0], [35.4, 1203.0], [35.5, 1203.0], [35.6, 1203.0], [35.7, 1203.0], [35.8, 1203.0], [35.9, 1203.0], [36.0, 1205.0], [36.1, 1205.0], [36.2, 1205.0], [36.3, 1205.0], [36.4, 1205.0], [36.5, 1205.0], [36.6, 1205.0], [36.7, 1205.0], [36.8, 1205.0], [36.9, 1205.0], [37.0, 1208.0], [37.1, 1208.0], [37.2, 1208.0], [37.3, 1208.0], [37.4, 1208.0], [37.5, 1208.0], [37.6, 1208.0], [37.7, 1208.0], [37.8, 1208.0], [37.9, 1208.0], [38.0, 1212.0], [38.1, 1212.0], [38.2, 1212.0], [38.3, 1212.0], [38.4, 1212.0], [38.5, 1212.0], [38.6, 1212.0], [38.7, 1212.0], [38.8, 1212.0], [38.9, 1212.0], [39.0, 1219.0], [39.1, 1219.0], [39.2, 1219.0], [39.3, 1219.0], [39.4, 1219.0], [39.5, 1219.0], [39.6, 1219.0], [39.7, 1219.0], [39.8, 1219.0], [39.9, 1219.0], [40.0, 1223.0], [40.1, 1223.0], [40.2, 1223.0], [40.3, 1223.0], [40.4, 1223.0], [40.5, 1223.0], [40.6, 1223.0], [40.7, 1223.0], [40.8, 1223.0], [40.9, 1223.0], [41.0, 1226.0], [41.1, 1226.0], [41.2, 1226.0], [41.3, 1226.0], [41.4, 1226.0], [41.5, 1226.0], [41.6, 1226.0], [41.7, 1226.0], [41.8, 1226.0], [41.9, 1226.0], [42.0, 1230.0], [42.1, 1230.0], [42.2, 1230.0], [42.3, 1230.0], [42.4, 1230.0], [42.5, 1230.0], [42.6, 1230.0], [42.7, 1230.0], [42.8, 1230.0], [42.9, 1230.0], [43.0, 1232.0], [43.1, 1232.0], [43.2, 1232.0], [43.3, 1232.0], [43.4, 1232.0], [43.5, 1232.0], [43.6, 1232.0], [43.7, 1232.0], [43.8, 1232.0], [43.9, 1232.0], [44.0, 1245.0], [44.1, 1245.0], [44.2, 1245.0], [44.3, 1245.0], [44.4, 1245.0], [44.5, 1245.0], [44.6, 1245.0], [44.7, 1245.0], [44.8, 1245.0], [44.9, 1245.0], [45.0, 1255.0], [45.1, 1255.0], [45.2, 1255.0], [45.3, 1255.0], [45.4, 1255.0], [45.5, 1255.0], [45.6, 1255.0], [45.7, 1255.0], [45.8, 1255.0], [45.9, 1255.0], [46.0, 1255.0], [46.1, 1255.0], [46.2, 1255.0], [46.3, 1255.0], [46.4, 1255.0], [46.5, 1255.0], [46.6, 1255.0], [46.7, 1255.0], [46.8, 1255.0], [46.9, 1255.0], [47.0, 1260.0], [47.1, 1260.0], [47.2, 1260.0], [47.3, 1260.0], [47.4, 1260.0], [47.5, 1260.0], [47.6, 1260.0], [47.7, 1260.0], [47.8, 1260.0], [47.9, 1260.0], [48.0, 1261.0], [48.1, 1261.0], [48.2, 1261.0], [48.3, 1261.0], [48.4, 1261.0], [48.5, 1261.0], [48.6, 1261.0], [48.7, 1261.0], [48.8, 1261.0], [48.9, 1261.0], [49.0, 1264.0], [49.1, 1264.0], [49.2, 1264.0], [49.3, 1264.0], [49.4, 1264.0], [49.5, 1264.0], [49.6, 1264.0], [49.7, 1264.0], [49.8, 1264.0], [49.9, 1264.0], [50.0, 1264.0], [50.1, 1264.0], [50.2, 1264.0], [50.3, 1264.0], [50.4, 1264.0], [50.5, 1264.0], [50.6, 1264.0], [50.7, 1264.0], [50.8, 1264.0], [50.9, 1264.0], [51.0, 1267.0], [51.1, 1267.0], [51.2, 1267.0], [51.3, 1267.0], [51.4, 1267.0], [51.5, 1267.0], [51.6, 1267.0], [51.7, 1267.0], [51.8, 1267.0], [51.9, 1267.0], [52.0, 1267.0], [52.1, 1267.0], [52.2, 1267.0], [52.3, 1267.0], [52.4, 1267.0], [52.5, 1267.0], [52.6, 1267.0], [52.7, 1267.0], [52.8, 1267.0], [52.9, 1267.0], [53.0, 1271.0], [53.1, 1271.0], [53.2, 1271.0], [53.3, 1271.0], [53.4, 1271.0], [53.5, 1271.0], [53.6, 1271.0], [53.7, 1271.0], [53.8, 1271.0], [53.9, 1271.0], [54.0, 1271.0], [54.1, 1271.0], [54.2, 1271.0], [54.3, 1271.0], [54.4, 1271.0], [54.5, 1271.0], [54.6, 1271.0], [54.7, 1271.0], [54.8, 1271.0], [54.9, 1271.0], [55.0, 1272.0], [55.1, 1272.0], [55.2, 1272.0], [55.3, 1272.0], [55.4, 1272.0], [55.5, 1272.0], [55.6, 1272.0], [55.7, 1272.0], [55.8, 1272.0], [55.9, 1272.0], [56.0, 1273.0], [56.1, 1273.0], [56.2, 1273.0], [56.3, 1273.0], [56.4, 1273.0], [56.5, 1273.0], [56.6, 1273.0], [56.7, 1273.0], [56.8, 1273.0], [56.9, 1273.0], [57.0, 1274.0], [57.1, 1274.0], [57.2, 1274.0], [57.3, 1274.0], [57.4, 1274.0], [57.5, 1274.0], [57.6, 1274.0], [57.7, 1274.0], [57.8, 1274.0], [57.9, 1274.0], [58.0, 1274.0], [58.1, 1274.0], [58.2, 1274.0], [58.3, 1274.0], [58.4, 1274.0], [58.5, 1274.0], [58.6, 1274.0], [58.7, 1274.0], [58.8, 1274.0], [58.9, 1274.0], [59.0, 1278.0], [59.1, 1278.0], [59.2, 1278.0], [59.3, 1278.0], [59.4, 1278.0], [59.5, 1278.0], [59.6, 1278.0], [59.7, 1278.0], [59.8, 1278.0], [59.9, 1278.0], [60.0, 1279.0], [60.1, 1279.0], [60.2, 1279.0], [60.3, 1279.0], [60.4, 1279.0], [60.5, 1279.0], [60.6, 1279.0], [60.7, 1279.0], [60.8, 1279.0], [60.9, 1279.0], [61.0, 1280.0], [61.1, 1280.0], [61.2, 1280.0], [61.3, 1280.0], [61.4, 1280.0], [61.5, 1280.0], [61.6, 1280.0], [61.7, 1280.0], [61.8, 1280.0], [61.9, 1280.0], [62.0, 1283.0], [62.1, 1283.0], [62.2, 1283.0], [62.3, 1283.0], [62.4, 1283.0], [62.5, 1283.0], [62.6, 1283.0], [62.7, 1283.0], [62.8, 1283.0], [62.9, 1283.0], [63.0, 1285.0], [63.1, 1285.0], [63.2, 1285.0], [63.3, 1285.0], [63.4, 1285.0], [63.5, 1285.0], [63.6, 1285.0], [63.7, 1285.0], [63.8, 1285.0], [63.9, 1285.0], [64.0, 1286.0], [64.1, 1286.0], [64.2, 1286.0], [64.3, 1286.0], [64.4, 1286.0], [64.5, 1286.0], [64.6, 1286.0], [64.7, 1286.0], [64.8, 1286.0], [64.9, 1286.0], [65.0, 1290.0], [65.1, 1290.0], [65.2, 1290.0], [65.3, 1290.0], [65.4, 1290.0], [65.5, 1290.0], [65.6, 1290.0], [65.7, 1290.0], [65.8, 1290.0], [65.9, 1290.0], [66.0, 1290.0], [66.1, 1290.0], [66.2, 1290.0], [66.3, 1290.0], [66.4, 1290.0], [66.5, 1290.0], [66.6, 1290.0], [66.7, 1290.0], [66.8, 1290.0], [66.9, 1290.0], [67.0, 1293.0], [67.1, 1293.0], [67.2, 1293.0], [67.3, 1293.0], [67.4, 1293.0], [67.5, 1293.0], [67.6, 1293.0], [67.7, 1293.0], [67.8, 1293.0], [67.9, 1293.0], [68.0, 1294.0], [68.1, 1294.0], [68.2, 1294.0], [68.3, 1294.0], [68.4, 1294.0], [68.5, 1294.0], [68.6, 1294.0], [68.7, 1294.0], [68.8, 1294.0], [68.9, 1294.0], [69.0, 1301.0], [69.1, 1301.0], [69.2, 1301.0], [69.3, 1301.0], [69.4, 1301.0], [69.5, 1301.0], [69.6, 1301.0], [69.7, 1301.0], [69.8, 1301.0], [69.9, 1301.0], [70.0, 1305.0], [70.1, 1305.0], [70.2, 1305.0], [70.3, 1305.0], [70.4, 1305.0], [70.5, 1305.0], [70.6, 1305.0], [70.7, 1305.0], [70.8, 1305.0], [70.9, 1305.0], [71.0, 1306.0], [71.1, 1306.0], [71.2, 1306.0], [71.3, 1306.0], [71.4, 1306.0], [71.5, 1306.0], [71.6, 1306.0], [71.7, 1306.0], [71.8, 1306.0], [71.9, 1306.0], [72.0, 1306.0], [72.1, 1306.0], [72.2, 1306.0], [72.3, 1306.0], [72.4, 1306.0], [72.5, 1306.0], [72.6, 1306.0], [72.7, 1306.0], [72.8, 1306.0], [72.9, 1306.0], [73.0, 1307.0], [73.1, 1307.0], [73.2, 1307.0], [73.3, 1307.0], [73.4, 1307.0], [73.5, 1307.0], [73.6, 1307.0], [73.7, 1307.0], [73.8, 1307.0], [73.9, 1307.0], [74.0, 1310.0], [74.1, 1310.0], [74.2, 1310.0], [74.3, 1310.0], [74.4, 1310.0], [74.5, 1310.0], [74.6, 1310.0], [74.7, 1310.0], [74.8, 1310.0], [74.9, 1310.0], [75.0, 1313.0], [75.1, 1313.0], [75.2, 1313.0], [75.3, 1313.0], [75.4, 1313.0], [75.5, 1313.0], [75.6, 1313.0], [75.7, 1313.0], [75.8, 1313.0], [75.9, 1313.0], [76.0, 1314.0], [76.1, 1314.0], [76.2, 1314.0], [76.3, 1314.0], [76.4, 1314.0], [76.5, 1314.0], [76.6, 1314.0], [76.7, 1314.0], [76.8, 1314.0], [76.9, 1314.0], [77.0, 1314.0], [77.1, 1314.0], [77.2, 1314.0], [77.3, 1314.0], [77.4, 1314.0], [77.5, 1314.0], [77.6, 1314.0], [77.7, 1314.0], [77.8, 1314.0], [77.9, 1314.0], [78.0, 1317.0], [78.1, 1317.0], [78.2, 1317.0], [78.3, 1317.0], [78.4, 1317.0], [78.5, 1317.0], [78.6, 1317.0], [78.7, 1317.0], [78.8, 1317.0], [78.9, 1317.0], [79.0, 1321.0], [79.1, 1321.0], [79.2, 1321.0], [79.3, 1321.0], [79.4, 1321.0], [79.5, 1321.0], [79.6, 1321.0], [79.7, 1321.0], [79.8, 1321.0], [79.9, 1321.0], [80.0, 1321.0], [80.1, 1321.0], [80.2, 1321.0], [80.3, 1321.0], [80.4, 1321.0], [80.5, 1321.0], [80.6, 1321.0], [80.7, 1321.0], [80.8, 1321.0], [80.9, 1321.0], [81.0, 1322.0], [81.1, 1322.0], [81.2, 1322.0], [81.3, 1322.0], [81.4, 1322.0], [81.5, 1322.0], [81.6, 1322.0], [81.7, 1322.0], [81.8, 1322.0], [81.9, 1322.0], [82.0, 1323.0], [82.1, 1323.0], [82.2, 1323.0], [82.3, 1323.0], [82.4, 1323.0], [82.5, 1323.0], [82.6, 1323.0], [82.7, 1323.0], [82.8, 1323.0], [82.9, 1323.0], [83.0, 1323.0], [83.1, 1323.0], [83.2, 1323.0], [83.3, 1323.0], [83.4, 1323.0], [83.5, 1323.0], [83.6, 1323.0], [83.7, 1323.0], [83.8, 1323.0], [83.9, 1323.0], [84.0, 1323.0], [84.1, 1323.0], [84.2, 1323.0], [84.3, 1323.0], [84.4, 1323.0], [84.5, 1323.0], [84.6, 1323.0], [84.7, 1323.0], [84.8, 1323.0], [84.9, 1323.0], [85.0, 1327.0], [85.1, 1327.0], [85.2, 1327.0], [85.3, 1327.0], [85.4, 1327.0], [85.5, 1327.0], [85.6, 1327.0], [85.7, 1327.0], [85.8, 1327.0], [85.9, 1327.0], [86.0, 1337.0], [86.1, 1337.0], [86.2, 1337.0], [86.3, 1337.0], [86.4, 1337.0], [86.5, 1337.0], [86.6, 1337.0], [86.7, 1337.0], [86.8, 1337.0], [86.9, 1337.0], [87.0, 1339.0], [87.1, 1339.0], [87.2, 1339.0], [87.3, 1339.0], [87.4, 1339.0], [87.5, 1339.0], [87.6, 1339.0], [87.7, 1339.0], [87.8, 1339.0], [87.9, 1339.0], [88.0, 1343.0], [88.1, 1343.0], [88.2, 1343.0], [88.3, 1343.0], [88.4, 1343.0], [88.5, 1343.0], [88.6, 1343.0], [88.7, 1343.0], [88.8, 1343.0], [88.9, 1343.0], [89.0, 1343.0], [89.1, 1343.0], [89.2, 1343.0], [89.3, 1343.0], [89.4, 1343.0], [89.5, 1343.0], [89.6, 1343.0], [89.7, 1343.0], [89.8, 1343.0], [89.9, 1343.0], [90.0, 1346.0], [90.1, 1346.0], [90.2, 1346.0], [90.3, 1346.0], [90.4, 1346.0], [90.5, 1346.0], [90.6, 1346.0], [90.7, 1346.0], [90.8, 1346.0], [90.9, 1346.0], [91.0, 1348.0], [91.1, 1348.0], [91.2, 1348.0], [91.3, 1348.0], [91.4, 1348.0], [91.5, 1348.0], [91.6, 1348.0], [91.7, 1348.0], [91.8, 1348.0], [91.9, 1348.0], [92.0, 1352.0], [92.1, 1352.0], [92.2, 1352.0], [92.3, 1352.0], [92.4, 1352.0], [92.5, 1352.0], [92.6, 1352.0], [92.7, 1352.0], [92.8, 1352.0], [92.9, 1352.0], [93.0, 1358.0], [93.1, 1358.0], [93.2, 1358.0], [93.3, 1358.0], [93.4, 1358.0], [93.5, 1358.0], [93.6, 1358.0], [93.7, 1358.0], [93.8, 1358.0], [93.9, 1358.0], [94.0, 1362.0], [94.1, 1362.0], [94.2, 1362.0], [94.3, 1362.0], [94.4, 1362.0], [94.5, 1362.0], [94.6, 1362.0], [94.7, 1362.0], [94.8, 1362.0], [94.9, 1362.0], [95.0, 1362.0], [95.1, 1362.0], [95.2, 1362.0], [95.3, 1362.0], [95.4, 1362.0], [95.5, 1362.0], [95.6, 1362.0], [95.7, 1362.0], [95.8, 1362.0], [95.9, 1362.0], [96.0, 1362.0], [96.1, 1362.0], [96.2, 1362.0], [96.3, 1362.0], [96.4, 1362.0], [96.5, 1362.0], [96.6, 1362.0], [96.7, 1362.0], [96.8, 1362.0], [96.9, 1362.0], [97.0, 1369.0], [97.1, 1369.0], [97.2, 1369.0], [97.3, 1369.0], [97.4, 1369.0], [97.5, 1369.0], [97.6, 1369.0], [97.7, 1369.0], [97.8, 1369.0], [97.9, 1369.0], [98.0, 1372.0], [98.1, 1372.0], [98.2, 1372.0], [98.3, 1372.0], [98.4, 1372.0], [98.5, 1372.0], [98.6, 1372.0], [98.7, 1372.0], [98.8, 1372.0], [98.9, 1372.0], [99.0, 1373.0], [99.1, 1373.0], [99.2, 1373.0], [99.3, 1373.0], [99.4, 1373.0], [99.5, 1373.0], [99.6, 1373.0], [99.7, 1373.0], [99.8, 1373.0], [99.9, 1373.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 35.0, "series": [{"data": [[1100.0, 2.0], [600.0, 2.0], [1200.0, 35.0], [1300.0, 31.0], [700.0, 1.0], [800.0, 6.0], [900.0, 11.0], [1000.0, 12.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 100.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.02000000000001, "minX": 1.75335204E12, "maxY": 50.02000000000001, "series": [{"data": [[1.75335204E12, 50.02000000000001]], "isOverall": false, "label": "login_test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335204E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 650.0, "minX": 3.0, "maxY": 1372.0, "series": [{"data": [[3.0, 1232.0], [7.0, 1223.0], [17.0, 1293.0], [22.0, 1305.0], [23.0, 1261.0], [24.0, 1306.0], [29.0, 1265.5], [35.0, 1203.0], [43.0, 1215.5], [47.0, 1208.0], [54.0, 1314.0], [60.0, 1283.0], [65.0, 1219.0], [71.0, 1267.0], [69.0, 1264.0], [79.0, 1337.0], [83.0, 1278.0], [86.0, 1281.0], [90.0, 1285.0], [98.0, 1321.0], [96.0, 1294.0], [104.0, 1306.0], [111.0, 1327.0], [109.0, 1332.5], [114.0, 1369.0], [112.0, 1362.0], [118.0, 1372.0], [125.0, 1310.0], [132.0, 1341.5], [138.0, 1362.0], [137.0, 1358.0], [149.0, 1339.0], [147.0, 1362.5], [156.0, 1343.0], [155.0, 1323.0], [165.0, 1323.0], [160.0, 1343.0], [174.0, 1322.0], [169.0, 1346.0], [183.0, 1285.0], [179.0, 1323.0], [176.0, 1301.0], [187.0, 1290.0], [184.0, 1313.0], [195.0, 1279.0], [192.0, 1314.0], [204.0, 1271.0], [201.0, 1273.0], [208.0, 1272.0], [210.0, 1274.0], [219.0, 1267.5], [217.0, 1260.0], [231.0, 1230.0], [229.0, 1255.0], [227.0, 1274.0], [224.0, 1267.0], [233.0, 1212.0], [245.0, 929.0], [247.0, 1080.0], [242.0, 1201.0], [254.0, 1033.0], [253.0, 1020.0], [252.0, 1023.0], [266.0, 1012.0], [265.0, 999.0], [262.0, 980.0], [260.0, 986.0], [280.0, 823.5], [286.0, 650.0], [287.0, 1080.0], [284.0, 1110.0], [294.0, 803.0], [303.0, 970.0], [298.0, 927.0], [293.0, 952.0], [292.0, 940.0], [291.0, 1011.0], [317.0, 898.0], [318.0, 859.0], [316.0, 1049.0], [315.0, 1004.0], [314.0, 983.0], [312.0, 932.0], [311.0, 1044.0], [320.0, 902.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[181.70999999999998, 1176.6000000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 320.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 433.3333333333333, "minX": 1.75335204E12, "maxY": 4230.916666666667, "series": [{"data": [[1.75335204E12, 4230.916666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75335204E12, 433.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335204E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1176.6000000000001, "minX": 1.75335204E12, "maxY": 1176.6000000000001, "series": [{"data": [[1.75335204E12, 1176.6000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335204E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1176.5599999999997, "minX": 1.75335204E12, "maxY": 1176.5599999999997, "series": [{"data": [[1.75335204E12, 1176.5599999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335204E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 878.8300000000002, "minX": 1.75335204E12, "maxY": 878.8300000000002, "series": [{"data": [[1.75335204E12, 878.8300000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335204E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 650.0, "minX": 1.75335204E12, "maxY": 1373.0, "series": [{"data": [[1.75335204E12, 1373.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75335204E12, 1345.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75335204E12, 1372.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75335204E12, 1362.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75335204E12, 650.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75335204E12, 1264.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335204E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 981.5, "minX": 34.0, "maxY": 1291.5, "series": [{"data": [[66.0, 1291.5], [34.0, 981.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 981.5, "minX": 34.0, "maxY": 1291.5, "series": [{"data": [[66.0, 1291.5], [34.0, 981.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75335204E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75335204E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335204E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75335204E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75335204E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335204E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75335204E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75335204E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335204E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75335204E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75335204E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335204E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

