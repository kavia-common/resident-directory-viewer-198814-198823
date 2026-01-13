import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("filters residents by name (case-insensitive)", async () => {
  const user = userEvent.setup();
  render(<App />);

  // At least one known resident exists in mock data.
  expect(screen.getByText(/Resident Directory/i)).toBeInTheDocument();
  expect(screen.getByRole("search", { name: /search residents/i })).toBeInTheDocument();

  const input = screen.getByRole("textbox", { name: /search residents by name/i });

  await user.type(input, "nguyen");
  // Chloe Nguyen should appear
  expect(screen.getByText(/Chloe/i)).toBeInTheDocument();
  expect(screen.getByText(/Nguyen/i)).toBeInTheDocument();

  // A different name should likely not appear (deterministic sample)
  expect(screen.queryByText(/Benjamin Carter/i)).not.toBeInTheDocument();
});

test("shows empty state when there are no results", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: /search residents by name/i });
  await user.type(input, "zzzz-not-a-name");

  expect(screen.getByText(/No residents found/i)).toBeInTheDocument();
});
