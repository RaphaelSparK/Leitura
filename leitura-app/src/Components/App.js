import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetCategories } from '../Actions'
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import {
  Container,
  Dropdown,
  Menu,
  Label
} from 'semantic-ui-react'
import './App.css'

import ListPosts from './ListPosts'
import PostDetails from './PostDetails'
import PostEdit from './PostEdit'

import ModalPost from './ModalPost'
import Page404 from './Page404'

class App extends Component {
  componentDidMount () {
    this.props.fetchGetCategories()
  }

  setAuthor () {

  }

  render () {
    const { categories } = this.props

    return (
      <div >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
            Leitura
            </Menu.Item>
            <Menu.Item as={Link} to='/'>Todos</Menu.Item>

            <Dropdown item simple text='Categorias'>
              <Dropdown.Menu>
                { categories.categoryList.map(cat => (<Dropdown.Item key={cat.name} as={Link} to={'/' + cat.path}><Label circular color={this.props.categories.colors[cat.name]} empty />{cat.name}</Dropdown.Item>))}
              </Dropdown.Menu>
            </Dropdown>
            <ModalPost />
          </Container>
        </Menu>
        <Container className='m-t10vh'>
          <Switch>
            <Route exact path='/' component={ListPosts} />
            {/* <Route exact path='/new' component={PostNew} /> */}
            <Route exact path='/:category' component={ListPosts} />
            <Route exact path='/:category/:id' component={PostDetails} />
            <Route exact path='/post/:id/edit' component={PostEdit} />
            <Route path='/404' component={Page404} />
          </Switch>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetCategories }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
