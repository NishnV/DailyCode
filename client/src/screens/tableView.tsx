import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './navbar';

export function TableView() {
    const router = useNavigate();

    const rows = [
        {
            status: true,
            title: "Two Sum",
            solution: true,
            acceptance: 100.0,
            difficulty: "Easy",
        },
        {
            status: false,
            title: "Add Two Numbers",
            solution: true,
            acceptance: 100.0,
            difficulty: "Medium",
        },
        {
            status: false,
            title: "Median of Two Sorted Arrays",
            solution: true,
            acceptance: 100.0,
            difficulty: "Hard",
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;

        setSearchTerm(term);

        const filtered = rows.filter(row => {
            return row.title.toLowerCase().includes(term.toLowerCase());
        });

        setFilteredRows(filtered);
    }

    const tableCustomStyles = {
        headRow: {
            style: {
                color: '#223336',
                backgroundColor: '#696969',
            },
        },
        rows: {
            style: {
                color: "#FFFFFF",
                backgroundColor: "#696969",
            },
            stripedStyle: {
                color: "#FFFFFF",
                backgroundColor: "#909090",
            },
        },
    };

    const columns = [
        {
            name: "Status",
            cell : ( row : { status : boolean } ) => {
                
                if (row.status){
                    let textClass = 'badge-green';
                    return <span className={`badge ${textClass}`}>Done</span>
                }


            },
            sortable: true,
            width: "150px",
        },
        {
            name: "Title",
            selector: (row: { title: string }) => {
                return row.title;
                
            },
            sortable: true,
            width: "500px",
        },
        {
            name: "Solution",
            cell : ( row : { solution : boolean } ) => {
                if (row.solution){
                    return (
                        <div className='h-10 w-10'>
                             <img src="youtube-svgrepo-com (1).svg" alt="" />
                        </div>
                       
                    );
                }
            },
            width: "200px",
        },
        {
            name: "Acceptance",
            selector: (row: { acceptance: number }) => row.acceptance.toFixed(2) + '%',
            width: "200px",
        },
        {
            name: "Difficulty",
            cell: (row: { difficulty: string }) => {
                let badgeClass = '';
                let text = '';

                switch (row.difficulty) {
                    case 'Hard':
                        badgeClass = 'badge-danger';
                        text = 'Hard';
                        break;

                    case 'Medium':
                        badgeClass = 'badge-yellow';
                        text = 'Medium';
                        break;

                    case 'Easy':
                        badgeClass = 'badge-green';
                        text = 'Easy';
                        break;
                }
                return <span className={`badge ${badgeClass}`}>{text}</span>;
            },
            sortable: true,
            width: "200px",
        },
    ];

    return (
        <div>
            <Navbar/>
            <div className='relative top-20 right-10 h-32 w-35'>
                <div className=''>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ marginBottom: '10px', padding: '8px', width: '50%', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '4px' }}
                    />
                </div>
            </div>
            <div className="container my-5">
                <DataTable
                    columns = {columns}
                    data={filteredRows}
                    fixedHeader
                    customStyles={tableCustomStyles}
                    striped
                />
            </div>
        </div>
    );
}
