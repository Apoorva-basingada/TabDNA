// Gemini AI integration placeholder
// Demonstrates AI integration point for tab intent classification
// Rule-based engine currently used for MVP stability

const GEMINI_API_KEY = "process.env.GEMINI_API_KEY";

const GEMINI_PROMPT = `
You are an AI assistant that categorizes browser tabs
into meaningful categories such as:
Study, Coding, Entertainment, Social, Others.
Return category names only.
`;

async function categorizeTabsWithGemini(tabTitles) {
    console.log("Gemini API Key:", GEMINI_API_KEY);
    console.log("Prompt sent to Gemini:", GEMINI_PROMPT);
    console.log("Tabs:", tabTitles);


    return {
        Study: [],
        Coding: [],
        Entertainment: [],
        Social: [],
        Others: []
    };
}

export { categorizeTabsWithGemini };
