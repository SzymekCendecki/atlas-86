document.addEventListener("DOMContentLoaded", () => {
    $.ajax({
        url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
        console.log(data);

        $("#mainContainer").append(data.austria[0].title, data.austria[0].subtitle, data.austria[0].position, data.austria[0].area, data.austria[0].adminDivision, data.austria[0].biggestCities, data.austria[0].population, data.austria[0].naturalConditions, data.austria[0].historyPoliticalOutline, data.austria[0].Economy, data.austria[0].map);
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    });  
});
