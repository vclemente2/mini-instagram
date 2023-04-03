import UserRepository from "../repositories/UserRepository.js";

export default class UserMiddleware {
    verifyRequiredFieldUsername(req, res, next) {
        const { username } = req.body;
        if (!username) {
            return res.status(422).json({ message: 'Username is a required field.' });
        }
        next();
    }

    verifyRequiredFieldPassword(req, res, next) {
        const { password } = req.body;
        if (!password) {
            return res.status(422).json({ message: 'Password is a required field.' });
        }
        next();
    }

    async verifyIfUsernameIsAlredyRegistered(req, res, next) {
        const { username } = req.body;

        try {
            const usernameExists = await new UserRepository().findByUsername(username);

            if (usernameExists) {
                return res.status(422).json({ message: 'This username is alredy registered.' })
            }

            next();
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}