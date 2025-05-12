function newImgFilter(btn) {
    filter = btn.getAttribute('data-filter');
    let thisBlock = btn.closest('.col');
    // let filterBtns = thisBlock.querySelectorAll('.filterBtn');
    // filterTexts = thisBlock.querySelectorAll('.filterText');
    thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
    if (thisGallery) {
        galleryItems = thisGallery.querySelectorAll('.slide');
    }
    // filterBtns.forEach(filterBtn => {
    //     filterBtn.classList.remove('activeBtn');
    //     filterBtn.setAttribute('tabindex','-1');
    //     filterBtn.setAttribute('aria-selected','false');
    // });
    // btn.classList.add('activeBtn');
    // btn.removeAttribute('tabindex');
    // btn.setAttribute('aria-selected','true');
    // filterTexts.forEach(filterText => {
    //     let target = filterText.getAttribute('data-target');
    //     if (filter == target) {
    //         filterText.classList.remove('hide');
    //     } else {
    //         filterText.classList.add('hide');
    //     }
    // });
    if (galleryItems) {
        galleryItems.forEach(item => {
            if (item.classList.contains(filter)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                item.querySelector('a').classList.remove('js-gallery-lightbox-opener');
            }
        });
    }
}

'use strict';

class TabsAutomatic {
    constructor(groupNode) {
        this.tablistNode = groupNode;

        this.tabs = [];

        this.firstTab = null;
        this.lastTab = null;

        this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
        this.tabpanels = [];

        for (var i = 0; i < this.tabs.length; i += 1) {
            var tab = this.tabs[i];
            var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

            tab.tabIndex = -1;
            tab.setAttribute('aria-selected', 'false');
            this.tabpanels.push(tabpanel);

            tab.addEventListener('keydown', this.onKeydown.bind(this));
            tab.addEventListener('click', this.onClick.bind(this));

            if (!this.firstTab) {
                this.firstTab = tab;
            }
            this.lastTab = tab;
        }

        this.setSelectedTab(this.firstTab, false);
    }

    setSelectedTab(currentTab, setFocus) {
        if (typeof setFocus !== 'boolean') {
            setFocus = true;
        }
        for (var i = 0; i < this.tabs.length; i += 1) {
            var tab = this.tabs[i];
            if (currentTab === tab) {
                tab.setAttribute('aria-selected', 'true');
                tab.classList.add('activeBtn');
                tab.removeAttribute('tabindex');
                this.tabpanels[i].classList.remove('hide');
                if (setFocus) {
                    tab.focus();
                    console.log(tab);
                }
            } else {
                tab.setAttribute('aria-selected', 'false');
                tab.classList.remove('activeBtn');
                tab.tabIndex = -1;
                this.tabpanels[i].classList.add('hide');
            }
        }
        console.log(currentTab);
        // currentTab.click();
    }

    setSelectedToPreviousTab(currentTab) {
        var index;

        if (currentTab === this.firstTab) {
            this.setSelectedTab(this.lastTab);
        } else {
            index = this.tabs.indexOf(currentTab);
            this.setSelectedTab(this.tabs[index - 1]);
        }
    }

    setSelectedToNextTab(currentTab) {
        var index;

        if (currentTab === this.lastTab) {
            this.setSelectedTab(this.firstTab);
        } else {
            index = this.tabs.indexOf(currentTab);
            this.setSelectedTab(this.tabs[index + 1]);
        }
    }

    /* EVENT HANDLERS */

    onKeydown(event) {
        var tgt = event.currentTarget,
        flag = false;

        switch (event.key) {
        case 'ArrowLeft':
            this.setSelectedToPreviousTab(tgt);
            newImgFilter(tgt);
            flag = true;
            break;

        case 'ArrowRight':
            this.setSelectedToNextTab(tgt);
            newImgFilter(tgt);
            flag = true;
            break;

        case 'Home':
            this.setSelectedTab(this.firstTab);
            newImgFilter(this.firstTab);
            flag = true;
            break;

        case 'End':
            this.setSelectedTab(this.lastTab);
            newImgFilter(this.lastTab);
            flag = true;
            break;

        case 'Enter':
            this.setSelectedTab(event.currentTarget);
            newImgFilter(event.currentTarget);
            flag = true;
            break;

        case ' ':
            this.setSelectedTab(event.currentTarget);
            newImgFilter(event.currentTarget);
            flag = true;
            break;

        default:
            break;
        }

        if (flag) {
        event.stopPropagation();
        event.preventDefault();
        }
    }

    onClick(event) {
        this.setSelectedTab(event.currentTarget);
        newImgFilter(event.currentTarget);
    }
}

// Initialize tablist
document.addEventListener('DOMContentLoaded', function() {
    var tablists = document.querySelectorAll('[role=tablist]#testing');
    for (var i = 0; i < tablists.length; i++) {
        new TabsAutomatic(tablists[i]);
    }
});