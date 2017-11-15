Icris = {};
Icris.DoubleGauge = function (element, size, config) {
    var self = this;
    self.element = document.getElementById(element);
    self.element.innerHTML = Icris.GaugeMarkup;
    self.element.firstChild.setAttribute('height', size);
    self.element.firstChild.setAttribute('width', size);

    self.value1 = 0;
    self.value2 = 0;
    self.OEE = 0;
    self.delta = 0;

    self.setValues = function (first, second) {
        if (first !== null) {
            self.value1 = first;
            var rotation = first / 100.0 * 60.0;
            self.element.getElementsByClassName('needle1')[0].setAttribute("transform", "rotate(-" + rotation + ",0,100)");
        }
        if (second !== null) {
            self.value2 = second;
            rotation = second / 100.0 * 60.0;
            self.element.getElementsByClassName('needle2')[0].setAttribute("transform", "rotate(" + rotation + ",100,100)");
        }
        self.element.getElementsByClassName('aggregated')[0].innerHTML = "OEE " + Math.round(parseFloat(self.value1) * parseFloat(self.value2)/100) + " %";
    }
    self.animationDelay = 250;
    self.animateRandom = function (delay) {
        if (delay != null)
            self.animationDelay = delay;

        var up = Math.random() > 0.5;
        var step = Math.random() * 10;
        if (up) {
            self.value1 += step;
        } else {
            self.value1 -= step;
        }
        if (self.value1 > 100 || self.value1 < 0)
            self.value1 = 50;
        self.setValues(self.value1, null);

        up = Math.random() > 0.5;
        step = Math.random() * 10;
        if (up) {
            self.value2 += step;
        } else {
            self.value2 -= step;
        }
        if (self.value2 > 100 || self.value2 < 0)
            self.value2 = 50;
        self.setValues(null, self.value2);
        setTimeout(self.animateRandom, self.animationDelay);
    }
}

Icris.GaugeMarkup = '<svg viewBox="0 0 120 120"><g transform= "translate(10,10)"> <rect style="fill:#EEEEEE;stroke-width:0.3;stroke:#000000;stroke-opacity:1" id="rect3680" width="114" height="100" x="-7" y="0" /> <text x="40" y="95" style="font-family:Arial; font-size:4px" class="aggregated">OEE</text><path style="fill:none;stroke:#AA0000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 100,100" class="needle1" inkscape:connector-curvature="0" transform="rotate(-60,0,100)" /> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-30,0,100)" /> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-6,0,100)" /> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-12,0,100)" /> <text x="100" y="101" transform="rotate(-12,0,100)" style="font-family:Arial; font-size:4px">20%</text> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-18,0,100)" /> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-24,0,100)" /> <text x="100" y="101" transform="rotate(-24,0,100)" style="font-family:Arial; font-size:4px">40%</text> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-36,0,100)" /> <text x="100" y="101" transform="rotate(-36,0,100)" style="font-family:Arial; font-size:4px">60%</text> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-42,0,100)" /> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-48,0,100)" /> <text x="100" y="101" transform="rotate(-48,0,100)" style="font-family:Arial; font-size:4px">80%</text> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-54,0,100)" /> <path style="fill:none;stroke:#AA0000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 95,100 100,100" inkscape:connector-curvature="0" transform="rotate(-60,0,100)" /> <text x="100" y="100" transform="rotate(-58,0,100)" style="font-family:Arial; font-size:4px">100%</text> <path style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 100,100 0,100" class="needle2" inkscape:connector-curvature="0" transform="rotate(60,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(30,100,100)" /> <text x="-8" y="101" transform="rotate(36,100,100)" style="font-family:Arial; font-size:4px">60%</text> <text x="-8" y="101" transform="rotate(12,100,100)" style="font-family:Arial; font-size:4px">20%</text> <text x="-8" y="101" transform="rotate(24,100,100)" style="font-family:Arial; font-size:4px">40%</text> <text x="-8" y="101" transform="rotate(48,100,100)" style="font-family:Arial; font-size:4px">80%</text> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(60,100,100)" /> <text x="-10" y="100" transform="rotate(58,100,100)" style="font-family:Arial; font-size:4px">100%</text> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(6,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(12,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(18,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(24,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(36,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(42,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(48,100,100)" /> <path style="fill:none;stroke:#000000;stroke-width:0.4px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 0,100 5,100" inkscape:connector-curvature="0" transform="rotate(54,100,100)" /> <ellipse style="fill:#ff0000;stroke:#000000;stroke-width:0.1;stroke-opacity:1" id="path4493" cx="0" cy="100" rx="1.3" ry="1.3" /> <ellipse style="fill:#000000;stroke:#000000;stroke-width:0.1;stroke-opacity:1" id="path4495" cx="100" cy="100" rx="1.3" ry="1.3" /> </g > </svg >';