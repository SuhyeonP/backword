module.exports=(sequelize,DataTypes)=>{
    const REACT_SVT_GOING=sequelize.define('REACT_SVT_GOING',{
        title:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        explain:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        episode:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        when:{//연도구별, 레전드화인지  2020,2019,1000(legend)
            type:DataTypes.STRING(4),
            allowNull:false,
        },
        link:{
            type:DataTypes.STRING(200),
            allowNull:false,
        },
        dday:{
            type:DataTypes.STRING(100),
            allowNull:false,
        }
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
    })
    REACT_SVT_GOING.associate=(db)=>{
        db.REACT_SVT_GOING.hasMany(db.REACT_SVT_IMAGE);
    }
    return REACT_SVT_GOING;
}