const mongoose = require('mongoose');
const faker = require('faker');
const User = require('../models/userModel');
const { fake } = require('faker');
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")

dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => console.log("connected to your remote db hosted on Atlas!")
)

mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
);

mongoose.connection.on('open', () => {
    console.log(`Connected to the database...`);
});


(async function () {
    /** CONNECT TO MONGO */
    console.log(`First, i will delete all the old users`);

/*     try {
        await User.deleteMany({});
        console.log(
            'Old users moved to a better place. Spandau'
        );
    } catch (e) {
        console.log(e);
    } */

    /** CREATE 20 FAKE USERS */
    const userPromises = Array(10)
        .fill(null)
        .map(() => {
            const user = new User({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: '0123456789',
                userName: faker.internet.userName(),
                displayName: faker.random.word(),
            });

            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)


            return user.save();
        });

    try {
        await Promise.all(userPromises);
        console.log('Users stored in the database!');
    } catch (e) {
        console.log(e);
    }

    console.log(`I am creating 20 fake users`);

    mongoose.connection.close();
})();