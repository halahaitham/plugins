function dicroll()
{
	var num = Math.floor(Math.random() *10);
	while (num > 8 || num <1)
	{
		num = Math.floor(Math.random() *10)
	}
	document.getElementById('number').innerHTML=num
}

document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('reroll').addEventListener('click',dicroll);

});