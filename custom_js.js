// Agent
var isMobile = false;

$(document).ready(function(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#a1-v').prop('controls',true);
    $('#a2-v').prop('controls',true);
    $('#a3-v').prop('controls',true);
    $('#a4-v').prop('controls',true);
    isMobile = true;
  }
});

$(document).ready(function(){
  $("#a1-btn").click(function(){
    $("#a1").show();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
    if(!isMobile)
      $('#a1-v').trigger('load');
    $('#a2-v').trigger('pause');
    $('#a3-v').trigger('pause');
    $('#a4-v').trigger('pause');
  });
});

$(document).ready(function(){
  $("#a2-btn").click(function(){
    $("#a1").hide();
    $("#a2").show();
    $("#a3").hide();
    $("#a4").hide();
    $('#a1-v').trigger('pause'); 
    if(!isMobile)
      $('#a2-v').trigger('load');
    $('#a3-v').trigger('pause');
    $('#a4-v').trigger('pause');

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
    if(!isMobile)
      $('#a3-v').trigger('load');
    $('#a4-v').trigger('pause');
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
    if(!isMobile)
      $('#a4-v').trigger('load');
  });
});


// Index
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
  $("#btn-classes").click(function(){
    $(".initiator").show();
    $(".controller").show();
    $(".sentinel").show();
    $(".duelist").show();
    $(".not-class").show();
  });
});

$(document).ready(function(){
  $("#btn-initiator").click(function(){
    $(".initiator").show();
    $(".controller").hide();
    $(".sentinel").hide();
    $(".duelist").hide();
    $(".not-class").hide();
  });
});

$(document).ready(function(){
  $("#btn-controller").click(function(){
    $(".initiator").hide();
    $(".controller").show();
    $(".sentinel").hide();
    $(".duelist").hide();
    $(".not-class").hide();
  });
});

$(document).ready(function(){
  $("#btn-sentinel").click(function(){
    $(".initiator").hide();
    $(".controller").hide();
    $(".sentinel").show();
    $(".duelist").hide();
    $(".not-class").hide();
  });
});

$(document).ready(function(){
  $("#btn-duelist").click(function(){
    $(".initiator").hide();
    $(".controller").hide();
    $(".sentinel").hide();
    $(".duelist").show();
    $(".not-class").hide();
  });
});