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
            allowNull:false
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
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "waiting for approval",
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: true
        },
        isPaid: {
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