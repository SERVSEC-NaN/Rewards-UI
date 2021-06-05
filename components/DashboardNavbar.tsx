import Link from 'next/link'
import LogoutButton from './LogoutButton'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default function DashboardNavbar() {
  return (
    <>
      <div className="flex">
        <nav>
          <ul>
            <Link href="/admin/promoters">
              <a>Promoters</a>
            </Link>
            <Link href="/admin/promotions">
              <a>Promotions</a>
            </Link>
            <Link href="/admin/subscribers">
              <a>Subscribers</a>
            </Link>
            <Link href="/admin/subscriptions">
              <a>Subscriptions</a>
            </Link>
            <Link href="/admin/tags">
              <a>Tags</a>
            </Link>
          </ul>
        </nav>
        <LogoutButton/>
      </div>
      <div>
        <EditButton />
        <DeleteButton />
      </div>
      
      <style jsx>{`
        ul {
          display: flex;
        }
        a {
          margin-right: 20px;
        }
      `}</style>
    </>
  )
}