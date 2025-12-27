export type OfferingDataLinkHREF = string;

export type OfferingData = {
  // Link to Canvas.
  linkCanvas: OfferingDataLinkHREF;
  // Link to Canvas Paper Presentations.
  linkCanvasPaperPresentation1DraftSlides: OfferingDataLinkHREF;
  linkCanvasPaperPresentation1ContributionStatement: OfferingDataLinkHREF;
  linkCanvasPaperPresentation2DraftSlides: OfferingDataLinkHREF;
  linkCanvasPaperPresentation2ContributionStatement: OfferingDataLinkHREF;
  // Link to Drive.
  linkDrive: OfferingDataLinkHREF;
  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup: OfferingDataLinkHREF;
  // Link to Ed.
  linkEdDiscussion: OfferingDataLinkHREF;
  // Link to course GitLab.
  linkGitLab: OfferingDataLinkHREF;
  // Link to course GitHub.
  linkGitHub: OfferingDataLinkHREF;
};

export const offeringData: OfferingData = {
  // Link to Canvas.
  linkCanvas: "https://canvas.uw.edu/courses/1798621",
  // Link to Canvas Paper Presentations.
  linkCanvasPaperPresentation1DraftSlides: "https://canvas.uw.edu/courses/1798621/assignments/10253217",
  linkCanvasPaperPresentation1ContributionStatement: "https://canvas.uw.edu/courses/1798621/assignments/10254648",
  linkCanvasPaperPresentation2DraftSlides: "https://canvas.uw.edu/courses/1798621/assignments/10254647",
  linkCanvasPaperPresentation2ContributionStatement: "https://canvas.uw.edu/courses/1798621/assignments/10254651",
  // Link to Drive.
  linkDrive: "https://drive.google.com/drive/folders/1AgjhECjpv4UmvaWFoSCL3sH07oDlcGnj?usp=sharing",
  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup: "https://docs.google.com/spreadsheets/d/1dkXhZMsL--e_lmMuVbzRLWUhrDm1vOCLKO3glksqKBo/edit?usp=sharing",
  // Link to Ed.
  linkEdDiscussion: "https://edstem.org/us/courses/77347/discussion",
  // Link to course GitLab.
  linkGitLab: "https://gitlab.cs.washington.edu/cse481l-25sp",
  // Link to course GitHub.
  linkGitHub: "https://github.com/uwcse481/web-cse481l-26wi",
} as const;

// export const offeringData: OfferingData = {
//     // Link to Canvas.
//     linkCanvas: "https://canvas.uw.edu/courses/1798621",
//     // Link to Canvas Paper Presentations.
//     linkCanvasPaperPresentation1DraftSlides: "https://canvas.uw.edu/courses/1798621/assignments/10253217",
//     linkCanvasPaperPresentation1ContributionStatement: "https://canvas.uw.edu/courses/1798621/assignments/10254648",
//     linkCanvasPaperPresentation2DraftSlides: "https://canvas.uw.edu/courses/1798621/assignments/10254647",
//     linkCanvasPaperPresentation2ContributionStatement: "https://canvas.uw.edu/courses/1798621/assignments/10254651",
//     // Link to Drive.
//     linkDrive: "https://drive.google.com/drive/folders/1AgjhECjpv4UmvaWFoSCL3sH07oDlcGnj?usp=sharing",
//     // Link to Drive document for presentation signup.
//     linkDrivePresentationSignup: "https://docs.google.com/spreadsheets/d/1dkXhZMsL--e_lmMuVbzRLWUhrDm1vOCLKO3glksqKBo/edit?usp=sharing",
//     // Link to Ed.
//     linkEdDiscussion: "https://edstem.org/us/courses/77347/discussion",
//     // Link to course GitLab.
//     linkGitLab: "https://gitlab.cs.washington.edu/cse481l-25sp",
//     // Link to course GitHub.
//     linkGitHub: "https://github.com/uwcse481/web-cse481l-26wi",
//   } as const;
  