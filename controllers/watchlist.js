const Whatchlist = require("../models/watchlist");

module.exports = {
  getAll: async (req, res) => {
    let userId = req.user._id;


    let whatchlist = await Whatchlist.find({ user: userId })
      .populate("product")
      .populate("user")

    res.status(200).send(whatchlist);
  },
  addToWatchlist: async (req, res) => {
    let userId = req.user._id;
    let productId = req.body.productId;

    let whatchlist = await Whatchlist.findOne({
      user: userId,
      product: productId,
    });

    if (whatchlist) {
      res.status(404).send("Already in watchlist");
    } else {
      let newWhatchlist = await Whatchlist.create({
        user: userId,
        product: productId,
      });
      res.status(200).send(newWhatchlist);
    }
  },
  removeFromWatchlist: async (req, res) => {
    let id = req.params.id;
    let userId = req.user._id;

    console.log({
      userId,
      id,
    })

    let whatchlist = await Whatchlist.findOneAndDelete({
      product: id
    });

    if (!whatchlist) {
      res.status(404).send("Not in watchlist");
    }

    res.status(200).send(whatchlist);
  },
};
