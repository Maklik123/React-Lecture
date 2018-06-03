import React from "react"
import {
    Layout, Header, Navigation, Drawer, Content
} from "react-mdl";
import {
    Link
} from "react-router-dom"

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                {/* Uses a transparent header that draws on top of the layout's background */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Header transparent title="Internesss" style={{color: 'white'}}>
                            <Navigation>
                                <Link to='/'>Home</Link>
                                <Link to='/resume'>Resume</Link>
                                <Link to='/aboutme'>About me</Link>
                                <Link to='/project'>Project</Link>
                                <Link to='/contact'>Contact</Link>
                                
                            </Navigation>
                        </Header>
                        <Drawer title="Interness">
                            <Navigation>
                            <Link to='/'>Home</Link>
                                <Link to='/resume'>Resume</Link>
                                <Link to='/aboutme'>About me</Link>
                                <Link to='/project'>Project</Link>
                                <Link to='/contact'>Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>
            </div>
        )
    }
}