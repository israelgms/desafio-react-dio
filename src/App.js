import Item from './components/Item'
const App = () => {
  return (
    <>
      <h1>React Aplication</h1>
      <p>Minha primeira aplicação com ReactJS</p>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
        <Item>
          Item 4
        </Item>
        <Item>
          Item 5
        </Item>
      </ul>
    </>
  )
}

export default App;