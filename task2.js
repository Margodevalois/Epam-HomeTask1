function generateNewUser() {
    let user = {};
        function gen_password(len){
            let password = "";
            const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*=";
            for (let i = 0; i < len; i++){
                password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
            }
            return password;
        };
        let genPassword = gen_password(13);

        function gen_firstName(len){
            let firstName = "";
            const symbols = "abcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < len; i++){
                firstName += symbols.charAt(Math.floor(Math.random() * symbols.length));     
            }
            return firstName[0].toUpperCase() + firstName.slice(1);
        };
        let genFirstName = gen_firstName(5);

        function gen_lastName(len){
            let lastName = "";
            const symbols = "abcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < len; i++){
                lastName += symbols.charAt(Math.floor(Math.random() * symbols.length));     
            }
            return lastName[0].toUpperCase() + lastName.slice(1);
        };
        let genLastName = gen_lastName(10);

        function gen_email(len){
            let email = "";
            let symbols = genFirstName + genLastName;
            for (let i = 0; i < len; i++){
                email += symbols.charAt(Math.floor(Math.random() * symbols.length));     
            }
            return email + '@gmail.com';
        };
        let genEmail = gen_email(10);

        function gen_phoneNumber(len){
            let phoneNumber = "";
            let symbols = '1234567890';
            for (let i = 0; i < len; i++){
                phoneNumber += symbols.charAt(Math.floor(Math.random() * symbols.length));     
            }
            return phoneNumber;
        }
        let genNumber = gen_phoneNumber(9);

    return user = {email: genEmail,
        firstName: genFirstName,
        lastName: genLastName,
        password: genPassword,
        phoneNumber: parseInt('+48' + genNumber)};
};
