const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB');
	
	const db = client.db("TodoApp");
	
	db.collection("Todos").find({_id: new ObjectID('5c652ef5856e1d12b4c1a747')}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log("Unable to fetch the todos");
	});
	
	client.close();
});