// Official college-planning resources. Every link points to a major
// government, College Board, or testing-agency site — URLs verified
// against the organizations' own documentation.

export interface PlannerResource {
  name: string;
  url: string;
  description: string;
}

export const PLANNER_RESOURCES: PlannerResource[] = [
  {
    name: 'Common Application',
    url: 'https://www.commonapp.org/',
    description: 'Apply to hundreds of colleges with one application',
  },
  {
    name: 'FAFSA (Federal Student Aid)',
    url: 'https://studentaid.gov/h/apply-for-aid/fafsa',
    description: 'The official free application for federal grants, loans and work-study',
  },
  {
    name: 'CSS Profile',
    url: 'https://cssprofile.collegeboard.org/',
    description: 'The non-federal aid application some colleges also require',
  },
  {
    name: 'SAT (College Board)',
    url: 'https://satsuite.collegeboard.org/',
    description: 'Register for the SAT and send scores',
  },
  {
    name: 'ACT',
    url: 'https://www.act.org/',
    description: 'Register for the ACT and send scores',
  },
  {
    name: 'BigFuture Scholarship Search',
    url: 'https://bigfuture.collegeboard.org/scholarship-search',
    description: "College Board's free directory of scholarship programs",
  },
  {
    name: 'College Scorecard',
    url: 'https://collegescorecard.ed.gov/',
    description: 'Compare college costs, graduation rates and typical earnings',
  },
  {
    name: 'BigFuture College Search',
    url: 'https://bigfuture.collegeboard.org/',
    description: 'Research colleges and build your Likely / Target / Reach list',
  },
  {
    name: 'DoSomething.org',
    url: 'https://www.dosomething.org/',
    description: 'Virtual community-service projects for volunteer hours',
  },
  {
    name: 'VolunteerMatch',
    url: 'https://www.volunteermatch.org/',
    description: 'Find local volunteer opportunities near you',
  },
];
