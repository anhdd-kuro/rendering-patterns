import { fireEvent, render, screen } from "@testing-library/react";
import { PButton } from ".";

describe("Atoms/PButton", () => {
  describe("Button disabled", () => {
    const mockedOnClick = vi.fn();

    beforeEach(() => {
      mockedOnClick.mockReset();

      render(
        <>
          <PButton disabled onClick={mockedOnClick}>
            Disabled Button
          </PButton>
          <PButton onClick={mockedOnClick}>Normal Button</PButton>
        </>,
      );
    });

    afterEach(() => {
      const disabledButton = screen.getByText<HTMLButtonElement>("Disabled Button");
      expect(disabledButton).matchSnapshot();
      expect(disabledButton).matchSnapshot();
    });

    test("render", () => {
      const disabledButton = screen.getByText<HTMLButtonElement>("Disabled Button");
      expect(disabledButton).toBeInTheDocument();
      expect(disabledButton.tagName).toBe("BUTTON");
    });

    test("attributes", () => {
      const disabledButton = screen.getByText<HTMLButtonElement>("Disabled Button");
      const normalButton = screen.getByText<HTMLButtonElement>("Normal Button");
      expect(disabledButton).toBeDisabled();
      expect(normalButton).toBeEnabled();
    });

    test("click event", () => {
      const disabledButton = screen.getByText<HTMLButtonElement>("Disabled Button");
      const normalButton = screen.getByText<HTMLButtonElement>("Normal Button");
      fireEvent.click(disabledButton);
      expect(mockedOnClick).not.toBeCalled();

      fireEvent.click(normalButton);
      expect(mockedOnClick).toBeCalledTimes(1);
    });
  });

  describe("Button type", () => {
    let button: HTMLButtonElement;

    afterEach(() => {
      expect(button).matchSnapshot();
    });

    test("should have button default type", () => {
      render(<PButton>Button</PButton>);
      button = screen.getByText("Button");
      expect(button).toHaveAttribute("type", "button");

      expect(button).matchSnapshot();
    });

    test("should have given type", () => {
      render(<PButton type="submit">Typed Button</PButton>);
      button = screen.getByText("Typed Button");
      expect(button).toHaveAttribute("type", "submit");
    });
  });
});
