const employee = {
    name: 'Jacob',
    streetAddress: 'Po Box 111'
}

const updateEmployeeWithKeyAndValue = ( employee, key, value ) => {
    const copy = { ...employee }
    copy[ key ] = value
    return copy

    // alternate way of making a copy and updating key and value
    // return Object.assign( {}, employee, { [ key ]: value } )
}

const destructivelyUpdateEmployeeWithKeyAndValue = ( employee, key, value ) => {
    employee[ key ] = value
    return employee
}

const deleteFromEmployeeByKey = ( employee, key ) => {
    const newEmployee = { ...employee }
    // alternate way of making a copy
    //const newEmployee = Object.assign( {}, employee )
    delete newEmployee[ key ]
    return newEmployee
}

const destructivelyDeleteFromEmployeeByKey = ( employee, key ) => {
    delete employee[ key ]
    return employee
}
