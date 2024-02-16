const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const sessions = require('./sessions');
const users = require('./users');
const appState = require('./appstate');

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json());

app.post('/api/session', (req, res) => {
    const { username } = req.body;
  
    if(!users.isValid(username)) {
      res.status(400).json({ error: 'required-username' });
      return;
    }
  
    if(username === 'dog') {
      res.status(403).json({ error: 'auth-insufficient' });
      return;
    }
    
    const type  = (username.toLowerCase() === 'admin') ? 'admin' : 'user';
    const sid = sessions.addSession(username);
    appState.addUser(username,type);
  
    res.cookie('sid', sid);
    res.json(appState.getUserAndType(username));
  });
  


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));