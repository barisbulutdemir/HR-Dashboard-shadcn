import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Label } from '../ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'

export default function TransferLog() {
  return (
    <>
        <div className='mt-5'>
            <Card>
                <CardHeader>
                    <div className='flex justify-between'>
                        <Label>Transfer Log</Label>
                        <Button>New Transfer</Button>
                    </div>
                   
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>From</TableHead>
                                <TableHead>To</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Bregentved</TableCell>
                                <TableCell>Resko</TableCell>
                                <TableCell>26.06.2023</TableCell>
                                <TableCell>Uçak ile gitti</TableCell>



                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
        </div>
    </>
  )
}
