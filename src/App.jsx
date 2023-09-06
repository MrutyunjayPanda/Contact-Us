import "./App.css";
import Nav from "./components/nav/Nav";
import ContactHeader from "./components/contactheader/Contactheader";
import ContactForm from "./components/contactform/ContactForm";

function App() {
  return (
    <div>
      <Nav />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
