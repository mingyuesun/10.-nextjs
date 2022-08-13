import Link from 'next/link'

function UserLayout(props) {
	return (
		<div>
			<ul>
				<li><Link href="/user/list">用户列表</Link></li>
				<li><Link href="/user/add">用户管理</Link></li>
			</ul>
			{props.children}
		</div>
	)
}

export default UserLayout
