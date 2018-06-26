$(document).ready(function(){
$('#block1').click(function(){
    $(function(){
    $('.change-block').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.8331990814204!2d69.35180149997156!3d41.33424032521525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef446ac53bc83%3A0x366ac0e5566a833f!2sMaftun+Farm!5e0!3m2!1sru!2s!4v1525847237925" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>');
});
});
$('#block2').click(function(){
    $(function(){
    $('.change-block').html("<div class='contacts'><img src='../../img/aboutus-3.jpg' width=300px height225px alt='pic'><p class='adress'>Город: Ташкент</p><p class='adress'>ул. Буюк Ипак Йули 232-234</p><p class='adress'>Телефон/Факс: 266-88-09, 266-88-10</p><p class='adress'>E–mail: info@maftunpharm.com</p></div>");

});
});
$('#block3').click(function(){
    $(function(){
    $('.change-block').html("<div class='test'><p>Цены и прайс листы</p></div>");
});
});
}); 