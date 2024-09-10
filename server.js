const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5005;

app.use(cors());
app.use(express.json());

const TOTAL_ITEMS = 1000;

const getRandomName = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
    return names[Math.floor(Math.random() * names.length)];
  };
  const getRandomAdress = () => {
    const names = ['London', 'Paris', 'Delhi', 'Banglore', 'gurugram'];
    return names[Math.floor(Math.random() * names.length)];
  };


const generateItems = (start, limit) => {
  const items = [];
  for (let i = start; i < start + limit && i < TOTAL_ITEMS; i++) {
    items.push({id :i+1 , name :getRandomName() , adress : getRandomAdress()})
  }
  return items;
};

app.get('/api/items', (req, res) => {
  const { start = 0, limit = 100 } = req.query;
  const startIndex = parseInt(start);
  const limitCount = parseInt(limit);
  const items = generateItems(startIndex, limitCount);
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
