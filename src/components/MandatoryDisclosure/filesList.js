const filesList = [
    {
        title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
        link: "/pdf/Building%20Safety%20Certificate.pdf"
    },
    {
        title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY ",
        link: "/pdf/Fire%20Noc%20till%2005.01.26.pdf"
    },
    {
        title: "LAND CERTIFICATE",
        link: "/pdf/Land%20Certificate.pdf"
    },
    {
        title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
        link: "/pdf/NOC_SEC_EDUCATION_43611%2C.pdf"
    },
    {
        title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009 AND IT’S RENEWAL IF APPLICABLE",
        link: "/pdf/School%20Rcognition%20Certificate.pdf",
    },
    {
        title: "COPY OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
        link: "/pdf/Society%20Registration%20and%20Renewal.pdf"
    },
    {
        title: "COPIES OF VALID WATER , HEALTH AND SANITATION CERTIFICATES ",
        link: "/pdf/HealtAndSanitation%20.pdf"
    },
];

const schoolGeneral = [
    {
        title: "NAME OF SCHOOL",
        details: "THE PANTHEON SCHOOL"
    },
    {
        title: "AFFILIATION NO",
        details: ""
    },
    {
        title: "SCHOOL CODE ",
        details: ""
    },
    {
        title: "COMPLETE ADDRESS WITH PIN CODE",
        details: "LOHARIYA SAL MALLA, KATHGHARIYA, HALDWANI DISTT-NAINITAL (UTTRAKHAND ), PIN CODE 263139"
    },
    {
        title: "PRINCIPAL NAME & QUALIFICATION",
        details: "MRS. AAINA  BHAMRAH, M.COM, B.Ed (CTET-I &II QUALIFIED)"
    },
    {
        title: "SCHOOL EMAIL ID",
        details: "thepantheon.2023@gmail.com"
    },
    {
        title: "CONTACT DETAILS",
        details: "7618671071, 7618671075"
    },
]

const academicLinks = [
    {
        title: "FEE STRUCTURE OF THE SCHOOL",
        link: "/fee-structure"
    },
    {
        title: "ANNUAL ACADEMIC CALANDER",
        link: "/academics/academic-calendar"
    },
];



const staffList = [
    {
        information: "PRINCIPAL",
        details: "01",
    },
    {
        information: "TOTAL NO. OF TEACHERS",
        details: "21",
        sub: [
            {
                information: "PGT",
                details: "00",
            },
            {
                information: "TGT",
                details: "07",
            },
            {
                information: "PRT",
                details: "14",
            },
            {
                information: "PTI",
                details: "01",
            },
        ]
    },
    {
        information: "TEACHERS SECTION RATIO",
        details: "2:1",
    },
    {
        information: "DETAILS OF SPECIAL EDUCATOR",
        details: "LAKSHITA PANDEY",
    },
    {
        information: "DETAILS OF COUNSELLOR AND WELNESS TEACHER",
        details: "MRS. KAVITA MAURA",
    }
]

const schoolInfrastructure = [
    {
        information: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)",
        details: "4050 sq mtr"
    },
    {
        information: "NO. AND SIZE OF THE CLASSROOMS (IN SQUARE FEET)",
        details: "12, 500 sq ft"
    },
    {
        information: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQUARE FEET)",
        details: "Total Labs 03-<br/>Composite Lab 01 (800 sq ft)<br/>Computer Lab 01 (720 sq ft)<br/>Maths Lab 01 (500 sq ft)",
        html: true,
    },
    {
        information: "INTERNET FACILITY (Y/N)",
        details: "YES"
    },
    {
        information: "NO. OF GIRLS TOILETS",
        details: "08"
    },
    {
        information: "NO. OF BOYS TOILETS",
        details: "08"
    },
    {
        information: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL.",
        link: "/mandatory-disclosure",
        hyperlink: true,
    },
]

export default filesList;
export { schoolGeneral, academicLinks, staffList, schoolInfrastructure };