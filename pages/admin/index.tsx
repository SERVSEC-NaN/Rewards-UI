import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import cookies from 'js-cookie'

type Inputs = {
  email: string,
  password: string,
};

const sendHttpRequest = (method: string, url: string, data: any): any => {
  return fetch(
    url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}
    }
  )
    .then(response => {
      if (response.status >= 400) { // rejected
        return response.json().then(errorResponseData => {
          const error = new Error('Something went wrong!');
          error.message = errorResponseData;
          throw error;
        });
      }
      return response.json() // jsonified token
    }
  ) 
}

export default function Admin() {
  const { handleSubmit, register, setError, formState: { errors } } = useForm<Inputs>()
  const router = useRouter()
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    sendHttpRequest('POST', `https://reqres.in/api/login`, data)
      .then(response => {
        const token = JSON.stringify(response)
        cookies.set("token", token, {expires: 1/24})
        router.push('/admin/tags')
      })
      .catch(err => {
        console.log(err, err.messge)
      })
  }

  // React.useEffect(() => {
  //   setError("email", {
  //     type: "manual",
  //     message: "User does not exist!"
  //   });
  // }, [setError])
  
  return (
    <Layout>
      <h1 className="title md:text-8xl text-6xl">
        REWARD$
    </h1>

      <p className="text-center md:text-3xl text-2xl text-gray-500 mb-10">
        Admin page
    </p>
    
      <div className="w-full max-w-sm mx-auto text-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <input
              {...register("email", { required: true })}
              id='email'
              name='email'
              type='text'
              placeholder='email'
              autoComplete='off'
              spellCheck='false'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <input
              {...register("password", { required: true })}
              id='password'
              name='password'
              type='password'
              placeholder='password'
              autoComplete='off'
              spellCheck='false'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* {errors.email && <p className="mb-4 text-red-500">{errors.email.message}</p>} */}
          <div className="flex items-center">
            <button type="submit" className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              LOGIN
          </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm">
          &copy;2021 Rewards.
      </p>
      </div>

      <style jsx>{`
      .title {
        font-family: Arvo;
        color: var(--primary-color);
      }

      .login-button {
        border: 2px solid var(--primary-color);
        cursor: pointer;
        width: 250px;
        color: var(--primary-color);
        transition: all 0.3s ease-in-out;
      }

      .login-button:hover {
        background: var(--primary-color);
        color: #ffffff;
        outline: none;
      }
    `}</style>
    </Layout>
  )
}

export function getServerRenderSize() {}