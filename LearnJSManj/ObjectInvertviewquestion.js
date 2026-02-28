let result = {
    resultlist: [{ testcasename: "TC1", Status: "Pass", Duration: 5 }, { testcasename: "TC2", Status: "Fail", Duration: 10 },

    { testcasename: "TC3", Status: "Fail", Duration: 15 }]
}

let duration = [];
for (let i in result.resultlist) 
{

    if (result.resultlist[i].Status === "Fail") 
        {
        duration.push(result.resultlist[i].Duration)
        }
}

console.log(duration.sort((a, b) => a - b))