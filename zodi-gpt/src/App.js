
const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
           <li>test</li>
        </ul>
        <nav>
          <p>Made by Michael Novicio</p>
        </nav>
      </section>
      <section className="main">
        <h1>ZodiGPT</h1>
        <ul className="feed">

        </ul>
        <div className ="bottom-section">
            <div className="input-container">
              <input/>
              <div id="submit">➢</div>
            </div>
            <p className= "info">
              ZodiGPT Aug 19 Version. This is a project made to 
              understand how the OpenAPI works!
            </p>
        </div>
      </section>
    </div>
  )
}

export default App;
