from flask import Flask,request
from mail_send import send_mail
# from flask_ngrok import run_with_ngrok


app = Flask(__name__)

@app.route('/send',methods=["GET","POST"])
def sendMail():
    email = request.files.get('email')
    if email != None:
        return email
    if request.method == "POST":
        send_mail(request.form["email"])
        return request.form["email"]
    else:
        return "none"
    # elif request.method == "GET":
    #     send_mail( request.form["email"])
    #     return request.form["email"]



if __name__ == "__main__":
  app.run(debug=True,)