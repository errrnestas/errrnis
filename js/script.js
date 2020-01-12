(function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.button').removeClass('success');
  };

  $(document).ready(function() {
    return $('.button').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);




$(window).scroll(function(){
 var navTop =  $(window).scrollTop();
 $('.model-0').css("top", navTop + 50);
});