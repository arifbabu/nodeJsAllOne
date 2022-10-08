
const homeView = async(req, res) => {
    try {
      return  res.render('index');
    } catch (err) {
        return res.status(500).send({ error : err })
    }
}


module.exports = {
    homeView
}




