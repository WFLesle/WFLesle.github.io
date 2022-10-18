$(document).on("change", "#foto_alumna", function (e) {
    validar_archivo_alumna($(this));
  });
  function validar_archivo_alumna(file) {
    console.log("validar_archivo", file);

    var Lector;
    var Archivos = file[0].files;
    var archivo = file;
    var archivo2 = file.val();
    if (Archivos.length > 0) {
      Lector = new FileReader();
      Lector.onloadend = function (e) {
        var origen, tipo, tamanio;
        //Envia la imagen a la pantalla
        origen = e.target; //objeto FileReader
        //Prepara la información sobre la imagen

        tipo = archivo2.substring(archivo2.lastIndexOf("."));
        console.log("el tipo", tipo);
        tamanio = e.total / 1024;
        console.log("el tamaño", tamanio);

        if (
          tipo !== ".jpeg" &&
          tipo !== ".JPEG" &&
          tipo !== ".jpg" &&
          tipo !== ".JPG" &&
          tipo !== ".png" &&
          tipo !== ".PNG"
        ) {
          $("#error_en_la_imagen_alumna").html("Seleccione un archivo valido");
          $("#seleccionado").html("Archivo no valido");
          $("#seleccionado").css('display','block');
          $("#img_alumna").css('display','none');
          $("#img_alumna").attr("src","");
          $("#error_en_la_imagen_alumna").css("display", "block");
        } else if (tamanio > 2000) {
          $("#error_en_la_imagen_alumna").html(
            "El tamaño de la imagen debe ser menor a 2MB"
            
          );
          $("#seleccionado").html("Archivo no valido");
          $("#seleccionado").css('display','block');
          $("#img_alumna").css('display','none');
          $("#img_alumna").attr("src","");
          $("#error_en_la_imagen_alumna").css("display", "block");
        } else {
          // Use attr para cambiar el atributo src de img a la URL obtenida
          $("#img_alumna").attr("src",origen.result);
          $("#seleccionado").css('display','none');
          $("#img_alumna").css('display','block');
          $("#error_en_la_imagen_alumna").css("display", "none");
        }
      };
      Lector.onerror = function (e) {
        console.log(e);
      };
      Lector.readAsDataURL(Archivos[0]);
    }
  }
  $(document).on("change", "#foto_tutor", function (e) {
    validar_archivo_tutor($(this));
  });
  function validar_archivo_tutor(file) {
    console.log("validar_archivo", file);

    var Lector;
    var Archivos = file[0].files;
    var archivo = file;
    var archivo2 = file.val();
    if (Archivos.length > 0) {
      Lector = new FileReader();
      Lector.onloadend = function (e) {
        var origen, tipo, tamanio;
        //Envia la imagen a la pantalla
        origen = e.target; //objeto FileReader
        //Prepara la información sobre la imagen

        tipo = archivo2.substring(archivo2.lastIndexOf("."));
        console.log("el tipo", tipo);
        tamanio = e.total / 1024;
        console.log("el tamaño", tamanio);

        if (
          tipo !== ".jpeg" &&
          tipo !== ".JPEG" &&
          tipo !== ".jpg" &&
          tipo !== ".JPG" &&
          tipo !== ".png" &&
          tipo !== ".PNG"
        ) {
          $("#error_en_la_imagen_tutor").html("Seleccione un archivo valido");
          $("#seleccionado_tutor").html("Archivo no valido");
          $("#seleccionado_tutor").css('display','block');
          $("#img_tutor").css('display','none');
          $("#img_tutor").attr("src","");
          $("#error_en_la_imagen_tutor").css("display", "block");
        } else if (tamanio > 2000) {
          $("#error_en_la_imagen_tutor").html(
            "El tamaño de la imagen debe ser menor a 2MB"
            
          );
          $("#seleccionado_tutor").html("Archivo no valido");
          $("#seleccionado_tutor").css('display','block');
          $("#img_tutor").css('display','none');
          $("#img_tutor").attr("src","");
          $("#error_en_la_imagen_tutor").css("display", "block");
        } else {
          // Use attr para cambiar el atributo src de img a la URL obtenida
          $("#img_tutor").attr("src",origen.result);
          $("#seleccionado_tutor").css('display','none');
          $("#img_tutor").css('display','block');
          $("#error_en_la_imagen_tutor").css("display", "none");
        }
      };
      Lector.onerror = function (e) {
        console.log(e);
      };
      Lector.readAsDataURL(Archivos[0]);
    }
  }