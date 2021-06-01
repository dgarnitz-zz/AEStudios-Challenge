import React from 'react'
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';

export default function Languages(props){

    //styling 
    const tableContainerStyling = {
        margin: 'auto',
        paddingTop: '2em',
        width: '35%',
        display: 'flex',
        justifyContent: 'center'
    }

    const headerCellStyling = {
        fontWeight: 'bold'
    }
    
    const percentageCellStyling = {
        textAlign: 'center'
    }

    //UI text
    const languages = "Languages"
    const percentage = "Percentage of Repos Where Main Language"

    return (
        <div style={tableContainerStyling}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={headerCellStyling}>{languages}</TableCell>
                        <TableCell style={headerCellStyling}>{percentage}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...props.languages].map(([key, value]) => {
                        var percentage = value/props.repos*100
                        return (
                            <TableRow key={key}>
                                <TableCell>{key}</TableCell>
                                <TableCell style={percentageCellStyling}>
                                    {`${percentage.toFixed(0)}%`}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}