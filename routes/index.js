var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { listingsData : JSON.stringify(listings) });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');
});

/* monicodebug */
router.get('/debug', function(req, res) {
  res.render('index2');
});

module.exports = router;

var   listings =  [
      {
        jobId : 'jb-2015-03-23-2215', 
        jobTitle : 'UI/Front-End App Developer',  
        degree : 'Bachelor\'s or equivalent',
        level : 'mid (2 years exp)', 
        hireType : 'Permanent',
        skills : ['AngularJS', 'HTML 5', 'Javascript', 'related frameworks', 'PHP (desired)', 'MySQL (desired)'],
        tools : [],
        briefDescr : 'The UI Developer is responsible for creating the UI / Front End Application for PermRecord.  You will report directly to the CTO and work within the Engineering team consisting of other developers and designers.  Because the UI is our direct connection with patrons, it is critically important to our success and marketing strategies.  You will need to innovate and find solutions to complex problems that are simple and intuitive for users.  You will have freedom to pursue modern designs, plugins, tools, and develop software that proudly represents your hard work and creativity while advancing the business needs.  You will be highly involved in design and decision making to ensure we have the best product possible.  We are rapidly iterating to develop and test solutions that will determine what the market needs are.  Being comfortable with prototyping and incomplete specifications is a must – yet maintainable and scalable solutions should be created to ensure future refactoring is minimized.',
        teamStructureExpertise : 'agile team (tbd)',
        projectWorkflow : ['agile'],
        recruiter : 'n/a',
        hiringCompany : 'PermRecord.org',
        compensationRange : 'market',
        locationOppWork : 'onsite',
        locationCompanyOffice : 'South Austin, TX',
        benefitsGeneral : 'available',

        vettingProcess : 'Phone screen, then in person',
        hireTimeframeValue : 'ASAP', 
        postingDate : new Date('3/24/2015 07:55'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : '',
        notes:'As with most positions, I am directly involved with the hiring managers.  PermRecord.org is a non-profit organization, responsible for guiding this effort to bring together illustrious board and committee members to properly represent the Wealth of Knowledge covering all walks of Life. PermRecord.com is the commercial entity that is building and supporting the archives.  PermRecord is a start-up based in Austin, Texas, founded by technology and content veterans. We seek to create the first credible destination for people to preserve, present, and leverage the stories and learnings of mankind for future generations. We are bringing together the most important and influential members of Society from Technology, Science, Business, Government and Philanthropy to launch a Permanent destination for current and future generations to understand in their own words what they have done and to allow these people to continue to advance their efforts by sharing, collaborating, and supporting the generations to come. We are focused on creating the true Knowledgebase of Mankind, where people from all walks of life can create their Permanent Record for future generations to understand their life’s journey, travails, and essence. PermRecord has been architected to be permanent as well as allow you to powerfully present and share your story, pictures, videos, and documents as you want people to remember you and understand what you have accomplished.'
      },

      {
        jobId : 'jb-2015-03-20-1211', 
        jobTitle : 'C#.NET Developer/Tech Writer',  
        degree : '',
        level : 'mid-senior', 
        hireType : 'W-2 Contractor',
        skills : ['C#.NET', 'Verbal/Written Communication', 'Rudimentary Network Admin Skills/Knowledge'],
        tools : ['VS 2013', 'SVN/TortoiseSVN', 'MS Word', 'System Center Configuration Manager (SCCM) 2012'],
        briefDescr : 'SCCM 2012 custom, extensions-library, source code needs to be substantially analyzed to document its design/architecture for maintenance/rewriting.  This position will primaarily be documenting, INITIALLY, and will potentially step into maintenance and rewritng of these custom libraries.',
        teamStructureExpertise : '4 Sr Devs, 1 Jr Dev, 3 Sr QA, 2 Jr QA',
        projectWorkflow : [
            '3 week sprints', 'sprint planing day 1 w/qa, dev',
            'daily, vertical dev/qa taks', 'every-other-day scrum using Rally web tool', 
            'periodic demo'],
        recruiter : '',
        hiringCompany : '',
        compensationRange : '',
        locationOppWork : 'onsite',
        locationCompanyOffice : 'Round Rock, TX',
        benefitsGeneral : 'n/a',

        vettingProcess : '',
        hireTimeframeValue : 'ASAP', 
        postingDate : new Date('3/20/2015 12:11'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : '',
        notes:'I am in direct contact with the hiring manager about this role.  This is a peculiarly interesting role in that there is a substantial need for a well versed developer to substantially analyze and understand the inner workings of these SCCM 2012, custom libraries.  This position will be responsible for documenting the design/architecture; so, slightly above average (at minimum) skills in written communication are required.'
      },

      {
        jobId : 'jb-2015-03-20-1232', 
        jobTitle : 'C#.NET Developer',  
        degree : '',
        level : 'senior', 
        hireType : 'W-2 Contractor',
        skills : ['C#.NET', 'OOP/D', 'Verbal/Written Communication', 'Rudimentary Network Admin Skills/Knowledge'],
        tools : ['VS 2013', 'SVN/TortoiseSVN', 'System Center Configuration Manager (SCCM) 2012'],
        briefDescr : 'Will maintain, design, and develop SCCM 2012 extensions libraries.',
        teamStructureExpertise : '4 Sr Devs, 1 Jr Devs, 3 Sr QA, 2 Jr QA',
        projectWorkflow : [
            '3 week sprints', 'sprint planing day 1 w/qa, dev',
            'daily, vertical dev/qa taks', 'every-other-day scrum using Rally web tool', 
            'periodic demo'],
        recruiter : '',
        hiringCompany : '',
        compensationRange : 'market',
        locationOppWork : 'onsite',
        locationCompanyOffice : 'Round Rock, TX',
        benefitsGeneral : 'n/a',

        vettingProcess : '',
        hireTimeframeValue : 'ASAP', 
        postingDate : new Date('3/20/2015 12:32'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : '',
        notes:'I am in direct contact with the hiring manager about this role.  This is a straight-forward, software development role, and requires mid to senior level skills--preferably, senior level.'
      }

    ];