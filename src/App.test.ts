import { render } from "@testing-library/vue";
import { test } from "vitest";
import App from "./App.vue";

test("frontpage", () => {
  const { getByText } = render(App, {});

  getByText("You did it!");
});
