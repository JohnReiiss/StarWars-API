const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const port = 3000;

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

app.get("/", async (req, res) => {
  try {
    const films = await Film.find();
    return res.send(films);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    return res.send(film);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/:id", async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
      },
      { new: true }
    );
    return res.send(film);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const data = req.body;

    if (Array.isArray(data)) {
      const films = await Film.insertMany(data);
      return res.status(201).send(films);
    }

    const film = new Film(data);
    await film.save();
    return res.status(201).send(film);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://jhonatanreiiss:rXlccF1ZQUqp5n1g@cluster0.usftald.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("App running");
});
