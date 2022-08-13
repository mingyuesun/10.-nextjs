import App from 'next/aPP'
import Link from 'next/link'
import _appStyle from './_app.module.css'
import '../styles/global.css'

class Layout extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return  { pageProps }
	}
	render() {
		const { Component: RouteComponent, pageProps } = this.props
		return (
			<div>
				<style jsx>
					{
						`
						li {
							display: inline;
							margin-left: 10px;
							line-height: 31px;
						}
						`
					}
				</style>
				<header>
					<img src="/images/logo.png" className={_appStyle.logo}/>
					<ul>
						<li><Link href="/">首页</Link></li>
						<li><Link href="/user/list">用户管理</Link></li>
						<li><Link href="/profile">个人中心</Link></li>
					</ul>
				</header>
				<RouteComponent {...pageProps}/>
				<footer style={{textAlign: "center"}}>@copyright 前端架构</footer>
			</div>
		)
	}
}

export default Layout