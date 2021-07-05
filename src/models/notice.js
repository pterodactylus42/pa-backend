const notice = (sequelize, DataTypes) => {
    const Notice = sequelize.define('notice', {
        content: {
            type: DataTypes.STRING,
        },
    });
    
    Notice.associate = (models) => {
        Notice.belongsTo(models.Lesson);
      };
    

    return Notice;
  };
  
  export default notice;
  