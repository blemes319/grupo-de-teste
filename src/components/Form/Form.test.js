import { fireEvent, render, screen } from "@testing-library/react";

import Form from "./Form";

describe("test for input", () => {
  it("test disable component button ", () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);
    const input = screen.getByPlaceholderText(/Digite o valor/i);
    fireEvent.change(input, { target: { value: "l" } });

    const button = screen.getByRole("button", { name: "Calcular" });

    expect(
      screen.getByText("Não é um número o que foi digitado!")
    ).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("O valor não pode ser vazio", () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);
    const input = screen.getByPlaceholderText(/Digite o valor/i);
    fireEvent.change(input, { target: { value: "" } });

    const button = screen.getByRole("button", { name: "Calcular" });

    expect(screen.getByText("Campo está vazio")).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  test("Verificar o botão limpar", () => {
    render(<Form />);
    const button = screen.getByRole("limpar");
    fireEvent.click(button);

    const buttonCalculate = screen.getByRole("button", { name: "Calcular" });
    const value = screen.getByRole("textbox", { name: "Valor:" });
    expect(value.value).toBe("0");
    expect(buttonCalculate).toBeDisabled();
  });
});
