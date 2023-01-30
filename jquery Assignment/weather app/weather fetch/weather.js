let key="ad4e8aec1e0995d4d785d97222c99166"
$(document).ready(function()
{
    
    $("#info").click(function(e)
    {
        e.preventDefault();
        let a=$("#city").val();
        myFunction(a);
        console.log(a);
        
    });

})

async function myFunction(data)
{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}&units=metric`
    let output= await fetch(url)
    
    let y= await output.json();
    console.log(y);

    $(".info").html(
        `
        <div class="col m-2">
    <div class="card">
        <div class="card-header">Weather of <b>${data.toUpperCase()}</b> <span class="matter"></span></div>
        <div class="card-body">
            <div class="contd">Sky Contditions : <b>${y.weather[0].main}</b></div>
            <div class="temp">Temperature : <b>${y.main.temp}</b></div>
            <div class="speed">Wind Speed : <b>${y.main.temp}</b></div>
        </div>
        
      </div>
</div>`
    )

}