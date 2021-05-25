import { useRouter } from 'next/router'
import cookie from 'js-cookie'

export default function Logout(address) {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        cookie.remove("token")
        router.push('/admin')
      }}
      className="button py-2 px-4 mt-5 bg-transparent hover:bg-red-500 hover:text-white hover:border-red-500 text-gray-800 font-bold border border-gray-400 rounded shadow">
      Logout
    </button>
  )
}