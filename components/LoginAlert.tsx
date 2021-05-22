import { useState } from "react"

const Alert = ({ color }) => {
  const [showAlert, setShowAlert] = useState(true)
  return (
    <>
      {showAlert ? (
        <div
          className={
            "w-1/2 flex text-white text-center mx-auto px-6 py-4 border-0 rounded relative mb-4 bg-" +
            color +
            "-500"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-6 mx-2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Login success!</span>
        </div>
      ) : null}
    </>
  )
}

export default function LoginAlert() {
  return <Alert color="green" />
}