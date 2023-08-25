
const App = () => { //creates an app function that returns HTML

  const getMessages = async () => {

    const options = {
      method: "POST",
      body : JSON.stringify({
        message: "hello how are you?"
      }), 
      headers: {
          "Content-Type": "application/json"
      }
    };


    try{
        const response = await fetch('http://localhost:8000/completions', options)
        const data = await response.json()
        console.log(data)
    }catch (error) {
       console.error(error)
    }
  }





  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
           <li>test</li>
        </ul>
        <nav>
          <p>Made by Michael Novicio!</p>
        </nav>
      </section>
      <section className="main">
        <h1>ZodiGPT</h1>
        <ul className="feed">

        </ul>
        <div className ="bottom-section">
            <div className="input-container">
              <input/>
              <div id="submit" onClick={getMessages}>➢</div>
            </div>
            <p className= "info">
              ZodiGPT Aug 19 Version. This is a project made to learn about React.js, and to 
              understand how the OpenAPI works!
            </p>
        </div>
      </section>
    </div>
  )
}

export default App;
