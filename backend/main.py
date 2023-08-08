import uvicorn


if __name__ == "__main__":
    uvicorn.run("api.api:app", host="jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", port=8000, reload=True)