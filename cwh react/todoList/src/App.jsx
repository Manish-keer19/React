import { useState, useRef, useEffect } from 'react'
import MyComponent from './MyComponent';


function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handlechange = (e) => {

    setTodo(e.target.value);
    console.log(e.target.value);
    setlocstorage();
  }



  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), todo, iscompleted: false }])
    setTodo("");
    console.log(todos);
    setlocstorage();
  }

  const handlecheckbox = (e) => {
       let id = e.target.name;
       setTodos(todos.map((item)=> item.id===id?{...item, iscompleted:true}:item))
      console.log(todos);
    setlocstorage();
  }

  const handledelete = (e, id) => {
    console.log("id is ", id)

    let newtodos = todos.filter(item => {
      return item.id !== id;
    })
    console.log(newtodos)
    setTodos(newtodos);
    setlocstorage();

  }
  const handleclick = (e)=>{
    if(e.key=='Enter'){
      handleAdd();
    }
  }
  const handleedit = (e,id) => {
   
     let todo = todos.filter(item=>{
      return item.id ===id;
     })
     setTodo(todo[0].todo);
     let newtodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newtodos); 
  }

  useEffect(() => {
    let todostring = localStorage.getItem("todos");

    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }


  }, [])


  function setlocstorage() {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  return (
    <>

      <div id="main">

        <div id="container">

          <h1> I-task manage your todos in on place</h1>
          <h3>Add todo</h3>
          <div id="input">
            <input type="text" placeholder='enter your todos'
              onChange={handlechange}
              onKeyDown= {(e)=>{
                handleclick(e);
               }}
            value={todo} />
            <button className='btn' onClick={handleAdd}>Save</button>
          </div>




          <div id="another-cont">
            <input type="checkbox" value={false}  />
            <label >show finished</label>
            <h3 style={{textAlign:"center"}}>Your todos</h3>

            <div id="todos-list">
              {todos.map(item => {
                return (

                  <div key={item.id} id="todos">
                    <input   type="checkbox" name={item.id}
                      onChange={handlecheckbox}
                      checked={item.iscompleted} />
                    <span className='spn'  >{item.todo}</span>

                    <button className='btn' onClick={
                      (e) => { handleedit(e, item.id) }}>Edit</button>
                    <button className='btn' onClick={
                      (e) => {
                        handledelete(e, item.id)
                      }}>remove</button>
                  </div>
                )
              })}

            </div>


          </div>



        </div>
      </div>
    </>
  )
}

export default App
