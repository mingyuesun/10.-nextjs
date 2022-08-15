import React, {useRef} from 'react'
import router from 'next/router'
import UserLayout from './index'
import request from '@/utils/request'

function UserAdd() {
	let nameRef = useRef()
	let passwordRef = useRef()
	let handleSubmit = async event => {
		event.preventDefault()
		const name = nameRef.current.value
		const password = passwordRef.current.value
		const user = {name, password}
		let response = await request.post('/api/register', user).then(res => res.data)
		if (response.success) {
			router.push('/user/list')
		} else {
			alter('添加用户失败')
		}
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
