module.exports = (sequelize, DataTypes) => {

    const Folios = sequelize.define('folios', {
        folio: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
        , leaf_num: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        , tombId: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        , folio_url: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        , tomb_text: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        , folio_text: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false
    });
    return Folios;
};

// folio,leaf_num,tombId,folio_url,tomb_text,folio_text
