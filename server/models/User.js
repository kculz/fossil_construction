module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        fullname: {
            type: DataTypes.STRING,
        },
        email:  {
            type: DataTypes.STRING,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    User.associate = models => {
        User.hasMany(models.Project, {foreignKey: 'projectOwnerId'})
    }

    return User;

};