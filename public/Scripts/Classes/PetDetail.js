(() => {
    class PetDetail {
        constructor(pageData) {
            this.PetId = pageData.PetId;
        }

        init(page) {
            page.innerHTML = "<h1 style='text-align: center'>Pet Details <sub>" +  this.PetId + "</sub></h1>";
            document.querySelector('[data-page-action-populate]').innerHTML = `<div class="item" data-page-close>Cancel Editing</div>`;
        }
    }

    window.PetDetail = PetDetail;
})();