const mongoose = require("mongoose")

/**By default the db name is <test> if you don't put anything in connection string also it will create a db,
  named as test.
Speicy the db name directly in your connection string it will create a db for you
Ex of connection string: 
'mongodb+srv://<username>:<password>@<cluster_name>.jqzujwt.mongodb.net/<dbname(optional)>?retryWrites=true&w=majority'
**/

const connectDB = async()=>{
await mongoose.connect("mongodb+srv://abymnldy201:HNbPhxPl4B93q2Lm@namastenode95.xte1g.mongodb.net/devTinder")
}

module.exports={
    connectDB
}
