

// tab color change
const tabBtns = document.querySelectorAll("#tab-btns .tbtn");

tabBtns.forEach(tbtn => {
    tbtn.addEventListener("click", () => {

        tabBtns.forEach(b => {
        b.classList.remove("btn-primary");
        });
    
        tbtn.classList.add("btn-primary");
        // tbtn.classList.remove("btn");
        });
});




async function loadIssues() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

    const data = await res.json();
    displayIssues(data.data);
}

function displayIssues(cards){

    const cardsContainer = document.getElementById("card-container");
    const issueCount = document.getElementById("issue-count");

    cards.forEach((card) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="bg-white rounded-lg p-3 border-t-4 ${card.status === "open" ? "border-green-700" : "border-purple-700"} space-y-5 shadow-md">
                <div class="flex justify-between pt-3">
                    ${card.status === "open" ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
                    <p class="badge badge-soft badge-error">${card.priority}</p>
                </div>
<!-- issue Details -->
                <div class="pt-3">
                    <h3 class="font-semibold text-xl">${card.title}</h3>
                    <p class="line-clamp-2 pt-3">${card.description}</p>
                </div>
                <div class="flex pt-3 pb-3 border-b-3 border-gray-200">
                    <p class="badge badge-soft badge-secondary uppercase"><i class="fa-solid fa-bug"></i>${card.labels[0]}</p>
                    <p class="text-sm font-thin badge badge-soft badge-warning uppercase"><i class="fa-solid fa-life-ring"></i>${card.labels[1]}</p>
                </div>
<!-- Author & Date -->
                <div>
                    <p>${card.author}</p>
                    <p>${card.createdAt}</p>
                </div>            
            </div>
       
        </div>`
       cardsContainer.appendChild(div);
       
    });
    issueCount.innerText = cardsContainer.children.length;
}
loadIssues();

