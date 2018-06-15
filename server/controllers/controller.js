module.exports = {
  test: (req, res) => {
    res.status(200).send("Working!!!");
  },

  getInventory: (req, res, next) => {
    let db = req.app.get('db');
    db.get_inventory().then(inventory => {
      return res.status(200).send(inventory);
    });
  }
}