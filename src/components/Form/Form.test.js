import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import Form from "./Form";

// test("submitting the form calls onSubmit with value and coin", () => {
//   const handleSubmit = jest.fn();
//   render(<Form onSubmit={handleSubmit} />);

//   userEvent.type(screen.getByLabelText(/valor/i), "3000");
//   userEvent.selectOptions(screen.getByLabelText(/moeda/i), "USD");
//   userEvent.click(screen.getByRole("button", { name: /calcular/i }));

//   expect(handleSubmit).toHaveBeenCalledWith({
//     value: "3000",
//     coin: "USD",
//   });
//   expect(handleSubmit).toHaveBeenCalledTimes(1);
// });

// describe("test for input", () => {
//   it("test disable component button ", () => {
//     const handleSubmit = jest.fn();
//     render(<Form onSubmit={handleSubmit} />);
//     const input = screen.getByPlaceholderText(/Digite o valor/i);
//     fireEvent.change(input, { target: { value: "l" } });

//     const button = screen.getByRole("calcular");
//     expect(button).toBeDisabled();
//   });

//   it("test for out", () => {
//     const handleSubmit = jest.fn();
//     render(<Form onSubmit={handleSubmit} />);
//     const input = screen.getByPlaceholderText(/Digite o valor/i);
//     fireEvent.change(input, { target: { value: "20" } });

//     //base
//     const selectBaseCoin = screen.getByTestId("select", { name: "basecoin" });
//     // userEvent.selectOptions(
//     //   // Find the select element, like a real user would.
//     //   screen.getByRole("combobox"),
//     //   // Find and select the Ireland option, like a real user would.
//     //   screen.getByRole("option", { name: "basecoin" })
//     // );

//     fireEvent.change(selectBaseCoin, {
//       target: { value: "USD" },
//     });
//     //result
//     // const selectResultCoin = screen.getByRole("select", {
//     //   name: "resultcoin",
//     // });
//     userEvent.selectOptions(
//       // Find the select element, like a real user would.
//       screen.getByRole("combobox"),
//       // Find and select the Ireland option, like a real user would.
//       screen.getByRole("option", { name: "resultcoin" })
//     );
//     fireEvent.change(selectResultCoin, {
//       target: { value: "EUR" },
//     });

//     const button = screen.getByRole("button", { name: /calcular/i });
//     fireEvent.click(button);
//     const labelOutConvert = screen.getByRole("out", { name: 20 });

//     expect(labelOutConvert);
//   });
// });
describe("test clear feature", () => {
  it("expect buttons clear", () => {
    // const handleSubmit = jest.fn();
    render(<Form />);
    const button = screen.getByRole("limpar");
    fireEvent.click(button);

    const buttonCalculate = screen.getByRole("calcular");
    expect(buttonCalculate).toBeDisabled();
  });
});
