var objetivo:GameObject;

var tiempoAtaque:float;

var tiempoMaximo:float;




function Start () {

tiempoAtaque=0.0;
tiempoMaximo=1.0;
}

function Update () {

if(tiempoAtaque>0)
{
tiempoAtaque-=Time.deltaTime;
}else if(tiempoAtaque<0){
tiempoAtaque=0.0;

}



if(tiempoAtaque==0)
{
animation.CrossFade("Atacando");
Ataque();
tiempoAtaque=tiempoMaximo;
}



}




function Ataque()
{

var distancia=Vector3.Distance(objetivo.transform.position,transform.position);

var dir:Vector3=(objetivo.transform.position-transform.position).normalized;

var direccion=Vector3.Dot(dir,transform.forward);

Debug.Log(direccion);


if(distancia<=2.0 && direccion>0.4)
{

var sj:SaludJugador=objetivo.GetComponent("SaludJugador");
sj.AjustarSalud(-10);
}
}





