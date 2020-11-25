$(document).ready(function(){
  $("#a1-btn").click(function(){
    $("#a1").show();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
    $('#a1-v').trigger('load');
    $('#a2-v').trigger('pause');
    $('#a3-v').trigger('pause');
    $('#a4-v').trigger('pause');
    alert("a1 clicked");
  });
});

$(document).ready(function(){
  $("#a2-btn").click(function(){
    $("#a1").hide();
    $("#a2").show();
    $("#a3").hide();
    $("#a4").hide();
    $('#a1-v').trigger('pause'); 
    $('#a2-v').trigger('load');
    $('#a3-v').trigger('pause');
    $('#a4-v').trigger('pause');
    alert("a2 clicked");

  });
});

$(document).ready(function(){
  $("#a3-btn").click(function(){
    $("#a1").hide();
    $("#a2").hide();
    $("#a3").show();
    $("#a4").hide();
    $('#a1-v').trigger('pause');
    $('#a2-v').trigger('pause');
    $('#a3-v').trigger('load');
    $('#a4-v').trigger('pause');
    alert("a3 clicked");
  });
});

$(document).ready(function(){
  $("#a4-btn").click(function(){
    $("#a1").hide();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").show();
    $('#a1-v').trigger('pause'); 
    $('#a2-v').trigger('pause');
    $('#a3-v').trigger('pause');
    $('#a4-v').trigger('load');
    alert("a4 clicked");
  });
});