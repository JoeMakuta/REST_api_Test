const admin_controller = (req, res) => {
   res.status(200).send({
      "message" : "This is the admin router"
   })
}

export default admin_controller