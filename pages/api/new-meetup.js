// api/new-meetup

export default function handler(req, res) {
    console.log('req', req.method)
    console.log('body', req.body)
    if (req.method === 'POST') {
        const data = req.body
        const { title, image, address, description } = data
    }
}

