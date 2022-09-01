import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@ac-1oklvyf-shard-00-00.acawmif.mongodb.net:27017,ac-1oklvyf-shard-00-01.acawmif.mongodb.net:27017,ac-1oklvyf-shard-00-02.acawmif.mongodb.net:27017/?ssl=true&replicaSet=atlas-8qzcx8-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;

