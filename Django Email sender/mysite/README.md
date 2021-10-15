## Enable Two Factor Authentication and setup an App Password in Gmail.
# set code editor(pycharm,Vs code,etc). and  startproject
```bash
python -m django startproject mysite
```
Open startapp in project
```bash
cd ./mysite
```
Important setting

Set Email Configurations
```bash
#### settings.py
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'my_pro_static')]
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'sketchkumar9565@gmail.com'
EMAIL_HOST_PASSWORD = 'xoidcpfminxvvpxs'
EMAIL_USE_SSL = False
```
**If u want this submit form send in your email just change email id**
```bash  
# views.py
message = '''
        New message:{}
        Email: {}
        '''.format(data['message'], data['name'], data['email'], )
        send_mail(data['subject'], message, '', ['prashantkumarshee@gmail.com'])
```
**this project  can use as Feedback/contact-form by using django Email system**
**************
### Thank you!