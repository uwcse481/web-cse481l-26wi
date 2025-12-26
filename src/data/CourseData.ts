import * as React from "react";

export type CourseDataLinkHREF = string;

export type CourseDataLinkKey = {
  href?: CourseDataLinkHREF;
  anchor?: React.ReactNode;
};

const LINK_CANVAS = "https://canvas.uw.edu/courses/1798621";

export const courseData = {
  // Link to Canvas.
  linkCanvas: {
    href: LINK_CANVAS,
  },

  // Link to Canvas Paper Presentations.
  linkCanvasPaperPresentation1DraftSlides: {
    href: "https://canvas.uw.edu/courses/1798621/assignments/10253217",
  },
  linkCanvasPaperPresentation1ContributionStatement: {
    href: "https://canvas.uw.edu/courses/1798621/assignments/10254648",
  },

  linkCanvasPaperPresentation2DraftSlides: {
    href: "https://canvas.uw.edu/courses/1798621/assignments/10254647",
  },
  linkCanvasPaperPresentation2ContributionStatement: {
    href: "https://canvas.uw.edu/courses/1798621/assignments/10254651",
  },

  // Link to Drive.
  linkDrive: {
    href: "https://drive.google.com/drive/folders/1AgjhECjpv4UmvaWFoSCL3sH07oDlcGnj?usp=sharing",
  },

  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup: {
    href: "https://docs.google.com/spreadsheets/d/1dkXhZMsL--e_lmMuVbzRLWUhrDm1vOCLKO3glksqKBo/edit?usp=sharing",
  },

  // Link to Ed.
  linkEdDiscussion: {
    href: "https://edstem.org/us/courses/77347/discussion",
  },

  // Link to course GitLab.
  linkGitLab: {
    href: "https://gitlab.cs.washington.edu/cse481l-26wi",
  },

  // Link to UW COVID guidelines.
  linkUniversityCovidGuidelines: {
    href: "https://www.ehs.washington.edu/covid-19-prevention-and-response/covid-19-illness-and-exposure-guidance",
  },

  // Link to UW syllabus guidelines.
  linkUniversitySyllabusGuidelines: {
    href: "https://registrar.washington.edu/curriculum/syllabus-guidelines",
  },

  // Link to course GitHub.
  linkGitHub: {
    href: "https://github.com/uwcse481/web-cse481l-26wi",
  },
} as const;
