
var objetivo:Transform;

var distanciaAtaque=10;
var distanciaEscucha=3.0;
var velocidadRotacion=5.0;

var velocidadEnewmigo=8.0;

var maximaDistanciaAtaque=0.0;


private var posicionEnemigo:Transform;

function Awake()
{
    posicionEnemigo=transform;

}




function Start () {
    var ir=GameObject.FindGameObjectWithTag("Player");
    objetivo=ir.transform;
    maximaDistanciaAtaque=3.0;

}

function Update () {

    BuscarJugador();
   EscucharJugador();
  

}

function BuscarJugador()
{
    var dir:Vector3=(objetivo.transform.position-transform.position).normalized;

    var direccion=Vector3.Dot(dir,transform.forward);

    if(Vector3.Distance(objetivo.transform.position,transform.position)<distanciaAtaque && direccion>0 )
    {
        DeteccionJugador();

    }


}

function EscucharJugador()
{
if(Vector3.Distance(objetivo.transform.position,transform.position)<distanciaEscucha)
{
DeteccionJugador();
}

}


function DeteccionJugador()
{

    Debug.DrawLine(objetivo.position,posicionEnemigo.position,Color.blue);



    posicionEnemigo.rotation=Quaternion.Slerp(posicionEnemigo.rotation,Quaternion.LookRotation(objetivo.position-posicionEnemigo.position),velocidadRotacion*Time.deltaTime);


    if(Vector3.Distance(objetivo.position,posicionEnemigo.position)>maximaDistanciaAtaque)
    {
        posicionEnemigo.position+=posicionEnemigo.forward*velocidadEnewmigo*Time.deltaTime;
        

    }



}
