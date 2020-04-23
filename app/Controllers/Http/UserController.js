'use strict'
const User = use('App/Models/User')
const Helpers = use('Helpers')

class UserController {

    async signup({ request, auth, response }) {
        // get user data from signup form
        const userData = request.only(['name', 'username', 'email', 'password'])
        const userExists = await User.findBy('email', userData.email)
        if (userExists) {
            return response
                .status(400)
                .send({ error: 'User already registered' })
        }
        try {
            // save user to database
            const user = await User.create(userData)
            // generate JWT token for user
            const token = await auth.generate(user)

            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                error: error,
                message: 'There was a problem creating the user, please try again later.'
            })
        }
    }

    async login({ request, auth, response }) {
        try {
            // validate the user credentials and generate a JWT token
            const token = await auth.attempt(
                request.input('email'),
                request.input('password')
            )

            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            response.status(400).json({
                status: 'error',
                message: 'Invalid email/password'
            })
        }
    }

    async updatePicture({ request, auth, response }) {

        // await auth.check()
        const profilePic = request.file('profile_pic', {
            types: ['image'],
            size: '5mb'
        })

        await profilePic.move(Helpers.tmpPath('avatar'), {
            name: 'custom-name.jpg',
            overwrite: true
        })

        if (!profilePic.moved()) {
            return profilePic.error()
        }
        return response.send({ msg: 'File moved' })

    }
}

module.exports = UserController
