function imgFilter(btn) {
    filter = btn.getAttribute('data-filter');
    let thisBlock = btn.closest('.col');
    thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
    if (thisGallery) {
        galleryItems = thisGallery.querySelectorAll('.slide');
    }
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
            if (tabpanel) {
                this.tabpanels.push(tabpanel);
            } else {}

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
                if (this.tabpanels[i]) {
                    this.tabpanels[i].classList.remove('hide');
                } else {}
                if (setFocus) {
                    tab.focus();
                    console.log(tab);
                }
            } else {
                tab.setAttribute('aria-selected', 'false');
                tab.classList.remove('activeBtn');
                tab.tabIndex = -1;
                if (this.tabpanels[i]) {
                    this.tabpanels[i].classList.add('hide');
                } else {}
            }
        }
        imgFilter(currentTab);
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
            flag = true;
            break;

        case 'ArrowRight':
            this.setSelectedToNextTab(tgt);
            flag = true;
            break;

        case 'Home':
            this.setSelectedTab(this.firstTab);
            flag = true;
            break;

        case 'End':
            this.setSelectedTab(this.lastTab);
            flag = true;
            break;

        case 'Enter':
            this.setSelectedTab(event.currentTarget);
            flag = true;
            break;

        case ' ':
            this.setSelectedTab(event.currentTarget);
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
        imgFilter(event.currentTarget);
    }
}

// Initialize tablist
document.addEventListener('DOMContentLoaded', function() {
    var tablists = document.querySelectorAll('[role=tablist].imgFilter');
    for (var i = 0; i < tablists.length; i++) {
        new TabsAutomatic(tablists[i]);
    }
});