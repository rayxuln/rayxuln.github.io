window.onload = function() {
    new Visualizer().ini();
};

function windowAddMouseWheel(up, down) {
    document.getElementById('c_canvas').addEventListener('wheel', function (e) {
        if(e.deltaY < 0) up(e.deltaY);
        else if(e.deltaY > 0) down(e.deltaY);
        e.preventDefault();
        e.stopPropagation();
    })
    var stopEvent = function(e){
        e.preventDefault();
        e.stopPropagation();
    };
    document.getElementById('c_canvas').addEventListener('mouseenter', function (e) {
        document.addEventListener('DOMMouseScroll', stopEvent, false);
        document.addEventListener('mousewheel', stopEvent, false);
    });
    document.getElementById('c_canvas').addEventListener('mouseleave', function (e) {
        document.removeEventListener('DOMMouseScroll', stopEvent, false);
        document.removeEventListener('mousewheel', stopEvent, false);
    });
}

var Visualizer = function() {
    this.file = null; //the current file
    this.fileName = null; //the current file name
    this.audioContext = null;
    this.source = null; //the audio source
    this.info = document.getElementById('info').innerHTML; //used to upgrade the UI information
    this.infoUpdateId = null; //to store the setTimeout ID and clear the interval
    this.animationId = null;
    this.status = 0; //flag for sound is playing 1 or stopped 0
    this.forceStop = false;
    this.allCapsReachBottom = false;
    this.currentTimeCount = 0;
    this.list = document.getElementById('list');
    this.sampleRate = document.getElementById('sampleRateEditor');
    this.stopButton = document.getElementById('stopButton');
    this.timeCountCap = parseInt(this.sampleRate.value);
    this.startVisual = false;

    this.c_d = 0;
    this.c_p = 0;
    this.c_array = [180];
    this.c_scale = 1;
    this.c_scale_raw = 1;
    this.c_center_x = document.getElementById('c_canvas').getAttribute('width') / 2;
    this.c_center_y = document.getElementById('c_canvas').getAttribute('height') / 2;
    this.c_mouse_x = 0;
    this.c_mouse_y = 0;
    this.c_mouse_down = false;
    this.c_last_mouse_x = 0;
    this.c_last_mouse_y = 0;

    this.c_a = 50;
    this.c_b = 50;
    this.c_gap_multiplier = 1.5;
    this.c_min_size = 1;
    this.c_max_size = 100;
};
Visualizer.prototype = {
    ini: function() {
        this._prepareAPI();
        this._addEventListner();
    },
    _clearList: function() {
        // var ns = this.list.childNodes;
        // for(var i=0;i<ns.length;++i)
        // {
        //     this.list.removeChild(ns[i]);
        // }
        this.list.innerHTML = " ";
    },
    _prepareAPI: function() {
        //fix browser vender for AudioContext and requestAnimationFrame
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
        try {
            this.audioContext = new AudioContext();
        } catch (e) {
            this._updateInfo('!Your browser does not support AudioContext', false);
            console.log(e);
        }
    },
    _addEventListner: function() {
        var that = this,
            audioInput = document.getElementById('uploadedFile'),
            dropContainer = document.getElementsByTagName("canvas")[0];
        //listen the file upload
        audioInput.onchange = function() {
            if (that.audioContext===null) {return;}

            //the if statement fixes the file selction cancle, because the onchange will trigger even the file selection been canceled
            if (audioInput.files.length !== 0) {
                //only process the first file
                that.file = audioInput.files[0];
                that.fileName = that.file.name;
                if (that.status === 1) {
                    //the sound is still playing but we upload another file, so set the forceStop flag to true
                    that.forceStop = true;
                };
                document.getElementById('fileWrapper').style.opacity = 1;
                that._updateInfo('Uploading', true);
                //once the file is ready,start the visualizer
                that._start();
            };
        };
        //listen the drag & drop
        dropContainer.addEventListener("dragenter", function() {
            document.getElementById('fileWrapper').style.opacity = 1;
            that._updateInfo('Drop it on the page', true);
        }, false);
        dropContainer.addEventListener("dragover", function(e) {
            e.stopPropagation();
            e.preventDefault();
            //set the drop mode
            e.dataTransfer.dropEffect = 'copy';
        }, false);
        dropContainer.addEventListener("dragleave", function() {
            document.getElementById('fileWrapper').style.opacity = 0.2;
            that._updateInfo(that.info, false);
        }, false);
        dropContainer.addEventListener("drop", function(e) {
            e.stopPropagation();
            e.preventDefault();
            if (that.audioContext===null) {return;};
            document.getElementById('fileWrapper').style.opacity = 1;
            that._updateInfo('Uploading', true);
            //get the dropped file
            that.file = e.dataTransfer.files[0];
            if (that.status === 1) {
                document.getElementById('fileWrapper').style.opacity = 1;
                that.forceStop = true;
            };
            that.fileName = that.file.name;
            //once the file is ready,start the visualizer
            that._start();
        }, false);

        this.sampleRate.addEventListener('input', function (e) {
           that.timeCountCap = parseInt(e.target.value);
        });

        document.getElementById('aEditor').addEventListener('input', function (e) {
            that.c_a = e.target.value;
        });
        document.getElementById('bEditor').addEventListener('input', function (e) {
            that.c_b = e.target.value;
        });
        document.getElementById('gapMultiplierEditor').addEventListener('input', function (e) {
            that.c_gap_multiplier = e.target.value;
        });
        document.getElementById('minCircleSizeEditor').addEventListener('input', function (e) {
            that.c_min_size = e.target.value;
        });
        document.getElementById('maxCircleSizeEditor').addEventListener('input', function (e) {
            that.c_max_size = e.target.value;
        });


        this.stopButton.style.display = 'none';
        this.stopButton.addEventListener('click', function (e) {
            if (that.source !== null) {
                that.source.stop(0);
            }
            that.stopButton.style.display = 'none';
        });

        windowAddMouseWheel(
            function (d) {
                that.c_scale += 0.02;
            },
            function (d) {
                that.c_scale -= 0.02;
                if(that.c_scale < 0.01) that.c_scale = 0.01;
            });

        var c_canvas = document.getElementById('c_canvas');
        c_canvas.addEventListener('mousemove', function (e) {
            var bbox = c_canvas.getBoundingClientRect();
            that.c_mouse_x = (e.clientX - bbox.left) * (c_canvas.width / bbox.width);
            that.c_mouse_y = (e.clientY - bbox.top) * (c_canvas.height / bbox.height);
        });
        c_canvas.addEventListener('mousedown', function (e) {
            that.c_mouse_down = true;
        });
        c_canvas.addEventListener('mouseup', function (e) {
            that.c_mouse_down = false;
        });
    },
    _start: function() {

        this._clearList();
        this.stopButton.style.display = 'inline';
        this.startVisual = true;
        this.c_d = 25;
        this.c_p = 100 * this.c_d;
        this.c_array = [];
        this.c_scale = 1;
        this.c_center_x = document.getElementById('c_canvas').getAttribute('width') / 2;
        this.c_center_y = document.getElementById('c_canvas').getAttribute('height') / 2;

        //read and decode the file into audio array buffer
        var that = this,
            file = this.file,
            fr = new FileReader();
        fr.onload = function(e) {
            var fileResult = e.target.result;
            var audioContext = that.audioContext;
            if (audioContext === null) {
                return;
            };
            that._updateInfo('Decoding the audio', true);
            audioContext.decodeAudioData(fileResult, function(buffer) {
                that._updateInfo('Decode succussfully,start the visualizer', true);
                that._visualize(audioContext, buffer);
            }, function(e) {
                that._updateInfo('!Fail to decode the file', false);
                console.error(e);
            });
        };
        fr.onerror = function(e) {
            that._updateInfo('!Fail to read the file', false);
            console.error(e);
            that.stopButton.style.display = 'none';
        };
        //assign the file to the reader
        this._updateInfo('Starting read the file', true);
        fr.readAsArrayBuffer(file);
    },
    _visualize: function(audioContext, buffer) {
        var audioBufferSouceNode = audioContext.createBufferSource(),
            analyser = audioContext.createAnalyser(),
            that = this;
        //connect the source to the analyser
        audioBufferSouceNode.connect(analyser);
        //connect the analyser to the destination(the speaker), or we won't hear the sound
        analyser.connect(audioContext.destination);
        //then assign the buffer to the buffer source node
        audioBufferSouceNode.buffer = buffer;
        //play the source
        if (!audioBufferSouceNode.start) {
            audioBufferSouceNode.start = audioBufferSouceNode.noteOn //in old browsers use noteOn method
            audioBufferSouceNode.stop = audioBufferSouceNode.noteOff //in old browsers use noteOff method
        };
        //stop the previous sound if any
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.source !== null) {
            this.source.stop(0);
        }
        audioBufferSouceNode.start(0);

        this.status = 1;
        this.source = audioBufferSouceNode;
        audioBufferSouceNode.onended = function() {
            that._audioEnd(that);
        };
        this._updateInfo('Playing ' + this.fileName, false);
        this.info = 'Playing ' + this.fileName;
        //document.getElementById('fileWrapper').style.opacity = 0.2;
        this._drawSpectrum(analyser);
    },
    _drawSpectrum: function(analyser) {
        var that = this,
            canvas = document.getElementById('canvas'),
            cwidth = canvas.width,
            cheight = canvas.height - 2,
            meterWidth = 10, //width of the meters in the spectrum
            gap = 2, //gap between meters
            capHeight = 2,
            capStyle = '#fff',
            meterNum = 800 / (10 + 2), //count of the meters
            capYPositionArray = [], ////store the vertical position of hte caps for the preivous frame
            ctx = canvas.getContext('2d'),
            gradient = ctx.createLinearGradient(0, 0, 0, 300);

        gradient.addColorStop(1, '#0f0');
        gradient.addColorStop(0.5, '#ff0');
        gradient.addColorStop(0, '#f00');

        var c_canvas = document.getElementById('c_canvas');
        var c_width = c_canvas.width;
        var c_height = c_canvas.height;
        var c_context = c_canvas.getContext('2d');
        var draw_circle = function (x, y, r, color, type) {
            c_context.fillStyle = color;
            c_context.beginPath();
            c_context.arc(x, y, r, 0, 2 * Math.PI);
            c_context.closePath();
            c_context.fill();
        };
        var calc_d = function (r0, d0, s) {
            var cnt = 0;

            var x0 = r0 * Math.cos(d0);
            var y0 = r0 * Math.sin(d0);

            var R = Math.sqrt(x0*x0 + y0*y0);

            return d0 + s / R;
        };
        var calc_p = function (d, a, b) {
            return a + b * d;
        };
        var lerp = function (x0, x1, f) {
            return (x1-x0)*f+x0;
        }
        var draw_a_audio_circle = function (x, y, z, size, color) {
            var max_c_size = that.c_max_size;//100;
            var min_c_size = that.c_min_size;//1;

            var act_size = (size / 255) * (max_c_size - min_c_size) + min_c_size;

            var x1 = x + that.c_p * Math.cos(that.c_d);
            var y1 = y + that.c_p * Math.sin(that.c_d);

            draw_circle(x1, y1, act_size, color, 'fill');

            that.c_d = calc_d(calc_p(that.c_d, that.c_a, that.c_b), that.c_d, act_size*that.c_gap_multiplier);//1.5
            that.c_p = calc_p(that.c_d, that.c_a, that.c_b);
        };

        var drawMeter = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            if (that.status === 0) {
                //fix when some sounds end the value still not back to zero
                for (var i = array.length - 1; i >= 0; i--) {
                    array[i] = 0;
                };
                allCapsReachBottom = true;
                for (var i = capYPositionArray.length - 1; i >= 0; i--) {
                    allCapsReachBottom = allCapsReachBottom && (capYPositionArray[i] === 0);
                };
                if (allCapsReachBottom) {
                    cancelAnimationFrame(that.animationId); //since the sound is stoped and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
                    return;
                };
            };
            var step = Math.round(array.length / meterNum); //sample limited data from the total array
            var maxValue = 0, sumValue = 0;
            ctx.clearRect(0, 0, cwidth, cheight);
            for (var i = 0; i < meterNum; i++) {
                var value = array[i * step];
                maxValue = value > maxValue ? value : maxValue;
                sumValue += value;
                if (capYPositionArray.length < Math.round(meterNum)) {
                    capYPositionArray.push(value);
                };
                ctx.fillStyle = capStyle;
                //draw the cap, with transition effect
                if (value < capYPositionArray[i]) {
                    ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
                } else {
                    ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                    capYPositionArray[i] = value;
                };
                ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
                ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
            }
            var averValue = sumValue / meterNum;

            // Draw circles
            // c_context.clearRect(0, 0, c_width, c_height);
            //背景颜色
            c_context.fillStyle = 'rgb(1,11,55)';
            c_context.fillRect(0, 0, c_width, c_height);

            c_context.save();

            c_context.scale(that.c_scale_raw, that.c_scale_raw);

            that.c_scale_raw = (that.c_scale - that.c_scale_raw) * 0.1 + that.c_scale_raw;

            if(that.c_mouse_down)
            {
                that.c_center_x += (that.c_mouse_x - that.c_last_mouse_x) / that.c_scale_raw;
                that.c_center_y += (that.c_mouse_y - that.c_last_mouse_y) / that.c_scale_raw;
            }

            that.c_d = 0;
            that.c_p = 0;
            var max_v = 0;
            var min_v = 255;
            for(var i=0;i<that.c_array.length;++i) {
                max_v = Math.max(max_v, that.c_array[i].size);
                min_v = Math.min(min_v, that.c_array[i].size);
            }
            for(var i=0;i<that.c_array.length;++i)
            {
                //圆圈颜色
                draw_a_audio_circle(that.c_center_x, that.c_center_y, 50, that.c_array[i].size_raw, 'rgba(190,137,225,'+that.c_array[i].alpha_raw+')');
                that.c_array[i].size_raw = lerp(that.c_array[i].size_raw, that.c_array[i].size, 0.1);
                that.c_array[i].alpha_raw = lerp(that.c_array[i].alpha_raw, ((that.c_array[i].size_raw-min_v)/(max_v-min_v)+0.3), 0.1);
            }

            c_context.restore();
            that.c_last_mouse_x = that.c_mouse_x;
            that.c_last_mouse_y = that.c_mouse_y;

            that.animationId = requestAnimationFrame(drawMeter);

            // Add a info
            if(that.startVisual === true)
            {
                if(that.currentTimeCount >= that.timeCountCap)
                {
                    that.currentTimeCount = 0;
                    // var item = document.createElement('li');
                    // item.innerText = maxValue;
                    // that.list.appendChild(item);

                    that.c_array.push({size:averValue, size_raw:1, alpha_raw:0});
                }else that.currentTimeCount += 1;

                // console.log("current time: " + that.currentTimeCount + '/' + that.timeCountCap);
            }

        };
        this.animationId = requestAnimationFrame(drawMeter);
    },
    _audioEnd: function(instance) {
        this.startVisual = false;
        this.stopButton.style.display = 'none';

        if (this.forceStop) {
            this.forceStop = false;
            this.status = 1;
            return;
        };
        this.status = 0;
        var text = 'HTML5 Audio API showcase | An Audio Viusalizer';
        document.getElementById('fileWrapper').style.opacity = 1;
        document.getElementById('info').innerHTML = text;
        instance.info = text;
        document.getElementById('uploadedFile').value = '';
    },
    _updateInfo: function(text, processing) {
        var infoBar = document.getElementById('info'),
            dots = '...',
            i = 0,
            that = this;
        infoBar.innerHTML = text + dots.substring(0, i++);
        if (this.infoUpdateId !== null) {
            clearTimeout(this.infoUpdateId);
        };
        if (processing) {
            //animate dots at the end of the info text
            var animateDot = function() {
                if (i > 3) {
                    i = 0
                };
                infoBar.innerHTML = text + dots.substring(0, i++);
                that.infoUpdateId = setTimeout(animateDot, 250);
            }
            this.infoUpdateId = setTimeout(animateDot, 250);
        };
    }
}