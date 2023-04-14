import "./App.css";
import { IconSection } from "./components/IconSection";
import Navigation from "./components/Navigation";

function App() {
  const AllCompanies = [
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      ),
      name: "Logoisum",
    },
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" />
        </svg>
      ),
      name: "Logosum",
    },
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
        </svg>
      ),
      name: "Sumlogo",
    },
    {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
        </svg>
      ),
      name: "Sumlogo",
    },
  ];
  return (
    <div className="App">
      <Navigation />
      <Header />
      {/* <IconSection /> */}
      <ul className="icon_container">
        {AllCompanies.map((company) => (
          <Company logo={company.logo} name={company.name} />
        ))}
      </ul>
      <ValueCard />
    </div>
  );
}

function Company(props) {
  return (
    <section>
      <li className="companiesContainer">
        <div>{props.logo}</div>
        <p>{props.name}</p>
      </li>
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <h1>
          Lorem ipsum dolor sit amet, <span> aspernatur nihil nesciunt.</span>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dicta corporis nulla.</p>
        <button>
          Get Started
          <ButtonIcon />
        </button>
      </div>
      <img src="src/headerIMG.png" alt="header image" />
    </header>
  );
}

function ButtonIcon() {
  return " >";
}

function Cards(props) {
  return (
    <article className="card">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
        <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
      </svg>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
}

function ValueCard() {
  return (
    <main className="main">
      <section>
        <p>our services</p>
        <h2>Where we can add value</h2>
      </section>
      <section className="cards" text="lorem sit amet consectetur. Eligendi dicta corporis nulla. ">
        <Cards title="Hej" text="Magni sunt provident expedita. Eligendi dicta corporis nulla." />
        <Cards title="Ipsum" text="lorem sit amet consectetur. Eligendi dicta corporis nulla." />
        <Cards title="Lorem" text="Magni sunt provident expedita. Eligendi dicta corporis nulla." />
        <Cards title="consectetur" text="Magni sunt provident expedita. Eligendi dicta corporis nulla." />
        <Cards title="Lorem" text="Magni sunt provident expedita. Eligendi dicta corporis nulla." />
        <Cards title="Lorem" text="Magni sunt provident expedita. Eligendi dicta corporis nulla." />
      </section>
    </main>
  );
}

export default App;
