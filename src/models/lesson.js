const lesson = (sequelize, DataTypes) => {
    const Lesson = sequelize.define('lesson', {
        name: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
        },
        venue: {
            type: DataTypes.STRING,
        },
        frequency: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.STRING,
        },    
    });
    
    Lesson.associate = (models) => {
        Lesson.hasMany(models.Pupil, { onDelete: 'CASCADE' });
        Lesson.hasMany(models.Notice, { onDelete: 'CASCADE' });
    };
    
    return Lesson;
  };
  
  export default lesson;
  