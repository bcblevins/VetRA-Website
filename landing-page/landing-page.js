let isMessagesShowing = false;
let isTestsShowing = false;
let isPrescriptionsShowing = false;
let isTestData = false;
let user;
let activePatient;
let patients;
let messages;
let prescriptions;
let tests;

if (localStorage.getItem("token") === "test") {
    console.log("test data incoming")
    user =
    {
        username: "bblevins96",
        password: "t4qc09ntqcruiqm[werfm[vfdasd;jk",
        firstName: "Beau",
        lastName: "Blevins",
        email: "bblevins@test.com"
    };
    activePatient;
    patients =
        [
            {
                patientId: "3",
                firstName: "Arlo",
                birthday: "01/01/2019",
                species: "Feline",
                sex: "CM",
                ownerUsername: "bblevins96",
                imageSource: "../img/Arlo.jpg"
            },
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
            }
        ]
    patients.sort((a, b) => a.patientId - b.patientId);
    messages =
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
                "subject": "Charlie learned to drive",
                "body": "Please help, Charlie has kidnapped me and is driving me to the treat store. I haven't told her yet that that doesn't exist.",
                "fromUsername": "bblevins96",
                "toUsername": "cakelly4",
                "patientId": 1,
                "testId": 1
            },
            {
                messageId: 3,
                subject: "Recheck in 2 weeks",
                body: "Charlie's liver values are still elevated. We should recheck in 2 weeks to see if they are improving.",
                fromUsername: "cakelly4",
                toUsername: "bblevins96",
                testId: 3,
                patientId: 1
            },
            {
                messageId: 4,
                subject: "Lab Results",
                body: "The latest lab results for Charlie are in. Liver values have improved and the rest of her bloodwork looks great.",
                fromUsername: "cakelly4",
                toUsername: "bblevins96",
                testId: 4,
                patientId: 1
            },
            {
                messageId: 5,
                subject: "Dietary Recommendations",
                body: "Charlie's weight is up a little bit. I recommend cutting back on her food by 1/4 cup per day. Let me know if you have any questions.",
                fromUsername: "cakelly4",
                toUsername: "bblevins96",
                testId: 5,
                patientId: 1
            }


        ];
    prescriptions =
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
    tests =
        [
            {
                "id": 1,
                "name": "CBC",
                "timestamp": "2024-05-24T00:00:00",
                "patientID": 1,
                "doctorUsername": "cakelly4",
                "results": [
                    {
                        "resultID": 1,
                        "testID": 1,
                        "resultValue": "9.3",
                        "parameterName": "WBC",
                        "rangeLow": "4",
                        "rangeHigh": "15.5",
                        "unit": "10^3/mcL"
                    },
                    {
                        "resultID": 2,
                        "testID": 1,
                        "resultValue": "8.0",
                        "parameterName": "RBC",
                        "rangeLow": "4.8",
                        "rangeHigh": "9.3",
                        "unit": "10^6/mcL"
                    },
                    {
                        "resultID": 3,
                        "testID": 1,
                        "resultValue": "20.3",
                        "parameterName": "HGB",
                        "rangeLow": "12.1",
                        "rangeHigh": "20.3",
                        "unit": "g/dl"
                    },
                    {
                        "resultID": 4,
                        "testID": 1,
                        "resultValue": "54.0",
                        "parameterName": "HCT",
                        "rangeLow": "36",
                        "rangeHigh": "60",
                        "unit": "%"
                    },
                    {
                        "resultID": 5,
                        "testID": 1,
                        "resultValue": "67.0",
                        "parameterName": "MCV",
                        "rangeLow": "58",
                        "rangeHigh": "79",
                        "unit": "fL"
                    },
                    {
                        "resultID": 6,
                        "testID": 1,
                        "resultValue": "330",
                        "parameterName": "PLT",
                        "rangeLow": "170",
                        "rangeHigh": "400",
                        "unit": "10^3/mcL"
                    }
                ]
            },
            {
                "id": 4,
                "name": "Fecal",
                "timestamp": "2024-07-03T21:05:41.764148",
                "patientID": 1,
                "doctorUsername": "cakelly4",
                "results": [
                    {
                        "resultID": 15,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Hookworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    },
                    {
                        "resultID": 16,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Roundworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    },
                    {
                        "resultID": 17,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Whipworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    },
                    {
                        "resultID": 18,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Tapeworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    }
                ]
            }
        ];
    console.log("test data loaded");
    isTestData = true;

}

// ELEMENTS: HEADER //////////////////////////////////////
const header = document.querySelector("header");
const userName = document.getElementById("user-name");

// ELEMENTS: CONTENT /////////////////////////////////////
const content = document.getElementById("content");

// EVENT LISTENERS ///////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    setup();
    console.log("DOMContentLoaded");
});

async function setup() {
    if (!isTestData) {
        await fetchData();
        // activePatient = patients[0];
        userName.innerText = user.firstName + " " + user.lastName
    }
    renderPatientProfiles();
}

async function fetchData() {
    user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user.firstName + " " + user.lastName);

    const patientResponse = await fetch("http://localhost:8080/test/" + user.username + "/patients");

    patients = await patientResponse.json();
    patients.sort((a, b) => a.patientId - b.patientId);
    console.log(patients);

    // .find allows indexing array by object property value. This way we can set the image source for each patient by id
    patients.find(item => item.patientId === 3).imageSource = "../img/Arlo.jpg";
    patients.find(item => item.patientId === 1).imageSource = "../img/Charlie.jpg";
    patients.find(item => item.patientId === 2).imageSource = "../img/Sunny.jpg";
    console.log(patients[0].firstName);

    const messageResponse = await fetch("http://localhost:8080/test/" + patients[0].patientId + "/messages");


    messages = await messageResponse.json();
    console.log(messages);

    const prescriptionResponse = await fetch("http://localhost:8080/test/" + patients[0].patientId + "/prescriptions");

    prescriptions = await prescriptionResponse.json();
    console.log(prescriptions);

    const testResponse = await fetch("http://localhost:8080/test/" + patients[0].patientId + "/tests");

    tests = await testResponse.json();

    for (let test of tests) {
        const resultResponse = await fetch("http://localhost:8080/test/" + test.id + "/results");
        test.results = await resultResponse.json();
        console.log(test);
    }
}





// FUNCTIONS /////////////////////////////////////////////
function renderPatientProfiles() {
    for (let i = patients.length - 1; i >= 0; i--) {
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
        messages.classList.add("Msg-" + patient.patientId);
        messages.innerText = "M";
        messages.addEventListener("click", renderMessages);
        menu.appendChild(messages);

        const tests = document.createElement("li");
        tests.classList.add("interactable");
        tests.classList.add("Tst");
        tests.innerText = "T";
        tests.addEventListener("click", renderTests);
        menu.appendChild(tests);

        const prescriptionBtn = document.createElement("li");
        prescriptionBtn.classList.add("interactable");
        prescriptionBtn.classList.add("Med");
        prescriptionBtn.innerText = "Rx";
        prescriptionBtn.addEventListener("click", renderPrescriptions);
        menu.appendChild(prescriptionBtn);

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

    const backBtn = document.createElement("button");
    backBtn.innerText = "Back";
    backBtn.classList.add("back-btn");
    backBtn.addEventListener("click", expandNav);
    content.appendChild(backBtn);

    const headerText = document.createElement("h1");
    headerText.classList.add("header-text");
    header.appendChild(headerText);
    if (isMessagesShowing) {
        headerText.innerText = "Messages";
    } else if (isPrescriptionsShowing) {
        headerText.innerText = "Prescriptions";
    } else {
        headerText.innerText = "Test Results";
    }
}

function expandNav() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const content = document.getElementById("content");

    main.classList.remove("shrink-nav");
    header.classList.remove("shrink-header");
    content.classList.remove("display");
    content.innerHTML = "";

    const headerText = document.querySelector(".header-text");
    headerText.remove();

    isMessagesShowing = false;
    isPrescriptionsShowing = false;
    isTestsShowing = false;

}

function renderMessages() {
    if (isMessagesShowing) {
        return;
    }
    isMessagesShowing = true;
    shrinkNav();
    content.classList.add("display");
    const ul = document.createElement("ul");
    ul.classList.add("message");
    content.appendChild(ul);
    for (let message of messages) {
        const messageItem = document.createElement("li");
        ul.appendChild(messageItem);

        const subject = document.createElement("h3");
        subject.innerText = message.subject;
        messageItem.appendChild(subject);

        const from = document.createElement("p");
        from.innerText = message.fromUsername;
        from.classList.add("from");
        messageItem.appendChild(from);

        const messageBody = document.createElement("p");
        messageBody.innerText = message.body;
        messageItem.appendChild(messageBody);

    }
}

function renderPrescriptions() {
    if (isPrescriptionsShowing) {
        return;
    }
    prescriptionsShowingShowing = true;
    shrinkNav();
    content.classList.add("display");
    const ul = document.createElement("ul");
    ul.classList.add("prescription");
    content.appendChild(ul);
    for (let prescription of prescriptions) {
        const prescriptionItem = document.createElement("li");
        ul.appendChild(prescriptionItem);

        const rxName = document.createElement("h3");
        rxName.innerText = prescription.name;
        prescriptionItem.appendChild(rxName);

        const doctor = document.createElement("p");
        doctor.innerText = prescription.doctorUsername;
        doctor.classList.add("doctor");
        prescriptionItem.appendChild(doctor);

        const instructions = document.createElement("p");
        instructions.innerText = prescription.instructions;
        instructions.classList.add("instructions");
        prescriptionItem.appendChild(instructions);

    }
}

function renderTests() {
    if (isTestsShowing) {
        return;
    }
    isTestsShowing = true;
    shrinkNav();
    content.classList.add("display");
    const ul = document.createElement("ul");
    ul.classList.add("tests");
    content.appendChild(ul);
    for (let test of tests) {
        // Parent
        const testItem = document.createElement("li");
        testItem.classList.add("test-item");
        ul.appendChild(testItem);

        // Child
        const testHeading = document.createElement("div");
        testHeading.classList.add("test-heading");
        testItem.appendChild(testHeading);

        // Child
        const testName = document.createElement("h3");
        testName.innerText = test.name;
        testName.classList.add("test-name")
        testHeading.appendChild(testName);

        // Child
        const date = document.createElement("p");
        let testDate = new Date(test.timestamp);
        date.innerText = testDate.toDateString();
        date.classList.add("date");
        testHeading.appendChild(date);

        // Child
        const doctor = document.createElement("p");
        doctor.innerText = test.doctorUsername;
        doctor.classList.add("doctor");
        testItem.appendChild(doctor);

        // Child --> Parent
        const results = document.createElement("table");
        results.classList.add("results");
        testItem.appendChild(results);

        // Child --> Parent
        const headingRow = document.createElement("tr");
        headingRow.classList.add("heading-row");
        results.appendChild(headingRow);

        // Child
        const parameter = document.createElement("th");
        parameter.innerText = "Parameter";
        headingRow.appendChild(parameter);

        const result = document.createElement("th");
        result.innerText = "Result";
        headingRow.appendChild(result);

        const unit = document.createElement("th");
        unit.innerText = "Unit";
        headingRow.appendChild(unit);

        const rangeLow = document.createElement("th");
        rangeLow.innerText = "Lowest Value";
        headingRow.appendChild(rangeLow);

        const rangeHigh = document.createElement("th");
        rangeHigh.innerText = "Highest Value";
        headingRow.appendChild(rangeHigh);


        for (let result of test.results) {
            const row = document.createElement("tr");
            results.appendChild(row);
            row.classList.add("result-row");

            const parameter = document.createElement("td");
            parameter.innerText = result.parameterName;
            row.appendChild(parameter);

            const resultValue = document.createElement("td");
            resultValue.innerText = result.resultValue;
            row.appendChild(resultValue);

            const unit = document.createElement("td");
            unit.innerText = result.unit;
            row.appendChild(unit);

            const rangeLow = document.createElement("td");
            rangeLow.innerText = result.rangeLow;
            row.appendChild(rangeLow);

            const rangeHigh = document.createElement("td");
            rangeHigh.innerText = result.rangeHigh;
            row.appendChild(rangeHigh);

        }


    }
}