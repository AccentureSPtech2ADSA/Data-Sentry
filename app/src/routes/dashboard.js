
var express = require("express");
const router = express.Router();
var dashboardController = require("../controllers/dashboardController");
const {authJwt} = require('../util/middleware/jwtMIddleware');
// se quiser usar como middleware da funcao, vai precisar utilizar esse authJwt

router.post("/getPercentagePerComponent", authJwt, (req, res) => {
  console.log("estou na rota de getPercentagePerComponent da dashboard");
  dashboardController.getPercentagePerComponent(req, res);
});

router.post("/getDataChart", authJwt, (req, res) => {
  console.log("estou na rota de getDataChart da dashboard");
  dashboardController.getDataChart(req, res);
});

router.post("/getPercentageUsePerCompenent", authJwt, (req, res) => {
  console.log("estou na rota de getPercentageUsePerCompenent da dashboard");
  dashboardController.getPercentageUsePerCompenent(req, res);
});


router.get("/getThresholdsBasic/:server", authJwt, (req, res) => {
  console.log("estou na rota de getThresholdsBasic da dashboard");
  dashboardController.getThresholdsBasic(req, res);
});
  
router.get("/getLastsLogsPerDay/:server", authJwt, (req, res) => {
  console.log("estou na rota de getLastsLogsPerDay da dashboard");
  dashboardController.getLastsLogsPerDay(req, res);
});

module.exports = router;
