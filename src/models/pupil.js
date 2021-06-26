const pupil = (sequelize, DataTypes) => {
    const Pupil = sequelize.define('pupil', {
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
    });
    
    Pupil.associate = (models) => {
        Pupil.belongsTo(models.Lesson);
      };
    

    return Pupil;
  };
  
  export default pupil;
  