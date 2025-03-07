const messages = ["Learn React ", "Apply for jobs ", "Invest your new income "];

function App() {
  const [steps, setSteps] = useState(1);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={steps >= 1 ? "active" : ""}>1</div>
        <div className={steps >= 2 ? "active" : ""}>2</div>
        <div className={steps >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Steps: {steps} : {messages[steps - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => setSteps(steps - 1)}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => setSteps(steps + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
