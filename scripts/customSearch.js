$( document ).ready(function() {

    // ------------------ Custom Search ------------------- //

    let searchOutput = document.getElementsByClassName("sqs-search-page-output")[0];

    if (window.location.pathname.includes("/search")) {
        function fixSearchLoaded() {
            
            let searchObserver = new MutationObserver(function () {
            
                let searchResultItems = document.querySelectorAll(".search-result");
                    
                if (searchResultItems.length != 0) {
                    for (let i = 0; i < searchResultItems.length; i++) {
                        
                        let title = searchResultItems[i].querySelector('.sqs-title');
                        
                        // TARGET UNWANTED SEARCH TITLE RESULTS HERE
                        if (title.innerHTML.includes("CTAs") || title.innerHTML.includes("Services")) {
                            searchResultItems[i].style.display = "none";
                        }
                    }
                }
            });
                
            searchObserver.observe(searchOutput, {
                attributes: true,
                attributeFilter: ['class'],
            });
                
        }

        

        function reloadSearch() {
            let reloadObserver = new MutationObserver(function () {
                if(searchOutput.classList.contains('hide')) {
                    window.location.reload();
                }
            })

            reloadObserver.observe(searchOutput, {
                attributes: true,
                attributeFilter: ['class'],
            });
        }
    }
    // ------------------------------------------------- //
    
    fixSearchLoaded();
    reloadSearch();
});