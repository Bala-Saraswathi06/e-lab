import React from 'react'
import { Route ,Redirect, Switch} from 'react-router-dom'
import Main from '../template/pages/Main'
import GalleryPage from '../template/pages/GalleryPage'
import AddCategory from '../admin/pages/AddCategory'
import AddData from  '../admin/pages/AddData'
import ContentPage from '../template/pages/ContentPage'
import Logout from '../admin/auth/Logout'

const login = localStorage.getItem('login')

function BaseRouter() {
    return (
            <>
                <Route exact path='/' > <Main /></Route>
                <Route exact path='/botany' > <GalleryPage lab='botany'/></Route>
                <Route exact path='/zoology' > <GalleryPage lab='zoology'/></Route>
                <Route exact path='/content' > <ContentPage /></Route>
                <Route exact path='/logout' > <Logout /></Route>
                {login ? <>
                <Route exact path='/addCategory' > <AddCategory /></Route> 
                <Route exact path='/addContent' > <AddData /></Route> </> :
                <Redirect to='/' /> }
            </>
    )
}

export default BaseRouter
