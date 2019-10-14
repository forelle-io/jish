import * as React from 'react'
import Head from 'next/head'
import Header from '../components/root/Header'
import CssBaseLine from '@material-ui/core/CssBaseline';
type LayoutProps = {
  title?: string
}
const layoutStyle = {
  margin: 0,
  padding: 0,
  border: 'none'
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#CCC"/>
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="static/favicon.ico"/>
    </Head>
    <CssBaseLine/>
    <Header/>
    {children}
  </div>
)
export default Layout