import react from 'react';
import './App.css';

function Header (props) {
  console.log(props)
  return (
    <div className="App">
    <header>
      <h1>{props.name}'s kitchen</h1>
      </header>
    </div>
  );
}
function Main(props){
  return(
    <section>
      <p>We Serve most {props.adjective} food arround</p>
      <ul style={{textAlign:"left"}}>
      { props.dishes.map((dish, i) => <li key={i}>{dish}</li>)
}
      </ul>
      </section>
  );
}
function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
      </footer>
  )
}
const dishes=[
  "Macroni and Cheese",
  "selmon",
  "Tofu with Vegetables"
];

function App(){
  return (
    <div className="App">
      <Header name="cindy" />
      <Main adjective="amazing" dishes={dishes} />
    <Footer year={new Date().getFullYear()} />
    </div>
  );
}
export default App;
