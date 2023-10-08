module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.define("Project", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isDone: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    })

    Project.associate = models => {
        Project.belongsTo(models.User, {foreignKey: 'projectOwnerId'})
    }

    return Project;

}