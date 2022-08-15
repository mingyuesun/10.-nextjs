import React from "react"
import Link from "next/link"
import UserLayout from "./index"
import request from "@/utils/request"

class UserList extends React.Component {
  constructor(props) {
    super(props)
    console.log("UserList constroctor")
  }
  render() {
    return (
      <UserLayout>
        <ul>
          {this.props.list.map((user) => (
            <li key={user.id}>
              <Link href={`detail/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </UserLayout>
    )
  }
}

UserList.getInitialProps = async () => {
	console.log('UserList getInitialProps')
  const response = await request.get("/api/users")
  return {
    list: response.data.data
  }
}

export default UserList
