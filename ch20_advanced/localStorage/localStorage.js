
        let employees = JSON.parse(
            localStorage.getItem("employees") || "[]"
        );

        function displayEmployees() {
            const list = document.getElementById("employeeList");
            list.innerHTML = "";

            employees.forEach((employee, index) => {
                const li = document.createElement("li");

                li.textContent =
                    `${employee.fname} ${employee.lname} - ${employee.number} `;

                const button = document.createElement("button");
                button.textContent = "Delete";

                button.onclick = () => deleteEmployee(index);

                li.appendChild(button);
                list.appendChild(li);
            });
        }

        function addEmployee() {
            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const number = document.getElementById("number").value.trim();

            if (!fname || !lname || !number) {
                alert("Please fill in all fields");
                return;
            }

            employees.push({ fname, lname, number });

            localStorage.setItem(
                "employees",
                JSON.stringify(employees)
            );

            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("number").value = "";

            displayEmployees();
        }

        function deleteEmployee(index) {
            employees.splice(index, 1);

            localStorage.setItem(
                "employees",
                JSON.stringify(employees)
            );

            displayEmployees();
        }

        displayEmployees();

