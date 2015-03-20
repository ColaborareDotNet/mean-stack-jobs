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
        jobId : 'jb-2015-03-20-1211', 
        jobTitle : 'C#.NET Developer/Tech Writer',  
        level : 'mid-senior', 
        hireType : 'W-2 Contractor',
        skills : ['C#.NET', 'Verbal/Written Communication', 'Rudimentary Network Admin Skills/Knowledge'],
        tools : ['VS 2013', 'SVN/TortoiseSVN', 'MS Word', 'System Center Configuration Manager (SCCM) 2012'],
        briefDescr : 'SCCM 2012 custom, extensions-library, source code needs to be substantially analyzed to document its design/architecture for maintenance/rewriting.  This position will primaarily be documenting, INITIALLY, and will potentially step into maintenance and rewritng of these custom libraries.',
        teamStructureExpertise : '4 +/- Sr Devs, 1 +/- Jr Devs, 3 +/- Sr QA, 2 +/- Jr QA',
        projectWorkflow : [
            '3 week sprints', 'sprint planing day 1 w/qa, dev',
            'daily, vertical dev/qa taks', 'every-other-day scrum using Rally web tool', 
            'periodic demo'],
        recruiter : '',
        hiringCompany : '',

        postingDate : new Date('3/20/2015 12:11'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : '',
        notes:'I am in direct contact with the hiring manager about this role.  This is a peculiarly interesting role in that there is a substantial need for a well versed developer to substantially analyze and understand the inner workings of these SCCM 2012, custom libraries.  This position will be responsible for documenting the design/architecture; so, slightly above average (at minimum) skills in written communication are required.'
      },

      {
        jobId : 'jb-2015-03-20-1232', 
        jobTitle : 'C#.NET Developer',  
        level : 'senior', 
        hireType : 'W-2 Contractor',
        skills : ['C#.NET', 'OOP/D', 'Verbal/Written Communication', 'Rudimentary Network Admin Skills/Knowledge'],
        tools : ['VS 2013', 'SVN/TortoiseSVN', 'System Center Configuration Manager (SCCM) 2012'],
        briefDescr : 'Will maintain, design, and develop SCCM 2012 extensions libraries.',
        teamStructureExpertise : '4 +/- Sr Devs, 1 +/- Jr Devs, 3 +/- Sr QA, 2 +/- Jr QA',
        projectWorkflow : [
            '3 week sprints', 'sprint planing day 1 w/qa, dev',
            'daily, vertical dev/qa taks', 'every-other-day scrum using Rally web tool', 
            'periodic demo'],
        recruiter : '',
        hiringCompany : '',

        postingDate : new Date('3/20/2015 12:32'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : '',
        notes:'I am in direct contact with the hiring manager about this role.  This is a straight-forward, software development role, and requires mid to senior level skills--preferably, senior level.'
      }

    ];