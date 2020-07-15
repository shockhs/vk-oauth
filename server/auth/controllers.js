const axios = require('axios')
const methodUrl = 'https://api.vk.com/method'
const accessUrl = 'http://oauth.vk.com/access_token'

exports.getCurrentUserData = async (req, res) => {
    const userId = req.params.id
    const authToken = req.headers.authorization
    const accessData = `?user_ids=${userId}&fields=bdate&access_token=${authToken}&v=5.120`
    try {
        await axios
            .get(`${methodUrl}/users.get${accessData}`)
            .then(response => {
                res.status(200).send(response.data.response[0])
            })
    } catch (err) {
        console.log(err)
    }
}


exports.getUserFriendsData = async (req, res) => {
    const userId = req.params.id
    const authToken = req.headers.authorization
    const accessData = `?user_ids=${userId}&fields=bdate&access_token=${authToken}&v=5.120`
    try {
        await axios
            .get(`${methodUrl}/friends.get${accessData}`)
            .then(response => {
                res.status(200).send(response.data.response.items.slice(0,5))
            })
    } catch (err) {
        console.log(err)
    }
}

exports.login = async (req, res) => {
    const code = req.body.code

    try {
        await axios
            .get(`${accessUrl}?client_id=${process.env.VK_OAUTH_ID}&client_secret=${process.env.VK_OAUTH_SECRET}&redirect_uri=https://esaxco.github.io/vk-oauth/login/callback&code=${code}`)
            .then(response => {
                res.status(200).send({authToken: response.data.access_token, userID: response.data.user_id})
            })
    } catch (err) {
        console.log(err)
    }
}