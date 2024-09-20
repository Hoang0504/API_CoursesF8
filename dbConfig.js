import mongoose from 'mongoose';

mongoose
    .connect(
        'mongodb+srv://hoangtnh2209:KVE4llSTiAD6EQLo@db.l2kjc.mongodb.net/f8Db?retryWrites=true&w=majority&appName=db',
    )
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.log(e);

        console.log('Error connecting to MongoDB');
    });

export default mongoose;
