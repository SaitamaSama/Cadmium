/**
 * Created by saitama on 10/5/17.
 */

(() => {
    "use strict";
    class PageManager {
        constructor() {
            this.pageOpeners = Array.from(document.querySelectorAll('[data-page-open]'));
        }

        init() {
            this.pageOpeners.forEach((opener) => {
                let page = document.querySelector(opener.getAttribute('data-page-open'));
                let boundingRect = opener.getBoundingClientRect();
                page.style.top = boundingRect.top + 'px';
                page.style.left = boundingRect.left + 'px';
                opener.addEventListener('click', (e) => {
                    // Handle data bindings
                    this.handleDataBindings(page,
                        JSON.parse(page.getAttribute('data-data-bindings')),
                        JSON.parse(opener.getAttribute("data-page-data")));
                    document.querySelector('.page-bar').classList.add('active');
                    page.classList.add('active');
                    this.actionToggle();
                });
            });
        }

        handleDataBindings(page, bindings, pageData) {
            switch (bindings.type) {
                case "class":
                    let manager = new window[bindings.name](pageData);
                    manager.init(page);
                    break;
            }
        }

        actionToggle() {
            let toggle = false;

            if(!toggle) {
                document.querySelector('.menu').addEventListener('click', (e) => {
                    document.querySelector('.page-actions').classList.add('active');
                    toggle = true;
                });
            } else {
                document.querySelector('.menu').addEventListener('click', (e) => {
                    document.querySelector('.page-actions').classList.remove('active');
                    toggle = false;
                });
            }
        }
    }

    window.PageManager = PageManager;
})();