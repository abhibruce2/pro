module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      "tasssks",
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
          tableName: "tasssks",
          freezeTableName: true,
          timestamps: true,
          paranoid: true,
      }
  );
};
