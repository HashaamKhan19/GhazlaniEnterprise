import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const style = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
};
function Paypal() {
  return (
    <div style={style}>
      <h1>Ghazlani Enterprises</h1>
      <img height="100" src="/vite.svg" alt="How to be Great at Anything (Book Cover)" />
      <p>
        <span className="book-price">$13.99</span>
      </p>
      <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;
