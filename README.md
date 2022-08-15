# 14.-Plot.ly-Homework
Northwestern University Data Scientist Camp Homework Week 14

Purpose
To build an interactive dashboard to show the research results from the coolest study of biodiversity on the  human body part - belly button.  Researchers conduct investigation of the microbes inhabiting human's navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. The research results reveals that a small handful of microbial species (also called operational taxonomic units or OTUs, in the study) were present in more than 70% people, while the rest were relatively rare. The interactive dashboard is aimed to show the study results of the OTUs identified from each patient and OTUs coorelation to each other as well as patient's background information.  

Technology
- Plotly, JSON, D3

Approach & Results
1. I set up the file structure to have an app.py to call the js file to search for data and render the dateset to present on a web page.
2. I first chosen bootstrap to set up html page. 
3. Then, I got started the js file and end up with creating one initial call function and three functions with each worked for three graphs below, respectively.  
- A drop-down list with demographic info display: it allows to select by patient ID to review the individual's demographic information.
- A horizontal bar chart: it shows the top 10 OTUs for the selected patient ID. 
- A bubble chart by OTU ID: it shows how many OTUs identified for the select patient ID and the volume, which I use the same bubble color to show if they are in the same category and the buddel size is determined by the sample value.  
