import Contenedor from './components/Contenedor.jsx';
import { Button } from 'react-bootstrap';

function App() {
  const listaAlumnos = [
    {nombre: 'abel', apellido: 'paz'},
    {nombre: 'eva', apellido: 'amaral'},
    {nombre: 'lucila', apellido: 'martinez'},
    {nombre: 'guadalupe'}
  ];

  return (
    <>
      <p style={{ color: 'red' }}>hola mundo</p>
      {
        listaAlumnos.map((alumno, key) => {
          const {nombre, apellido} = alumno;
          return (
            <Contenedor key = {key} nombre={nombre} apellido={apellido}/>
          )
        })
      }

      <Button>SAVE</Button>
      
      
    </>
  )
}

export default App
