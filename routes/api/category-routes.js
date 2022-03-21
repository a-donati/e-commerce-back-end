const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// get all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(
      {
        // find all categories, including associates products
        include: [{ model: Product}]
      }
    );
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err)
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    // if no category with this id found, 404 message
    if(!categoryData){
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
    // else, 200 response
    res.status(200).json(categoryData)
  }catch(err){
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    // create new category from request body
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  }catch(err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
  });
  if(!categoryData[0]){
    res.status(404).json({message: 'No category by this id'});
    return;
  }
  res.status(200).json(categoryData);
}catch(err){
  res.status(500).json(err);
}
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(!categoryData){
      res.status(404).json({message: 'No category with this id'});
      return;
    }
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
