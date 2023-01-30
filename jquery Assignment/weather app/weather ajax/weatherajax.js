let key="ad4e8aec1e0995d4d785d97222c99166";
$(document).ready(function()
{
    $(".data").click(function(e)
    {
        e.preventDefault();
        let a=$(".city").val();
        $.ajax({
            url:`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}&units=metric`,
            type:"GET",
            success:function(response,status)
            {
                console.log(response);
                let y= response;
                $(".disp").html(` <div class="col">
                <div class="card">
                    <div class="card-header">Weather in <b>${a.toUpperCase()}</b></div>
                    <div class="card-body">
                        <div>Sky Conditions : ${y.weather[0].main} </div>
                        <div>Temperature : ${y.main.temp}</div>
                        <div>Wind Cloud : ${y.wind.speed}</div>
                    </div>
            </div>`)
            },
            error:function(response,status)
            {
                alert("Enter the valid city ")
            }
        })
    })
})