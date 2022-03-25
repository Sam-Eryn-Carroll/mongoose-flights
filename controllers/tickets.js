const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
module.exports = {
    new: newTicket,
    create,
};



  function create(req, res) {
    flightId = req.params.id;
    req.body.flight = flightId;
    Ticket.create(req.body, function(err, ticket) {
      res.redirect(`/flights/${flightId}`);
    });
  }

  function newTicket(req, res) {
    const flight = {id: req.params.id}
      res.render('tickets/new', {flight})
    }

