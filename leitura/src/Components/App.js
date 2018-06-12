import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetCategories } from '../Actions'
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import {
  Container,
  Dropdown,
  Image,
  Menu
} from 'semantic-ui-react'

import ListPosts from './ListPosts'

class App extends Component {
  componentDidMount () {
    this.props.fetchGetCategories()
  }

  render () {
    const { categories } = this.props

    return (
      <div >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Leitura
            </Menu.Item>
            <Menu.Item as={Link} to='/'>Todos</Menu.Item>

            <Dropdown item simple text='Categorias'>
              <Dropdown.Menu>
                { categories.categoryList.map(cat => (<Dropdown.Item key={cat.name} as={Link} to={'/' + cat.path}>{cat.name}</Dropdown.Item>))}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <Container>
          <Switch>
            <Route exact path='/' render={(props) => (
              <ListPosts {...props} />
            )} />
            <Route exact path='/:category' render={(props) => (
              <ListPosts {...props} />
            )} />
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
