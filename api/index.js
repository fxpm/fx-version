const micro = require('micro')
const axios = require('axios')

const { GITHUB_ACCESS_TOKEN } = process.env
const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
    }
})

module.exports = micro((req, res) => {
    return github.get('/repos/citizenfx/fivem/tags')
        .then((r) => {
            return r.data
        })
})