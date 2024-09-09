import {DataGrid, GridToolbarExport} from "@mui/x-data-grid";
import {LuLayoutDashboard} from "react-icons/lu";
import {IoIosArrowForward} from "react-icons/io";
function VendorOrders() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${
                    params.getValue(params.id, 'lastName') || ''
                }`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div className={`w-full min-h-[100vh]  py-6`}>
            <div className="flex flex-row gap-2 p-4 md:px-0 container mx-auto">
                <LuLayoutDashboard/>
                <a href={`/dashboard`}>Dashboard</a>
                <IoIosArrowForward/>
                <a href="/dashboard/orders">Orders</a>
            </div>
            <div className={`container mx-auto  bg-white dark:bg-black py-3 rounded-md`}>
                <div className={`grid grid-cols-3 md:gap-8 gap-4 my-3`}>
                    <div className={`flex flex-col gap-2 mx-auto`}>
                        <span className={`text-md`}>Pending</span>
                        <span className={`text-3xl font-extrabold`}>345</span>
                    </div>
                    <div className={`flex flex-col gap-2 mx-auto`}>
                        <span className={`text-md`}>Completed</span>
                        <span className={`text-3xl font-extrabold`}>345</span>
                    </div>
                    <div className={`flex flex-col gap-2 mx-auto`}>
                        <span className={`text-md`}>All Orders</span>
                        <span className={`text-3xl font-extrabold`}>345</span>
                    </div>
                </div>
            </div>
            <h2 className={`container mx-auto md:text-center text-start font-bold  text-xl  mt-5 p-4`}>
                Customers
            </h2>
            <div className={`relative bg-white rounded-md container mx-auto overflow-x-scroll p-4`}>
                <div style={{height: 500, width: '100%'}} className={`relative `}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        components={{
                            Toolbar: GridToolbarExport,
                        }}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
}

export default VendorOrders;