function getResults() {
  if( $("#my_name").val() == "" || $("#someoneelse_name").val() == "" ){
    alert("oxi, não visse que tens que preencher os nomes?");
  }
  else {

    let city,sound,sport,party,activity,spirit;

    let myName = $("#my_name").val().toLowerCase();
    let someoneelseName = $("#someoneelse_name").val().toLowerCase();

    if( ( myName == "fernanda" && someoneelseName == "joao" ) || ( myName == "joao" && someoneelseName == "fernanda" ) ) {

      city = "Curitiba";
      sound = "Caetano Veloso";
      sport = "bike";
      party = "terraço secreto";
      activity = "sexo gostoso";
      spirit = "tranquilo & favorável";

      $("#city").html("cidade mais apropriada: "+city);
      $("#sound").html("som pra dividir no fone de ouvido: "+sound);
      $("#sport").html("esporte se tiver com a disposição: "+sport);
      $("#party").html("rolê de domingo: "+party);
      $("#activity").html("coisa pra fazer bastante: "+activity);
      $("#spirit").html("estado de espírito: "+spirit);

    }
    else if ( myName == "fernanda" || myName == "ana" || myName == "juliana" || myName == "joao" || myName == "paulo" || myName == "pedro" ) {
      
      $("#malsae").html( "O casal tem potencial... </br></br>A sugestão é muito sexo, muita água, não dirijam depois de beber que não tem erro!!!" );

    }
    else {

      $("#malsae").html( "mals ae!!! nosso algoritmo não foi capaz de avaliar essa combinação" );

    } 
    
    $("#resultModal").modal("show");

  }
}

window.onload = function() {
  
  $(document).ready(function(){
    
    $("#resultModal").on('show.bs.modal', function () {

      $(".modal-title").html( "resultados para " + $("#my_name").val() + " & " + $("#someoneelse_name").val() );
      
    });

    $("#resultModal").on('hide.bs.modal', function () {
      $("#my_name").val("");
      $("#someoneelse_name").val("");

      $("#city").html("");
      $("#sound").html("");
      $("#sport").html("");
      $("#party").html("");
      $("#activity").html("");
      $("#spirit").html("");
      $("#malsae").html("");

    });
    
  });

};



