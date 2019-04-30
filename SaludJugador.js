var saludActual=100;
var SaludMaxima=100.00;

var largoBarra=0.0;


function Start () {
largoBarra=Screen.width/2;
}

function Update()
{
AjustarSalud(0);




}
function OnGUI()
{
GUI.Box(new Rect(10,30,largoBarra,20),saludActual+'/'+SaludMaxima);

}

function AjustarSalud(salud)
{
saludActual+=salud;


if(saludActual<0)
{

saludActual=0;
} 
 if(saludActual>SaludMaxima)
 {

saludActual=SaludMaxima;
}

if(SaludMaxima<1){
SaludMaxima=1;

}

largoBarra=(Screen.width/2)*saludActual/SaludMaxima;

}


