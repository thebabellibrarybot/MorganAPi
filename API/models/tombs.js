module.export = (sequilze, DataTypes) => {

    const Tombs = sequilze.define('tombs', {
        tomb_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
        , book_type: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        , book_location: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        , book_date: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return Tombs;
};