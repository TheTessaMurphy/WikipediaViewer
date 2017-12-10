$(document).ready(function(){
   var w = window.innerHeight / 2;
   var h = window.innerHeight / 2;

   document.getElementById("grSearch").style.marginTop = h +"px";
  });

$('#btnRemove').click(function(){
  var w = window.innerHeight / 2;
  var h = window.innerHeight / 2; 
  $(".panel").remove();
  $('#grSearch').animate({'margin-top': h +"px"}, 1000);
  $("#inForm").val(""); 
  $('#inSearch').fadeOut(700);
   
  //document.getElementById("grSearch").style.marginTop = h +"px"; 
  
  $('#iconSearch').delay(900).fadeIn(600);
  
});

//Click Icon
$("#btnSearch").click(function(){
   $('#iconSearch').fadeOut(600);
   $('#inSearch').delay(1000).fadeIn(600);
  $("#inForm").focus;
});

//Hit enter while in search box
document.getElementById("inForm").onkeydown = function(e){
   if(e.keyCode == 13){
   getInfo();
   }
};

//Calls and displays first 10 returns from Wikipedia
function getInfo() {
 
  $('#grSearch').animate({'margin-top': '2%'}, 1000);
  //gets user's input from search box
  var userInput="'" + document.getElementById("inForm").value + "'";
  
  //accesses wikipedia api, initiates a search based on user input and limits the return to 10. It
  //calls revisions, content, and json format.
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userInput + "&limit=10&prop=revisions&rvprop=content&format=json&callback=?";
    
 //.getJSON returns an array. The first returned value(data[0]) is the search option, the title is data[1], content is data[2] and links are data[3]
  $.getJSON(url, function(data) {
    
  //loop through data, creating panels and inserting returned data.
    $(".panel").remove();   
    for (var i = 0; i < data[1].length; i++) {
      $("#userChosen").append("<div id = '" + i +"' class='panel animated slideInUp'><div class='panel-heading'>" + data[1][i] +"</div><div class='panel-body'>"+ data[2][i]+"<a href='" + data[3][i] +"' target='_blank'> more...</a></div></div>")
    }
  });
}
