//Datatype

//Reference Types
	//Arrrays
		//Array is also an Object
		let selectedColors =['red','blue'];
		selectedColors[2]='green';
		console.log(selectedColors);
		console.log(selectedColors[1]);			//Access element through index number
		
		// In JS we can store different types in an Array
		selectedColors[3]=5;
		console.log(selectedColors);


		// Type below code on the console
			/*
				typeof selectedColors;
			*/
			
		console.log("Length of Array is : "+selectedColors.length);