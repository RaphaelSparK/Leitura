export function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4()
}

export function handleInputChange (event) {
  const target = event.target
  const value = target.value
  const name = target.name

  this.setState({
    [name]: value
  })
}
