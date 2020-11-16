module.exports=(sequelize,DataTypes)=>{
    const REACT_SVT_MEMBER=sequelize.define('REACT_SVT_MEMBER',{
        name:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
        birth:{
            type:DataTypes.STRING(10),
            allowNull: false,
        },
        part:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        img:{
          type:DataTypes.STRING(200),
          allowNull:false,
        }
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
    })
    REACT_SVT_MEMBER.associate=(db)=>{

    }
    return REACT_SVT_MEMBER
}