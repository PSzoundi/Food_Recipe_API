const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
//const Op = Sequelize.Op; // need to request by multiple ids
const Recipe = require("../models/recipe");

//Get all orders
router.get("/", async (req, res) => {
    let recipe = await Recipe.findAll();
    res.send(recipe);
  });

//Get all order by user id or order id.
// router.get("/:id", async (req, res) => {
//     let id = req.params.id;
//     let recipe = await Recipe.findAll({
//         where: {
//             [Op.or]: [{ id: id }, { userId: id }],
//           }
//     });
//     res.send(recipe);
//   });

// Post a new order
router.post("/", async(req, res)=>{
    console.log(req.body);
     let { label, image }=req.body;
    // const existing_recipe = await Recipe.findOne({
    //     where: {
    //       label: label
    //     }
    //   }).then((recipe)=> {
    //     res.status(200).send({
    //         status:200,
    //         success:true,
    //         message: "recipe already added !!",
    //         recipe,
    //     })
    //   })
      
      
    await Recipe.create({ label, image })
        .then((recipe)=>{
            res.status(200).send({
                status:200,
                success:true,
                message: "recipe created !!",
                recipe,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                status:500,
                sucess:false,
                message:"ERROR ",
                Error:err,
            })
        })  
})


//Put method for updating and order by id
// router.put("/update/:id", async (req, res) => {
//     let Id = req.params.id;
//     let { label,quantity, price }=req.body;
//     let response = await Recipe.update(
//         { 
//             label : label,
//             quantity: quantity,
//             price: price
//         },
//         {
//             where: {
//             id: Id,
//             },
//         }
//     )
//       .then((response) => response)
//       .catch((err) =>
//         res.status(500).send({
//           status: 500,
//           success: false,
//           Error: err
//         })
//       );
  
//     if (response == 1) {
//       res.send({
//         status: 200,
//         success: true,
//         updated: {
//             label,
//             quantity,
//             price
//         },
//       });
//     } else if (response == 0) {
//       return res.status(500).send({
//         status: 500,
//         success: false,
//         updated: "None",
//         message: "Invalid Recipe id:",
//       });
//     }
//   });
// //Delete method for deleting my order by id
// router.delete("/delete/:id", async (req, res) => {
//     let Id = req.params.id;
  
//     let response = await Recipe.destroy({
//       where: {
//         id: Id
//       },
//     })
//       .then((response) => response)
//       .catch((err) => {
//         return res.send(err);
//       });
  
//     if (response == 1) {
//       res.send({
//         status: 200,
//         success: true,
//         deleted: {
//           response,
//         },
//       });
//     } else if (response == 0) {
//       res.send({
//         status: 501,
//         success: false,
//         deleted: {
//           row: "none",
//         },
//       });
//     }
//   });

module.exports = router;