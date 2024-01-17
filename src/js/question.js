function Question (word, options, correctAnswer ) {
    this.word = word;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.isAnswerCorrect = function (answer) {
    return this.correctAnswer == answer;
}

const questions = [
    new Question("article", {a : "Gazete", b : "Makale", c: "Dergi" }, "Makale"),
    new Question("capital", {a : "Başkent", b : "Ülke", c: "Kıta" }, "Başkent"),
    new Question("decision", {a : "Karar", b : "Teklif", c: "Uyarı" }, "Karar"),
    new Question("exactly", {a : "Bazen", b : "Kesinlikle", c: "Sık sık" }, "Kesinlikle"),
    new Question("decision", {a : "Karar", b : "Teklif", c: "Uyarı" }, "Karar"),
    new Question("national", {a : "Bölgesel", b : "Ulusal", c: "Çevresel" }, "Ulusal"),
    new Question("research", {a : "Araştırma", b : "Okuma", c: "Dinleme" }, "Araştırma"),
    new Question("rule", {a : "Koşul", b : "Kural", c: "Seçenek" }, "Kural"),
    new Question("send", {a : "Göndermek", b : "Yüklemek", c: "İndirmek" }, "Göndermek"),
    new Question("various", {a : "Çeşitli", b : "Değerli", c: "Şüpheli" }, "Çeşitli"),
];