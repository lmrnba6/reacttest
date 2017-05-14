$(function () {

    var friendTamplate = $('#template').html();
    var $friends = $('.tabs');
  $.ajax({
  type: 'GET',
  url: 'http://localhost:8080/resaEvent/user/list',
  success: function(friends) {
      $.each(friends, function(i, friend){
          $friends.append(Mustache.render(friendTamplate, friend))
      });    
  },
  error: function(){
      alert();
  }
});

$('.tabs').delegate('.remove','click', function(){
    alert($(this).attr('data-id'));
    var $temp =  $(this).closest('li');
 $.ajax({
  type: 'DELETE',
  url: 'http://localhost:8080/resaEvent/user/remove/'+$(this).attr('data-id'),
  success: function() {
    $temp.fadeOut(300, function(){
        $(this).remove
    });
  }
});
  

});

});



