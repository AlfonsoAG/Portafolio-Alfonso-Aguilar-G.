from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/experiencia")
def experiencia():
    return render_template('experiencia.html')
    
@app.route("/perfil")
def perfil():
    return render_template('perfil.html')


@app.route("/proyectos")
def proyectos():
    return render_template('proyectos.html')

@app.route("/contacto")
def contacto():
    return render_template('contacto.html')
    
if __name__ == '__main__':
    app.run()