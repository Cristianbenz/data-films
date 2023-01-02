import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import {User} from '../../../db/models/User'
import {mongoConnect} from '../../../db/connection'

mongoConnect()

export default async function signIn(req: NextApiRequest, res: NextApiResponse) {
	const { username, password } = req.body
    if(!username || !password) return res.status(400).json({"msg": "Values cannot be blank"})
	const user = await User.findOne({username})
    const validPass = user? bcrypt.compareSync(password, user.hashedPass) : false
    if(!user || !validPass) return res.status(404).json({'msg': 'User not exists'})

    const token = jwt.sign({
        exp: (Date.now() / 1000) + 60 * 60 * 25 * 14,
        id: user._id
    }, String(process.env.JWT_SECRET),)
    const serialized = cookie.serialize('authToken', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === "production",
        path: '/',
        maxAge: 60 * 60 * 24 * 14
    })
    res.setHeader('Set-Cookie', serialized)
    return res.json({token})
}