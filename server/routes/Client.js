const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.post('/', async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).send(client);
});

router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.send(clients);
});

router.delete('/:id', async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.send({ message: 'Client deleted' });
});

// Update a client
router.put('/:id', async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedClient);
  } catch (error) {
    res.status(500).send({ message: 'Error updating client' });
  }
});


module.exports = router;
