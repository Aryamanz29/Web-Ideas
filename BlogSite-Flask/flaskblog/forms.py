from flask_wtf import FlaskForm
from wtforms import StringField , PasswordField, SubmitField , BooleanField , TextAreaField
from wtforms.validators import DataRequired , Length , Email ,EqualTo, ValidationError
from flaskblog.models import User

class RegistrationForm(FlaskForm):
	username=StringField('Username',validators=[DataRequired(),Length(min=2,max=20)])
	email = StringField('Email',validators=[DataRequired(),Email()])
	password= PasswordField('Password',validators=[DataRequired()])
	confirm_password= PasswordField('Confirm Password',validators=[DataRequired(),EqualTo('password')])
	submit= SubmitField('Sign Up')

	def validate_username(self,username):
		user = User.query.filter_by(username=username.data).first()
		if user:
			raise ValidationError('This username is already taken , choose a different one !')

	def validate_email(self,email):
		user = User.query.filter_by(email=email.data).first()
		if user:
			raise ValidationError('This email is already taken , choose a different one !')		


class LoginForm(FlaskForm):
	email = StringField('Email',validators=[DataRequired(),Email()])
	password= PasswordField('Password',validators=[DataRequired(),])
	submit= SubmitField('Login')
	remember= BooleanField('Remember Me')


class PostForm(FlaskForm):
	title = StringField('Title',validators=[DataRequired()])
	content = TextAreaField('Content',validators=[DataRequired()])
	submit = SubmitField('Post')
