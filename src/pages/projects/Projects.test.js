import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Projects from "./Projects";
import { chosenTheme } from "../../theme";

it("renders Corporate Projects, Open Source Projects, and Publications sections", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Projects theme={chosenTheme} />
    </MemoryRouter>,
    div
  );

  const text = div.textContent;
  expect(text).toContain("Corporate Projects");
  expect(text).toContain("Open Source Projects");
  expect(text).toContain("Upstream Open Source Contributions");
  expect(text).toContain("Publications");
  expect(text).toContain("Systech TraceIQ");
  expect(text).toContain("DrySign");
  expect(text).toContain("Exela RN (ERN)");
  expect(text).toContain("Digital Mailroom (DMR)");
  expect(text).toContain("FoliCon");
  expect(text).toContain("keycloak/keycloak");
  expect(text).toContain("Architecture & Engineering Depth");
  expect(text).toContain("Read article");
  expect(text).toContain("Multi-Tenancy");

  const pubLinks = div.querySelectorAll("a.publication-card-div");
  expect(pubLinks.length).toBeGreaterThan(0);

  ReactDOM.unmountComponentAtNode(div);
});
