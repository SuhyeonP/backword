module.exports=(sequelize,DataTypes)=>{
    const REACT_SVT_IMAGE=sequelize.define('REACT_SVT_IMAGE',{
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
    })
    REACT_SVT_IMAGE.associate=(db)=>{
        db.REACT_SVT_IMAGE.belongsTo(db.REACT_SVT_GOING);
    }
    return REACT_SVT_IMAGE
}