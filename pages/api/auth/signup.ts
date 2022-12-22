import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import {User} from '../../../db/models/User'
import {mongoConnect} from '../../../db/connection'

mongoConnect()

export default async function signUp(req: NextApiRequest, res: NextApiResponse) {
	const { username, password } = req.body
	const Exist = await User.findOne({username})

	if(Exist) return res.status(403).json({"msg": "User already exists"})
	const hashedPass = bcrypt.hashSync(password, 10)
	const newUser = await User.create({username, hashedPass})
	res.status(201).json({
		"msg": "User created successfully",
		"user": newUser
	})
}