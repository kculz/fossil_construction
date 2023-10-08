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
        role: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "user"
        }
    });

    User.associate = models => {
        User.hasMany(models.Project, {foreignKey: 'projectOwnerId'})
    }

    return User;

};