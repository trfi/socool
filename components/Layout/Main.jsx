import React from 'react'
import LeftSidebar from '../LeftSidebar';
import Header from '../Header'
import { MoralisProvider } from "react-moralis"

const appId = "8tQvS2BhOhuQwFgeTCRsW9vG5SXwzReRJf0Wc1y0"
const serverUrl = "https://acuctaevvpky.grandmoralis.com:2053/server"


function MainLayout({children}) {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Header />
      <div className="flex max-w-screen-lg justify-around container mx-auto space-x-8">
        <LeftSidebar />
        <main className="w-8/12 mb-12">{children}</main>
      </div>
    </MoralisProvider>
  )
}

export default MainLayout