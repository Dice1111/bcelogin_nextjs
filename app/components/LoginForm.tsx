'use client'
// components/LoginForm.tsx
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()
    console.log(data)
    setMessage(data.message)
  }

  return (
    <form onSubmit={handleLogin} className='space-y-6'>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          className='block w-full p-2 mt-1 border text-black border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          className='block w-full p-2 mt-1 border text-black border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700'
      >
        Login
      </button>
      {message && <p className='mt-2 text-sm text-red-500'>{message}</p>}
    </form>
  )
}

export default LoginForm
