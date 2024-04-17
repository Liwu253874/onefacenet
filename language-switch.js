// default language
var lang = "zh";

// language data
var langData = {
    "en": {
        "title": "About OneFace",
        "para1": "\"One face of technology, one face of art\". This expression carries profound implications. It outlines two crucial domains in modern society: technology and art, simultaneously reflecting humanity's pursuit and comprehension of technology and art.",
        "para2": "Firstly, \"one face of technology\" signifies human exploration towards knowledge and the future. Technology, as a product of rational thinking, represents humans' exploration of the unknown, transformation of the environment, and imagination for the future. The progress of technology triggers significant social changes, enhances the quality of human life, and alters our lifestyle. It embodies human's unremitting pursuit of progress, innovation, and development.",
        "para3": "Secondly, \"one face of art\" stands for humans' pursuit of beauty and the embodiment of humanistic spirit. Art, the manifestation of human emotion and creativity, enables people to express their feelings, comprehend others, and imbue life with more emotional hues and meanings. Art brings us aesthetic pleasure, spiritual sustenance, and insights into human nature. It manifests humans' unique understanding and passion for beauty, emotions, and life.",
        "para4": "\"One face of technology, one face of art\", viewed from a humanistic perspective, represents the combination of technology and art, as well as the fusion of rationality and emotion. It uncovers two critical domains of human activities in modern society, reminding us that even in today's fast-paced technological advancement, we still need art, emotions, understanding of life, and pursuit of beauty. It is a profound expression that comprehensively reflects human spiritual pursuits."
    },
    "zh": {
        "title": "关于一面",
        "para1": "“一面科技，一面艺术”这个表达有着深远的含义和内涵。它描绘了现代社会的两大重要领域：科技和艺术，同时也反映了人类对于科技和艺术的追求和理解。",
        "para2": "首先，\"一面科技\"代表了人类对于知识和未来的探索。科技是人类理性思维的产物，代表了人类对未知的探索、对环境的改造以及对未来的想象。科技的发展带来了巨大的社会变迁，提升了人类的生活质量，改变了我们的生活方式。它体现了人类对于进步、创新和发展的不懈追求。",
        "para3": "其次，\"一面艺术\"则代表了人类对于美的追求和人文精神的体现。艺术是人类情感和创造力的表现，通过艺术，人们能够表达自己的情感，理解他人，也能够赋予生活更多的情感色彩和意义。艺术带给我们的是审美的享受，精神的寄托，也是对人性的洞察和理解。它体现了人类对于美、对于情感、对于生活的独特理解和热爱。",
        "para4": "\"一面科技，一面艺术\"这个表达，从人文角度看，是科技与艺术的结合，也是理性与情感的结合。它揭示了现代社会人类活动的两大重要领域，并且提醒我们，即使在科技高速发展的今天，我们仍然需要艺术，需要情感，需要对生活的理解和对美的追求。这是一个全面反映人类精神追求的深刻表达。"
    }
}

// switch language function
function switchLang() {
    lang = (lang == "en") ? "zh" : "en";
    var elems = document.querySelectorAll(".lang");
    for (var i = 0; i < elems.length; i++) {
        elems[i].innerHTML = langData[lang][elems[i].getAttribute("key")];
    }
    document.getElementById('lang-switch').innerHTML = (lang == "en") ? "切换语言" : "Switch language";
}
