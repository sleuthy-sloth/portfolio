import { describe, it, expect } from "vitest";
import { resume, requiredResumeSections } from "@/content/resume";
import fs from "node:fs";
import path from "node:path";

describe("Resume data", () => {
  it("has a non-empty name", () => {
    expect(resume.name).toBeTruthy();
  });

  it("has a non-empty summary", () => {
    expect(resume.summary).toBeTruthy();
    expect(resume.summary.length).toBeGreaterThan(50);
  });

  it("has at least one skill group", () => {
    expect(resume.skills.length).toBeGreaterThan(0);
    for (const group of resume.skills) {
      expect(group.label).toBeTruthy();
      expect(group.items).toBeTruthy();
    }
  });

  it("has education", () => {
    expect(resume.education).toBeTruthy();
  });

  it("has contact info", () => {
    expect(resume.contact.email).toBeTruthy();
    expect(resume.contact.linkedin).toBeTruthy();
    expect(resume.contact.github).toBeTruthy();
  });

  it("has required sections defined", () => {
    expect(requiredResumeSections).toContain("summary");
    expect(requiredResumeSections).toContain("skills");
    expect(requiredResumeSections).toContain("education");
    expect(requiredResumeSections).toContain("contact");
  });

  it("references a PDF that exists in public/", () => {
    const pdfPath = path.resolve(process.cwd(), "public", resume.pdfPath.replace(/^\//, ""));
    expect(fs.existsSync(pdfPath)).toBe(true);
  });

  it("references a DOCX that exists in public/", () => {
    const docxPath = path.resolve(process.cwd(), "public", resume.docxPath.replace(/^\//, ""));
    expect(fs.existsSync(docxPath)).toBe(true);
  });
});
