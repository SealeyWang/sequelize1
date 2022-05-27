const {Sequelize, DataTypes} = require("sequelize") ;

const sequelize = new Sequelize('fang', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});

const addUser = async () => {
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
    })
    console.log('add user success jane', jane)
    sequelize.close()

}

const findAllUser =  async  () => {
    User.destroy({
        where: {
            id: 1
        }
    })
    const users = await  User.findAll()
    console.log('find all users', JSON.stringify(users));
    sequelize.close()
}

// addUser();

findAllUser();
