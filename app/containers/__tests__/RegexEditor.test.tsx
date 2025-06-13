import { render, screen } from "@testing-library/react";
import { RegexProvider } from "../../context/RegexContext";
import RegexEditor from "../RegexEditor";

describe("RegexEditor", () => {
  it("renders input and add button", () => {
    render(
      <RegexProvider>
        <RegexEditor />
      </RegexProvider>
    );

    expect(screen.getByPlaceholderText("Enter regex")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
