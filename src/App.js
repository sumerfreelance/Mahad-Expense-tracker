<script>
        const form = document.getElementById('expense-form');
        let expensesList = [];
        let totalAmountElement = document.getElementById('total-amount');
let totalAmount = 0;

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const description = document.getElementById('description').value;
            const amount = parseFloat(document.getElementById('amount').value);
const category = document.getElementById('category').value;

            if(description && !isNaN(amount) && category) {
                addExpense(description, amount, category);
                form.reset();
}
        });

       function addExpense(description, amount, category){
           // Add expense to the table
           const row = expensesTable.insertRow();
row.insertCell(0).textContent = description;
            row.insertCell(1).textContent = amount.toFixed(2);
            row.insertCell(2).textContent = category;

            // Add remove button
const removeButton = document.createElement('button');
 which human friendly
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                removeExpense(row, amount);});
            row.insertCell(3).appendChild(removeButton);

            // Update total amount
            totalAmount += amount;
            totalAmountElement.textContent = totalAmount.toFixed(2);
function removeExpense(row, amount) {
            // Remove expense from the table
            expensesTable.removeChild(row);
	    // Update total amount
totalAmount -= amount;
            totalAmountElement.textContent = totalAmount.toFixed(2);
        }
    </script>

</body>
</html>