// Parsed and enriched participant data
const participants = [
  {
    name: "Marisa Tran", age: 37, gender: "Woman", ageGroup: "36-44",
    inferredSeniority: "Mid-Level", inferredRole: "Operations & Admin", inferredIndustry: "Healthcare", inferredSalary: "$60k-$80k",
    targetRole: "Recruiter at AMNHealthcare",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Too hard to pass the first call",
    selfAssessment: ["Could improve, but I have the basics","It's a priority that I need to solve","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,3,2,2,2,2,2,2],
    wtp: [25,25,25,100,25,25,25,25]
  },
  {
    name: "Kyle Mazzanti", age: 26, gender: "Man", ageGroup: "25-27",
    inferredSeniority: "Mid-Level", inferredRole: "Operations & Admin", inferredIndustry: "Manufacturing & Construction", inferredSalary: "$60k-$80k",
    targetRole: "Project Manager at numerous companies",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Not an issue for me","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [1,2,2,2,2,2,2,2],
    wtp: [10,10,25,25,10,10,10,10]
  },
  {
    name: "Ty Carlton", age: 37, gender: "Man", ageGroup: "36-44",
    inferredSeniority: "Mid-Level", inferredRole: "Sales & Business Dev", inferredIndustry: "Business Services", inferredSalary: "$80k-$100k",
    targetRole: "Account Executive at Knock",
    interviews: "6-10 roles", prepTime: "1-2 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Not an issue for me","Not an issue for me","Could improve, but I have the basics","Not an issue for me","Not an issue for me","Not an issue for me","Could improve, but I have the basics"],
    effortSpent: [1,1,1,2,1,1,1,1],
    wtp: [0,0,0,0,0,0,0,0]
  },
  {
    name: "Jessica Wysocki", age: 31, gender: "Woman", ageGroup: "29-32",
    inferredSeniority: "Junior", inferredRole: "Operations & Admin", inferredIndustry: "Healthcare", inferredSalary: "$40k-$60k",
    targetRole: "Executive Admin or Admin",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [25,25,25,25,25,25,25,25]
  },
  {
    name: "Gauri Deshpande", age: 27, gender: "Woman", ageGroup: "25-27",
    inferredSeniority: "Mid-Level", inferredRole: "Engineering & Technical", inferredIndustry: "Technology", inferredSalary: "$80k-$100k",
    targetRole: "Java developer at TCS",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","It's a priority that I need to solve","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [2,2,3,3,3,2,2,3],
    wtp: [10,10,25,25,10,10,10,50]
  },
  {
    name: "Thomas Moore", age: 29, gender: "Man", ageGroup: "29-32",
    inferredSeniority: "Mid-Level", inferredRole: "Education & Training", inferredIndustry: "Government & Education", inferredSalary: "$50k-$70k",
    targetRole: "Education Specialist in Government",
    interviews: "3-5 roles", prepTime: "3-4 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","Could improve, but I have the basics","It's a priority that I need to solve","It's a priority that I need to solve"],
    effortSpent: [3,3,3,3,3,3,3,3],
    wtp: [25,50,50,50,25,25,25,100]
  },
  {
    name: "Seth Ramsey", age: 32, gender: "Man", ageGroup: "29-32",
    inferredSeniority: "Junior", inferredRole: "Operations & Admin", inferredIndustry: "Technology", inferredSalary: "$40k-$60k",
    targetRole: "Customer Support Specialist at Health Care Technology Company",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Too hard to pass the first call",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [3,3,3,3,2,3,3,3],
    wtp: [25,25,25,25,25,10,10,25]
  },
  {
    name: "Paul Lee", age: 34, gender: "Man", ageGroup: "33-35",
    inferredSeniority: "Senior", inferredRole: "Sales & Business Dev", inferredIndustry: "Business Services", inferredSalary: "$100k+",
    targetRole: "Principal at Fedex",
    interviews: "6-10 roles", prepTime: "1-2 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me"],
    effortSpent: [1,1,1,1,1,1,1,1],
    wtp: [0,0,0,0,0,0,0,0]
  },
  {
    name: "Lauren Kells", age: 25, gender: "Woman", ageGroup: "25-27",
    inferredSeniority: "Junior", inferredRole: "Marketing & Creative", inferredIndustry: "Business Services", inferredSalary: "$40k-$60k",
    targetRole: "Copywriter or Social Media Marketer",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [10,10,10,10,10,10,10,10]
  },
  {
    name: "Vanessa Cardoso", age: 29, gender: "Woman", ageGroup: "29-32",
    inferredSeniority: "Senior", inferredRole: "Engineering & Technical", inferredIndustry: "Technology", inferredSalary: "$100k+",
    targetRole: "Senior Information Security Engineer in Healthcare",
    interviews: "1-2 roles", prepTime: "30 min", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [25,25,25,25,25,25,25,25]
  },
  {
    name: "Jedidiah Kiang", age: 36, gender: "Man", ageGroup: "36-44",
    inferredSeniority: "Mid-Level", inferredRole: "Education & Training", inferredIndustry: "Government & Education", inferredSalary: "$50k-$70k",
    targetRole: "College Counselor at High Schools",
    interviews: "1-2 roles", prepTime: "1-2 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me"],
    effortSpent: [1,1,1,1,1,1,1,1],
    wtp: [10,10,10,10,10,10,10,10]
  },
  {
    name: "Kayode Dada", age: 35, gender: "Man", ageGroup: "33-35",
    inferredSeniority: "Senior", inferredRole: "Engineering & Technical", inferredIndustry: "Manufacturing & Construction", inferredSalary: "$100k+",
    targetRole: "Senior Supplier Quality Engineer in Manufacturing",
    interviews: "1-2 roles", prepTime: "3-4 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,3,3,3,3,3,3,3],
    wtp: [10,25,25,50,25,10,25,100]
  },
  {
    name: "Caitlyn Porterfield", age: 37, gender: "Woman", ageGroup: "36-44",
    inferredSeniority: "Mid-Level", inferredRole: "Finance & Professional", inferredIndustry: "Government & Education", inferredSalary: "$60k-$80k",
    targetRole: "Financial Analyst 3 with the Texas Comptroller's office",
    interviews: "3-5 roles", prepTime: "30 min", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [4,4,4,4,4,4,4,4],
    wtp: [50,50,50,50,50,50,50,100]
  },
  {
    name: "Kristin Santana", age: 36, gender: "Woman", ageGroup: "36-44",
    inferredSeniority: "Mid-Level", inferredRole: "Healthcare & Clinical", inferredIndustry: "Healthcare", inferredSalary: "$60k-$80k",
    targetRole: "Registered nurse at Moffitt",
    interviews: "0 roles", prepTime: "0-15 min", interviewProgress: "Too hard to pass the first call",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [25,25,25,25,25,25,25,25]
  },
  {
    name: "Chance Rothwell", age: 33, gender: "Woman", ageGroup: "33-35",
    inferredSeniority: "Senior", inferredRole: "Education & Training", inferredIndustry: "Government & Education", inferredSalary: "$80k-$100k",
    targetRole: "Director in Higher Education",
    interviews: "0 roles", prepTime: "0-15 min", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Not an issue for me","Not an issue for me","Could improve, but I have the basics","Not an issue for me","Not an issue for me","Not an issue for me","Could improve, but I have the basics"],
    effortSpent: [2,2,2,3,2,2,2,3],
    wtp: [10,10,10,10,10,0,0,10]
  },
  {
    name: "Brittany Tomlin", age: 31, gender: "Woman", ageGroup: "29-32",
    inferredSeniority: "Senior", inferredRole: "Healthcare & Clinical", inferredIndustry: "Healthcare", inferredSalary: "$80k-$100k",
    targetRole: "Clinical Informatics Lead in Healthcare",
    interviews: "0 roles", prepTime: "1-2 hours", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [25,25,25,25,25,25,25,25]
  },
  {
    name: "Dillon Light", age: 27, gender: "Man", ageGroup: "25-27",
    inferredSeniority: "Mid-Level", inferredRole: "Operations & Admin", inferredIndustry: "Technology", inferredSalary: "$60k-$80k",
    targetRole: "Operations Manager at a startup",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Barely getting callbacks",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [25,25,25,25,25,25,25,100]
  },
  {
    name: "Grant Nunnally", age: 30, gender: "Man", ageGroup: "29-32",
    inferredSeniority: "Senior", inferredRole: "Marketing & Creative", inferredIndustry: "Business Services", inferredSalary: "$60k-$80k",
    targetRole: "Social Media Director",
    interviews: "1-2 roles", prepTime: "30 min", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [3,3,3,3,3,3,3,3],
    wtp: [100,100,100,100,100,100,100,100]
  },
  {
    name: "Derek Arbeiter", age: 35, gender: "Man", ageGroup: "33-35",
    inferredSeniority: "Mid-Level", inferredRole: "Education & Training", inferredIndustry: "Technology", inferredSalary: "$60k-$80k",
    targetRole: "Training Developer",
    interviews: "1-2 roles", prepTime: "1-2 hours", interviewProgress: "Barely getting callbacks",
    selfAssessment: ["Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me","Not an issue for me"],
    effortSpent: [1,1,1,1,1,1,1,1],
    wtp: [0,0,0,0,0,0,0,0]
  },
  {
    name: "A Staton", age: 34, gender: "Woman", ageGroup: "33-35",
    inferredSeniority: "Mid-Level", inferredRole: "Healthcare & Clinical", inferredIndustry: "Healthcare", inferredSalary: "$50k-$70k",
    targetRole: "Social worker in therapy clinic",
    interviews: "1-2 roles", prepTime: "30 min", interviewProgress: "Barely getting callbacks",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Not an issue for me","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,2,2,2,2,1,2,2],
    wtp: [25,25,25,25,25,10,25,25]
  },
  {
    name: "Usman Saleem", age: 34, gender: "Man", ageGroup: "33-35",
    inferredSeniority: "Senior", inferredRole: "Engineering & Technical", inferredIndustry: "Manufacturing & Construction", inferredSalary: "$100k+",
    targetRole: "Senior Manufacturing Engineer",
    interviews: "3-5 roles", prepTime: "30 min", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve"],
    effortSpent: [2,2,3,3,2,2,2,2],
    wtp: [25,25,50,50,25,25,25,50]
  },
  {
    name: "Lettea Colquhoun", age: 54, gender: "Woman", ageGroup: "45+",
    inferredSeniority: "Senior", inferredRole: "Education & Training", inferredIndustry: "Government & Education", inferredSalary: "$60k-$80k",
    targetRole: "All (broad search)",
    interviews: "0 roles", prepTime: "1-2 hours", interviewProgress: "Too hard to pass the first call",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [10,10,10,10,10,10,10,10]
  },
  {
    name: "Cole Theisen", age: 26, gender: "Man", ageGroup: "25-27",
    inferredSeniority: "Mid-Level", inferredRole: "Sales & Business Dev", inferredIndustry: "Other", inferredSalary: "$60k-$80k",
    targetRole: "Account Executive in Sports/Entertainment",
    interviews: "3-5 roles", prepTime: "30 min", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Not an issue for me","Not an issue for me","Not an issue for me","Could improve, but I have the basics","Not an issue for me","Not an issue for me","Could improve, but I have the basics","Not an issue for me"],
    effortSpent: [1,1,1,1,1,1,1,1],
    wtp: [0,0,0,10,0,0,10,0]
  },
  {
    name: "Nicolas Zaldivar Otayza", age: 29, gender: "Man", ageGroup: "29-32",
    inferredSeniority: "Mid-Level", inferredRole: "Marketing & Creative", inferredIndustry: "Business Services", inferredSalary: "$50k-$70k",
    targetRole: "Social Media Marketing",
    interviews: "1-2 roles", prepTime: "1-2 hours", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","It's a priority that I need to solve","Could improve, but I have the basics","It's a priority that I need to solve"],
    effortSpent: [3,3,3,3,2,3,2,3],
    wtp: [50,50,50,50,50,50,25,100]
  },
  {
    name: "Katherine Onyeocha", age: 51, gender: "Woman", ageGroup: "45+",
    inferredSeniority: "Senior", inferredRole: "Operations & Admin", inferredIndustry: "Other", inferredSalary: "$80k-$100k",
    targetRole: "Director of policy and procedures",
    interviews: "3-5 roles", prepTime: "1-2 hours", interviewProgress: "Making it to final round, but no offer",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [4,4,4,4,4,4,4,4],
    wtp: [50,50,50,50,50,50,50,50]
  },
  {
    name: "Ixca Munoztinoco", age: 33, gender: "Man", ageGroup: "33-35",
    inferredSeniority: "Junior", inferredRole: "Operations & Admin", inferredIndustry: "Technology", inferredSalary: "$50k-$70k",
    targetRole: "Project coordinator in telecommunications",
    interviews: "1-2 roles", prepTime: "1-2 hours", interviewProgress: "Struggling in the middle of process",
    selfAssessment: ["Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics","Could improve, but I have the basics"],
    effortSpent: [2,2,2,2,2,2,2,2],
    wtp: [25,25,25,25,25,25,25,25]
  }
];

const dimensions = [
  "Knowing likely questions & format",
  "Knowing what good answers look like",
  "Having concrete answers ready",
  "Strategic positioning",
  "Remembering what to say",
  "Delivery & tone",
  "Practicing for live format",
  "Feedback & blindspots"
];

const segmentOptions = {
  "Age Group": "ageGroup",
  "Gender": "gender",
  "Seniority (Inferred)": "inferredSeniority",
  "Role Type (Inferred)": "inferredRole",
  "Industry (Inferred)": "inferredIndustry",
  "Salary Band (Inferred)": "inferredSalary"
};
