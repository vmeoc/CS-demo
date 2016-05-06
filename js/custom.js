/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('#search').keyup(function(){
    var value = $(this).val().toUpperCase();
    $.each($('.products'),function(){
        if($(this).find('strong').html().toUpperCase().search(value)===-1){
            $(this).hide();
        }else{
            $(this).show();
        }
    });
});