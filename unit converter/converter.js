

let MetricNumber = document.getElementById('metric-conversion').textContent = 24;


    let MetricToFeet = document.getElementById('meter-to-feet');


    MetricToFeet.textContent =  MetricNumber +"  Meter =  "+ (MetricNumber * 3.28084).toFixed(3) +
        " feet |  " + MetricNumber + "  feet  =  " + (MetricNumber * 0.3048).toFixed(3) + " meters ";

    let LiterToGallons = document.getElementById('liter-to-gallons');


    LiterToGallons.textContent = MetricNumber +" liters = "+ (MetricNumber * 0.264172).toFixed(3) +
        " gallons | " +MetricNumber + " gallon = "+ (MetricNumber * 3.78541).toFixed(3) + " liters";


    let KiloToPound = document.getElementById('kilo-to-pounds');

    KiloToPound.textContent  = MetricNumber + " kilos = " + (MetricNumber * 2.20462).toFixed(3) + " pounds | "
        +MetricNumber + " pounds = " + (MetricNumber* 0.453592).toFixed(3) + " kilos";

