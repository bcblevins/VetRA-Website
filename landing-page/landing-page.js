let user = "bblevins96";
const patients =
    [
        {
            patientId: "1",
            firstName: "Charlie",
            birthday: "03/03/2015",
            species: "Canine",
            sex: "SF",
            ownerUsername: "bblevins96"
        },
        {
            patientId: "2",
            firstName: "Sunny",
            birthday: "01/01/2017",
            species: "Feline",
            sex: "CM",
            ownerUsername: "bblevins96"
        },
        {
            patientId: "3",
            firstName: "Arlo",
            birthday: "01/01/2019",
            species: "Feline",
            sex: "CM",
            ownerUsername: "bblevins96"
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

const messageInteractable = document.querySelector(".interactable");
const testInteractable = document.getElementById("Tst");
const prescriptionInteractable = document.getElementById("Med");

messageInteractable.addEventListener("click", () => {
    shrinkNav();
});

function shrinkNav() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const aside = document.querySelector("aside");

    main.classList.add("shrink-nav");
    header.classList.add("shrink-header");
    aside.classList.add("shrink-aside")
}