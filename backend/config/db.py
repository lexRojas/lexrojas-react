import pymysql.cursors
import pymysql.connections

#---LOCAL DATABASE ----

# _hostname = 'localhost',
# _username ='basedatos',
# _password ='basedatos',
# _database ='notario',

#---HEROKU DATABASE ----
_hostname = 'jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
_username = 'vl0v51r0t6ald9dh'
_password = 'nq5d3dq46cc551cj'
_database = 'u67qxne0bs0uujx8' 


# Connect to the database
conn = pymysql.connect(host=_hostname ,
                             user=_username,
                             password=_password,
                             database=_database,
                             cursorclass=pymysql.cursors.DictCursor)





