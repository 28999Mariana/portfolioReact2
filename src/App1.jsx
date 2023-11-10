import './App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
function Greating({nombre, edad}){
  // const {nombre} = props
  // console.log(props);
  return ( 
    // eslint-disable-next-line react/prop-types
    <div> Hello, {nombre} {edad}
      <h3>Podemos devolver un solo elemento</h3> 
    </div> 
  )
}

function App() {
  const name = 'John'
  const nombre2 ='Juan';
  const elementoJSX = <div>Hola, {name}!</div>

  const src = "https:/placekitten.com/200/300"
  const img = <img src={src} /> 

  const element = (
    <div> 
      <h1 style={{backgroundColor:'red'}}>Hello React</h1>
      <p>This is JSX</p>
    </div>
    )

  function handleClick(){
    // alert('Hiciste Clic')
    MySwal.fire({
      title: <p>Hello World</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.showLoading()
      },
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>)
    })
  }

  return (
    <>
      
      {/* Esto es un comentario */}
      {elementoJSX}
      {img}
      {element}
      <Greating nombre={name} edad={20}/> 
      <Greating nombre={nombre2} edad={30} /> 
      <button onDoubleClick={handleClick}>Click me!</button>
    </>
  )
}

export default App