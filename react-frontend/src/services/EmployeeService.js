import axios from 'axios';

// const EMPLOYEE_API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://vnpt-backend.herokuapp.com/api/v1/employees";
const EMPLOYEE_API_BASE_URL = "https://vnpt-backend.herokuapp.com/api/v1/employees";
class EmployeeService {

    getEmployees(){
        var config = {
            
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        return axios.get('/employees', config);
    }

    createEmployee(employee){
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        return axios.post('/employees', employee, config);
    }

    getEmployeeById(employeeId){
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        return axios.get('/employees' + '/' + employeeId, config);
    }

    updateEmployee(employee, employeeId){
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        return axios.put('/employees' + '/' + employeeId, employee, config);
    }

    deleteEmployee(employeeId){
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        };
        return axios.delete('/employees' + '/' + employeeId, config);
    }
}

export default new EmployeeService()