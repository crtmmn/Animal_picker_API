async function request(){
    let animal = document.getElementById("select").value
    const res = await fetch(
                        link = "https://api.api-ninjas.com/v1/animals?name=" + animal
                            ,
                              {headers: {'X-Api-Key': 'xZSYvkAALT6AHMlvksJmrQ==vTkZOLEamObs7rRh'}}
                           )
    
    json = await res.json()
    console.log(json)

    let div = document.getElementById("tableDiv")
    div.innerHTML = ""
    
    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.innerHTML = "<h3>Location</h3>"
    tr.appendChild(th)


    th = document.createElement("th")
    th.innerHTML = "<h3>Name</h3>"
    tr.appendChild(th)

    th = document.createElement("th")
    th.innerHTML = "<h3>Family</h3>"
    tr.appendChild(th)

    th = document.createElement("th")
    th.innerHTML = "<h3>Speed</h3>"
    tr.appendChild(th)
    
    th = document.createElement("th")
    th.innerHTML = "<h3>Weight</h3>"
    tr.appendChild(th)
    
    table.appendChild(tr)
    div.appendChild(table)

    for(i = 0; i < json.length; i++) {
        tr = document.createElement("tr")
        td = document.createElement("td")
        if(json[i].locations == null) {
            td.innerHTML = "No data"
        }
        else {
            td.innerHTML = json[i].locations
        }
        tr.appendChild(td)

        td = document.createElement("td")
        if(json[i].name == null) {
            td.innerHTML = "No data"
        }
        else {
            td.innerHTML = json[i].name
        }
        tr.appendChild(td)


        td = document.createElement("td")
        if(json[i].taxonomy.family == null) {
            td.innerHTML = "No data"
        }
        else {
            td.innerHTML = json[i].taxonomy.family
        }
        tr.appendChild(td)

        td = document.createElement("td")
        if(json[i].characteristics.top_speed == null) {
            td.innerHTML = "No data"
        }
        else {
            td.innerHTML = json[i].characteristics.top_speed
        }
        tr.appendChild(td)

        td = document.createElement("td")
        if(json[i].characteristics.weight == null) {
            td.innerHTML = "No data"
        }
        else {
            td.innerHTML = json[i].characteristics.weight
        }
        tr.appendChild(td)

        table.appendChild(tr)
    }
}