module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define("Service", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Service;
}