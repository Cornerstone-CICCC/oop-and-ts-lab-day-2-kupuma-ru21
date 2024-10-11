"use strict";
// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.
function updateCompany(company, updates) {
    return {
        ...company, // Spread the existing company object
        ...updates, // Apply the partial updates to the top-level properties
        employees: updates.employees
            ? company.employees.map((employee, index) => ({
                ...employee,
                ...(updates.employees && updates.employees[index]), // Apply updates to employees if provided
            }))
            : company.employees, // If no updates to employees, retain the original employees
    };
}
// Expected output:
const company = {
    name: "TechCorp",
    address: "123 St",
    employees: [{ name: "Alice", role: "Developer", salary: 100000 }],
};
console.log(updateCompany(company, {
    employees: [{ name: "Alice", role: "Senior Developer" }],
}));
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }
