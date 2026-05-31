import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Database Setup
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'comments_db';
const DB_USER = process.env.DB_USER || 'admin';
const DB_PASS = process.env.DB_PASS || 'password';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mariadb',
    logging: false,
});

const Comment = sequelize.define('Comment', {
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

// Routes
app.get('/api/comments', async (req, res) => {
    try {
        const comments = await Comment.findAll({ order: [['createdAt', 'DESC']] });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/comments', async (req, res) => {
    try {
        const { author, content } = req.body;
        if (!author || !content) return res.status(400).json({ error: 'Author and content required' });
        const comment = await Comment.create({ author, content });
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fallback to React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MariaDB.');
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Unable to connect to database:', err);
        // Retry logic or exit
        setTimeout(startServer, 5000);
    }
};

startServer();
