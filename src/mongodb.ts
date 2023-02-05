import mongoose from 'mongoose';



export const mongoConnect =  async function connect() {
   await mongoose.connect('mongodb+srv://'+ process.env.MONGO_USERNAME+':'+process.env.MONGO_PASSWORD+'@cluster0.bzkndpq.mongodb.net/?retryWrites=true&w=majority');
}
