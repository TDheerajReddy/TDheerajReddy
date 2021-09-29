//Datatype

//Reference Types
	//Objects
		let person={
			name: 'T.Dheeraj Reddy',
			age: 23
					//'age' is a Key and then colon and then set the value(23)
					//this two s called Key Value and object's Property
		};	//curly brces for Object Literal
		
		
		
		console.log(person);
		
		//Access the Property
			//Dot(.)  notation
		
			person.name='John';
			console.log(person.name);
			
			//Bracket notation		//it uses for run time
			person['name'] = 'Wick';
			console.log(person['name']);
			
			console.log(person['name'] = 'Hellow');