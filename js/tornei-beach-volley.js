//alert("work");

$( document ).ready(function() {
    init();

});

var NS_FILTRI = {
    filterTipo : "",
    filterSesso : ""
};


var init = function (){
    var overtheblockSite;
    var urlovertheblock = "tornei.html"

    $("#nav-placeholder").load("/nav.html");
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": urlovertheblock,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      };

      $.ajax(settings).done(function (response) {
        overtheblockSite = $(response);
        //console.log(response);
        var table = $("#table_new", overtheblockSite).parent().html();
        table = table.split(/serie beach /ig).join('B');
        table = table.split(/Lista d'entrata/ig).join('Iscritti');
        table = table.split(/Beach Volley Live/ig).join('Live');
        table = table.split(/Segui in tempo reale/ig).join('Live');
        table = table.split(/INFO/ig).join('Info');
        table = table.split(/^Risultati Main Draw/ig).join('Result');
        table = table.split(/^Classifica/ig).join('Rank');
          
          
        $("#overtheblockTable").html(table);
      });
    
};

function refreshTable ()  {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://refresh-tornei-beach-volley.herokuapp.com",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache"
        }
    };

    $.ajax(settings).done(function (response) {
        alert("Tabella aggiornata");
        document.location.replace(document.location);
    }).fail(function(error) {
        console.log(error);
        alert("Aggiornata");
    });
}


function filter(value0, value1) {

    if(value1  === "admin"){
        $(".admin").show();
    }

    //Declare variables
    var input0, input1, input2, input3, bool0, bool1, bool2, bool3, filter0, filter1, filter2, filter3, table, tr, td, i, txtValue;
    input0 = value0;
    input1 = value1;
    input2 = NS_FILTRI.filterSesso;
    input3 = NS_FILTRI.filterTipo;

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
        //intestazione italia, serie beach
        if (i < 3 ){
            continue;
        }
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
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
}
