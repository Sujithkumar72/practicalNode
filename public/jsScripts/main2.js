const data = [{
    "Segment": "Government",
    "Country": "Canada",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Government",
    "Country": "Germany",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Midmarket",
    "Country": "France",
    "Product": "Carretera",
    "Discount": "None",
}];

document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 4);