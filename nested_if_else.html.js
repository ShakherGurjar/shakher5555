<script>
let a=prompt("what is your age")
a=parseInt(a)//converting string into number
if(a<0){
	alert("you are a kid")
}
else if(a<10 && a>18){
	alert("your age is not valid for driving")
}
else(a<18){
	alert("your age is valid for driving")
}

</script>