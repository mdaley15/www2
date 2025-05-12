function imgFilter(btn) {
    filter = btn.getAttribute('data-filter');
    let thisBlock = btn.closest('.col');
    let filterBtns = thisBlock.querySelectorAll('.filterBtn');
    filterTexts = thisBlock.querySelectorAll('.filterText');
    thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
    if (thisGallery) {
        galleryItems = thisGallery.querySelectorAll('.slide');
    }
    var tabs = [],
        tabPanels = [];
    filterBtns.forEach(filterBtn => {
        filterBtn.classList.remove('activeBtn');
        filterBtn.setAttribute('tabindex','-1');
        filterBtn.setAttribute('aria-selected','false');
        tabs.push(filterBtn);
    });
    btn.classList.add('activeBtn');
    btn.removeAttribute('tabindex');
    btn.setAttribute('aria-selected','true');
    filterTexts.forEach(filterText => {
        tabPanels.push(filterText);
        let target = filterText.getAttribute('data-target');
        if (filter == target) {
            filterText.classList.remove('hide');
        } else {
            filterText.classList.add('hide');
        }
    });
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
                }
            } else {
                tab.setAttribute('aria-selected', 'false');
                tab.classList.remove('activeBtn');
                tab.tabIndex = -1;
                this.tabpanels[i].classList.add('hide');
            }
        }
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
            imgFilter(event.currentTarget);
            flag = true;
            break;

        case 'ArrowRight':
            this.setSelectedToNextTab(tgt);
            imgFilter(event.currentTarget);
            console.log(event.currentTarget);
            flag = true;
            break;

        case 'Home':
            this.setSelectedTab(this.firstTab);
            imgFilter(event.currentTarget);
            flag = true;
            break;

        case 'End':
            this.setSelectedTab(this.lastTab);
            imgFilter(event.currentTarget);
            flag = true;
            break;

        case 'Enter':
            imgFilter(event.currentTarget);
            flag = true;
            break;

        case ' ':
            imgFilter(event.currentTarget);
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
        imgFilter(event.currentTarget);
    }
}

// Initialize tablist
document.addEventListener('DOMContentLoaded', function() {
    var tablists = document.querySelectorAll('[role=tablist].imgFilter');
    for (var i = 0; i < tablists.length; i++) {
        new TabsAutomatic(tablists[i]);
    }
    let startingBtns = document.querySelectorAll('.startingBtn');
    startingBtns.forEach(btn => {
        console.log(btn,this);
        btn.addEventListener("click", function() {
            imgFilter(btn);
            console.log('filter '+btn+' clicked');
        });
        btn.click();
    });
});