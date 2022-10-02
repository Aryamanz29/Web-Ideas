from django.shortcuts import render
from django.core.mail import send_mail


def index(request):
    if request.method == "POST":
        name = request.POST.get('full-name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        data = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        }
        message = '''
        New message:{}
        Email: {}
        '''.format(data['message'], data['name'], data['email'], )
        send_mail(data['subject'], message, '', ['prashantkumarshee@gmail.com'])

    return render(request, "mysite/index.html", {})
