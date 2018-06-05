const Car = require('../models/car')

module.exports = {
  create: (req, res, next) => {
    let car = new Car(req.body)

    car.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Car.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Car.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Car.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Car.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Car deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}