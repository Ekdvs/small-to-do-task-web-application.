import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "../components/TaskCard";


describe("TaskCard Component", () => {
  it("renders title and description", () => {
    render(
      <TaskCard
        id={1}
        title="Test Task"
        description="This is a test description"
        onDone={() => {}}
      />
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("calls onDone when Done button is clicked", () => {
    const onDoneMock = jest.fn();

    render(
      <TaskCard
        id={5}
        title="Click Me Task"
        description="Testing button"
        onDone={onDoneMock}
      />
    );

    const button = screen.getByRole("button", { name: /done/i });
    fireEvent.click(button);

    expect(onDoneMock).toHaveBeenCalledTimes(1);
    expect(onDoneMock).toHaveBeenCalledWith(5);
  });
});
