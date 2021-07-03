from flask import Blueprint, render_template, request

views = Blueprint('views', __name__, template_folder='templates')

@views.route('/', methods=['GET','POST'])
def home():
    
    return render_template('main/index.html')

@views.route('/mapa', methods=['GET'])
def mapa():

    return render_template('mapa/index.html')

