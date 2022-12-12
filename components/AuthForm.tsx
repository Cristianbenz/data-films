import React from 'react'
import Button from './Button'

function AuthForm() {
	return (
		<form className='flex flex-col mx-auto w-1/2 gap-3' >
			<label htmlFor="" className='flex flex-col'>
				<span>Username:</span>
				<input type="text" name="username" className='border-gray-500 border-solid border-2' />
			</label>
			<label htmlFor="" className='flex flex-col'>
				<span>Password:</span>
				<input type="password" name="password" className='border-gray-500 border-solid border-2' />
			</label>
			<Button type='primary' styles='mt-3' />
		</form>
	)
}

export default AuthForm