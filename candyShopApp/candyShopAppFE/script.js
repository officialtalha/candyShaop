const form = document.getElementById('form1');
const tableBody = document.getElementById('candy-table-body');
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
        //table row
        let tr1 = document.createElement('tr');
        tr1.id = 'tr1';

        //table data
        let td1 = document.createElement('td');
        td1.id = 'td1';
        td1.appendChild(document.createTextNode(`${result.data.name}`));

        let td2 = document.createElement('td');
        td2.id = 'td2';
        td2.appendChild(document.createTextNode(`${result.data.description}`));

        let td3 = document.createElement('td');
        td3.id = 'td3';
        td3.appendChild(document.createTextNode(`${result.data.price}`));

        let td4 = document.createElement('td');
        td4.id = 'td4';
        td4.appendChild(document.createTextNode(`${result.data.quantity}`));

        let td5 = document.createElement('td');
        td5.id = 'td5';

        //input text for the buy quantity
        let input = document.createElement('input');
        input.type = 'text';
        input.name = 'buyQuantity';
        input.id = 'buyQuantityText';
        input.className = 'form-control';
        input.placeholder = 'Enter Quantity';
        input.required = true;

        //buy button after input
        let buyButton = document.createElement('button');
        buyButton.id = 'buyButton';
        buyButton.type = 'submit';
        buyButton.className = 'btn btn-primary';
        buyButton.appendChild(document.createTextNode('Buy'));

        //appending input and buy button to td5
        td5.appendChild(input);
        td5.appendChild(buyButton);

        //table data appending to table row
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);

        //appending table row(tr1) to table body
        tableBody.appendChild(tr1);
    } catch (err) {
        console.log(err);
    }
});

const getRefresh = async () => {
    try {
        const result = await axios.get('https://crudcrud.com/api/69e092423871413ebe4b4670fe73b179/shop');
        for (let i in result.data) {
            //table row
            let tr1 = document.createElement('tr');
            tr1.id = 'tr1';

            //table data
            let td1 = document.createElement('td');
            td1.id = 'td1';
            td1.appendChild(document.createTextNode(`${result.data[i].name}`));

            let td2 = document.createElement('td');
            td2.id = 'td2';
            td2.appendChild(document.createTextNode(`${result.data[i].description}`));

            let td3 = document.createElement('td');
            td3.id = 'td3';
            td3.appendChild(document.createTextNode(`${result.data[i].price}`));

            let td4 = document.createElement('td');
            td4.id = 'td4';
            td4.appendChild(document.createTextNode(`${result.data[i].quantity}`));

            let td5 = document.createElement('td');
            td5.id = 'td5';

            const id = result.data[i]._id;
            const quantity = result.data[i].quantity;
            //input text for the buy quantity
            let input = document.createElement('input');
            input.type = 'text';
            input.name = 'buyQuantity';
            input.id = 'buyQuantityText';
            input.className = 'form-control';
            input.placeholder = 'Enter Quantity';
            input.required = true;

            //buy buuton after input
            let buyButton = document.createElement('button');
            buyButton.id = 'buyButton';
            buyButton.type = 'submit';
            buyButton.className = 'btn btn-primary';
            buyButton.appendChild(document.createTextNode('Buy'));

            //appending input and buy button to td5
            td5.appendChild(input);
            td5.appendChild(buyButton);

            //table data appending to table row
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);
            tr1.appendChild(td5);

            //appending table row(tr1) to table body
            tableBody.appendChild(tr1);

            buyButton.onclick = async () => {
                const getquantity = document.getElementById('buyQuantityText').value;
                const totalquantity = quantity;
                const finalQuantity = totalquantity - getquantity;
                console.log(getquantity);
                // const obj = {
                //     name: result.data[i].name,
                //     description: result.data[i].description,
                //     price: result.data[i].price,
                //     quantity: finalQuantity
                // };
                // console.log(obj);
                // const result = await axios.put(`https://crudcrud.com/api/69e092423871413ebe4b4670fe73b179/shop/${id}`, obj);
            }

        }
    }
    catch (err) {
        console.log(err);
    }
};

getRefresh();