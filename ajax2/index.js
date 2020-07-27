var oreq
function fireBtn() {
    // oreq = new XMLHttpRequest();
    // // oreq.responseText
    // // promise
    // oreq.addEventListener("load", function() {
    //     console.log(oreq.responseText)
    //     $('#result').html(oreq.responseText)
    //     var json_res = JSON.parse(oreq.responseText)
    //     $('#titleid').text(json_res.title)
        
    // })
    // var num = $('#idtxt').val()
    // oreq.open("GET", `https://jsonplaceholder.typicode.com/todos/${num}`)
    // oreq.send() // async

    // ajax get (xmlhttprequest get) -- ajaj
    var num = $('#idtxt').val()
    $.get( `http://localhost:52151/api/movies/${num}`, function( data ) {
        console.log(data);
        $("#result").html(JSON.stringify(data));
      });
}