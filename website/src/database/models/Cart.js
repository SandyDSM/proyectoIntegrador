module.exports = (sequelize, dataTypes) => {
  let alias = "Cart";
  let cols = {
    id_cart: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "cart",
    timestamps: false,
  };
  const Cart = sequelize.define(alias, cols, config);
  Cart.associate = function (models) {
    Cart.belongsTo(models.Client, {
      as: "clients",
      foreignKey: "user_id",
    }),
      Cart.belongsToMany(models.Stock, {
        as: "stock",
        through: "cart_stock",
        foreignKey: "cart_id",
        otherKey: "stock_id",
        timestamps: false,
      });
  };

  return Cart;
};
