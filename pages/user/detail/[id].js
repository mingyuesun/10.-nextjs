import UserLayout from '../index'

function UserDetail(props) {
	return (
		<UserLayout>
			<p>ID: {props.user.id}</p>
		</UserLayout>
	)
}

UserDetail.getInitialProps = async(ctx) => {
	return {user: {id: ctx.query.id}}
}

export default UserDetail