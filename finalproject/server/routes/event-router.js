const express = require('express')

const EventCtrl = require('../controllers/event-ctrl')

const router = express.Router()

router.post('/events', EventCtrl.createTable)
router.put('/:page/:id', EventCtrl.updateEvent)
router.delete('/event/:id', EventCtrl.deleteEvent)
router.get('/event/:id', EventCtrl.getEventById)
router.get('/:id/view', EventCtrl.getEvents)
router.get('/events', EventCtrl.getTables)

module.exports = router
