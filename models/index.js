// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: "product_tag",
  unique: false,
  onDelete: 'CASCADE',
  foreignKey: 'product_id'

})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: "product_tag",
  unique: false,
  onDelete: 'CASCADE',
  foreignKey: "tag_id"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
