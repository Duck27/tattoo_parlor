from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost/db'
db = SQLAlchemy(app)

class Clients (db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.Text, unique=True, nullable=False)

@app.route('/api/addClient', methods=['POST'])
def addClient():
    data = request.form.to_dict()
    name = data['name']
    phone = data['phone']

    add_client = Clients(name=name, phone=phone)
    db.session.add(add_client)
    try:
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({'status': 'error', 'message': 'Клиент с таким номером телефона уже существует.'}), 400
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run()