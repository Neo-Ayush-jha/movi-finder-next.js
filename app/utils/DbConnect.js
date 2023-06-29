import mongoose  from "mongoose";
const DbConnect =()=>{
    if(mongoose.connection.readyState){
        return mongoose.connection;
    }
    return mongoose.connect(process.env.MONGODB_URL);
}
export default DbConnect;