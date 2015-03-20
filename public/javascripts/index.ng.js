
(function(){//IIFE BEGIN

var indexNgApp = angular.module('indexNgApp', []);

indexNgApp.controller('ListingsController', ['$log', function($log){
  var self = this;

  self.emailBody = 'To Whom It May Concern:%0a%0d%0a%0dI am interested in pursuing this opportunity!'

  self.listings = [
      {
        jobId : 'jb-2015-03-15-1700', 
        jobTitle : 'NodeJs Developer',
        skills : ['javascript', 'NodeJs', 'MongoDb'],
        tools : ['git', 'github', 'slack', 'trello'],
        briefDescr : 'This role will be developming NodeJs apps to serve...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem quis lorem posuere condimentum. Sed egestas lacus commodo, cursus ex vel, pul',
        teamStructureExpertise : '5 devs, 2 QA, 1PM',
        projectWorkflow : ['1 week sprints', 'sprint planing day 1 w/qa, dev stakeholders',
            'daily, vertical dev/qa taks', 'daily scrum at 10AM CDT, using kanban', 
            '3rd-to-last-sprint-day: demo', '2nd-to-last-sprint-day: roll out'],
        recruiter : '',
        hiringCompany : '',

        postingDate : new Date('3/15/2015 17:03'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : ''
      },

      {
        jobId : 'jb-2015-03-15-1705', 
        jobTitle : 'Javascript Developer',
        skills : ['javascript', 'NodeJs', 'Express'],
        tools : ['github', 'slack', 'trello'],
        briefDescr : ' As a javascript dev, apps to serve...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem quis lorem posuere condimentum. Sed egestas lacus commodo, cursus ex vel, pul',
        teamStructureExpertise : '3 sr devs, 1 sr QA, 1 jr qa, 1PM',
        projectWorkflow : ['1 week sprints', 'sprint planing day 1 w/qa, dev stakeholders',
            'daily, vertical dev/qa taks', 'daily scrum at 10AM CDT, using kanban', 
            '3rd-to-last-sprint-day: demo', '2nd-to-last-sprint-day: roll out'],
        recruiter : '',
        hiringCompany : '',

        postingDate : new Date('3/15/2015 17:06'),
        hireDate : '', /* if null or min AND there is a closingDate, indicates opp was never filled */
        closingDate : ''

      },


    ];
}]);

})();//IIFE END