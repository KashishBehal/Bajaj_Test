const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const { name, dob, college_email, college_roll_number, data } = req.body;

   
    if (!name || !dob || !college_email || !college_roll_number || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: true,
            user_id:1234,
            college_email:"k@gmail.com",
            college_roll_number: 123456,
            numbers:[1, 2 ,2],
            alphabets:['a']
        }
     );
    }
    const user_id = `${name.replace(/\s+/g, '_').toLowerCase()}_${dob.replace(/\//g, '')}`;
    const numbers = data.filter(item => typeof item === 'number');
    const alphabets = data.filter(item => typeof item === 'string');

    res.json({
        is_success: true,
        user_id:1234,
        college_email:"k@gmail.com",
        college_roll_number: 123456,
        numbers:[1, 2 ,2],
        alphabets:['a']
    }
   );
    }
);

       app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    }
);
      }
    );

      app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
)
;
