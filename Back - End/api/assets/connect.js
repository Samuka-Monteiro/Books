const mongoose= require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect('mongodb://vuebookapp:samuel123456@ds223063.mlab.com:23063/restapi' , { useNewUrlParser: true });