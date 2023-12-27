import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

// import sleep from '../images/sleep.png'

import * as errorStyles from './404.module.scss'


const NotFound = () => {

    return (
        <Layout>
            <Head title="404" />
            <div className={[errorStyles.heading, " image"].join(' ')}>

                <h2>404 Error. Page not found.<br />But you found us sleeping.<br />ZZZZZZZZ</h2>

                {/* <img src={sleep} alt="" /> */}

            </div>
        </Layout>
    )
}

export default NotFound
