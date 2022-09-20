function getBotResponse(input) {

    switch (input) {

        case "good morning":
            return "How are you";
        case "good evening":
            return "how are you";
        case "rock":
            return "paper";
        case "languages":
            return "Html, JavaScript, React, Python, Java, C++, Laravel, PHP";
        case "paper":
            return "scissors";
        case "king":
            return "queen";
        case "hi":
            return "hello dear Welcome";
        case "hello":
            return "hello dear , How are you doing";
        case "goodbye":
            return "Talk to you later";
        case "fine":
            return "ok cool, what gender are you?";
        case "cool":
            return "ok cool, what gender are you?";
        case "male":
            return "That's nice, I am Gella(female), nice to meet you";
        case "female":
            return "That's nice, I am Gella(female), nice to meet you";
        case "boy":
            return "That's nice, I am Gella(female), nice to meet you";
        case "girl":
            return "That's nice, I am Gella(female), nice to meet you";
            case "thank you":
                return "you are welcome dear";
            case "game":
                return "paper, scissors";
            case "I love Code Palace":
                return "Thanks";
            case "html":
                return "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.";
            case "javascript":
                return "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much ...";
            
            default:
                return "Try asking something else(hello, hi, paper)";
                
               
    }
   
}