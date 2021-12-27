// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { images } = require('./imgData.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(images)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
  
}
