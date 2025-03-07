const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const steps = 1;

  return (
    <div className="steps">
      <className="numbers">
        <div className={steps >= 1 ? "active" : ""}>1</div>
        <div className={steps >= 2 ? "active":""}>2</div>
        <div>3</div>
      </div>

      <p className="message">
        Steps: {steps} : {messages[steps - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
