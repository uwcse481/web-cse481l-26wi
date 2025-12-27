import { offeringData, OfferingData } from "@/data/OfferingData";

/**
 * Course data that is relatively and persists across offerings.
 * Data that changes in every offering should instead be in offeringData (e.g., course-specific URLs).
 */
export const courseData = {
  // Data specific to this offerling..
  offering: offeringData,

  // Link to UW COVID guidelines.
  linkUniversityCovidGuidelines: {
    href: "https://www.ehs.washington.edu/covid-19-prevention-and-response/covid-19-illness-and-exposure-guidance",
  },

  // Link to UW syllabus guidelines.
  linkUniversitySyllabusGuidelines: {
    href: "https://registrar.washington.edu/curriculum/syllabus-guidelines",
  },
} as const;
