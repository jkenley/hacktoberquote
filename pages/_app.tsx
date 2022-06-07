import App from "next/app";
import { DefaultSeo } from "next-seo";
import Head from 'next/head';

export default class MyApp extends App {
  render() {

    const { Component } = this.props;

    return (
			<>
				<DefaultSeo
					title='Hacktoberquote - Quotes about open source software and team collaboration.'
					description='Quotes about open source software and team collaboration.'
					additionalMetaTags={[
						{
							name: 'keywords',
							content: 'hacktoberquote, hacktoberfest, open source software quotes, team collaboration quotes',
						},
					]}
				/>
				<Head>
					<meta charSet='utf-8' />
					<meta httpEquiv='x-ua-compatible' content='ie=edge' />
					<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
					<link rel='shortcut icon' href='/images/icon-48x48.png' />
					<link href='https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap' rel='stylesheet' />
					<link rel='stylesheet' href='/icofont/icofont.min.css' />
					<link rel='stylesheet' href='/css/main.css' />
				</Head>
				<Component />
			</>
		);
  }
}
