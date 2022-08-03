export const config = {
  "dev": {
    "username": "udagramruttner",
    "password": "udagramruttner",
    "database": "udagramruttner",
    "host": "udagramruttner.cuvgblxklhkj.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1a",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev",
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
  },  
  "jwt": {
    "secret": process.env.JWT_SECRET || "secret"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
