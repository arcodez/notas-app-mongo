const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('notes from Database');
});

module.exports = router; 