const services = [
    {
    "name":"Activity",
    "type": "WA1"
    },
    {
    "name":"ActMsgProc",
    "type": "WA1"
    },
    {
    "name":"Award",
    "type": "WA1"
    },
    {
    "name":"DHHandler",
    "type": "WA1"
    },
    {
    "name":"Handler",
    "type": "WA1"
    },
    {
    "name":"Insurance",
    "type": "WA1"
    },
    {
    "name":"Legacyapi",
    "type": "WA1"
    },
    {
    "name":"Location",
    "type": "WA1"
    },
    {
    "name":"LocMsgProc",
    "type": "WA1"
    },        
    {
    "name":"Pack",
    "type": "WA1"
    },        
    {
    "name":"PartMsgProc",
    "type": "WA1"
    },        
    {
    "name":"Subscriptions",
    "type": "WA1"
    },

]
const envs = [{"env":"dev", "region": "weu"}, {"env":"ptydev", "region": "eus"}]

const pageTable = document.getElementById("service-table");

// envs.forEach(env => {
//     services.forEach(service => {
//         const requestURL = `https://${env.env}-${service.name}-${service.type}-${env.region}.azurewebsites.net/api/V2/version`
//         fetch(requestURL)
//         .then(response => {
//          if (response.ok) {
//             response.json().then(data => {
//                 createEntry(data, service, env);
//             })
//          } else {
//             createError(error, service)
//          }   
//         })
//         .catch(error => {
//             createError(error, service)
//         })
//     });
// })
fetch("https://slack.pitpatclub.com/api/VersionStatus")
    .then(response => {
        if(response.ok) {
            response.json().then(data => {
                createEntry(data, "LegacyAPI", "Dev")
            })
        } else {
            createError(error, "LegacyAPI")
        }
    })
    .catch(error => {
        createError(error, "LegeacyAPI")
    })

function createError(error, service) {
    const errorTr = document.createElement("tr");
    const servicetd = document.createElement("td");
    const errortd = document.createElement("td");

    servicetd.append(service.name)
    errortd.append(error)

    errorTr.append(servicetd)
    errorTr.append(errortd)

    pageTable.append(errorTr)

}
function createEntry(data, service, env) {
    const entryTr = document.createElement("tr");
    const platformtd = document.createElement("td");
    const servicetd = document.createElement("td");
    const versiontd = document.createElement("td");

    platformtd.append(env.env);
    servicetd.append(service.name);
    versiontd.append(data.Version)
    entryTr.append(platformtd)
    entryTr.append(servicetd)
    entryTr.append(versiontd)

    pageTable.append(entryTr);
}