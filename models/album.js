module.exports=(sequelize,DataTypes)=>{
    const REACT_SVT_ALBUM=sequelize.define('REACT_SVT_ALBUM',{
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        when: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        part:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        link:{
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
    })
    REACT_SVT_ALBUM.associate=(db)=>{

    }
    return REACT_SVT_ALBUM
}