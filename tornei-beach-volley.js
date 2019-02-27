//alert("work");

$( document ).ready(function() {
    init();
});


var init = function (){
    var overtheblockSite;

    //fuck cors
    var proxy =  "https://morning-ridge-26980.herokuapp.com/";

    var urlovertheblock = "https://crakdelpol.github.io/tornei-beach-volley/tornei.html"

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": urlovertheblock,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache",
          "Postman-Token": "4dccec7a-e2e7-4e46-8ab8-878bfc80f121"
        }
      };

      $.ajax(settings).done(function (response) {
        overtheblockSite = $(response);
        //console.log(response);
        var table = $("#table_new", overtheblockSite).parent().html();
        $("#overtheblockTable").html(table);
      })
      .fail(function () {

        settings.url = proxy+urlovertheblock;

        $.ajax(settings).done(function (response) {
            overtheblockSite = $(response);
            //console.log(response);
            var table = $("#table_new", overtheblockSite).parent().html();
            $("#overtheblockTable").html(table);

          });
      });
}


function filter(value0, value1, value2, value3) {
    //Declare variables
    var input0, input1, input2, input3, bool0, bool1, bool2, bool3, filter0, filter1, filter2, filter3, table, tr, td, i, txtValue;
    input0 = value0;
    input1 = value1;
    input2 = value2;
    input3 = value3;

    filter0 = formatDate(input0);
    filter1 = input1.toUpperCase();
    filter2 = input2.toUpperCase();
    filter3 = input3.toUpperCase();

    bool0 = false;
    bool1 = false;
    bool2 = false;
    bool3 = false;

    table = document.getElementById("table_new");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    
    for (i = 0; i < tr.length; i++) {
        //data
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter0) > -1 || input0 === "")
        {
            bool0=true;
        } else {
            bool0=false;
        }
      }
        //località
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter1) > -1)
        {
            bool1=true;
        } else {
            bool1=false;
        }
      }
      //sesso
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter2) > -1)
        {
            bool2=true;
        } else {
            bool2=false;
        }
      }
      //tipo
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter3) > -1)
        {
            bool3=true;
        } else {
            bool3=false;
        }
      }
      if (bool0 && bool1 && bool2 && bool3)
      {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
}
