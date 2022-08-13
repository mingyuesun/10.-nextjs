import Link from 'next/link'
import UserLayout from './index'

function UserList(props) {
	return (
		<UserLayout>
			<ul>
				{props.list.map(user => <li key={user.id}><Link href={`detail/${user.id}`}>{user.name}</Link></li>)}
			</ul>
		</UserLayout>
	)
}

UserList.getInitialProps = async() => {
	return {
		list: [
			{id: 1, name: "张三"},
			{id: 2, name: "李四"}
		]
	}
}

export default UserList