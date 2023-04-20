
  const development = {

    baseUrl: "http://65.1.78.151:8080",

    baseUrl2: "http://3.110.42.177:8080",

    sendOtp : "/api/user/otp",

    login:"/api/user/login",

    changeNumber:"/api/user/phone/update",

    getCompanies:"/api/user/all?from=1&to=100111&order=desc&role=employer",

    getCandidates:"/api/user/all?from=1&to=100111&order=desc&role=employee",

    getIndustry:'/api/general/industry',

    getcategorylist:'/api/general/categories?id=',

    mydetail:'/api/user',

    getUser:'/api/user/detail/',

    allState:'/api/general/joblocations?type=state',
    
    jobLocation:'/api/general/joblocations?type=city&filter=',

    subscription:'/api/subscription',

    appliedJobs:'/api/job/employee/jobs/'

  }
export default development
