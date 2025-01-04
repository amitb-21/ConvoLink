const crypto = require('crypto');
const{ connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');

const signup = (req,res) => {
    try {
        const { fullName, username, password, phoneNumber} = req.body;

        const userId = crypto;
    } catch (err) {
        console.log(err);

        res.status(500).json({ message: error});
    }
};
const login = (req,res) => {
    try {
        
    } catch (err) {
        console.log(err);

        res.status(500).json({ message: error});
    }
};

module.exports = {signup, login};