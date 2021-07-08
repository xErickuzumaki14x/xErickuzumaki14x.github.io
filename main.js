( función ( ) {
    var  oldLog  =  consola . log ;
    consola . log  =  función  ( mensaje )  {
        documento . getElementById ( 'a' ) . valor  + =  mensaje
        oldLog . aplicar ( argumentos ) ;
    } ;
} ) ( ) ;

 descarga de funciones ( nombre de archivo ,  texto )  {
  var  elemento  =  documento . createElement ( 'a' ) ;
  elemento . setAttribute ( 'href' ,  'data: text / plain; charset = utf-8,'  +  encodeURIComponent ( texto ) ) ;
  elemento . setAttribute ( 'descargar' ,  nombre de archivo ) ;

  elemento . estilo . display  =  'ninguno' ;
  documento . cuerpo . appendChild ( elemento ) ;

  elemento . haga clic en ( ) ;

  documento . cuerpo . removeChild ( elemento ) ;
}
var  textarea  =  documento . getElementById ( 'a' )
if  ( navigator . userAgent . indexOf ( 'Móvil' )  ! ==  - 1 )  {  document . getElementById ( 'guardar' ) . estilo . display  =  "ninguno" ;  textarea . estilo . altura  =  "100px" ;
} // cambiar el tamaño para dispositivos móviles
function  generate ( )  {
var  triesPerSecond  =  documento . getElementById ( 'velocidad' ) . valor  // autoexplicativo
getGiftCode  =  function  ( )  {
    dejar  código  =  '' ;
    let  dict  =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' ;
    para ( var  i  =  0 ;  i  <  16 ;  i ++ ) {
        código  =  código  +  dic . charAt ( Math . floor ( Math . random ( )  *  dict . length ) ) ;
    }
    consola . log ( '[GEN] http://discord.gift/'  +  código  +  "\ n" ) ;
    código  + =  '\ n'
    documento . getElementById ( 'b' ) . valor  + =  código ;

}  // genera códigos


getGiftCode ( ) ;
documento . getElementById ( 'detener' ) . addEventListener ( "hacer clic" ,  detener ) ;  // enlaza la parada del botón a la parada de la función
función  stop ( )  {
  clearInterval ( gInterval ) ;
  clearInterval ( intervalo )
}  // dejar de generar y detener el bucle de desplazamiento de la consola
var  gInterval  =  setInterval ( ( )  =>  { getGiftCode ( ) ; } ,  ( 1 / triesPerSecond )  *  1000 ) ;
// repetir la creación de códigos

function  scroll ( )  {
  documento . getElementById ( "a" ) . scrollTop  =  documento . getElementById ( "a" ) . scrollHeight
} ;  // desplazamiento automático
var  interval  =  setInterval ( scroll ,  100 )  // sigue haciendo scroll en la "consola"
documento . getElementById ( 'claro' ) . addEventListener ( "hacer clic" ,  detener ) ;
}

documento . getElementById ( 'generar' ) . addEventListener ( "hacer clic" ,  generar ) ;
