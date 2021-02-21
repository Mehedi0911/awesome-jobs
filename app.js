

const submitBtn = document.getElementById("btn");


submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let jobId = Math.floor(Math.random() * 1000000);
    const jobTitle = document.getElementById("job-title");
    const jobSalary = document.getElementById("job-salary");
    localStorage.setItem(jobTitle.value+"-"+jobId, jobTitle.value );
    localStorage.setItem(jobTitle.value+"-salary-"+jobId, jobSalary.value );
    const jobField = document.getElementById("jobs");
    const newJob = document.createElement('div');
    const newJobInfo = `<div class="new-job">
        <div class="single-job">
        <h6> Job ID : ${jobId}</h6>
        <h3> Job Title : ${jobTitle.value}</h3>
        <h4> Salary : ${jobSalary.value}</h4>
        </div>
        <button class="apply-btn">Apply</button>
    </div> `
    newJob.innerHTML = newJobInfo;
    jobField.appendChild(newJob);
    
    jobTitle.value = '';
    jobSalary.value = '';
    
    
})


   






