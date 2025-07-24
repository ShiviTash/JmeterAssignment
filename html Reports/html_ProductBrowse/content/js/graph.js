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
        data: {"result": {"minY": 305.0, "minX": 0.0, "maxY": 492.0, "series": [{"data": [[0.0, 305.0], [0.1, 305.0], [0.2, 305.0], [0.3, 305.0], [0.4, 305.0], [0.5, 307.0], [0.6, 307.0], [0.7, 307.0], [0.8, 307.0], [0.9, 307.0], [1.0, 308.0], [1.1, 308.0], [1.2, 308.0], [1.3, 308.0], [1.4, 308.0], [1.5, 313.0], [1.6, 313.0], [1.7, 313.0], [1.8, 313.0], [1.9, 313.0], [2.0, 319.0], [2.1, 319.0], [2.2, 319.0], [2.3, 319.0], [2.4, 319.0], [2.5, 320.0], [2.6, 320.0], [2.7, 320.0], [2.8, 320.0], [2.9, 320.0], [3.0, 322.0], [3.1, 322.0], [3.2, 322.0], [3.3, 322.0], [3.4, 322.0], [3.5, 322.0], [3.6, 322.0], [3.7, 322.0], [3.8, 322.0], [3.9, 322.0], [4.0, 323.0], [4.1, 323.0], [4.2, 323.0], [4.3, 323.0], [4.4, 323.0], [4.5, 323.0], [4.6, 323.0], [4.7, 323.0], [4.8, 323.0], [4.9, 323.0], [5.0, 324.0], [5.1, 324.0], [5.2, 324.0], [5.3, 324.0], [5.4, 324.0], [5.5, 325.0], [5.6, 325.0], [5.7, 325.0], [5.8, 325.0], [5.9, 325.0], [6.0, 325.0], [6.1, 325.0], [6.2, 325.0], [6.3, 325.0], [6.4, 325.0], [6.5, 325.0], [6.6, 325.0], [6.7, 325.0], [6.8, 325.0], [6.9, 325.0], [7.0, 326.0], [7.1, 326.0], [7.2, 326.0], [7.3, 326.0], [7.4, 326.0], [7.5, 327.0], [7.6, 327.0], [7.7, 327.0], [7.8, 327.0], [7.9, 327.0], [8.0, 327.0], [8.1, 327.0], [8.2, 327.0], [8.3, 327.0], [8.4, 327.0], [8.5, 328.0], [8.6, 328.0], [8.7, 328.0], [8.8, 328.0], [8.9, 328.0], [9.0, 328.0], [9.1, 328.0], [9.2, 328.0], [9.3, 328.0], [9.4, 328.0], [9.5, 328.0], [9.6, 328.0], [9.7, 328.0], [9.8, 328.0], [9.9, 328.0], [10.0, 329.0], [10.1, 329.0], [10.2, 329.0], [10.3, 329.0], [10.4, 329.0], [10.5, 329.0], [10.6, 329.0], [10.7, 329.0], [10.8, 329.0], [10.9, 329.0], [11.0, 329.0], [11.1, 329.0], [11.2, 329.0], [11.3, 329.0], [11.4, 329.0], [11.5, 330.0], [11.6, 330.0], [11.7, 330.0], [11.8, 330.0], [11.9, 330.0], [12.0, 330.0], [12.1, 330.0], [12.2, 330.0], [12.3, 330.0], [12.4, 330.0], [12.5, 330.0], [12.6, 330.0], [12.7, 330.0], [12.8, 330.0], [12.9, 330.0], [13.0, 331.0], [13.1, 331.0], [13.2, 331.0], [13.3, 331.0], [13.4, 331.0], [13.5, 331.0], [13.6, 331.0], [13.7, 331.0], [13.8, 331.0], [13.9, 331.0], [14.0, 331.0], [14.1, 331.0], [14.2, 331.0], [14.3, 331.0], [14.4, 331.0], [14.5, 331.0], [14.6, 331.0], [14.7, 331.0], [14.8, 331.0], [14.9, 331.0], [15.0, 331.0], [15.1, 331.0], [15.2, 331.0], [15.3, 331.0], [15.4, 331.0], [15.5, 331.0], [15.6, 331.0], [15.7, 331.0], [15.8, 331.0], [15.9, 331.0], [16.0, 331.0], [16.1, 331.0], [16.2, 331.0], [16.3, 331.0], [16.4, 331.0], [16.5, 331.0], [16.6, 331.0], [16.7, 331.0], [16.8, 331.0], [16.9, 331.0], [17.0, 332.0], [17.1, 332.0], [17.2, 332.0], [17.3, 332.0], [17.4, 332.0], [17.5, 332.0], [17.6, 332.0], [17.7, 332.0], [17.8, 332.0], [17.9, 332.0], [18.0, 333.0], [18.1, 333.0], [18.2, 333.0], [18.3, 333.0], [18.4, 333.0], [18.5, 333.0], [18.6, 333.0], [18.7, 333.0], [18.8, 333.0], [18.9, 333.0], [19.0, 334.0], [19.1, 334.0], [19.2, 334.0], [19.3, 334.0], [19.4, 334.0], [19.5, 334.0], [19.6, 334.0], [19.7, 334.0], [19.8, 334.0], [19.9, 334.0], [20.0, 334.0], [20.1, 334.0], [20.2, 334.0], [20.3, 334.0], [20.4, 334.0], [20.5, 334.0], [20.6, 334.0], [20.7, 334.0], [20.8, 334.0], [20.9, 334.0], [21.0, 334.0], [21.1, 334.0], [21.2, 334.0], [21.3, 334.0], [21.4, 334.0], [21.5, 335.0], [21.6, 335.0], [21.7, 335.0], [21.8, 335.0], [21.9, 335.0], [22.0, 336.0], [22.1, 336.0], [22.2, 336.0], [22.3, 336.0], [22.4, 336.0], [22.5, 336.0], [22.6, 336.0], [22.7, 336.0], [22.8, 336.0], [22.9, 336.0], [23.0, 336.0], [23.1, 336.0], [23.2, 336.0], [23.3, 336.0], [23.4, 336.0], [23.5, 336.0], [23.6, 336.0], [23.7, 336.0], [23.8, 336.0], [23.9, 336.0], [24.0, 336.0], [24.1, 336.0], [24.2, 336.0], [24.3, 336.0], [24.4, 336.0], [24.5, 336.0], [24.6, 336.0], [24.7, 336.0], [24.8, 336.0], [24.9, 336.0], [25.0, 336.0], [25.1, 336.0], [25.2, 336.0], [25.3, 336.0], [25.4, 336.0], [25.5, 336.0], [25.6, 336.0], [25.7, 336.0], [25.8, 336.0], [25.9, 336.0], [26.0, 337.0], [26.1, 337.0], [26.2, 337.0], [26.3, 337.0], [26.4, 337.0], [26.5, 337.0], [26.6, 337.0], [26.7, 337.0], [26.8, 337.0], [26.9, 337.0], [27.0, 337.0], [27.1, 337.0], [27.2, 337.0], [27.3, 337.0], [27.4, 337.0], [27.5, 337.0], [27.6, 337.0], [27.7, 337.0], [27.8, 337.0], [27.9, 337.0], [28.0, 337.0], [28.1, 337.0], [28.2, 337.0], [28.3, 337.0], [28.4, 337.0], [28.5, 337.0], [28.6, 337.0], [28.7, 337.0], [28.8, 337.0], [28.9, 337.0], [29.0, 338.0], [29.1, 338.0], [29.2, 338.0], [29.3, 338.0], [29.4, 338.0], [29.5, 338.0], [29.6, 338.0], [29.7, 338.0], [29.8, 338.0], [29.9, 338.0], [30.0, 338.0], [30.1, 338.0], [30.2, 338.0], [30.3, 338.0], [30.4, 338.0], [30.5, 338.0], [30.6, 338.0], [30.7, 338.0], [30.8, 338.0], [30.9, 338.0], [31.0, 338.0], [31.1, 338.0], [31.2, 338.0], [31.3, 338.0], [31.4, 338.0], [31.5, 339.0], [31.6, 339.0], [31.7, 339.0], [31.8, 339.0], [31.9, 339.0], [32.0, 339.0], [32.1, 339.0], [32.2, 339.0], [32.3, 339.0], [32.4, 339.0], [32.5, 339.0], [32.6, 339.0], [32.7, 339.0], [32.8, 339.0], [32.9, 339.0], [33.0, 339.0], [33.1, 339.0], [33.2, 339.0], [33.3, 339.0], [33.4, 339.0], [33.5, 339.0], [33.6, 339.0], [33.7, 339.0], [33.8, 339.0], [33.9, 339.0], [34.0, 339.0], [34.1, 339.0], [34.2, 339.0], [34.3, 339.0], [34.4, 339.0], [34.5, 340.0], [34.6, 340.0], [34.7, 340.0], [34.8, 340.0], [34.9, 340.0], [35.0, 340.0], [35.1, 340.0], [35.2, 340.0], [35.3, 340.0], [35.4, 340.0], [35.5, 340.0], [35.6, 340.0], [35.7, 340.0], [35.8, 340.0], [35.9, 340.0], [36.0, 341.0], [36.1, 341.0], [36.2, 341.0], [36.3, 341.0], [36.4, 341.0], [36.5, 341.0], [36.6, 341.0], [36.7, 341.0], [36.8, 341.0], [36.9, 341.0], [37.0, 341.0], [37.1, 341.0], [37.2, 341.0], [37.3, 341.0], [37.4, 341.0], [37.5, 342.0], [37.6, 342.0], [37.7, 342.0], [37.8, 342.0], [37.9, 342.0], [38.0, 342.0], [38.1, 342.0], [38.2, 342.0], [38.3, 342.0], [38.4, 342.0], [38.5, 342.0], [38.6, 342.0], [38.7, 342.0], [38.8, 342.0], [38.9, 342.0], [39.0, 342.0], [39.1, 342.0], [39.2, 342.0], [39.3, 342.0], [39.4, 342.0], [39.5, 342.0], [39.6, 342.0], [39.7, 342.0], [39.8, 342.0], [39.9, 342.0], [40.0, 342.0], [40.1, 342.0], [40.2, 342.0], [40.3, 342.0], [40.4, 342.0], [40.5, 343.0], [40.6, 343.0], [40.7, 343.0], [40.8, 343.0], [40.9, 343.0], [41.0, 343.0], [41.1, 343.0], [41.2, 343.0], [41.3, 343.0], [41.4, 343.0], [41.5, 344.0], [41.6, 344.0], [41.7, 344.0], [41.8, 344.0], [41.9, 344.0], [42.0, 344.0], [42.1, 344.0], [42.2, 344.0], [42.3, 344.0], [42.4, 344.0], [42.5, 345.0], [42.6, 345.0], [42.7, 345.0], [42.8, 345.0], [42.9, 345.0], [43.0, 345.0], [43.1, 345.0], [43.2, 345.0], [43.3, 345.0], [43.4, 345.0], [43.5, 345.0], [43.6, 345.0], [43.7, 345.0], [43.8, 345.0], [43.9, 345.0], [44.0, 345.0], [44.1, 345.0], [44.2, 345.0], [44.3, 345.0], [44.4, 345.0], [44.5, 346.0], [44.6, 346.0], [44.7, 346.0], [44.8, 346.0], [44.9, 346.0], [45.0, 346.0], [45.1, 346.0], [45.2, 346.0], [45.3, 346.0], [45.4, 346.0], [45.5, 347.0], [45.6, 347.0], [45.7, 347.0], [45.8, 347.0], [45.9, 347.0], [46.0, 347.0], [46.1, 347.0], [46.2, 347.0], [46.3, 347.0], [46.4, 347.0], [46.5, 347.0], [46.6, 347.0], [46.7, 347.0], [46.8, 347.0], [46.9, 347.0], [47.0, 347.0], [47.1, 347.0], [47.2, 347.0], [47.3, 347.0], [47.4, 347.0], [47.5, 347.0], [47.6, 347.0], [47.7, 347.0], [47.8, 347.0], [47.9, 347.0], [48.0, 348.0], [48.1, 348.0], [48.2, 348.0], [48.3, 348.0], [48.4, 348.0], [48.5, 348.0], [48.6, 348.0], [48.7, 348.0], [48.8, 348.0], [48.9, 348.0], [49.0, 348.0], [49.1, 348.0], [49.2, 348.0], [49.3, 348.0], [49.4, 348.0], [49.5, 348.0], [49.6, 348.0], [49.7, 348.0], [49.8, 348.0], [49.9, 348.0], [50.0, 348.0], [50.1, 348.0], [50.2, 348.0], [50.3, 348.0], [50.4, 348.0], [50.5, 349.0], [50.6, 349.0], [50.7, 349.0], [50.8, 349.0], [50.9, 349.0], [51.0, 349.0], [51.1, 349.0], [51.2, 349.0], [51.3, 349.0], [51.4, 349.0], [51.5, 349.0], [51.6, 349.0], [51.7, 349.0], [51.8, 349.0], [51.9, 349.0], [52.0, 349.0], [52.1, 349.0], [52.2, 349.0], [52.3, 349.0], [52.4, 349.0], [52.5, 350.0], [52.6, 350.0], [52.7, 350.0], [52.8, 350.0], [52.9, 350.0], [53.0, 350.0], [53.1, 350.0], [53.2, 350.0], [53.3, 350.0], [53.4, 350.0], [53.5, 351.0], [53.6, 351.0], [53.7, 351.0], [53.8, 351.0], [53.9, 351.0], [54.0, 351.0], [54.1, 351.0], [54.2, 351.0], [54.3, 351.0], [54.4, 351.0], [54.5, 351.0], [54.6, 351.0], [54.7, 351.0], [54.8, 351.0], [54.9, 351.0], [55.0, 351.0], [55.1, 351.0], [55.2, 351.0], [55.3, 351.0], [55.4, 351.0], [55.5, 351.0], [55.6, 351.0], [55.7, 351.0], [55.8, 351.0], [55.9, 351.0], [56.0, 353.0], [56.1, 353.0], [56.2, 353.0], [56.3, 353.0], [56.4, 353.0], [56.5, 353.0], [56.6, 353.0], [56.7, 353.0], [56.8, 353.0], [56.9, 353.0], [57.0, 353.0], [57.1, 353.0], [57.2, 353.0], [57.3, 353.0], [57.4, 353.0], [57.5, 354.0], [57.6, 354.0], [57.7, 354.0], [57.8, 354.0], [57.9, 354.0], [58.0, 355.0], [58.1, 355.0], [58.2, 355.0], [58.3, 355.0], [58.4, 355.0], [58.5, 356.0], [58.6, 356.0], [58.7, 356.0], [58.8, 356.0], [58.9, 356.0], [59.0, 356.0], [59.1, 356.0], [59.2, 356.0], [59.3, 356.0], [59.4, 356.0], [59.5, 357.0], [59.6, 357.0], [59.7, 357.0], [59.8, 357.0], [59.9, 357.0], [60.0, 357.0], [60.1, 357.0], [60.2, 357.0], [60.3, 357.0], [60.4, 357.0], [60.5, 357.0], [60.6, 357.0], [60.7, 357.0], [60.8, 357.0], [60.9, 357.0], [61.0, 357.0], [61.1, 357.0], [61.2, 357.0], [61.3, 357.0], [61.4, 357.0], [61.5, 357.0], [61.6, 357.0], [61.7, 357.0], [61.8, 357.0], [61.9, 357.0], [62.0, 358.0], [62.1, 358.0], [62.2, 358.0], [62.3, 358.0], [62.4, 358.0], [62.5, 359.0], [62.6, 359.0], [62.7, 359.0], [62.8, 359.0], [62.9, 359.0], [63.0, 359.0], [63.1, 359.0], [63.2, 359.0], [63.3, 359.0], [63.4, 359.0], [63.5, 360.0], [63.6, 360.0], [63.7, 360.0], [63.8, 360.0], [63.9, 360.0], [64.0, 360.0], [64.1, 360.0], [64.2, 360.0], [64.3, 360.0], [64.4, 360.0], [64.5, 360.0], [64.6, 360.0], [64.7, 360.0], [64.8, 360.0], [64.9, 360.0], [65.0, 361.0], [65.1, 361.0], [65.2, 361.0], [65.3, 361.0], [65.4, 361.0], [65.5, 362.0], [65.6, 362.0], [65.7, 362.0], [65.8, 362.0], [65.9, 362.0], [66.0, 362.0], [66.1, 362.0], [66.2, 362.0], [66.3, 362.0], [66.4, 362.0], [66.5, 362.0], [66.6, 362.0], [66.7, 362.0], [66.8, 362.0], [66.9, 362.0], [67.0, 363.0], [67.1, 363.0], [67.2, 363.0], [67.3, 363.0], [67.4, 363.0], [67.5, 363.0], [67.6, 363.0], [67.7, 363.0], [67.8, 363.0], [67.9, 363.0], [68.0, 364.0], [68.1, 364.0], [68.2, 364.0], [68.3, 364.0], [68.4, 364.0], [68.5, 364.0], [68.6, 364.0], [68.7, 364.0], [68.8, 364.0], [68.9, 364.0], [69.0, 365.0], [69.1, 365.0], [69.2, 365.0], [69.3, 365.0], [69.4, 365.0], [69.5, 365.0], [69.6, 365.0], [69.7, 365.0], [69.8, 365.0], [69.9, 365.0], [70.0, 367.0], [70.1, 367.0], [70.2, 367.0], [70.3, 367.0], [70.4, 367.0], [70.5, 367.0], [70.6, 367.0], [70.7, 367.0], [70.8, 367.0], [70.9, 367.0], [71.0, 368.0], [71.1, 368.0], [71.2, 368.0], [71.3, 368.0], [71.4, 368.0], [71.5, 368.0], [71.6, 368.0], [71.7, 368.0], [71.8, 368.0], [71.9, 368.0], [72.0, 368.0], [72.1, 368.0], [72.2, 368.0], [72.3, 368.0], [72.4, 368.0], [72.5, 368.0], [72.6, 368.0], [72.7, 368.0], [72.8, 368.0], [72.9, 368.0], [73.0, 369.0], [73.1, 369.0], [73.2, 369.0], [73.3, 369.0], [73.4, 369.0], [73.5, 369.0], [73.6, 369.0], [73.7, 369.0], [73.8, 369.0], [73.9, 369.0], [74.0, 370.0], [74.1, 370.0], [74.2, 370.0], [74.3, 370.0], [74.4, 370.0], [74.5, 371.0], [74.6, 371.0], [74.7, 371.0], [74.8, 371.0], [74.9, 371.0], [75.0, 372.0], [75.1, 372.0], [75.2, 372.0], [75.3, 372.0], [75.4, 372.0], [75.5, 372.0], [75.6, 372.0], [75.7, 372.0], [75.8, 372.0], [75.9, 372.0], [76.0, 373.0], [76.1, 373.0], [76.2, 373.0], [76.3, 373.0], [76.4, 373.0], [76.5, 373.0], [76.6, 373.0], [76.7, 373.0], [76.8, 373.0], [76.9, 373.0], [77.0, 373.0], [77.1, 373.0], [77.2, 373.0], [77.3, 373.0], [77.4, 373.0], [77.5, 373.0], [77.6, 373.0], [77.7, 373.0], [77.8, 373.0], [77.9, 373.0], [78.0, 375.0], [78.1, 375.0], [78.2, 375.0], [78.3, 375.0], [78.4, 375.0], [78.5, 375.0], [78.6, 375.0], [78.7, 375.0], [78.8, 375.0], [78.9, 375.0], [79.0, 377.0], [79.1, 377.0], [79.2, 377.0], [79.3, 377.0], [79.4, 377.0], [79.5, 377.0], [79.6, 377.0], [79.7, 377.0], [79.8, 377.0], [79.9, 377.0], [80.0, 380.0], [80.1, 380.0], [80.2, 380.0], [80.3, 380.0], [80.4, 380.0], [80.5, 381.0], [80.6, 381.0], [80.7, 381.0], [80.8, 381.0], [80.9, 381.0], [81.0, 381.0], [81.1, 381.0], [81.2, 381.0], [81.3, 381.0], [81.4, 381.0], [81.5, 384.0], [81.6, 384.0], [81.7, 384.0], [81.8, 384.0], [81.9, 384.0], [82.0, 387.0], [82.1, 387.0], [82.2, 387.0], [82.3, 387.0], [82.4, 387.0], [82.5, 387.0], [82.6, 387.0], [82.7, 387.0], [82.8, 387.0], [82.9, 387.0], [83.0, 388.0], [83.1, 388.0], [83.2, 388.0], [83.3, 388.0], [83.4, 388.0], [83.5, 390.0], [83.6, 390.0], [83.7, 390.0], [83.8, 390.0], [83.9, 390.0], [84.0, 391.0], [84.1, 391.0], [84.2, 391.0], [84.3, 391.0], [84.4, 391.0], [84.5, 396.0], [84.6, 396.0], [84.7, 396.0], [84.8, 396.0], [84.9, 396.0], [85.0, 398.0], [85.1, 398.0], [85.2, 398.0], [85.3, 398.0], [85.4, 398.0], [85.5, 399.0], [85.6, 399.0], [85.7, 399.0], [85.8, 399.0], [85.9, 399.0], [86.0, 400.0], [86.1, 400.0], [86.2, 400.0], [86.3, 400.0], [86.4, 400.0], [86.5, 400.0], [86.6, 400.0], [86.7, 400.0], [86.8, 400.0], [86.9, 400.0], [87.0, 404.0], [87.1, 404.0], [87.2, 404.0], [87.3, 404.0], [87.4, 404.0], [87.5, 405.0], [87.6, 405.0], [87.7, 405.0], [87.8, 405.0], [87.9, 405.0], [88.0, 412.0], [88.1, 412.0], [88.2, 412.0], [88.3, 412.0], [88.4, 412.0], [88.5, 412.0], [88.6, 412.0], [88.7, 412.0], [88.8, 412.0], [88.9, 412.0], [89.0, 412.0], [89.1, 412.0], [89.2, 412.0], [89.3, 412.0], [89.4, 412.0], [89.5, 414.0], [89.6, 414.0], [89.7, 414.0], [89.8, 414.0], [89.9, 414.0], [90.0, 416.0], [90.1, 416.0], [90.2, 416.0], [90.3, 416.0], [90.4, 416.0], [90.5, 424.0], [90.6, 424.0], [90.7, 424.0], [90.8, 424.0], [90.9, 424.0], [91.0, 431.0], [91.1, 431.0], [91.2, 431.0], [91.3, 431.0], [91.4, 431.0], [91.5, 433.0], [91.6, 433.0], [91.7, 433.0], [91.8, 433.0], [91.9, 433.0], [92.0, 433.0], [92.1, 433.0], [92.2, 433.0], [92.3, 433.0], [92.4, 433.0], [92.5, 436.0], [92.6, 436.0], [92.7, 436.0], [92.8, 436.0], [92.9, 436.0], [93.0, 448.0], [93.1, 448.0], [93.2, 448.0], [93.3, 448.0], [93.4, 448.0], [93.5, 450.0], [93.6, 450.0], [93.7, 450.0], [93.8, 450.0], [93.9, 450.0], [94.0, 454.0], [94.1, 454.0], [94.2, 454.0], [94.3, 454.0], [94.4, 454.0], [94.5, 459.0], [94.6, 459.0], [94.7, 459.0], [94.8, 459.0], [94.9, 459.0], [95.0, 463.0], [95.1, 463.0], [95.2, 463.0], [95.3, 463.0], [95.4, 463.0], [95.5, 463.0], [95.6, 463.0], [95.7, 463.0], [95.8, 463.0], [95.9, 463.0], [96.0, 464.0], [96.1, 464.0], [96.2, 464.0], [96.3, 464.0], [96.4, 464.0], [96.5, 468.0], [96.6, 468.0], [96.7, 468.0], [96.8, 468.0], [96.9, 468.0], [97.0, 469.0], [97.1, 469.0], [97.2, 469.0], [97.3, 469.0], [97.4, 469.0], [97.5, 473.0], [97.6, 473.0], [97.7, 473.0], [97.8, 473.0], [97.9, 473.0], [98.0, 475.0], [98.1, 475.0], [98.2, 475.0], [98.3, 475.0], [98.4, 475.0], [98.5, 476.0], [98.6, 476.0], [98.7, 476.0], [98.8, 476.0], [98.9, 476.0], [99.0, 481.0], [99.1, 481.0], [99.2, 481.0], [99.3, 481.0], [99.4, 481.0], [99.5, 492.0], [99.6, 492.0], [99.7, 492.0], [99.8, 492.0], [99.9, 492.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 28.0, "minX": 300.0, "maxY": 172.0, "series": [{"data": [[300.0, 172.0], [400.0, 28.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.806451612903226, "minX": 1.7533527E12, "maxY": 7.733727810650886, "series": [{"data": [[1.7533527E12, 7.733727810650886], [1.75335276E12, 6.806451612903226]], "isOverall": false, "label": "product_browse", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335276E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 338.6881720430108, "minX": 1.0, "maxY": 492.0, "series": [{"data": [[2.0, 345.0], [38.0, 476.0], [46.0, 475.0], [3.0, 348.0], [56.0, 463.0], [63.0, 459.0], [66.0, 393.0], [65.0, 373.0], [67.0, 473.0], [4.0, 341.0], [70.0, 400.0], [72.0, 433.0], [73.0, 416.0], [75.0, 456.0], [77.0, 463.0], [76.0, 454.0], [80.0, 450.0], [5.0, 353.0], [6.0, 373.0], [7.0, 338.6881720430108], [8.0, 363.0810810810811], [9.0, 394.5], [11.0, 468.0], [16.0, 469.0], [1.0, 363.0], [24.0, 481.0], [29.0, 492.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.645000000000005, 360.96000000000004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 66.13333333333334, "minX": 1.7533527E12, "maxY": 6075.55, "series": [{"data": [[1.7533527E12, 6075.55], [1.75335276E12, 1114.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7533527E12, 360.53333333333336], [1.75335276E12, 66.13333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335276E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 353.4838709677419, "minX": 1.7533527E12, "maxY": 362.3313609467455, "series": [{"data": [[1.7533527E12, 362.3313609467455], [1.75335276E12, 353.4838709677419]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335276E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 353.1612903225806, "minX": 1.7533527E12, "maxY": 362.112426035503, "series": [{"data": [[1.7533527E12, 362.112426035503], [1.75335276E12, 353.1612903225806]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335276E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 239.8387096774194, "minX": 1.7533527E12, "maxY": 245.70414201183422, "series": [{"data": [[1.7533527E12, 245.70414201183422], [1.75335276E12, 239.8387096774194]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335276E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 305.0, "minX": 1.7533527E12, "maxY": 492.0, "series": [{"data": [[1.7533527E12, 492.0], [1.75335276E12, 431.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7533527E12, 433.0], [1.75335276E12, 376.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7533527E12, 484.3000000000001], [1.75335276E12, 431.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7533527E12, 463.5], [1.75335276E12, 419.59999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7533527E12, 305.0], [1.75335276E12, 320.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7533527E12, 348.0], [1.75335276E12, 348.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335276E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 340.5, "minX": 7.0, "maxY": 456.5, "series": [{"data": [[19.0, 340.5], [20.0, 347.0], [10.0, 356.5], [21.0, 342.0], [22.0, 456.5], [7.0, 400.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 339.5, "minX": 7.0, "maxY": 456.5, "series": [{"data": [[19.0, 339.5], [20.0, 347.0], [10.0, 356.5], [21.0, 342.0], [22.0, 456.5], [7.0, 400.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.7533527E12, "maxY": 2.95, "series": [{"data": [[1.7533527E12, 2.95], [1.75335276E12, 0.38333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335276E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.7533527E12, "maxY": 2.816666666666667, "series": [{"data": [[1.7533527E12, 2.816666666666667], [1.75335276E12, 0.5166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75335276E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.7533527E12, "maxY": 2.816666666666667, "series": [{"data": [[1.7533527E12, 2.816666666666667], [1.75335276E12, 0.5166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335276E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.7533527E12, "maxY": 2.816666666666667, "series": [{"data": [[1.7533527E12, 2.816666666666667], [1.75335276E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75335276E12, "title": "Total Transactions Per Second"}},
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

