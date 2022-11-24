
const tabContent1 = document.getElementById("issue-points-option")
const tabContent2 = document.getElementById("courier-option")

const tabs = [tabIssue, tabCourier]
const tabContents = [tabContent1, tabContent2]

function clearTabs() {
    tabs.forEach((tab) => {
        tab.classList.remove("popup-tab-active")
    })
    tabContents.forEach(tabContent => {
        tabContent.style.display = "none"
    })
}

function switchTab(tab) {
    clearTabs()
    tab.classList.add("popup-tab-active")
    const tabContentId = tab.getAttribute("for")
    const tabContent = document.getElementById(tabContentId)
    tabContent.style.display = "flex"
}
