import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// define model
const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
});


// define prompt
const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "You are an expert in {area_of_expertise}."],
    ["user", "{question}"]
]);

// define output parser
const stringParser = new StringOutputParser();

// define chain
const chatChain = promptTemplate.pipe(model).pipe(stringParser);

// start chat
const response = await chatChain.invoke({
    area_of_expertise: "medicine",
    question: "What is the best treatment for a headache?"
});

console.log(response);

