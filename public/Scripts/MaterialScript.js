;(() => {
    "use strict";

    let fbToggle = false;
    document.querySelector('.brand-icon').addEventListener('click', () => {
        if(!fbToggle) {
            //document.querySelector('.brand-icon').style.transform = 'rotate(360deg)';
            document.querySelector('.brand-icon').classList.add('opened');
            setTimeout(() => {
                document.querySelector('.brand-icon').classList.remove('opened');
                componentHandler.upgradeElements(Array.from(document.querySelectorAll('.mdl-toolip')));
            }, 501);
            Array.from(document.querySelectorAll('.curved-container button')).forEach((button) => {
                button.classList.add('opened');
            });
            fbToggle = true;
        } else if (fbToggle) {
            //document.querySelector('.brand-icon').style.transform = 'rotate(0deg)';
            document.querySelector('.brand-icon').classList.add('opened');
            setTimeout(() => {
                document.querySelector('.brand-icon').classList.remove('opened');
                componentHandler.upgradeElements(Array.from(document.querySelectorAll('.mdl-toolip')));
            }, 501);
            Array.from(document.querySelectorAll('.curved-container button')).forEach((button) => {
                button.classList.remove('opened');
            });
            fbToggle = false;
        }
    });

    class OTPer {
        constructor(inputElement, dialogElement, snackbarElement) {
            this.inputElement = inputElement;
            this.dialogElement = dialogElement;
            this.snackbarElement = snackbarElement;

            inputElement.addEventListener('keypress', (e) => {
                if(e.keyCode == 13) {
                    this.handleEnter();
                }
            });

            document.querySelector('#resend-otp').addEventListener('click', this.resend);
            document.querySelector('#submit-otp').addEventListener('click', this.aunthenticate.bind(this));
        }

        handleEnter() {
            if(this.inputElement.value.trim().length == 10) {
                let mobileNo = this.inputElement.value.trim();
                // API Request
                // Open OTP dialog
                this.dialogElement.showModal();
            } else {
                this.snackbarElement.MaterialSnackbar.showSnackbar({
                    message: "Please provide a valid mobile number"
                });
            }
        }

        createNotification(background, color, message) {
            let notification = document.createElement('div');
            notification.classList.add('notify');
            notification.style.background = background;
            notification.style.color = color;
            notification.innerHTML = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('appear');
                setTimeout(() => {
                    notification.classList.remove('appear');
                }, 5000);
            }, 201);
        }

        resend() {
            document.querySelector('#enter-page').classList.remove('active');
            document.querySelector('#resend-page').classList.add('active');
            // Resend req
            let presentColor = '';
            let presentContent = '';
            setTimeout(() => {
                presentColor = document.querySelector('#resend-page').style.background;
                presentContent = document.querySelector('#resend-page').innerHTML;
                document.querySelector('#resend-page').innerHTML = '' +
                    '<section class="text-center">' +
                    '<i class="material-icons big-text-thin" style="color: #ffeb3b;">done</i>' +
                    '<br>' +
                    '<span class="big-text-thin">Sent</span>' +
                    '</section>';
                document.querySelector('#resend-page').style.background = '#00bcd4';
            }, 7500);
            setTimeout(() => {
                document.querySelector('#resend-page').classList.remove('active');
                document.querySelector('#resend-page').style.background = presentColor;
                document.querySelector('#resend-page').innerHTML = presentContent;
                document.querySelector('#enter-page').classList.add('active');
            }, 15000);
        }

        aunthenticate() {
            let otp = document.querySelector('#otp').value.trim();
            if(otp.length == 0) {
                this.snackbarElement.MaterialSnackbar.showSnackbar({
                    message: "Please provide a valid OTP"
                });
                return;
            }

            document.querySelector('#enter-page').classList.remove('active');
            document.querySelector('#authentication-page').classList.add('active');
        }
    }

    window.OTPer = OTPer;
})();