//alert("work");

$( document ).ready(function() {
    init();
});


var init = function (){
    var overtheblockSite;

    //fuck cors
    const proxy =  "https://morning-ridge-26980.herokuapp.com/";
    const urlOver = "https://www.overtheblock.it/serie-beach"
    

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": urlOver,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache",
          "Postman-Token": "4dccec7a-e2e7-4e46-8ab8-878bfc80f121"
        }
      }
      
      $.ajax(settings).done(function (response) {
        overtheblockSite = $(response);
        //console.log(response);
        var table = $('#table_new', overtheblockSite).html();
        $("#overtheblockTable").html(table);

      })
      .fail(function () {

        settings.url = proxy+urlOver;

        $.ajax(settings).done(function (response) {
            overtheblockSite = $(response);
            //console.log(response);
            var table = $('#table_new', overtheblockSite).parent().html();
            $("#overtheblockTable").html(table);
    
          })
      });
}


function myFunction(value, column) {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = value;
    filter = input.toUpperCase();
    table = document.getElementById("table_new");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[column];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
