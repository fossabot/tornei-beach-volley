/*deprecated
There is also $(document).on( "ready", handler ), deprecated as of jQuery 1.8 and removed in jQuery 3.0. Note that if the DOM becomes ready before this event is attached, the handler will not be executed.
see also https://api.jquery.com/ready/

$( document ).ready(function() {

  init();
});
*/
jQuery(function () { init() });

var init = function (){

  $("#nav-placeholder").load("nav.html");
  hideAllTable();
  $("#montepremi").hide();
  $("#tipoQualifica").hide();
  //var url = new URL(window.location.href);
  //example https://crakdelpol.github.io/tornei-beach-volley/point.html?tipo=sb1de&montepremi=800
  //var torneo = url.searchParams.get("tipo");
  //var montepremi = url.searchParams.get("montepremi");

};
var tipoTorneo;
var tipoTorneoQualifica;

function changeType(type){

  if(type === "sb1" || type === "sb2" || type === "sb3"){
    tipoTorneo = type;
    $("#montepremi").show();
    $("#tipoQualifica").show();
    hideAllTable();
  }else{
    $("#montepremi").hide();
    $("#tipoQualifica").hide();
    calculatePoints(type, undefined);
  }
}

function changeTipoQualifica(tipoQualifica){
  tipoTorneoQualifica = tipoTorneo+tipoQualifica;
  var montepremi = $("#montepremiValue").val();
  calculatePoints(tipoTorneoQualifica, montepremi);
}
function changeMontepremi(montepremi){
  calculatePoints(tipoTorneoQualifica, montepremi);
}

function calculatePoints(torneo, montepremi){
  hideAllTable();
  console.log("torneo", torneo, "montepremi", montepremi);
  if(torneo){
    var myTable = document.getElementById(torneo);

    if(montepremi){

      if(myTable){
        myTable.style.display = 'inline-table';
        var rows = myTable.rows.length;
        var i;
        for (i = 2; i < rows; i++) {
          var perc = myTable.rows[i].cells[1].innerHTML.replace("%", "");
          var punti = montepremi * perc / 1000;
          myTable.rows[i].cells[1].innerHTML = punti;
        }
      }

    } else {
      //tabelle senza montepremi
      if(myTable) {
        myTable.style.display = 'inline';
      }
    }
  }
}

function hideAllTable(){
  $("table").hide();
}