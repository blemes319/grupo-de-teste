import "./App.css";
import Form from "./components/Form/Form";
import QuotationCoin from "./components/QuotationCoin/QuotationCoin";

function App() {
  return (
    <div className="layout-form">
      <Form />
      <div className="history-show">
        <QuotationCoin />
      </div>
    </div>
  );
}

export default App;
