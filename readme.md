api

signup 
    signupVerification ✔
        - receives email by header
        - checks if email is in db 
        - generates an otp
        - makes an entry of email & otp in the db 
        - sends the generated otp to the user's email provided  

    signup ✔
        - receives otp and email by header
        - checks if the otp in db and header matches   
        - generates access and refresh token
        - makes an entry to the db 
        - returns token in response   


login
    loginVerification ✔
        - receives email by header
        - checks if email is in db 
        - generates an otp
        - makes an entry of email & otp in the db 
        - sends the generated otp to the user's email provided  

    login ✔
        - receives otp and email by header
        - checks if the otp in db and header matches   
        - generates access and refresh token
        - returns token in response   
















