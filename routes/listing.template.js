{
        displayFlag : false,
        jobId: 'jb-yyyy-mm-dd-hhmm',
        jobTitle: '',
        degree: null,
        level: null,
        hireType: null,


        /* An array of objects of header/lists pairs, where lists is itself an array of strings. */
        customLists : [
            {
                header: "header1_value",/* this header will show up as a label in interface */
                list: [
                    "list_item_one",
                    "list_item_two"
                ]
            },
            {
                header: "header2_value",/* this header will show up as a label in interface */
                list: [
                    "list_item_one",
                    "list_item_two"
                ]
            }
        ],
        
        skills: [
        ],
        tools: [],
        responsibilities: [],
        briefDescr: '',
        teamStructureExpertise: null,
        projectWorkflow: null,
        recruiter: null,
        hiringCompany: null,
        compensationRange: null,
        locationOppWork: null,
        locationCompanyOffice: null,
        benefitsGeneral: null,

        employmentEligibility: null,

        vettingProcess: null,
        hireTimeframeValue: null,
        postingDate: new Date('6/5/2015 22:25'),
        hireDate: null,
        /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate: null,
        companyWebSite: null,
        notes: null /* an array of strings */
}