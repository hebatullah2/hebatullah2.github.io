const navTabs = document.getElementById("navTabs");
const hardSkillsTab = document.getElementById("hardSkillsTab");
const softSkillsTab = document.getElementById("softSkillsTab");
const circle = document.getElementsByClassName("circle");
const hardSkills = document.getElementById("hardSkills");
const softSkills = document.getElementById("softSkills");
const taskPlannerTab = document.getElementById("taskPlannerTab");
const alarmClockTab = document.getElementById("alarmClockTab");
const taskPlanner = document.getElementById("taskPlanner");
const alarmClock = document.getElementById("alarmClock");
const circle1 = document.getElementById("circle1");
const verticalTabs = document.getElementById("v-pills-tab");

function tabToShow(elementToShow,elementToHide) {
    elementToHide.classList.remove("show","active");
    elementToHide.classList.add("hide");
    elementToShow.classList.remove("hide");
    elementToShow.classList.add("show");
    elementToShow.classList.add("active");
};

hardSkillsTab.addEventListener('click', ()=> {
    for(let i = 0; i < circle.length; i++){
        circle[i].style.backgroundColor = "light-blue";
    }; 
});

navTabs.addEventListener('click', (event)=> {
    let target = event.target;
    if(target.id == 'hardSkillsTab') {
        tabToShow(hardSkills,softSkills);
    };
    if(target.id == 'softSkillsTab') {
        tabToShow(softSkills,hardSkills);
    };
});

verticalTabs.addEventListener('click', (event)=> {
    let target = event.target;
    if(target.id == 'taskPlannerTab') {
        tabToShow(taskPlanner,alarmClock);
        taskPlannerTab.style.color = "black";
        alarmClockTab.style.color = "white";
    };
    if(target.id == 'alarmClockTab') {
        tabToShow(alarmClock,taskPlanner);
        alarmClockTab.style.color = "black";
        taskPlannerTab.style.color = "white";
    };
});
