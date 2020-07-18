const container = document.querySelector("#container");

for(let x=0; x<16; x++)
{
    const row = document.createElement('div');
    for(let y=0; y<16; y++)
    {
        const col = document.createElement('div');
        col.style.border = "1px solid black"
        col.style.width = "75px";
        col.style.height = "75px";
        col.addEventListener('mouseover', () =>{
            col.style.backgroundColor = "blue";
        });
        row.appendChild(col);
    }
    row.style.display = "grid";
    row.style.gridTemplateColumns = "repeat(16, auto)";
    row.style.gridTemplateRows = "auto";
    container.appendChild(row);
}

container.style.display = "grid";
container.style.gridTemplateColumns = "auto";

const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    let siz;
    while(true)
    {
        siz = prompt("Enter new size:","Enter a number");
        siz++;
        if(Number.isInteger(siz))
            break;
    }
    siz--;
    for(let x=0; x<siz; x++)
    {
        const row = document.createElement('div');
        for(let y=0; y<siz; y++)
        {
            const col = document.createElement('div');
            col.style.border = "1px solid black"
            col.style.width = "75px";
            col.style.height = "75px";
            col.addEventListener('mouseover', () =>{
                col.style.backgroundColor = "blue";
            });
            row.appendChild(col);
        }
        row.style.display = "grid";
        row.style.gridTemplateColumns = "repeat(16, auto)";
        row.style.gridTemplateRows = "auto";
        container.appendChild(row);
    }

    container.style.display = "grid";
    container.style.gridTemplateColumns = "auto";
    
});