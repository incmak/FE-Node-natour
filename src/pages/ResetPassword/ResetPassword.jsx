/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
// import jwtDecode from 'jwt-decode'
import { resetPassword } from '../../API/API'

export default function ResetPassword() {
  const navigate = useNavigate()
  const { token } = useParams()
  //   const verifyToken = jwtDecode(token)
  //   if (verifyToken) console.log(verifyToken)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { password, passwordConfirm } = e.target.elements
    const data = {
      password: password.value,
      passwordConfirm: passwordConfirm.value,
    }
    try {
      setIsLoading(true)
      const res = await resetPassword(token, data)
      if (res.status === 200) {
        toast('Password Reset Successfully.')
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    localStorage.getItem('token') && navigate('/') // eslint-disable-line no-unused-expressions
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Change Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-white sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="passwordConfirm"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-white sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? (
                <svg
                  className="mr-3 h-5 w-5 animate-spin text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0
                    3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                'Change Password'
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&#39;t want to change?{' '}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
