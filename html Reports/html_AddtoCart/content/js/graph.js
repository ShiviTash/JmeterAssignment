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
        data: {"result": {"minY": 351.0, "minX": 0.0, "maxY": 652.0, "series": [{"data": [[0.0, 351.0], [0.1, 351.0], [0.2, 351.0], [0.3, 351.0], [0.4, 351.0], [0.5, 351.0], [0.6, 351.0], [0.7, 351.0], [0.8, 351.0], [0.9, 351.0], [1.0, 351.0], [1.1, 351.0], [1.2, 351.0], [1.3, 351.0], [1.4, 351.0], [1.5, 351.0], [1.6, 351.0], [1.7, 351.0], [1.8, 351.0], [1.9, 351.0], [2.0, 351.0], [2.1, 351.0], [2.2, 351.0], [2.3, 351.0], [2.4, 351.0], [2.5, 351.0], [2.6, 351.0], [2.7, 351.0], [2.8, 351.0], [2.9, 351.0], [3.0, 351.0], [3.1, 351.0], [3.2, 351.0], [3.3, 351.0], [3.4, 351.0], [3.5, 351.0], [3.6, 351.0], [3.7, 351.0], [3.8, 351.0], [3.9, 351.0], [4.0, 351.0], [4.1, 351.0], [4.2, 351.0], [4.3, 351.0], [4.4, 351.0], [4.5, 351.0], [4.6, 351.0], [4.7, 351.0], [4.8, 351.0], [4.9, 351.0], [5.0, 351.0], [5.1, 351.0], [5.2, 351.0], [5.3, 351.0], [5.4, 351.0], [5.5, 351.0], [5.6, 351.0], [5.7, 351.0], [5.8, 351.0], [5.9, 351.0], [6.0, 352.0], [6.1, 352.0], [6.2, 352.0], [6.3, 352.0], [6.4, 352.0], [6.5, 352.0], [6.6, 352.0], [6.7, 352.0], [6.8, 352.0], [6.9, 352.0], [7.0, 352.0], [7.1, 352.0], [7.2, 352.0], [7.3, 352.0], [7.4, 352.0], [7.5, 352.0], [7.6, 352.0], [7.7, 352.0], [7.8, 352.0], [7.9, 352.0], [8.0, 357.0], [8.1, 357.0], [8.2, 357.0], [8.3, 357.0], [8.4, 357.0], [8.5, 357.0], [8.6, 357.0], [8.7, 357.0], [8.8, 357.0], [8.9, 357.0], [9.0, 357.0], [9.1, 357.0], [9.2, 357.0], [9.3, 357.0], [9.4, 357.0], [9.5, 357.0], [9.6, 357.0], [9.7, 357.0], [9.8, 357.0], [9.9, 357.0], [10.0, 365.0], [10.1, 365.0], [10.2, 365.0], [10.3, 365.0], [10.4, 365.0], [10.5, 365.0], [10.6, 365.0], [10.7, 365.0], [10.8, 365.0], [10.9, 365.0], [11.0, 365.0], [11.1, 365.0], [11.2, 365.0], [11.3, 365.0], [11.4, 365.0], [11.5, 365.0], [11.6, 365.0], [11.7, 365.0], [11.8, 365.0], [11.9, 365.0], [12.0, 365.0], [12.1, 365.0], [12.2, 365.0], [12.3, 365.0], [12.4, 365.0], [12.5, 365.0], [12.6, 365.0], [12.7, 365.0], [12.8, 365.0], [12.9, 365.0], [13.0, 365.0], [13.1, 365.0], [13.2, 365.0], [13.3, 365.0], [13.4, 365.0], [13.5, 365.0], [13.6, 365.0], [13.7, 365.0], [13.8, 365.0], [13.9, 365.0], [14.0, 370.0], [14.1, 370.0], [14.2, 370.0], [14.3, 370.0], [14.4, 370.0], [14.5, 370.0], [14.6, 370.0], [14.7, 370.0], [14.8, 370.0], [14.9, 370.0], [15.0, 370.0], [15.1, 370.0], [15.2, 370.0], [15.3, 370.0], [15.4, 370.0], [15.5, 370.0], [15.6, 370.0], [15.7, 370.0], [15.8, 370.0], [15.9, 370.0], [16.0, 371.0], [16.1, 371.0], [16.2, 371.0], [16.3, 371.0], [16.4, 371.0], [16.5, 371.0], [16.6, 371.0], [16.7, 371.0], [16.8, 371.0], [16.9, 371.0], [17.0, 371.0], [17.1, 371.0], [17.2, 371.0], [17.3, 371.0], [17.4, 371.0], [17.5, 371.0], [17.6, 371.0], [17.7, 371.0], [17.8, 371.0], [17.9, 371.0], [18.0, 372.0], [18.1, 372.0], [18.2, 372.0], [18.3, 372.0], [18.4, 372.0], [18.5, 372.0], [18.6, 372.0], [18.7, 372.0], [18.8, 372.0], [18.9, 372.0], [19.0, 372.0], [19.1, 372.0], [19.2, 372.0], [19.3, 372.0], [19.4, 372.0], [19.5, 372.0], [19.6, 372.0], [19.7, 372.0], [19.8, 372.0], [19.9, 372.0], [20.0, 374.0], [20.1, 374.0], [20.2, 374.0], [20.3, 374.0], [20.4, 374.0], [20.5, 374.0], [20.6, 374.0], [20.7, 374.0], [20.8, 374.0], [20.9, 374.0], [21.0, 374.0], [21.1, 374.0], [21.2, 374.0], [21.3, 374.0], [21.4, 374.0], [21.5, 374.0], [21.6, 374.0], [21.7, 374.0], [21.8, 374.0], [21.9, 374.0], [22.0, 375.0], [22.1, 375.0], [22.2, 375.0], [22.3, 375.0], [22.4, 375.0], [22.5, 375.0], [22.6, 375.0], [22.7, 375.0], [22.8, 375.0], [22.9, 375.0], [23.0, 375.0], [23.1, 375.0], [23.2, 375.0], [23.3, 375.0], [23.4, 375.0], [23.5, 375.0], [23.6, 375.0], [23.7, 375.0], [23.8, 375.0], [23.9, 375.0], [24.0, 376.0], [24.1, 376.0], [24.2, 376.0], [24.3, 376.0], [24.4, 376.0], [24.5, 376.0], [24.6, 376.0], [24.7, 376.0], [24.8, 376.0], [24.9, 376.0], [25.0, 376.0], [25.1, 376.0], [25.2, 376.0], [25.3, 376.0], [25.4, 376.0], [25.5, 376.0], [25.6, 376.0], [25.7, 376.0], [25.8, 376.0], [25.9, 376.0], [26.0, 378.0], [26.1, 378.0], [26.2, 378.0], [26.3, 378.0], [26.4, 378.0], [26.5, 378.0], [26.6, 378.0], [26.7, 378.0], [26.8, 378.0], [26.9, 378.0], [27.0, 378.0], [27.1, 378.0], [27.2, 378.0], [27.3, 378.0], [27.4, 378.0], [27.5, 378.0], [27.6, 378.0], [27.7, 378.0], [27.8, 378.0], [27.9, 378.0], [28.0, 379.0], [28.1, 379.0], [28.2, 379.0], [28.3, 379.0], [28.4, 379.0], [28.5, 379.0], [28.6, 379.0], [28.7, 379.0], [28.8, 379.0], [28.9, 379.0], [29.0, 379.0], [29.1, 379.0], [29.2, 379.0], [29.3, 379.0], [29.4, 379.0], [29.5, 379.0], [29.6, 379.0], [29.7, 379.0], [29.8, 379.0], [29.9, 379.0], [30.0, 382.0], [30.1, 382.0], [30.2, 382.0], [30.3, 382.0], [30.4, 382.0], [30.5, 382.0], [30.6, 382.0], [30.7, 382.0], [30.8, 382.0], [30.9, 382.0], [31.0, 382.0], [31.1, 382.0], [31.2, 382.0], [31.3, 382.0], [31.4, 382.0], [31.5, 382.0], [31.6, 382.0], [31.7, 382.0], [31.8, 382.0], [31.9, 382.0], [32.0, 384.0], [32.1, 384.0], [32.2, 384.0], [32.3, 384.0], [32.4, 384.0], [32.5, 384.0], [32.6, 384.0], [32.7, 384.0], [32.8, 384.0], [32.9, 384.0], [33.0, 384.0], [33.1, 384.0], [33.2, 384.0], [33.3, 384.0], [33.4, 384.0], [33.5, 384.0], [33.6, 384.0], [33.7, 384.0], [33.8, 384.0], [33.9, 384.0], [34.0, 384.0], [34.1, 384.0], [34.2, 384.0], [34.3, 384.0], [34.4, 384.0], [34.5, 384.0], [34.6, 384.0], [34.7, 384.0], [34.8, 384.0], [34.9, 384.0], [35.0, 384.0], [35.1, 384.0], [35.2, 384.0], [35.3, 384.0], [35.4, 384.0], [35.5, 384.0], [35.6, 384.0], [35.7, 384.0], [35.8, 384.0], [35.9, 384.0], [36.0, 385.0], [36.1, 385.0], [36.2, 385.0], [36.3, 385.0], [36.4, 385.0], [36.5, 385.0], [36.6, 385.0], [36.7, 385.0], [36.8, 385.0], [36.9, 385.0], [37.0, 385.0], [37.1, 385.0], [37.2, 385.0], [37.3, 385.0], [37.4, 385.0], [37.5, 385.0], [37.6, 385.0], [37.7, 385.0], [37.8, 385.0], [37.9, 385.0], [38.0, 386.0], [38.1, 386.0], [38.2, 386.0], [38.3, 386.0], [38.4, 386.0], [38.5, 386.0], [38.6, 386.0], [38.7, 386.0], [38.8, 386.0], [38.9, 386.0], [39.0, 386.0], [39.1, 386.0], [39.2, 386.0], [39.3, 386.0], [39.4, 386.0], [39.5, 386.0], [39.6, 386.0], [39.7, 386.0], [39.8, 386.0], [39.9, 386.0], [40.0, 387.0], [40.1, 387.0], [40.2, 387.0], [40.3, 387.0], [40.4, 387.0], [40.5, 387.0], [40.6, 387.0], [40.7, 387.0], [40.8, 387.0], [40.9, 387.0], [41.0, 387.0], [41.1, 387.0], [41.2, 387.0], [41.3, 387.0], [41.4, 387.0], [41.5, 387.0], [41.6, 387.0], [41.7, 387.0], [41.8, 387.0], [41.9, 387.0], [42.0, 387.0], [42.1, 387.0], [42.2, 387.0], [42.3, 387.0], [42.4, 387.0], [42.5, 387.0], [42.6, 387.0], [42.7, 387.0], [42.8, 387.0], [42.9, 387.0], [43.0, 387.0], [43.1, 387.0], [43.2, 387.0], [43.3, 387.0], [43.4, 387.0], [43.5, 387.0], [43.6, 387.0], [43.7, 387.0], [43.8, 387.0], [43.9, 387.0], [44.0, 393.0], [44.1, 393.0], [44.2, 393.0], [44.3, 393.0], [44.4, 393.0], [44.5, 393.0], [44.6, 393.0], [44.7, 393.0], [44.8, 393.0], [44.9, 393.0], [45.0, 393.0], [45.1, 393.0], [45.2, 393.0], [45.3, 393.0], [45.4, 393.0], [45.5, 393.0], [45.6, 393.0], [45.7, 393.0], [45.8, 393.0], [45.9, 393.0], [46.0, 396.0], [46.1, 396.0], [46.2, 396.0], [46.3, 396.0], [46.4, 396.0], [46.5, 396.0], [46.6, 396.0], [46.7, 396.0], [46.8, 396.0], [46.9, 396.0], [47.0, 396.0], [47.1, 396.0], [47.2, 396.0], [47.3, 396.0], [47.4, 396.0], [47.5, 396.0], [47.6, 396.0], [47.7, 396.0], [47.8, 396.0], [47.9, 396.0], [48.0, 396.0], [48.1, 396.0], [48.2, 396.0], [48.3, 396.0], [48.4, 396.0], [48.5, 396.0], [48.6, 396.0], [48.7, 396.0], [48.8, 396.0], [48.9, 396.0], [49.0, 396.0], [49.1, 396.0], [49.2, 396.0], [49.3, 396.0], [49.4, 396.0], [49.5, 396.0], [49.6, 396.0], [49.7, 396.0], [49.8, 396.0], [49.9, 396.0], [50.0, 399.0], [50.1, 399.0], [50.2, 399.0], [50.3, 399.0], [50.4, 399.0], [50.5, 399.0], [50.6, 399.0], [50.7, 399.0], [50.8, 399.0], [50.9, 399.0], [51.0, 399.0], [51.1, 399.0], [51.2, 399.0], [51.3, 399.0], [51.4, 399.0], [51.5, 399.0], [51.6, 399.0], [51.7, 399.0], [51.8, 399.0], [51.9, 399.0], [52.0, 399.0], [52.1, 399.0], [52.2, 399.0], [52.3, 399.0], [52.4, 399.0], [52.5, 399.0], [52.6, 399.0], [52.7, 399.0], [52.8, 399.0], [52.9, 399.0], [53.0, 399.0], [53.1, 399.0], [53.2, 399.0], [53.3, 399.0], [53.4, 399.0], [53.5, 399.0], [53.6, 399.0], [53.7, 399.0], [53.8, 399.0], [53.9, 399.0], [54.0, 400.0], [54.1, 400.0], [54.2, 400.0], [54.3, 400.0], [54.4, 400.0], [54.5, 400.0], [54.6, 400.0], [54.7, 400.0], [54.8, 400.0], [54.9, 400.0], [55.0, 400.0], [55.1, 400.0], [55.2, 400.0], [55.3, 400.0], [55.4, 400.0], [55.5, 400.0], [55.6, 400.0], [55.7, 400.0], [55.8, 400.0], [55.9, 400.0], [56.0, 401.0], [56.1, 401.0], [56.2, 401.0], [56.3, 401.0], [56.4, 401.0], [56.5, 401.0], [56.6, 401.0], [56.7, 401.0], [56.8, 401.0], [56.9, 401.0], [57.0, 401.0], [57.1, 401.0], [57.2, 401.0], [57.3, 401.0], [57.4, 401.0], [57.5, 401.0], [57.6, 401.0], [57.7, 401.0], [57.8, 401.0], [57.9, 401.0], [58.0, 415.0], [58.1, 415.0], [58.2, 415.0], [58.3, 415.0], [58.4, 415.0], [58.5, 415.0], [58.6, 415.0], [58.7, 415.0], [58.8, 415.0], [58.9, 415.0], [59.0, 415.0], [59.1, 415.0], [59.2, 415.0], [59.3, 415.0], [59.4, 415.0], [59.5, 415.0], [59.6, 415.0], [59.7, 415.0], [59.8, 415.0], [59.9, 415.0], [60.0, 415.0], [60.1, 415.0], [60.2, 415.0], [60.3, 415.0], [60.4, 415.0], [60.5, 415.0], [60.6, 415.0], [60.7, 415.0], [60.8, 415.0], [60.9, 415.0], [61.0, 415.0], [61.1, 415.0], [61.2, 415.0], [61.3, 415.0], [61.4, 415.0], [61.5, 415.0], [61.6, 415.0], [61.7, 415.0], [61.8, 415.0], [61.9, 415.0], [62.0, 415.0], [62.1, 415.0], [62.2, 415.0], [62.3, 415.0], [62.4, 415.0], [62.5, 415.0], [62.6, 415.0], [62.7, 415.0], [62.8, 415.0], [62.9, 415.0], [63.0, 415.0], [63.1, 415.0], [63.2, 415.0], [63.3, 415.0], [63.4, 415.0], [63.5, 415.0], [63.6, 415.0], [63.7, 415.0], [63.8, 415.0], [63.9, 415.0], [64.0, 416.0], [64.1, 416.0], [64.2, 416.0], [64.3, 416.0], [64.4, 416.0], [64.5, 416.0], [64.6, 416.0], [64.7, 416.0], [64.8, 416.0], [64.9, 416.0], [65.0, 416.0], [65.1, 416.0], [65.2, 416.0], [65.3, 416.0], [65.4, 416.0], [65.5, 416.0], [65.6, 416.0], [65.7, 416.0], [65.8, 416.0], [65.9, 416.0], [66.0, 416.0], [66.1, 416.0], [66.2, 416.0], [66.3, 416.0], [66.4, 416.0], [66.5, 416.0], [66.6, 416.0], [66.7, 416.0], [66.8, 416.0], [66.9, 416.0], [67.0, 416.0], [67.1, 416.0], [67.2, 416.0], [67.3, 416.0], [67.4, 416.0], [67.5, 416.0], [67.6, 416.0], [67.7, 416.0], [67.8, 416.0], [67.9, 416.0], [68.0, 427.0], [68.1, 427.0], [68.2, 427.0], [68.3, 427.0], [68.4, 427.0], [68.5, 427.0], [68.6, 427.0], [68.7, 427.0], [68.8, 427.0], [68.9, 427.0], [69.0, 427.0], [69.1, 427.0], [69.2, 427.0], [69.3, 427.0], [69.4, 427.0], [69.5, 427.0], [69.6, 427.0], [69.7, 427.0], [69.8, 427.0], [69.9, 427.0], [70.0, 429.0], [70.1, 429.0], [70.2, 429.0], [70.3, 429.0], [70.4, 429.0], [70.5, 429.0], [70.6, 429.0], [70.7, 429.0], [70.8, 429.0], [70.9, 429.0], [71.0, 429.0], [71.1, 429.0], [71.2, 429.0], [71.3, 429.0], [71.4, 429.0], [71.5, 429.0], [71.6, 429.0], [71.7, 429.0], [71.8, 429.0], [71.9, 429.0], [72.0, 439.0], [72.1, 439.0], [72.2, 439.0], [72.3, 439.0], [72.4, 439.0], [72.5, 439.0], [72.6, 439.0], [72.7, 439.0], [72.8, 439.0], [72.9, 439.0], [73.0, 439.0], [73.1, 439.0], [73.2, 439.0], [73.3, 439.0], [73.4, 439.0], [73.5, 439.0], [73.6, 439.0], [73.7, 439.0], [73.8, 439.0], [73.9, 439.0], [74.0, 445.0], [74.1, 445.0], [74.2, 445.0], [74.3, 445.0], [74.4, 445.0], [74.5, 445.0], [74.6, 445.0], [74.7, 445.0], [74.8, 445.0], [74.9, 445.0], [75.0, 445.0], [75.1, 445.0], [75.2, 445.0], [75.3, 445.0], [75.4, 445.0], [75.5, 445.0], [75.6, 445.0], [75.7, 445.0], [75.8, 445.0], [75.9, 445.0], [76.0, 468.0], [76.1, 468.0], [76.2, 468.0], [76.3, 468.0], [76.4, 468.0], [76.5, 468.0], [76.6, 468.0], [76.7, 468.0], [76.8, 468.0], [76.9, 468.0], [77.0, 468.0], [77.1, 468.0], [77.2, 468.0], [77.3, 468.0], [77.4, 468.0], [77.5, 468.0], [77.6, 468.0], [77.7, 468.0], [77.8, 468.0], [77.9, 468.0], [78.0, 486.0], [78.1, 486.0], [78.2, 486.0], [78.3, 486.0], [78.4, 486.0], [78.5, 486.0], [78.6, 486.0], [78.7, 486.0], [78.8, 486.0], [78.9, 486.0], [79.0, 486.0], [79.1, 486.0], [79.2, 486.0], [79.3, 486.0], [79.4, 486.0], [79.5, 486.0], [79.6, 486.0], [79.7, 486.0], [79.8, 486.0], [79.9, 486.0], [80.0, 519.0], [80.1, 519.0], [80.2, 519.0], [80.3, 519.0], [80.4, 519.0], [80.5, 519.0], [80.6, 519.0], [80.7, 519.0], [80.8, 519.0], [80.9, 519.0], [81.0, 519.0], [81.1, 519.0], [81.2, 519.0], [81.3, 519.0], [81.4, 519.0], [81.5, 519.0], [81.6, 519.0], [81.7, 519.0], [81.8, 519.0], [81.9, 519.0], [82.0, 519.0], [82.1, 519.0], [82.2, 519.0], [82.3, 519.0], [82.4, 519.0], [82.5, 519.0], [82.6, 519.0], [82.7, 519.0], [82.8, 519.0], [82.9, 519.0], [83.0, 519.0], [83.1, 519.0], [83.2, 519.0], [83.3, 519.0], [83.4, 519.0], [83.5, 519.0], [83.6, 519.0], [83.7, 519.0], [83.8, 519.0], [83.9, 519.0], [84.0, 533.0], [84.1, 533.0], [84.2, 533.0], [84.3, 533.0], [84.4, 533.0], [84.5, 533.0], [84.6, 533.0], [84.7, 533.0], [84.8, 533.0], [84.9, 533.0], [85.0, 533.0], [85.1, 533.0], [85.2, 533.0], [85.3, 533.0], [85.4, 533.0], [85.5, 533.0], [85.6, 533.0], [85.7, 533.0], [85.8, 533.0], [85.9, 533.0], [86.0, 553.0], [86.1, 553.0], [86.2, 553.0], [86.3, 553.0], [86.4, 553.0], [86.5, 553.0], [86.6, 553.0], [86.7, 553.0], [86.8, 553.0], [86.9, 553.0], [87.0, 553.0], [87.1, 553.0], [87.2, 553.0], [87.3, 553.0], [87.4, 553.0], [87.5, 553.0], [87.6, 553.0], [87.7, 553.0], [87.8, 553.0], [87.9, 553.0], [88.0, 555.0], [88.1, 555.0], [88.2, 555.0], [88.3, 555.0], [88.4, 555.0], [88.5, 555.0], [88.6, 555.0], [88.7, 555.0], [88.8, 555.0], [88.9, 555.0], [89.0, 555.0], [89.1, 555.0], [89.2, 555.0], [89.3, 555.0], [89.4, 555.0], [89.5, 555.0], [89.6, 555.0], [89.7, 555.0], [89.8, 555.0], [89.9, 555.0], [90.0, 602.0], [90.1, 602.0], [90.2, 602.0], [90.3, 602.0], [90.4, 602.0], [90.5, 602.0], [90.6, 602.0], [90.7, 602.0], [90.8, 602.0], [90.9, 602.0], [91.0, 602.0], [91.1, 602.0], [91.2, 602.0], [91.3, 602.0], [91.4, 602.0], [91.5, 602.0], [91.6, 602.0], [91.7, 602.0], [91.8, 602.0], [91.9, 602.0], [92.0, 620.0], [92.1, 620.0], [92.2, 620.0], [92.3, 620.0], [92.4, 620.0], [92.5, 620.0], [92.6, 620.0], [92.7, 620.0], [92.8, 620.0], [92.9, 620.0], [93.0, 620.0], [93.1, 620.0], [93.2, 620.0], [93.3, 620.0], [93.4, 620.0], [93.5, 620.0], [93.6, 620.0], [93.7, 620.0], [93.8, 620.0], [93.9, 620.0], [94.0, 624.0], [94.1, 624.0], [94.2, 624.0], [94.3, 624.0], [94.4, 624.0], [94.5, 624.0], [94.6, 624.0], [94.7, 624.0], [94.8, 624.0], [94.9, 624.0], [95.0, 624.0], [95.1, 624.0], [95.2, 624.0], [95.3, 624.0], [95.4, 624.0], [95.5, 624.0], [95.6, 624.0], [95.7, 624.0], [95.8, 624.0], [95.9, 624.0], [96.0, 634.0], [96.1, 634.0], [96.2, 634.0], [96.3, 634.0], [96.4, 634.0], [96.5, 634.0], [96.6, 634.0], [96.7, 634.0], [96.8, 634.0], [96.9, 634.0], [97.0, 634.0], [97.1, 634.0], [97.2, 634.0], [97.3, 634.0], [97.4, 634.0], [97.5, 634.0], [97.6, 634.0], [97.7, 634.0], [97.8, 634.0], [97.9, 634.0], [98.0, 652.0], [98.1, 652.0], [98.2, 652.0], [98.3, 652.0], [98.4, 652.0], [98.5, 652.0], [98.6, 652.0], [98.7, 652.0], [98.8, 652.0], [98.9, 652.0], [99.0, 652.0], [99.1, 652.0], [99.2, 652.0], [99.3, 652.0], [99.4, 652.0], [99.5, 652.0], [99.6, 652.0], [99.7, 652.0], [99.8, 652.0], [99.9, 652.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 300.0, "maxY": 27.0, "series": [{"data": [[600.0, 5.0], [300.0, 27.0], [400.0, 13.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 40.0, "series": [{"data": [[0.0, 40.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.780000000000005, "minX": 1.75334238E12, "maxY": 18.780000000000005, "series": [{"data": [[1.75334238E12, 18.780000000000005]], "isOverall": false, "label": "add_to_cart", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75334238E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 652.0, "series": [{"data": [[33.0, 351.0], [32.0, 375.0], [2.0, 352.0], [35.0, 413.25], [34.0, 405.0], [37.0, 452.3333333333333], [36.0, 409.3333333333333], [38.0, 533.0], [41.0, 553.0], [40.0, 459.3333333333333], [44.0, 429.0], [46.0, 602.0], [48.0, 652.0], [3.0, 370.0], [53.0, 555.0], [52.0, 518.0], [55.0, 415.0], [54.0, 493.5], [56.0, 624.0], [6.0, 396.0], [7.0, 351.0], [8.0, 365.0], [9.0, 399.0], [11.0, 371.0], [13.0, 382.0], [14.0, 396.0], [15.0, 401.0], [1.0, 387.0], [17.0, 416.0], [19.0, 385.0], [21.0, 376.0], [23.0, 374.0], [25.0, 384.0], [27.0, 379.0], [30.0, 374.5], [31.0, 372.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[31.02, 430.96]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 56.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 644.85, "minX": 1.75334238E12, "maxY": 1333.8666666666666, "series": [{"data": [[1.75334238E12, 644.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75334238E12, 1333.8666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75334238E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 430.96, "minX": 1.75334238E12, "maxY": 430.96, "series": [{"data": [[1.75334238E12, 430.96]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75334238E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 430.84000000000003, "minX": 1.75334238E12, "maxY": 430.84000000000003, "series": [{"data": [[1.75334238E12, 430.84000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75334238E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 310.47999999999996, "minX": 1.75334238E12, "maxY": 310.47999999999996, "series": [{"data": [[1.75334238E12, 310.47999999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75334238E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 351.0, "minX": 1.75334238E12, "maxY": 652.0, "series": [{"data": [[1.75334238E12, 652.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75334238E12, 597.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75334238E12, 652.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75334238E12, 628.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75334238E12, 351.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75334238E12, 397.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75334238E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 397.5, "minX": 50.0, "maxY": 397.5, "series": [{"data": [[50.0, 397.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 397.5, "minX": 50.0, "maxY": 397.5, "series": [{"data": [[50.0, 397.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75334238E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75334238E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75334238E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75334238E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75334238E12, 0.8333333333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75334238E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75334238E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75334238E12, 0.8333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75334238E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75334238E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75334238E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75334238E12, "title": "Total Transactions Per Second"}},
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

