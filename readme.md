# DoubleGauge
A small vanilla javascript/svg component that visualizes a two-dimensional OEE (Overall Equipment Efficiency) value using two crossing needles.
'''html
    <div id="gauge"/>
    <script src="DoubleGauge.js"></script>
    <script>
        //Initialize in element with specified size
        var gauge = new Icris.DoubleGauge('gauge', 300);
        //Set the two needles' values
        gauge.setValues(10, 90);
        //Optional: Animate the gauges randomly with parameterized sleep time
        gauge.animateRandom(250);
    </script>
'''
![visualization](https://github.com/boonzaai/doublegauge/blob/master/doublegauge.png)
