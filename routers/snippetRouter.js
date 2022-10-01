const router = require('express').Router();

router.post('/', (req, res) => {
  const { title, description, code } = req.body;
  console.log(code);
});
module.exports = router;
