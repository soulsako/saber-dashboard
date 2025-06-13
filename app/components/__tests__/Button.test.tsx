import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
