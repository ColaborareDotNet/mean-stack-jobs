/*
    Notes:
        * interim solution (7/25/2016)
        * 3 types of objects:
            -job xref object >> jobId='jb-yyyy-mm-dd-hhmm'
            -contact object  >> contactId='cont-yyyy-mm-dd-hhmm'
            -company object  >> companyId='co-yyyy-mm-dd-hhmm'
        * jobId objects point to contact object, but not vice versa
        * jobId objects DO NOT point to company objects
        * contact objects point to company objects but not vice versa
*/

module.exports = [{
    jobId: 'jb-2016-09-03-1400',
    jobTitle: '',
    originId: null,
    originUrl: null,
    contactIds: ['cont-2016-09-03-1400'],
    notes: [""]
},{
    jobId: 'jb-2016-07-26-1200',
    jobTitle: '',
    originId: null,
    originUrl: null,
    contactIds: ['cont-2016-07-26-1200'],
    notes: [""]
},{
    jobId: 'jb-2016-07-25-1554',
    jobTitle: '',
    originId: null,
    originUrl: null,
    contactIds: ['cont-2016-07-25-1748'],
    notes: [""]
},{
    contactId: 'cont-2016-09-03-1400',
    fname: 'Byron',
    lname: 'Hogan',
    mi: null,
    email: 'byron@help.com',
    phone: '',
    companyIds: [],
    notes: ["works at help.com"]
},{
    contactId: 'cont-2016-07-26-1200',
    fname: 'Christine',
    lname: 'Lee',
    mi: null,
    email: 'clee@apollogroup.io',
    phone: '',
    companyIds: [],
    notes: ["contacted me via meetup message in Austin Javascript Stack Dev"]
},{
    
    contactId: 'cont-2016-07-25-1748',
    fname: 'Will',
    lname: 'Longenecker',
    mi: null,
    email: 'wlongenecker@newiron.com',
    phone: '512-371-7774',
    companyIds: ['co-2016-7-25-1554'],
    notes: [""]
},{
    companyId: 'co-2016-7-25-1554',
    name: 'New Iron Group',
    url: 'newiron.com',
    notes: [""]
},{
    jobId: 'jb-2016-5-24-1200',
    jobTitle: '',
    originId: null,
    originUrl: null,
    contactIds: ['cid-2016-5-24-1200'],
    notes: [""]
}, {
    
        jobId: 'jb-2016-5-24-1201',
        jobTitle: '',
        originId: null,
        originUrl: null,
        contactIds: ['cont-2016-5-24-1200'],
        notes: [""]
},
{
    contactId: 'cont-2016-5-24-1200',
    fname: 'Carrie',
    lname: 'Collier',
    mi: 'G',
    email: 'ccollier@apexsystemsinc.com',
    phone: '678-757-5580',
    companyIds: ['co-2016-5-24-1200'],
    notes: ["works with kyle flinn"]
}, {
    companyId: 'co-2016-5-24-1200',
    name: 'Apex Systems',
    url: 'http://www.apexsystemsinc.com/',
    notes: [""]
}];