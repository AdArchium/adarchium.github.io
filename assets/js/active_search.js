window.onload=function(){
    let timer;
    const input = document.querySelector("#searchbox");
    input.addEventListener("keyup", function (liveSearch) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const items = document.querySelectorAll(".cards");
            for (let item of items) {
                item.style.display = item.textContent.includes(liveSearch.target.value)
                ? "inline-block"
                : "none";
            }
        }, 1000);
    });
}