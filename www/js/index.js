function getResults() {
  if( $("#my_name").val() == "" || $("#someoneelse_name").val() == "" ){
    alert("oxi, não visse que tens que preencher os nomes?");
  }
  else {

    let city,sound,tip,party,spirit;

    let options = {
      useEasing: true, 
      useGrouping: true, 
      separator: '', 
      decimal: '.', 
    };

    let myName = $("#my_name").val().toLowerCase();
    let someoneelseName = $("#someoneelse_name").val().toLowerCase();

    //if( ( myName == "fernanda" && someoneelseName == "joao" ) || ( myName == "joao" && someoneelseName == "fernanda" ) ) {
    if( ( myName == "nina" && someoneelseName == "joao" ) || ( myName == "joao" && someoneelseName == "nina" ) || ( myName == "nina" && someoneelseName == "joão" ) || ( myName == "joão" && someoneelseName == "nina" )  ) {
      var result = new CountUp('number', 0, 99, 0, 3, options);

      result.start(function() {

        setTimeout(function () {

          result = new CountUp('number', 99, 99999, 0, 2, options);

          result.start(function() {

            $("#number").html("overflow");
            
            $("#message").html("</br><i class='fa fa-fire fa-2x' aria-hidden='true'></i> &nbsp&nbsp UaU, vai transar demais!!!</br></br>");
            
            setTimeout(function () {
            
              city = "Curitiba";
              sound = "Caetano Veloso";
              tip = "beber bastante água";
              spirit = "tranquilo e favorável";
              party = "terraço secreto";
        
              //$("#city").html("</br>cidade mais apropriada: "+city);
              //$("#sound").html("trilha sonora sugerida: "+sound);
              //$("#tip").html("dica da sabedoria ancestral: "+tip);
              //$("#spirit").html("previsão do tempo: "+spirit);
              //$("#party").html("rolê de domingo: "+party+"</br></br>");

            }, 3000);  
          
          });

        }, 50);

      });

    }
    else {
    
      var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];

      let myNameIndex = alphabet.indexOf(myName[0])+1;
      let someoneelseNameIndex = alphabet.indexOf(someoneelseName[0])+1;

      if ( myNameIndex > 0 && someoneelseNameIndex > 0 ) {

        let i = (myNameIndex + myNameIndex) * 2;

        let result = new CountUp('number', 0, i, 0, 3, options);
        
        result.start(function() {
          
          if ( i <= 25 ) {
            $("#message").html("</br>Vixi, meio fraco!</br></br>");
          }
          else if ( i <= 50 ) {
            $("#message").html("</br>Atividades devassas!</br></br>");
          }
          else if ( i <= 75 ) {
            $("#message").html("</br>O bixo vai pegar!</br></br>");
          }
          else {
            $("#message").html("</br>Sensualidade, pervesão e sacanagem das boas!</br></br>");
          }       
                  
        });

      }
      else {

        $("#malsae").html( "mals ae!!! nosso algoritmo não foi capaz de avaliar essa combinação" );

      }     
    
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

      $("#number").html("");
      $("#message").html("");
      $("#city").html("");
      $("#sound").html("");
      $("#tip").html("");
      $("#spirit").html("");
      $("#party").html("");
      $("#malsae").html("");

    });
    
  });

};



