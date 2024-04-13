import { useLoaderData } from "react-router-dom";
// import Navber from "../../components/shared/Navber";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";



const User = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser);
    console.log(users)

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/user/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        if (data.deletedCount > 0) {
                            const reamingUsers = users.filter(user => user._id !== _id);
                            setUsers(reamingUsers)
                        }
                    })
            }
        });

    }





    return (
        <div>
            {/* <Navber></Navber> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                                className="">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="flex gap-4">
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="text-2xl"><MdDelete></MdDelete></button>

                                    <button className="text-2xl"><MdEdit></MdEdit></button>

                                    <button className="text-2xl"><FaEye></FaEye></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default User;