
const submitBtn = document.getElementById("btn");
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let jobId = Math.floor(Math.random() * 1000000);
    const jobTitle = document.getElementById("job-title");
    const jobSalary = document.getElementById("job-salary");
    const refreshBtn = document.getElementById("refresh-btn");
   
    const newJobInfo = `<div class="new-job">
        <div class="single-job">
        <h6> Job ID : ${jobId}</h6>
        <h3> Job Title : ${jobTitle.value}</h3>
        <h4> Salary : ${jobSalary.value}</h4>
        </div>
        <button class="apply-btn">Apply</button>
    </div> `

    jobTitle.value = '';
    jobSalary.value = '';
if(localStorage.getItem('data') == null){
    localStorage.setItem('data','[]')
}

var oldData = JSON.parse(localStorage.getItem('data'))
oldData.push(newJobInfo);
localStorage.setItem('data', JSON.stringify(oldData));
refreshBtn.style.display = 'block';
    
})

const refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener('click', function(){
    this.style.display = 'none';
    const jobField = document.getElementById("jobs");
    jobField.innerHTML = '';
    jobData = JSON.parse(localStorage.getItem('data'));
    jobData.forEach(job => {
    const newJob = document.createElement('div');
    newJob.innerHTML = job;
    jobField.appendChild(newJob);

});
})

const jobField = document.getElementById("jobs");
jobField.innerHTML = '';
jobData = JSON.parse(localStorage.getItem('data'));
jobData.forEach(job => {
const newJob = document.createElement('div');
newJob.innerHTML = job;
jobField.appendChild(newJob);

});
