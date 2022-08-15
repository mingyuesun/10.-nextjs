import UserLayout from '../index'
import request from '@/utils/request'

function UserDetail(props) {
	return (
		<UserLayout>
			<p>NAME: {props.user.name}</p>
			<p>ID: {props.user.id}</p>
		</UserLayout>
	)
}

UserDetail.getInitialProps = async(ctx) => {
	let response = await request.get(`/api/users/${ctx.query.id}`)
	return {
		user: response.data.data
	}
}

export default UserDetail