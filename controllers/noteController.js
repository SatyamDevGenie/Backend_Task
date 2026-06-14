const Note = require("../models/Note");

// CREATE NOTE
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const note = await Note.create({
            title,
            content
        });

        res.status(201).json({
            success: true,
            data: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL NOTES
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find()
            .sort({ updatedAt: -1 });

        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE NOTE
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(
            req.params.id
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            data: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE NOTE
const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.findById(
            req.params.id
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        note.title = title || note.title;
        note.content = content || note.content;

        const updatedNote = await note.save();

        res.status(200).json({
            success: true,
            data: updatedNote
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE NOTE
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(
            req.params.id
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        await note.deleteOne();

        res.status(200).json({
            success: true,
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// SEARCH NOTES
const searchNotes = async (req, res) => {
    try {
        const keyword = req.query.keyword;

        const notes = await Note.find({
            $or: [
                {
                    title: {
                        $regex: keyword,
                        $options: "i"
                    }
                },
                {
                    content: {
                        $regex: keyword,
                        $options: "i"
                    }
                }
            ]
        }).sort({
            updatedAt: -1
        });

        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote,
    searchNotes
};