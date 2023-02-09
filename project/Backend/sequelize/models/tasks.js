module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      "tasks",
      {
          id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          properties:{
            type: DataTypes.STRING,
            allowNull: true
          },
          description:{
            type: DataTypes.STRING,
            allowNull: true
          },
          status: {
            type: DataTypes.STRING,
            allowNull: true
          },
          due_date: {
            type: DataTypes.STRING,
            allowNull: true
          },
          assignee: {
            type: DataTypes.STRING,
            allowNull: true
          },
      },
      {
          tableName: "tasks",
          freezeTableName: true,
          timestamps: true,
          paranoid: true,
      }
  );
};
