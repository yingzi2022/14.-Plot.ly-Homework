// function that contains instructions at page load/refresh
// function does not run until called
function init() {
    console.log("the init() function ran");
    // code that runs once (only on page load or refresh)
    url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
    d3.json(url).then((data) => {
        let selector = d3.select ('#selDataset');
        selector.html("")

    // create dropdown
    for (let i=0; i<data.names.length; i++) {
        let selOptions = selector.append("option")
        selOptions.property("value", data.names[i]);
        selOptions.text(`OTU ${data.names[i]}`);
    }

    
    // this checks that the initial function runs.
    console.log("The Init() function ran")

    // create dropdown/select

    // run functions to generate plots
    createScatter('940')
    createBar('940')
    createSummary('940')
    })

}

// function that runs whenever the dropdown is changed
function optionChanged(newID) {
    // code that updates graphics
    // one way is to recall each function
    createScatter(newID)
    createBar(newID)
    createSummary(newID)
}

function createScatter(id) {
    // code that makes scatter plot at id='bubble'
    url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
    d3.json(url).then((data) => {
        let myData = data.samples.filter(i => i.id == id)[0]

        let trace1= {
            x: myData.otu_ids,
            y: myData.sample_values,
            mode:"markers",
            marker: {
                color: myData.otu_ids,
                size: myData.sample_values,
                
            },
        };

        let bdata = [trace1];

        let layout = {
            title: "Presence of OTUs"
            // showlegend: false,
            // height: 600,
            // width: 600
        };

        Plotly.newPlot("bubble", bdata, layout);
    })

    // checking to see if function is running
    console.log(`This function generates scatter plot of ${id} `)
}

function createBar(id) {
    // code that makes bar chart at id='bar'
    url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
    d3.json(url).then((data) => {
        let myData = data.samples.filter(i => i.id == id)[0]
                       
        // Trace1 for the Top 10 sOTUs Data
        let tdata = [{
            x: myData.sample_values.slice(0, 10).reverse(),
            y: myData.otu_ids.slice(0, 10).reverse().map(otuID => `OTU${otuID}`),
            text: myData.otu_labels.slice(0, 10).reverse(),
            name: "OTU ID",
            type: "bar",
            orientation: "h",            
        }];


        let layout = {
            title: "Top 10 OTUs"
        };

        Plotly.newPlot("bar", tdata, layout);
    })
    // checking to see if function is running
    console.log(`This function generates bar chart of ${id} `)

}

function createSummary(id) {
    // code that makes list, paragraph, text/linebreaks at id='sample-meta'
    url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
    d3.json(url).then((data)=>{
        let myData = data.metadata.filter(i => i.id == id)[0]
        console.log(myData)
        let selector = d3.select('#sample-metadata');
        selector.html("")
        Object.entries(myData).forEach(([k,v]) => {
        selector.append("p").text(`${k}:${v}`)
        })
    })
    // checking to see if function is running
    console.log(`This function generates summary info of ${id} `)
}

// function called, runs init instructions
// runs only on load and refresh of browser page
init();

