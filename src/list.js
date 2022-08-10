export default class UserInterface{
    static ShowList(){
        const myList = [{
            description: "Learn JavaScript",
            completed: false,
            index: 0
        },
        {
            description: "Learn React",
            completed: false,
            index: 1}];
        const theList = myList
        theList.forEach((item) => {
            item.index +=1;
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <input type="checkbox" ${item.completed ? "checked" : ""}>
                <span>${item.description}</span>
                <button>X</button>
                <p class="hideme">{item.index}</p>
            `;
            document.getElementById("list-container").appendChild(listItem);
        })

    }
}