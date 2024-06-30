let messagesShowing = false;
let user = "bblevins96";
let activePatient;
const patients =
    [
        {
            patientId: "1",
            firstName: "Charlie",
            birthday: "03/03/2015",
            species: "Canine",
            sex: "SF",
            ownerUsername: "bblevins96",
            imageSource: "../img/Charlie.jpg"
        },
        {
            patientId: "2",
            firstName: "Sunny",
            birthday: "01/01/2017",
            species: "Feline",
            sex: "CM",
            ownerUsername: "bblevins96",
            imageSource: "../img/Sunny.jpg"
        },
        {
            patientId: "3",
            firstName: "Arlo",
            birthday: "01/01/2019",
            species: "Feline",
            sex: "CM",
            ownerUsername: "bblevins96",
            imageSource: "../img/Arlo.jpg"
        }
    ]
const messages =
    [
        {
            messageId: 1,
            subject: "Looks great!",
            body: "Charlie's labwork looks great, her white blood cell count is back in the normal range. How is she doing after her visit?",
            fromUsername: "cakelly4",
            toUsername: "bblevins96",
            testId: 1,
            patientId: 1
        },
        {
            messageId: 2,
            subject: "Follow-up on Medication",
            body: "Just a reminder to check if Charlie is having any side effects from her new medication. Has she reported anything unusual?",
            fromUsername: "cakelly4",
            toUsername: "bblevins96",
            testId: 2,
            patientId: 1
        },
        {
            messageId: 3,
            subject: "Next Appointment",
            body: "Charlie's next appointment is scheduled for next Monday at 3 PM. Please confirm if that works for you.",
            fromUsername: "cakelly4",
            toUsername: "bblevins96",
            testId: 3,
            patientId: 1
        },
        {
            messageId: 4,
            subject: "Lab Results",
            body: "The latest lab results for Charlie are in. Everything looks stable, but we should continue monitoring her closely.",
            fromUsername: "cakelly4",
            toUsername: "bblevins96",
            testId: 4,
            patientId: 1
        },
        {
            messageId: 5,
            subject: "Dietary Recommendations",
            body: "I've attached some dietary recommendations for Charlie. Please make sure she follows them to help with her recovery.",
            fromUsername: "cakelly4",
            toUsername: "bblevins96",
            testId: 5,
            patientId: 1
        }
        
        
    ];
const prescriptions =
    [
        {
            prescriptionId: 1,
            name: "Trazodone 50mg",
            quantity: 10,
            unit: "tablets",
            instructions: "Give 1/2 tablet by mouth 3 hours prior to thunderstorms to reduce anxiety.",
            refills: 0,
            patientId: 1,
            doctorUsername: "cakelly4",
            active: true
        }
    ]


// ELEMENTS: NAV /////////////////////////////////////////
const messageInteractable = document.querySelector(".interactable");
const testInteractable = document.querySelector(".Tst");
const prescriptionInteractable = document.querySelector(".Med");
const portrait = document.querySelector(".portrait");

// ELEMENTS: CONTENT /////////////////////////////////////
const content = document.getElementById("content");


// EVENT LISTENERS ///////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    activePatient = patients[0];
    renderPatientProfiles();
});





// FUNCTIONS /////////////////////////////////////////////
function renderPatientProfiles() {
    for (let i = patients.length-1; i >= 0; i--) {
        console.log(i);
        let patient = patients[i];
        const nav = document.createElement("nav");
        nav.classList.add("pet-card");
        let cardClass = "card-" + i;
        nav.classList.add(cardClass);

        // Create menu
        const menu = document.createElement("menu");
        menu.classList.add("menu");

        const messages = document.createElement("li");
        messages.classList.add("interactable");
        messages.classList.add("Msg");
        messages.innerText = "M";
        messages.addEventListener("click", renderMessages);
        menu.appendChild(messages);

        const tests = document.createElement("li");
        tests.classList.add("interactable");
        tests.classList.add("Tst");
        tests.innerText = "T";
        menu.appendChild(tests);

        const prescriptions = document.createElement("li");
        prescriptions.classList.add("interactable");
        prescriptions.classList.add("Med");
        prescriptions.innerText = "Rx";
        menu.appendChild(prescriptions);

        nav.appendChild(menu);

        // Create portrait
        const portrait = document.createElement("img");
        portrait.src = patient.imageSource;
        portrait.alt = patient.firstName;
        portrait.classList.add("portrait");
        portrait.addEventListener("click", expandNav);
        nav.appendChild(portrait);

        // Create info
        const info = document.createElement("div");
        info.classList.add("pet-info");
        const name = document.createElement("h2");
        name.classList.add("pet-name");
        name.innerText = patient.firstName;
        info.appendChild(name);
        const species = document.createElement("p");
        species.classList.add("species");
        species.classList.add("pet-details");
        species.innerText = patient.species;
        info.appendChild(species);
        const sex = document.createElement("p");
        sex.classList.add("sex");
        sex.classList.add("pet-details");
        sex.innerText = patient.sex;
        info.appendChild(sex);
        const birthday = document.createElement("p");
        birthday.innerText = patient.birthday;
        birthday.classList.add("birthday");
        birthday.classList.add("pet-details");
        info.appendChild(birthday);
        nav.appendChild(info);
        
        const main = document.querySelector("main");
        main.insertBefore(nav, main.firstChild);

    }

}




function shrinkNav() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    document.querySelector(".card-0").classList.add("active");
    main.classList.add("shrink-nav");
    header.classList.add("shrink-header");
}

function expandNav() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const content = document.getElementById("content");

    main.classList.remove("shrink-nav");
    header.classList.remove("shrink-header");
    content.classList.remove("display");
    content.innerHTML = "";
    messagesShowing = false;

}

function renderMessages() {
    if (messagesShowing) {
        return;
    }
    shrinkNav();
    content.classList.add("display");
    const ul = document.createElement("ul");
    ul.classList.add("message");
    content.appendChild(ul);
    for (let message of messages) {
        const messageItem = document.createElement("li");
        ul.appendChild(messageItem);

        const subject = document.createElement("span");
        subject.innerText = message.subject;
        messageItem.appendChild(subject);

        const from = document.createElement("p");
        from.innerText = message.fromUsername;
        messageItem.appendChild(from);

        const messageBody = document.createElement("p");
        messageBody.innerText = message.body;
        messageItem.appendChild(messageBody);

    }
    messagesShowing = true;
}