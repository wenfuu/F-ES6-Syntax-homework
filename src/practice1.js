const parseData = (input) => {
    let columns = [];
    input.column.map((name)=>{
        columns.push(name.name);
    })

    return input.data.map(person => {
       return Object.assign({}, ...(person.map((value, index) => {
            return  {[columns[index]] : value}
        })))
    })
}
export { parseData };
