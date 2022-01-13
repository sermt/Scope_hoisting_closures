/* 1.	Create	a	function	runningAverage()	that	returns	a	callable	function	object.	Update	the	
series	with	each	given	value	and	calculate	the	current	average */


const runningAverage = () => {
  let numeroIteracion = 0,
    cantidadAcumulada = 0;

  return (cantidad) => {
    numeroIteracion++;
    cantidadAcumulada += cantidad;
    return (cantidadAcumulada / numeroIteracion);// average
  }

};
rAvg = runningAverage();
console.log(rAvg(10) === 10);  // true
console.log(rAvg(11) === 10.5); // true
console.log(rAvg(12) === 11);	 // true



// 2.	Write	a	sum	function	which	will	work	properly	when	invoked	using	syntax	below






const reductor = (args) => args.reduce((a, b) => a + b, 0);


   function sum(...args) {
 let a = reductor(args)
 return function suma2(...args){
   let b = args.length>0?reductor(args):false; 
   return typeof b=='number'?sum(a+b):a+b;
 }
}  

console.log(sum(2,3)()==5);		//	true
console.log(sum(2)(3)()==5);	//	true
console.log(sum(1)(2)(3)(4)()==10);	//	true





























