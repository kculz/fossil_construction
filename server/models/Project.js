module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.define("Project", {
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        expectedStartDate: {
            type: DataTypes.DATE,
            allowNull:true
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
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "waiting for approval",
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: true
        },
        isPaid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        }
    })

    Project.associate = models => {
        Project.belongsTo(models.User, {foreignKey: 'projectOwnerId'})
    }

    return Project;

}