import express from 'express';
import cors from 'cors';
import pool from './db';

const app: express.Application = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// test route works
// app.get('/', (req: express.Request, res: express.Response) => {
//     res.send('hello')
// })

//get all users from db
app.get('/getUsers', async (req: express.Request, res: express.Response) => {
    const user_firstname = 'j';

    try {
        const users = await pool.query('SELECT * FROM userexample WHERE firstname = $1', [user_firstname])
        res.json(users.rows)

    } catch (err) {
        console.error(err)
    }
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

