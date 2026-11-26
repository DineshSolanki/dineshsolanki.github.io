import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Contact from "./pages/contact/ContactComponent";
import Education from "./pages/education/EducationComponent";
import { chosenTheme } from "./theme";

it("renders without crashing and shows core UX sections", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  const text = div.textContent;
  expect(text).toContain("Dinesh Solanki");
  expect(text).toContain("Exploring Senior IC Backend Roles");
  expect(text).toContain("Remote · 4 Zones");
  expect(text).toContain("View Production Projects");
  expect(text).toContain("Copy solankid297@gmail.com");
  expect(text).toContain("Production Work & Impact");
  expect(text).toContain("Global Banking Microservices");
  expect(text).toContain("Systech TraceIQ");
  expect(text).toContain("What I Do?");
  expect(text).toContain("Languages & Frameworks");
  expect(text).toContain("AI-Assisted & Agentic Tooling");
  expect(text).toContain("Power Automate");
  expect(text).toContain("Remote-First & Async Execution");
  expect(text).toContain("Async Written Communication");
  expect(text).toContain("GitHub Copilot");
  expect(text).toContain("Security & IAM");
  expect(text).toContain("Experience");
  expect(
    div.querySelector('button[aria-label="Scroll back to top"]')
  ).not.toBeNull();

  ReactDOM.unmountComponentAtNode(div);
});

it("renders Contact page with copy email and remote readiness details", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Contact theme={chosenTheme} />
    </MemoryRouter>,
    div
  );

  const text = div.textContent;
  expect(text).toContain("Contact Me");
  expect(text).toContain("Location & Remote Readiness");
  expect(text).toContain("Copy solankid297@gmail.com");
  expect(text).toContain("Visit on Google Maps");

  ReactDOM.unmountComponentAtNode(div);
});

it("renders Education page with real certification logos and verified credentials", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Education theme={chosenTheme} />
    </MemoryRouter>,
    div
  );

  const text = div.textContent;
  expect(text).toContain("Master of Computer Applications (MCA)");
  expect(text).toContain("Mastering Multi-Agent Development with AutoGen");
  expect(text).toContain("ID UE6JCVXP1905");
  expect(text).toContain("MongoDB Aggregation Fundamentals");
  expect(text).toContain("Service And Client Orientation");

  const certAlts = Array.from(
    div.querySelectorAll(".cert-card img.logo_img")
  ).map((img) => img.getAttribute("alt"));
  expect(certAlts).toEqual(
    expect.arrayContaining([
      "Packt",
      "Vanderbilt University",
      "Coursera",
      "Duke University",
      "UC Davis",
      "Harvard Business Impact Enterprise",
      "Udemy",
      "MongoDB",
      "Microsoft",
      "EF SET",
    ])
  );

  ReactDOM.unmountComponentAtNode(div);
});
