import smtplib

def send_mail(receiver):
    with smtplib.SMTP('smtp.gmail.com',587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login('adhirajgupta2007@gmail.com','adhiraj1379')

        subject = "Adhiraj's coding experiment"
        body = "Why is this so hard"

        msg = f'Subject:{subject}\n\n{body}'
        smtp.sendmail('adhirajgupta2007@gmail.com',receiver,msg)
        return "Done"

                
