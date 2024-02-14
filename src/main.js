$('document').ready(function(){
    $('#form-container').submit(function(evento){
        evento.preventDefault();
    });
    
    const valor = $('#inp-valor');
    

    
    $('#btn').click(function(){
        function makeCode() {	
            const QR = $('#qrcode')
            
            if (!valor.val()) {
                alert("Input a text");
                valor.focus();
                return;
            }
            // Clear the QR code when the button is clicked or input changes
            QR.empty(); // Remove the QR code content
        
            const qrcode = new QRCode(QR[0], { // Access the DOM element directly
                text: valor.val(),
                width: 200,
                height: 200
            });


        
            
        }
        makeCode();
    })

    
    $("#text").
    on("blur", function () {
      makeCode();
    }).
    on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });
    
})




