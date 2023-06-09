const form = document.getElementById('form1');
const tableBody = document.getElementById('candy-table-body');
let count = -1;
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
        const result = await axios.post('https://crudcrud.com/api/69e092423871413ebe4b4670fe73b179/shop', obj);
        count++;
        //table row
        let tr1 = document.createElement('tr');

        //table data
        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(`${result.data.name}`));

        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(`${result.data.description}`));

        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(`${result.data.price}`));

        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(`${result.data.quantity}`));

        let td5 = document.createElement('td');

        //input text for the buy quantity
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'buyQuantity';
        input.id = `buyQuantityText${count}`;
        input.className = 'form-control';
        input.placeholder = 'Enter Quantity';
        input.required = true;

        //buy button after input
        let buyButton = document.createElement('button');
        buyButton.id = `buyButton`;
        buyButton.type = 'submit';
        buyButton.className = 'btn btn-dark';
        buyButton.appendChild(document.createTextNode('Buy'));

        //appending input and buy button to td5
        td5.appendChild(input);

        //table data appending to table row
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);
        tr1.appendChild(buyButton);

        //appending table row(tr1) to table body
        tableBody.appendChild(tr1);
        const id = result.data._id;
        buyButton.onclick = async () => {
            const getquantity = document.querySelector(`#buyQuantityText${count}`).value;
            const finalQuantity = quantity - getquantity;
            const obj = {
                name,
                description,
                price,
                quantity: finalQuantity
            };
            const result = await axios.put(`https://crudcrud.com/api/69e092423871413ebe4b4670fe73b179/shop/${id}`, obj);
        }
    } catch (err) {
        console.log(err);
    }
});

const getRefresh = async () => {
    try {
        const result = await axios.get('https://crudcrud.com/api/69e092423871413ebe4b4670fe73b179/shop');
        for (let i in result.data) {
            count++;
            //table row
            let tr1 = document.createElement('tr');

            //table data
            let td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(`${result.data[i].name}`));

            let td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(`${result.data[i].description}`));

            let td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(`${result.data[i].price}`));

            let td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(`${result.data[i].quantity}`));

            let td5 = document.createElement('td');
            //------------------
            const id = result.data[i]._id;
            const totalquantity = result.data[i].quantity;
            const name = result.data[i].name;
            const description = result.data[i].description;
            const price = result.data[i].price;
            //input text for the buy quantity
            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'buyQuantity';
            input.id = `buyQuantityText${count}`;
            input.className = 'form-control';
            input.placeholder = 'Enter Quantity';
            input.required = true;
            count++;
            //buy buuton after input
            let buyButton = document.createElement('button');
            buyButton.id = `buyButton`;
            buyButton.type = 'submit';
            buyButton.className = 'btn btn-dark';
            buyButton.appendChild(document.createTextNode('Buy'));

            //appending input and buy button to td5
            td5.appendChild(input);

            //table data appending to table row
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);
            tr1.appendChild(td5);
            tr1.appendChild(buyButton);

            //appending table row(tr1) to table body
            tableBody.appendChild(tr1);

            buyButton.onclick = async () => {
                const getquantity = document.querySelector(`#buyQuantityText${count}`).value;
                const finalQuantity = totalquantity - getquantity;
                const obj = {
                    name,
                    description,
                    price,
                    quantity: finalQuantity
                };
                await axios.put(`https://crudcrud.com/api/69e092423871413ebe4b4670fe73b179/shop/${id}`, obj);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
};

getRefresh();