import React, { useEffect, useState } from "react";
export const CrudApi = () => {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/emplist")
            .then((response) => response.json())
            .then((json) => setEmployeeList(json));
    }, []);

    return (
        <>
            <div class="row">
                <div class="col-sm-5 p-5 bg-primary w-25 bg-opacity-50 m-5">
                    <form
                        class="form"
                        id="add-form"
                        enctype="multipart/form-data"
                    >
                        <h2>Add Form</h2>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control mt-3"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            id="age"
                            name="age"
                            class="form-control mt-3 mb-2"
                            placeholder="Age"
                        />
                        <input
                            type="file"
                            id="image"
                            name="image"
                            class="form-control mt-3 mb-2"
                            placeholder="image"
                        />
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <img src={employee.image} />

                            <td>
                                <button
                                    data-id="http://127.0.0.1:8000/emp/{employee.id}"
                                    className="delete_btn form-control btn btn-danger"
                                >
                                    delete
                                </button>
                            </td>
                            <td>
                                <button
                                    id="edit_button"
                                    className="edit_button form-control btn btn-success"
                                >
                                    edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
