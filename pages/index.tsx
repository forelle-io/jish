import * as React from 'react'
import DefaultLayout from '../layouts/Default'

const Index: React.FunctionComponent = () => {
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.dir(err));
    }
  })
  return (
    <DefaultLayout title="Home">
    </DefaultLayout>
  )
}
export default Index