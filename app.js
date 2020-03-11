let occupations =  {
    3514: {name:'Arvutivõrkude tippspetsialist', rate: 0},
    2523: {name:'Veebitehnik', rate: 0},
    5120: {name:'Kokad', rate: 0},
    5245: {name:'Tanklatöötaja', rate: 0},
    5412: {name:'Politseinik', rate: 0}
}

const occupationSelect = document.getElementById("#occupation-select");

for ( const key in occupations) {
    const occupation_value = occupations[key].name
    
};

fetch("http://andmebaas.stat.ee/sdmx-json/data/PA633/DBL103+83+DBL245+DBL269+DBL278+DBL288.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions")
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    Object.keys(data.dataSets[0].observations).forEach(key => {
        console.log(data.dataSets[0].observations[key][0])
        const key_value = data.dataSets[0].observations[key][0]
        let elementDiv = document.createElement("div")
        elementDiv.innerHTML = "<div>" + key_value + "</div>"
        elementDiv.classList.add("test")
        value.append(elementDiv)

        
    });

    data.structure.dimensions.observation[0].values.forEach((element, i) => {
        const occupationKey = element.name.split(' ')[0]
        const dataSetsKey = i + ':0:0:0'
        const dataSetsKeyValues = data.dataSets[0].observations[dataSetsKey][0]
        occupations[occupationKey].rate = dataSetsKeyValues
        console.log(occupationKey)
        console.log(dataSetsKey)
        console.log(dataSetsKeyValues)
        
    });
    console.log(occupations)
})
