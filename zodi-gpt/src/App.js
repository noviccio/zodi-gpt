import { useState, useEffect} from 'react'



const App = () => { //creates an app function that returns HTML

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)

  const createNewChat = () => {
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }


  const getMessages = async () => {

    const options = {
      method: "POST",
      body : JSON.stringify({
        message: value
      }), 
      headers: {
          "Content-Type": "application/json"
      }
    }


    try{
        const response = await fetch('http://localhost:8000/completions', options)
        const data = await response.json()
        console.log(data)
        setMessage(data.choices[0].message)
    }catch (error) {
       console.error(error)
    }
  }

  useEffect(() => {

    console.log(currentTitle, value, message)
    if (!currentTitle && value && message){
      setCurrentTitle(value)
    }
    if (currentTitle && value && message){
      setPreviousChats(prevChats =>(
        [...prevChats, 
          {
              title: currentTitle,
              role: "user",
              content: value

          }, 
          {
              title: currentTitle,
              role: message.role,
              content: message.content
          }
        ]
      ))

    }

  }, [message, currentTitle] )

  console.log(previousChats)

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
 
  return (
    <div className="App">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New chat</button>
        <ul className="history">
           <li>test</li>
        </ul>
        <nav>
          <p>Made by Michael Novicio!</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>ZodiGPT</h1>}
        <ul className="feed">
          {currentChat.map((chatMessage, index) => <li key={index}>
              <p className = "role"> {chatMessage.role}</p>
              <p></p>
          </li>)}

        </ul>
        <div className ="bottom-section">
            <div className="input-container">
              <input value = {value} onChange={(e) => setValue(e.target.value)}/>
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
