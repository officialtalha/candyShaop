const Data = require("../model/tableCreation");

exports.getrequest = async (req, res) => {
  try {
    const result = await Data.findAll();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

exports.postRequest = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const result = await Data.create({
      name,
      description,
      price,
      quantity,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

exports.putRequestById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, price, quantity } = req.body;
    await Data.update(
      {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    await Data.destroy({
      truncate: true,
    });
    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.deleteRequestById = async (req, res) => {
  try {
    const id = req.params.id;
    await Data.destroy({
      where: {
        id: id,
      },
    });
    res.end();
  } catch (err) {
    console.log(err);
  }
};

// exports.putRequest = async (req, res) => {
//     try {
//         const result = await Data.findAll();
//         for (let i in result) {
//             result[i].quantity = (result[i].quantity) + 10;
//         }
//         await Data.destroy({
//             truncate: true
//         });
//         await Data.create(result);
//         res.end();
//     } catch (err) {
//         console.log(err);
//     }
// }
