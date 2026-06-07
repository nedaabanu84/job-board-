const jobs = [
{
id:1,
title:"Frontend Developer",
company:"TechNova",
category:"IT"
},
{
id:2,
title:"Marketing Executive",
company:"GrowthHub",
category:"Marketing"
},
{
id:3,
title:"UI/UX Designer",
company:"Pixel Studio",
category:"Design"
},
{
id:4,
title:"Financial Analyst",
company:"FinCorp",
category:"Finance"
},
{
id:5,
title:"Java Developer",
company:"CodeWorks",
category:"IT"
},
{
    id:6,
    title:"software developer",
    company:"codex",
    category:"IT"
},
];

let bookmarks =
JSON.parse(localStorage.getItem("bookmarks")) || [];

function displayJobs(jobList){

const container =
document.getElementById("jobContainer");

container.innerHTML="";

jobList.forEach(job=>{

container.innerHTML += `
<div class="job-card">

<h3>${job.title}</h3>

<p><strong>Company:</strong> ${job.company}</p>

<p><strong>Category:</strong> ${job.category}</p>

<button class="bookmark-btn"
onclick="bookmarkJob(${job.id})">
Bookmark
</button>

<button class="apply-btn"
onclick="openForm()">
Apply
</button>

</div>
`;
});
}

function filterJobs(category){

if(category==="All"){
displayJobs(jobs);
return;
}

const filtered =
jobs.filter(job =>
job.category===category);

displayJobs(filtered);
}

function bookmarkJob(id){

const job =
jobs.find(job => job.id===id);

const exists =
bookmarks.find(item => item.id===id);

if(exists){
alert("Already bookmarked");
return;
}

bookmarks.push(job);

localStorage.setItem(
"bookmarks",
JSON.stringify(bookmarks)
);

displayBookmarks();
}

function displayBookmarks(){

const container =
document.getElementById("bookmarkContainer");

container.innerHTML="";

if(bookmarks.length===0){
container.innerHTML =
"<p>No bookmarked jobs yet.</p>";
return;
}

bookmarks.forEach(job=>{

container.innerHTML += `
<div class="job-card">

<h3>${job.title}</h3>

<p>${job.company}</p>

<button onclick="removeBookmark(${job.id})">
Remove
</button>

</div>
`;
});
}

function removeBookmark(id){

bookmarks =
bookmarks.filter(
job => job.id!==id
);

localStorage.setItem(
"bookmarks",
JSON.stringify(bookmarks)
);

displayBookmarks();
}

function openForm(){
document.getElementById(
"applyModal"
).style.display="block";
}

function closeForm(){
document.getElementById(
"applyModal"
).style.display="none";
}

document
.getElementById("applyForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Application submitted successfully!"
);

this.reset();

closeForm();
}
);

displayJobs(jobs);
displayBookmarks();