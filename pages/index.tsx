import * as React from 'react'
import DefaultLayout from '../layouts/Default'
import { Button } from '@material-ui/core';

const Index: React.FunctionComponent = () => {
  return (
    <DefaultLayout title="Home">
      <h1>Hello Next.js 👋</h1>
      <Button variant="contained">
        Default
      </Button>
    </DefaultLayout>
  )
}
export default Index