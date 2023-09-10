console.log("Java Enabled"); 

const search = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");
const studentList = document.getElementById("studentList");
const studentLink = document.getElementById("studentLink");
    const students = [
        {name: "Abbot Spencer"},
        {name: "Assi Mirdan"},
        {name: "Carriere, Ezrae"},
        {name: "Davies Amaral, Lorina"},
        {name: "Ghirmay, Senait"},
        {name: "Gonzales, David"},
        {name: "Hanbury, Xaviere"},
        {name: "Huffman, Logan"},
        {name: "Idsardi, Callidora"},
        {name: "Jutila, Ethan"},
        {name: "Khan, Taylort"},
        {name: "Meijer, Nikolai"},
        {name: "Ohene, Jesica"},
        {name: "Perez Moreno, Valentina"},
        {name: "Quimosing, Justine"},
        {name: "Singer, Dan"},
        {name: "Siy, Lalainele"},
        {name: "St. Pierre, Renee"},
        {name: "Sultan, Abdullh"},
        {name: "Thomson, Juliette"},
        {name: "Wall, Ethan"},
        {name: "Westrop, Sophia"},
        {name: "Wotton, Aiden"},
        {name: "Zarandah, Mohamed"}
    ];
    const portfolios = [
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
        {portfolioLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", linkName: "View Portfolio"},
    ]    

    students.forEach(student => {
        const listItem = document.createElement("li");
        student.textContent = student.name;
        listItem.textContent = student.name;
        studentList.appendChild(listItem);
    }); 

    portfolios.forEach(portfolio => {
        const listItem = document.createElement("li");
        const link = document.createElement("a")
        link.href = portfolio.portfolioLink;
        link.textContent = portfolio.linkName;
        studentLink.appendChild(link);
        studentLink.appendChild(listItem);
    })

search.addEventListener("keyup", e => {
    if(e.key == "Enter"){
        let searchValue = search.value,
        value = searchValue.toLowerCase();
        images.forEach(image => {
            if(value === image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
        console.log(value)
    }
});

search.addEventListener("keyup", () => {
    if(search.value != "") return;

    images.forEach(image => {
        image.style.display = "block"; 
    });
});