const form = document.getElementById('form1');
const tableBody = document.getElementById('candy-table-body');

//submit button event
form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const obj = {
            name,
            description,
            price,
            quantity
        };
        const result = await axios.post('http://localhost:3000/shop', obj);
        //table row
        let tr1 = document.createElement('tr');

        //delete button
        let deleteButton = document.createElement('button');
        deleteButton.id = `dltbtn`;
        deleteButton.type = 'submit';
        deleteButton.className = 'btn btn-outline-danger btn-sm';

        let iTag = document.createElement('i');
        iTag.className = 'material-icons';
        iTag.appendChild(document.createTextNode('delete'));
        deleteButton.appendChild(iTag);

        //table data
        let td1 = document.createElement('td');
        td1.appendChild(deleteButton);

        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(`${result.data.name}`));

        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(`${result.data.description}`));

        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(`${result.data.price}`));

        let td5 = document.createElement('td');
        td5.appendChild(document.createTextNode(`${result.data.quantity}`));

        let td6 = document.createElement('td');

        //buy 1 button
        let buyButton1 = document.createElement('button');
        buyButton1.id = `buyButton1`;
        buyButton1.type = 'submit';
        buyButton1.className = 'btn btn-outline-dark btn-sm';
        buyButton1.appendChild(document.createTextNode('Buy 1'));

        //adding spacing
        const space1 = document.createElement('span');
        space1.appendChild(document.createTextNode(' '));

        //buy 2 button
        let buyButton2 = document.createElement('button');
        buyButton2.id = `buyButton2`;
        buyButton2.type = 'submit';
        buyButton2.className = 'btn btn-outline-dark btn-sm';
        buyButton2.appendChild(document.createTextNode('Buy 2'));

        //adding spacing
        const space2 = document.createElement('span');
        space2.appendChild(document.createTextNode(' '));

        //buy 3 button
        let buyButton3 = document.createElement('button');
        buyButton3.id = `buyButton3`;
        buyButton3.type = 'submit';
        buyButton3.className = 'btn btn-outline-dark btn-sm';
        buyButton3.appendChild(document.createTextNode('Buy 3'));

        td6.appendChild(buyButton1);
        td6.appendChild(space1);
        td6.appendChild(buyButton2);
        td6.appendChild(space2);
        td6.appendChild(buyButton3);

        //table data appending to table row
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);
        tr1.appendChild(td6);

        //appending table row(tr1) to table body
        tableBody.appendChild(tr1);

        buyButton1.onclick = async () => {
            try {
                if (result.data.quantity > 0) {
                    const flag = confirm(`are you sure?`);
                    if (flag) {
                        const finalQuantity = (result.data.quantity) - 1;
                        const obj = {
                            name: result.data.name,
                            description: result.data.description,
                            price: result.data.price,
                            quantity: finalQuantity
                        };
                        await axios.put(`http://localhost:3000/shop/${result.data.id}`, obj);
                        location.reload();
                    }
                } else {
                    alert(`out of stock!!!`);
                }
            } catch (err) {
                console.log(err);
            }
        }

        buyButton2.onclick = async () => {
            try {
                if (result.data.quantity > 1) {
                    const flag = confirm(`are you sure?`);
                    if (flag) {
                        const finalQuantity = (result.data.quantity) - 2;
                        const obj = {
                            name: result.data.name,
                            description: result.data.description,
                            price: result.data.price,
                            quantity: finalQuantity
                        };
                        await axios.put(`http://localhost:3000/shop/${result.data.id}`, obj);
                        location.reload();
                    }
                } else {
                    alert(`out of stock!!!`);
                }
            } catch (err) {
                console.log(err);
            }
        }

        buyButton3.onclick = async () => {
            try {
                if (result.data.quantity > 2) {
                    const flag = confirm(`are you sure?`);
                    if (flag) {
                        const finalQuantity = (result.data.quantity) - 3;
                        const obj = {
                            name: result.data.name,
                            description: result.data.description,
                            price: result.data.price,
                            quantity: finalQuantity
                        };
                        await axios.put(`http://localhost:3000/shop/${result.data.id}`, obj);
                        location.reload();
                    }
                } else {
                    alert(`out of stock!!!`);
                }
            } catch (err) {
                console.log(err);
            }
        }

        deleteButton.onclick = async () => {
            try {
                const flag = confirm(`Are you sure want to delete this item?`);
                if (flag) {
                    await axios.delete(`http://localhost:3000/shop/${result.data.id}`);
                    location.reload();
                }
            } catch (err) {
                console.log(err);
            }
        }
    } catch (err) {
        console.log(err);
    }
});

//clear data event 
form.addEventListener('reset', async (e) => {
    e.preventDefault();
    const flag = confirm(`are you sure? All the data will be deleted.`);
    if (flag) {
        await axios.delete('http://localhost:3000/shop');
        location.reload();
    }
});

//when page refresh
(async function () {
    try {
        const result = await axios.get('http://localhost:3000/shop');
        for (let i in result.data) {
            //table row
            let tr1 = document.createElement('tr');

            //delete button
            let deleteButton = document.createElement('button');
            deleteButton.id = `dltbtn`;
            deleteButton.type = 'submit';
            deleteButton.className = 'btn btn-outline-danger btn-sm';

            let iTag = document.createElement('i');
            iTag.className = 'material-icons';
            iTag.appendChild(document.createTextNode('delete'));
            deleteButton.appendChild(iTag);

            //table data
            let td1 = document.createElement('td');
            td1.appendChild(deleteButton);

            let td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(`${result.data[i].name}`));

            let td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(`${result.data[i].description}`));

            let td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(`${result.data[i].price}`));

            let td5 = document.createElement('td');
            td5.appendChild(document.createTextNode(`${result.data[i].quantity}`));

            let td6 = document.createElement('td');

            //------------------
            const id = result.data[i].id;
            const quantity = result.data[i].quantity;
            const name = result.data[i].name;
            const description = result.data[i].description;
            const price = result.data[i].price;

            //buy 1 button
            let buyButton1 = document.createElement('button');
            buyButton1.id = `buyButton1`;
            buyButton1.type = 'submit';
            buyButton1.className = 'btn btn-outline-dark btn-sm';
            buyButton1.appendChild(document.createTextNode('Buy 1'));


            //buy 2 button
            let buyButton2 = document.createElement('button');
            buyButton2.id = `buyButton2`;
            buyButton2.type = 'submit';
            buyButton2.className = 'btn btn-outline-dark btn-sm';
            buyButton2.appendChild(document.createTextNode('Buy 2'));

            //buy 3 button
            let buyButton3 = document.createElement('button');
            buyButton3.id = `buyButton3`;
            buyButton3.type = 'submit';
            buyButton3.className = 'btn btn-outline-dark btn-sm';
            buyButton3.appendChild(document.createTextNode('Buy 3'));

            //adding spacing
            const space1 = document.createElement('span');
            space1.appendChild(document.createTextNode(' '));

            //adding spacing
            const space2 = document.createElement('span');
            space2.appendChild(document.createTextNode(' '));

            td6.appendChild(buyButton1);
            td6.appendChild(space1);
            td6.appendChild(buyButton2);
            td6.appendChild(space2);
            td6.appendChild(buyButton3);

            //table data appending to table row
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);
            tr1.appendChild(td5);
            tr1.appendChild(td6);

            //appending table row(tr1) to table body
            tableBody.appendChild(tr1);

            buyButton1.onclick = async () => {
                try {
                    if (quantity > 0) {
                        const flag = confirm(`are you sure?`)
                        if (flag) {
                            const finalQuantity = quantity - 1;
                            const obj = {
                                name,
                                description,
                                price,
                                quantity: finalQuantity
                            };
                            await axios.put(`http://localhost:3000/shop/${id}`, obj);
                            location.reload();
                        }
                    } else {
                        alert(`out of stock!!!`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }

            buyButton2.onclick = async () => {
                try {
                    if (quantity > 1) {
                        const flag = confirm(`are you sure?`)
                        if (flag) {
                            const finalQuantity = quantity - 2;
                            const obj = {
                                name,
                                description,
                                price,
                                quantity: finalQuantity
                            };
                            await axios.put(`http://localhost:3000/shop/${id}`, obj);
                            location.reload();
                        }
                    } else {
                        alert(`out of stock!!!`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }

            buyButton3.onclick = async () => {
                try {
                    if (quantity > 2) {
                        const flag = confirm(`are you sure?`)
                        if (flag) {
                            const finalQuantity = quantity - 3;
                            const obj = {
                                name,
                                description,
                                price,
                                quantity: finalQuantity
                            };
                            await axios.put(`http://localhost:3000/shop/${id}`, obj);
                            location.reload();
                        }
                    } else {
                        alert(`out of stock!!!`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }

            deleteButton.onclick = async () => {
                try {
                    const flag = confirm(`Are you sure want to delete this item?`);
                    if (flag) {
                        await axios.delete(`http://localhost:3000/shop/${id}`);
                        location.reload();
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})();