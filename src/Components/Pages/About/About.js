// import React, { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const About = () => {
//   const [userOrders, setUserOrders] = useState([]);
//   useEffect(() => {
//     fetch("https://car-vista-client.onrender.com/booking")
//       .then((res) => res.json())
//       .then((data) => setUserOrders(data));
//   }, []);
//   const handleDeleteUserService = (id) => {
//     const proceed = window.confirm("Are you sure, you want to delete?", id);
//     if (proceed) {
//       const url = `https://car-vista-client.onrender.com/booking/${id}`;
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.deletedCount > 0) {
//             alert("deleted successfully");
//             const remainingUsers = userOrders.filter(
//               (userService) => userService._id !== id
//             );
//             setUserOrders(remainingUsers);
//           }
//         });
//     }
//   };
//   return (
//     <div>
//       <TableContainer sx={{ maxHeight: 800, overflow: "scroll" }}>
//         <Table sx={{ minWidth: 350 }}>
//           <TableHead sx={{ maxHeight: 800, overflow: "scroll" }}>
//             <TableRow>
//               <TableCell style={{ minWidth: "350px" }}>Name</TableCell>
//               <TableCell style={{ minWidth: "350px" }} align="center">
//                 Email
//               </TableCell>
//               <TableCell style={{ minWidth: "350px" }} align="center">
//                 Order Name
//               </TableCell>
//               <TableCell style={{ minWidth: "350px" }} align="center">
//                 Order Price
//               </TableCell>
//               <TableCell style={{ minWidth: "350px" }} align="center">
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {userOrders.map((userOrder) => (
//               <TableRow
//                 key={userOrder._id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {userOrder.name}
//                 </TableCell>
//                 <TableCell align="center">{userOrder.email}</TableCell>
//                 <TableCell align="center">{userOrder.car_Name}</TableCell>
//                 <TableCell align="center">${userOrder.car_price}</TableCell>
//                 <TableCell align="center">
//                   <button className="btn-Car me-3">Shipped</button>
//                   <button
//                     onClick={() => handleDeleteUserService(userOrder._id)}
//                     className="btn-Car"
//                   >
//                     <i class="fas fa-times"></i>
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default About;
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./About.css";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function About() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [userOrders, setUserOrders] = React.useState([]);
  React.useEffect(() => {
    fetch("https://car-vista-client.onrender.com/booking")
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://car-vista-client.onrender.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <Paper id="table" sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: "350px" }}>Name</TableCell>
              <TableCell style={{ minWidth: "300px" }} align="center">
                Email
              </TableCell>
              <TableCell style={{ minWidth: "300px" }} align="center">
                Order Name
              </TableCell>
              <TableCell style={{ minWidth: "300px" }} align="center">
                Order Price
              </TableCell>
              <TableCell style={{ minWidth: "300px" }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.map((userOrder) => (
              <TableRow
                key={userOrder._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {userOrder.name}
                </TableCell>
                <TableCell align="center">{userOrder.email}</TableCell>
                <TableCell align="center">{userOrder.car_Name}</TableCell>
                <TableCell align="center">${userOrder.car_Price}</TableCell>
                <TableCell align="center">
                  <button className="btn-Car me-3">Shipped</button>
                  <button
                    onClick={() => handleDeleteUserService(userOrder._id)}
                    className="btn-Car"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
