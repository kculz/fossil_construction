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
        expectedStartDate: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal(`DATEADD(day, 5,GETDATE())`),
            allowNull: false
        },
        expectedCompletion: {
            type: DataTypes.DATE,
            allowNull: true
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        isApproved: {
            type: DataTypes.STRING,
            defaultValue: "pending approval",
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "waiting for approval",
            allowNull: false
        }
    })

    Project.associate = models => {
        Project.belongsTo(models.User, {foreignKey: 'projectOwnerId'})
    }

    return Project;

}