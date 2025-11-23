function showPage(pageName) {
    
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    
    if (pageName === 'home') {
        showTab('consultations');
    }
}

function showTab(tabName) {
    
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
