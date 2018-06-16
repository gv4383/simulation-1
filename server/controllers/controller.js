module.exports = {
  test: (req, res) => {
    res.status(200).send("Working!!!");
  },

  // displays entire inventory table
  getInventory: (req, res, next) => {
    let dbInstance = req.app.get('db');
    dbInstance.get_inventory().then(inventory => {
      return res.status(200).send(inventory);
    });
  },

  // adds a new product to inventory table
  addProduct: (req, res, next) => {
    const { name, price, image_url } = req.body;

    let dbInstance = req.app.get('db');
    dbInstance.create_product([name, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong..."});
      console.log(err);
    });
  },

  // deletes a product entry within the inventory table
  deleteProduct: (req, res, next) => {
    const { id } = req.params

    let dbInstance = req.app.get('db');
    dbInstance.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong...'});
      console.log(err);
    });
  }
}