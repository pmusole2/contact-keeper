const express = require('express')
const router = express.Router()

// @route   GET   api/contacts
// @desc    Get all users contatcs
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})

// @route   POST   api/contacts
// @desc            add new contact
// @access  Private
router.get('/', (req, res) => {
    res.send('Add Contact')
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