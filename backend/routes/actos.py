from fastapi import APIRouter
from config.db  import conn

actos = APIRouter();

@actos.get("/actos")
def geActos(idActo:int = -1):
      with conn.cursor() as cursor:
        # Read a single record
        if (idActo==-1):
          sql = "SELECT * FROM ACTO"
        else:
          sql = "SELECT * FROM ACTO where id_acto="+ str(idActo)
        cursor.execute(sql)
        result = cursor.fetchall()
        return(result)