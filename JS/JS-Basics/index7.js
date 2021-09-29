//Datatype

//Reference Types
	//Functions
		//Types of Functions
			//Performing a Task
			function greet(name, lastName)		//'funtion' is the keyword, name is a Parameter
			{
				console.log("Reference Typee");
				console.log('Hellow ' + name + ' ' + lastName);
			}
			greet('John');
			greet('John', 'Wick');			//Calling a Function, 'John Wick' is the argument
			//Difference	//name is a Parameter of the greet function		&	'John Wick' is the argument of the greet function
			
			
			//Calculating a Value
			function square(number)
			{
				return number + number;
			}
			
			console.log(square(2));