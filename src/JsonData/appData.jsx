
export const AppItems = [
    {
        name: "Q&A",
        id: "q&a",
        description: "Answer questions based on existing knowledge.",
        options: {
            "model": "text-davinci-003",
            "temperature": 0,
            "max_tokens": 100,
            "top_p": 1,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.0,
            "stop": ["\n"]
        }
    },
    {
        name: "Grammar correction",
        id: "Grammar",
        description: "Corrects sentences into standard English.",
        options: {
            "model": "text-davinci-003",
            "temperature": 0,
            "max_tokens": 60,
            "top_p": 1.0,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.0
        }
    },
    {
        name: "JavaScript to Python",
        id: "JavaScript_to_Python",
        description: "Convert simple JavaScript expressions into Python.",
        options: {
            "model": "code-davinci-002",
            "temperature": 0,
            "max_tokens": 64,
            "top_p": 1.0,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.0
        }
    },
    {
        name: "English to other languages",
        id: "English_to_other_languages",
        description: "Translates English text into French, Spanish and Japanese.",
        options: {
            "model": "text-davinci-003",
            "temperature": 0.3,
            "max_tokens": 100,
            "top_p": 1.0,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.0
        }
    }, {
        name: "Friend chat",
        id: "Emulate a text message conversation.",
        description: "Convert simple JavaScript expressions into Python.",
        options: {
            "model": "text-davinci-003",
            "temperature": 0.5,
            "max_tokens": 60,
            "top_p": 1.0,
            "frequency_penalty": 0.5,
            "presence_penalty": 0.0,
            "stop": ["You:"]
        }
    },
    {
        name: "Interview questions",
        id: "Englishother_lanuages",
        description: "Create interview questions.",
    }
]