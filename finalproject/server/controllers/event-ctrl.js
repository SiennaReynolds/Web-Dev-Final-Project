const Event = require('../models/event-model')

createEvent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an event',
        })
    }

    const event = new Event(body)

    if (!event) {
        return res.status(400).json({ success: false, error: err })
    }

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: event._id,
                message: 'Event created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event not created!',
            })
        })
}
createTable = async (req, res) => {
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const Event = new Schema(
        {
            PantherID: { type: String, required: false },
            FirstName: { type: String, required: false },
            LastName: { type: String, required: false },
            Department: { type: String, required: false },
            Level: { type: String, required: false },
            Campus: { type: String, required: false },
            Degree: { type: String, required: false },
            Email: { type: String, required: false },
            College: { type: String, required: false },
            Year: { type: String, required: false },
            checkin: { type: Boolean, required: false },
        },
        { timestamps: true },
    )

    const body = req.body
    const filler = Object.keys(body);
    console.log(filler[0]);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an event name',
        })
    } else if (filler[0]) {
        //create new collection with user defined name
        const New = mongoose.model(`${filler[0]}`, Event);
        New.createCollection()
        .then(function (collection) {
            console.log('Collection is created!');
            return res.status(200).json({
                success: true,
                id: event._id,
                message: 'Event table created!',
            })
        })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'Event table not created!',
            })
        })
    }
    
    
}

updateEvent = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event not found!',
                
            })
            console.log("Failed to Find");
        }

        event.name = body.name
        event.time = body.time
        event.rating = body.rating
        
        if (event.checkin == true) {
            event.checkin = false
        } else {
            event.checkin = true
        }
        console.log("checkin:"+event.checkin)
        event
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: event._id,
                    message: 'Event updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Event not updated!',
                })
            })
    })
}

deleteEvent = async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }

        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

getEventById = async (req, res) => {
    await Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

getEvents = async (req, res) => {
    await Event.find({}, (err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!events.length) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }
        return res.status(200).json({ success: true, data: events })
    }).catch(err => console.log(err))
}

getTables = async (req, res) => {
    const mongoose = require('mongoose')
    console.log("Starting connection")
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log(err);
            return res.status(400).json({ success: false, error: err })
        }
        else {
            names.forEach(function (e, i, a) {
                console.log("--->>", e.name);
            });
            return res.status(200).json({ names })
        }
    });
}

module.exports = {
    createEvent,
    createTable,
    getTables,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
}
