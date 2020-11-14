module.exports=(sequelize,DataTypes)=>{
    const REACT_SVT_ADMIN=sequelize.define('REACT_SVT_ADMIN',{
        userId: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, // 필수
        },
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
    })
    REACT_SVT_ADMIN.associate=(db)=>{

    }
    return REACT_SVT_ADMIN
}