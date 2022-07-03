const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

function barcode(){
	if(input.value.length === 13){
		const val = input.value;

		var myArr = String(val).split("").map((val)=>{
			return Number(val)
		  })
			
		  console.log(myArr)

		function 	allSum(){
			let even = 0;
			let odd = 0;
			for(i=0;i<myArr.length -1;i++)
			{
				if(i % 2 == 0)
					even += myArr[i];
				else
					odd += myArr[i];
			}
			console.log("Even index  numbers sum " + even);
            console.log("Odd index numbers sum " + odd);

			let lastNumber = myArr[12] * 3;
            const all = even + odd + lastNumber
			const nextNum = all % 10;
			const stop = 10 - nextNum;

			if(stop === myArr[12]){
				p.innerHTML = 'Barcode entered correctly'
				val = ""
			}
			else{
				p.innerHTML = 'Input is incorrect information'
		    	val= ""
			}
		}
		allSum();
}
	else if(input.value.length !== 3 || input.value === ""){
		alert("Input must be only 13 digits ")
		input.value = ""
		p.innerHTML = ''
	}
}

	
btn.addEventListener("click",barcode);


// Activate enter key for button 

input.addEventListener('keyup',function(event){
	event.preventDefault();
	if(event.keyCode === 13){
		btn.click();
	}
})