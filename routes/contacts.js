const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route   GET   api/contacts
// @desc    Get all users contatcs
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contatcs = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contatcs)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST   api/contacts
// @desc            add new contact
// @access  Private
router.post('/', [auth, [
    check('name', 'Name is required')
    .not()
    .isEmpty()
]], 
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name, email, phone, type} = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        })
        const contact = await newContact.save()

        res.json(contact)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT   api/contacts/:id
// @desc    Update contact
// @access  Private
router.get('/:id', (req, res) => {
    res.send('Update contact')
})

// @route   DELETE   api/contacts/:id
// @desc    Update contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Update contact')
})

module.exports = router;