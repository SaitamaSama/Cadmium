;(() => {
    class OTPer {
        constructor(inputElement) {
            this.inputElement = inputElement;

            inputElement.addEventListener('keypress', (e) => {
                if(e.keyCode == 13) {
                    this.handleEnter();
                }
            });
        }

        handleEnter() {
            //
        }
    }

    window.OTPer = OTPer;
})();