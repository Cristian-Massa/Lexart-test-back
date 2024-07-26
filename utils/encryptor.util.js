const bcrypt = require('bcrypt');

module.exports = {
    encrypter: async (password) => {
        if (typeof password === 'string') {
            try {
                const hash = await bcrypt.hash(password, 10);
                return hash;
            } catch (err) {
                throw new Error('Error hashing password: ' + err.message);
            }
        } else {
            throw new TypeError('Password must be a string');
        }
    },

    compare: async (hash, password) => {
        if (typeof password === 'string') {
            try {
                const result = await bcrypt.compare(password, hash);
                return result;
            } catch (err) {
                throw new Error('Error comparing password: ' + err.message);
            }
        } else {
            throw new TypeError('Password must be a string');
        }
    }
};