const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) =>{
   const allNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
   res.json(allNotes);
})

router.post('/', (req, res) =>{
    const allNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    const newNote = {
        title: req.body.title,
        text :req.body.text,
        id: uuidv4(),
    };
    allNotes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(allNotes));
    res.json(allNotes);
})

router.delete('/:id', (req, res) => {
    const allNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    allNotes.splice(allNotes.indexOf(allNotes.find(note => note.id == req.params.id)),1);
    fs.writeFileSync("./db/db.json", JSON.stringify(allNotes));
    res.json(allNotes);
})

module.exports = router;