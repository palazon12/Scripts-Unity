function Update () {
if(Input.GetButtonDown("Fire1"))
{
animation.CrossFade("Ataque2");
}else if(Input.GetButtonDown("Fire2"))
{
animation.CrossFade("Ataque1");
}
}