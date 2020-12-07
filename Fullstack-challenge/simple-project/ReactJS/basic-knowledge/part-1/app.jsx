class FirstComponent extends React.Component {
  render() {
    return <h1>My very first component.</h1>
  }
}

class SecondComponent extends React.Component {
  render() {
    return <h2>My second component.</h2>
  }
}

class NamedComponent extends React.Component {
  render() {
    return <p>My name is {this.props.namaku}.</p>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent/>
        <SecondComponent/>
        <NamedComponent namaku="Isyana"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
