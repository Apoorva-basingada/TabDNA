import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/classify", (req, res) => {
    const { titles } = req.body;

    const categories = {
        Study: [],
        Entertainment: [],
        Development: [],
        Others: []
    };

    titles.forEach(title => {
        const t = title.toLowerCase();

        if (t.includes("youtube") || t.includes("netflix")) {
            categories.Entertainment.push(title);
        } else if (t.includes("leetcode") || t.includes("github")) {
            categories.Development.push(title);
        } else if (t.includes("exam") || t.includes("notes")) {
            categories.Study.push(title);
        } else {
            categories.Others.push(title);
        }
    });

    res.json({ text: JSON.stringify(categories, null, 2) });
});

app.listen(3000, () => {
    console.log("🔥 Backend running on http://localhost:3000");
});
