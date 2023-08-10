from fastapi import APIRouter
from config.db  import conn

actos = APIRouter();

@actos.get("/actos")
async def geActos(idRegistro = "-1"):
      with conn.cursor() as cursor:
        # Read a single record
        if (idRegistro=="-1"):
          sql = "select * from acto a inner join registro_acto ra on a.id_acto = ra.acto_id_acto" 
        else:
          sql = "select * from acto a inner join registro_acto ra on a.id_acto = ra.acto_id_acto where ra.registro_id_registro ="+ str(idRegistro)
        cursor.execute(sql)
        result = cursor.fetchall()
        return(result)