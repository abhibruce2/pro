// <-------imports---------->
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pg = require("pg");
const  {Client} = require("pg");

const cors = require("cors");
const {task} = require("./sequelize/models/tasssk");
const { verifyToken } = require("./verifyToken");
// <----DataBase Details ------->
const PORT = 5000;
const pool = new pg.Pool({
  port: 5432,
  password: "password",
  database: "postgres",
  host: "localhost",
  user: "postgres",
  max: 10,
});
const client = new Client({
    connectionString: 'postgres://postgres:password@localhost:5432/postgres',
  });
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});
// Create Api Call 
app.post("/api/post", async function (request, response) {
  const data = request.body;

    const createData = { 
    
     properties : data.properties,
     status : data.status,
     description : data.description,
     assignee : data.assignee ,
     due_date : data.due_date ,
    updatedAt : new Date(),
    createdAt : new Date(),
}
const properties = data.properties;
 const status = data.status;
 const description = data.description;
 const assignee = data.assignee ;
 const due_date = data.due_date ;
const updated_at = new Date();
const created_at = new Date();
  const values = [assignee,status, properties, due_date, description, created_at, updated_at ];
  pool.connect((err, db, done) => {
    if (err) {
      return console.log("err________",err);
    } else {
      db.query(
        "INSERT INTO task (assignee,status, properties,due_date, description,created_at, updated_at  ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [...values],
        (err, result) => {
        
          if (err) {
            console.log(err);
            return response.status(400).send({ err });
          } else {
            done();
            db.end();
            console.log( "Data inserted!");
            
            response.status(201).send({ message: "Data inserted!" });
          }
        }
      );
    }
  });
});
// Get Api call 
app.get("/api/list", verifyToken , function (request, response) {
  pool.connect(function (err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("SELECT * FROM tasks", (err, table) => {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          console.log("its Done");
          return response.status(200).send(table);
        }
      });
    }
  });
});
app.put("/api/update/:id", function (request, response){
    pool.connect(function (err, db, done){
        const query = `
        UPDATE task
        SET assignee = $1, status = $2, properties = $3, due_date = $4,description = $5, updated_at = $6,

        WHERE id = $3
      `;
      const properties = data.properties;
      const status = data.status;
      const description = data.description;
      const assignee = data.assignee ;
      const due_date = data.due_date ;
     const updated_at = new Date();
     const created_at = new Date();
        const values = [assignee, status, properties, due_date, description,updated_at  ];
       
client.connect()
.then(() => {
  return client.query(query, values);
})
.then(res => {
  console.log(`${res.rowCount} row(s) updated.`);
  client.end();
})
.catch(err => {
  console.error(err);
  client.end();
});
    })
})


app.listen(PORT, () => console.log("Listening on Port" + PORT));