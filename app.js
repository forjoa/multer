const express = require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename+'')
    }
})

const upload = multer({ storage: storage })

// In 'upload.single()' we have to write the NAME of the image input
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        res.json({ message: 'image uploaded succesfully' })
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

app.listen(port)