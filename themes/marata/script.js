var DataHora = function(){  
    var monthNames = [ "de Janeiro", "de Fevereiro", "de Março", "de Abril", "de Maio", "de Junho", "de Julho", "de Agosto", "de Setembro", "de Outubro", "de Novembro", "de Dezembro" ]; 
    var dayNames= ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

    // Criado novo objeto Data
    var newDate = new Date();
    newDate.setDate(newDate.getDate());

    // Exibindo data e hora
    $('#date').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);
    $('#day').html(dayNames[newDate.getDay()]);
      
    setInterval( function() {
      // Exibir minutos
      var minutes = new Date().getMinutes();      
      $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
      
    setInterval( function() {
      // Exibir hora
      var hours = new Date().getHours();
      $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000); 
    };

$(document).ready(function(){
  DataHora();
});