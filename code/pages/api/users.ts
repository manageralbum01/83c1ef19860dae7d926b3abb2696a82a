import type { NextApiRequest, NextApiResponse } from 'next'

interface User {
  id: number
  name: string
  followers: number
}

type Data = User[]

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const users = [
    {
      id: -1,
      name: 'AE Studio',
      followers: 999999,
    },
  ]

  res.status(200).json(users)
}

export default handler
