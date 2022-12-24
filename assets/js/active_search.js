// Adapted from Hilman Ramadhan, see:
// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/

function liveSearch() {
    let search_query = document.getElementById("searchbox").value;

    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

// A little delay
window.onload=function(){
    let cards = document.querySelectorAll('.card')
    let typingTimer;
    let typeInterval = 500;
    let searchInput = document.getElementById('searchbox');
    searchInput.addEventListener('keyup', () => {
        console.log("Searching ...")
        clearTimeout(typingTimer);
        typingTimer = setTimeout(liveSearch, typeInterval);
    });
}
