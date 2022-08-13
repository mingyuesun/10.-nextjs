import React, {useRef} from 'react'
import UserLayout from './index'

function UserAdd() {
	let nameRef = useRef()
	let passwordRef = useRef()
	let handleSubmit = event => {
		event.preventDefault()
		let user = nameRef.current.value
		let password = passwordRef.current.value
	}
	return (
		<div>
			<UserLayout>
				<form onSubmit={handleSubmit}>
					用户名：<input ref={nameRef}/>
					密码：<input ref={passwordRef}/>
					<button type="submit">添加</button>
				</form>
			</UserLayout>
		</div>
	)
}

export default UserAdd
