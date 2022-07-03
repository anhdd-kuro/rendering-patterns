import { fireEvent, render, screen } from "@testing-library/react";
import { PButton } from ".";

describe("Atoms/PButton", () => {
  describe("Button disabled", () => {
    const mockedOnClick = vi.fn();

    let disabledButton: HTMLButtonElement, normalButton: HTMLButtonElement;

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

      disabledButton = screen.getByText("Disabled Button");
      normalButton = screen.getByText("Normal Button");
    });

    afterEach(() => {
      expect(disabledButton).matchSnapshot();
      expect(disabledButton).matchSnapshot();
    });

    test("render", () => {
      expect(disabledButton).toBeDefined();
      expect(disabledButton.tagName).toBe("BUTTON");
    });

    test("attributes", () => {
      expect(disabledButton.getAttribute("disabled")).toBe("");
      expect(normalButton.getAttribute("disabled")).toBeNull();
    });

    test("click event", () => {
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
      expect(button.getAttribute("type")).toBe("button");

      expect(button).matchSnapshot();
    });

    test("should have given type", () => {
      render(<PButton type="submit">Typed Button</PButton>);
      button = screen.getByText("Typed Button");
      expect(button.getAttribute("type")).toBe("submit");
    });
  });
});
